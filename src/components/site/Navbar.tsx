import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { LANGS, type Lang } from "@/i18n/translations";
import { BrandLogo } from "./BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, setLang } = useT();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#industries", label: t.nav.industries },
    { href: "#process", label: t.nav.process },
    { href: "#cases", label: t.nav.cases },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(15,40,90,0.25)]" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <BrandLogo className="h-11 w-auto" showText />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 transition hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-2 text-xs font-semibold text-foreground/80 hover:bg-secondary"
                aria-label="Language"
              >
                <Globe className="h-3.5 w-3.5" />
                {lang.toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-28 overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]">
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Lang);
                        setLangOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-xs font-semibold transition ${
                        lang === l.code
                          ? "bg-secondary text-foreground"
                          : "text-foreground/70 hover:bg-secondary"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#contact"
              className="rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:opacity-95"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="rounded-lg border border-border bg-card px-2 py-1.5 text-xs font-semibold"
              aria-label="Language"
            >
              {LANGS.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass p-4 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-gradient-brand px-4 py-2 text-center text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </div>
    </motion.header>
  );
}
