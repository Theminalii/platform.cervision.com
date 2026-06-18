import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { T, type Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof T)["en"] };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("az");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cv_lang") as Lang | null;
      if (saved && ["az", "ru", "en"].includes(saved)) setLangState(saved);
    } catch {
      // Ignore storage access failures, e.g. privacy mode.
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("cv_lang", l);
    } catch {
      // Ignore storage access failures, e.g. privacy mode.
    }
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return <LangCtx.Provider value={{ lang, setLang, t: T[lang] }}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
