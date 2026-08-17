import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { ru } from "../i18n/ru";
import { kz } from "../i18n/kz";

export type Language = "ru" | "kz";

const translations = {
  ru,
  kz,
};

type Translation = typeof ru | typeof kz;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext =
  createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>("ru");

  /* =========================================
     LANGUAGE CLASS ON HTML
  ========================================= */

  useEffect(() => {
    document.documentElement.classList.remove(
      "lang-ru",
      "lang-kz"
    );

    document.documentElement.classList.add(
      `lang-${language}`
    );

    document.documentElement.lang = language;

    return () => {
      document.documentElement.classList.remove(
        "lang-ru",
        "lang-kz"
      );
    };
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) =>
      current === "ru" ? "kz" : "ru"
    );
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}