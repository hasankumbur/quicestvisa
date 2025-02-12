'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { en } from '@/locales/en'
import { tr } from '@/locales/tr'

type Language = 'en' | 'tr'
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr')
  const [translations, setTranslations] = useState<Translations>(tr)

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split('-')[0] as Language
    const savedLang = localStorage.getItem('language') as Language
    
    // Use saved language first, then browser language
    const initialLang = savedLang || (browserLang === 'tr' ? 'tr' : 'en')
    setLanguage(initialLang)
    setTranslations(initialLang === 'tr' ? tr : en)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    setTranslations(lang === 'tr' ? tr : en)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 