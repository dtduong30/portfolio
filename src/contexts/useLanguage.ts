import { createContext, useContext } from 'react'
import { Language } from '../services/languageService'
import { Translations } from '../locales/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

// Kept out of LanguageContext.tsx so that file exports only components (Fast Refresh)
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
