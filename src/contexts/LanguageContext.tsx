import { useState, useEffect, ReactNode } from 'react'
import { Language, getLanguage, setLanguage as setLang, onLanguageChange } from '../services/languageService'
import { getTranslation, Translations } from '../locales/translations'
import { LanguageContext } from './useLanguage'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getLanguage())
  const [t, setT] = useState<Translations>(getTranslation(language))

  useEffect(() => {
    // Subscribe to language changes
    const unsubscribe = onLanguageChange((newLanguage) => {
      setLanguageState(newLanguage)
      setT(getTranslation(newLanguage))
    })

    return unsubscribe
  }, [])

  const setLanguage = (lang: Language) => {
    setLang(lang)
    setLanguageState(lang)
    setT(getTranslation(lang))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
