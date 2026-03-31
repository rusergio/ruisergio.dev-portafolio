"use client"

import React, { createContext, useContext, useState } from "react"
import { translations, type Language } from "@/lib/translations"

type TranslationKeys = (typeof translations)["pt"]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
