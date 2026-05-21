"use client";

import { createContext, useContext } from "react";

type Translation = {
  home: string
  about: string
  projects:string
  skills:string
  contact:string
  description:string
};

const TranslationContext = createContext<{
  t: Translation;
  locale: string;
} | null>(null);

export function TranslationProvider({
  children,
  t,
  locale,
}: {
  children: React.ReactNode;
  t: Translation;
  locale: string;
}) {
  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used inside TranslationProvider");
  }
  return context;
}