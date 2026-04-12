import { useState, useEffect, useRef } from 'react'
import './AchievementToast.css'
import { VisitorAchievement } from '../types'
import { onAchievementUnlock } from '../services/achievementService'

interface ToastData extends VisitorAchievement {
  id: string
  timestamp: number
  toastId: string
}

const TOAST_DISPLAY_TIME = 5000
const TOAST_STAGGER_DELAY = 1500

function AchievementToast() {
  const [visibleToasts, setVisibleToasts] = useState<ToastData[]>([])
  const queueRef = useRef<ToastData[]>([])
  const processingRef = useRef(false)

  const showNextToast = () => {
    if (queueRef.current.length === 0) {
      processingRef.current = false
      return
    }

    processingRef.current = true
    const toast = queueRef.current.shift()!

    setVisibleToasts(prev => [...prev, toast])

    // Auto-remove after display time
    setTimeout(() => {
      setVisibleToasts(prev => prev.filter(t => t.toastId !== toast.toastId))
    }, TOAST_DISPLAY_TIME)

    // Show next toast after stagger delay
    setTimeout(showNextToast, TOAST_STAGGER_DELAY)
  }

  useEffect(() => {
    const unsubscribe = onAchievementUnlock((achievement) => {
      const toastId = `${achievement.id}-${Date.now()}-${Math.random()}`

      const toast: ToastData = {
        ...achievement,
        timestamp: Date.now(),
        toastId,
      }

      queueRef.current.push(toast)

      // Start processing queue if not already
      if (!processingRef.current) {
        showNextToast()
      }
    })

    return unsubscribe
  }, [])

  const removeToast = (toastId: string) => {
    setVisibleToasts(prev => prev.filter(t => t.toastId !== toastId))
  }

  return (
    <div className="achievement-toast-container">
      {visibleToasts.map((toast) => (
        <div
          key={toast.toastId}
          className={`achievement-toast ${toast.rarity || 'common'}`}
          onClick={() => removeToast(toast.toastId)}
        >
          <div className="toast-shine"></div>
          <div className="toast-header">
            <span className="toast-label">Achievement Unlocked!</span>
            {toast.xp && <span className="toast-xp">+{toast.xp} XP</span>}
          </div>
          <div className="toast-content">
            <div className="toast-icon">{toast.icon}</div>
            <div className="toast-info">
              <div className="toast-title">{toast.title}</div>
              <div className="toast-description">{toast.description}</div>
            </div>
          </div>
          <div className="toast-progress">
            <div className="toast-progress-bar"></div>
          </div>
          <button className="toast-close" onClick={() => removeToast(toast.toastId)}>
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

export default AchievementToast
