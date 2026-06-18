import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Cpu, Database, Users, Bot } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const { t } = useT();
  const definitionIcons = [Database, Users, Bot];
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background ambient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 [background:var(--gradient-radial)]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.55_0.20_250)]" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl"
          >
            {t.hero.titleA} <span className="text-gradient">{t.hero.titleB}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:translate-y-[-1px]"
            >
              {t.hero.cta1}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white"
            >
              <PlayCircle className="h-4 w-4 text-[oklch(0.55_0.20_250)]" />
              {t.hero.cta2}
            </a>
          </motion.div>
        </div>

        {/* 3D visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto h-[460px] w-full max-w-[520px] lg:h-[560px]"
        >
          <HeroVisual />

          {t.hero.definitions.map((item, index) => {
            const Icon = definitionIcons[index] ?? Cpu;
            const positions = [
              "right-0 top-6 xl:right-[-24px]",
              "left-0 top-[42%] xl:left-[-58px]",
              "right-8 bottom-4 xl:right-[-8px]",
            ];

            return (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.18, duration: 0.8 }}
                className={`pointer-events-none absolute hidden w-72 rounded-2xl glass p-4 shadow-[var(--shadow-card)] lg:block ${positions[index]}`}
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.term}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.meaning}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
