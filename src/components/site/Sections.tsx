import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  Compass,
  Heart,
  Shield,
  Rocket,
  Users,
  Layers,
  Code2,
  Database,
  Workflow,
  Brain,
  Bot,
  Globe,
  Smartphone,
  Building2,
  Plug,
  Cloud,
  LifeBuoy,
  RefreshCw,
  ArrowRightLeft,
  GitBranch,
  BarChart3,
  Boxes,
  Warehouse,
  Calculator,
  Wallet,
  UserCog,
  ClipboardList,
  FileText,
  CheckSquare,
  Cog,
  Sparkles,
  Plane,
  ShoppingBag,
  Factory,
  HardHat,
  Stethoscope,
  GraduationCap,
  Truck,
  PackageSearch,
  Store,
  Landmark,
  Briefcase,
  ArrowRight,
  Quote,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/LanguageProvider";
import { MiniOrbitVisual } from "./HeroVisual";
import { BrandLogo } from "./BrandLogo";
import { getTelegramConfig, sendTelegramLead } from "@/lib/telegram";
import { getSocialLinks } from "@/lib/admin-config";

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide text-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
export function About() {
  const { t } = useT();
  const icons = [Target, Compass, Heart, Lightbulb];
  const pillars = t.about.pillars.map((p, i) => ({ ...p, icon: icons[i] }));
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={
            <>
              {t.about.titleA} <span className="text-gradient">{t.about.titleB}</span>
            </>
          }
          description={t.about.desc}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-glow)]">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY US ----------------------------- */
export function WhyUs() {
  const { t } = useT();
  const icons = [Rocket, Lightbulb, Shield, Layers, Users, Target, Brain, ShieldCheckPlaceholder];
  const items = t.whyus.items.map((it, i) => ({ ...it, icon: icons[i] }));
  return (
    <section className="relative bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.whyus.eyebrow}
          title={
            <>
              {t.whyus.titleA} <span className="text-gradient">{t.whyus.titleB}</span>
            </>
          }
          description={t.whyus.desc}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:border-transparent hover:shadow-[var(--shadow-card)]">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition group-hover:opacity-30" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[oklch(0.96_0.02_250)] text-[oklch(0.45_0.18_250)] transition group-hover:bg-gradient-brand group-hover:text-white">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function ShieldCheckPlaceholder(props: React.SVGProps<SVGSVGElement>) {
  return <Shield {...props} />;
}

function ChannelIcon({ name }: { name: string }) {
  if (name === "WhatsApp") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.11 17.36c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.45-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.24s.96 2.59 1.09 2.77c.14.18 1.88 2.87 4.55 4.03.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.25-.18-.52-.32Z"
        />
        <path
          fill="currentColor"
          d="M16 3.2c-7.05 0-12.8 5.74-12.8 12.8 0 2.25.59 4.45 1.7 6.39L3.2 28.8l6.57-1.67A12.74 12.74 0 0 0 16 28.8c7.05 0 12.8-5.74 12.8-12.8S23.05 3.2 16 3.2Zm0 23.31c-1.9 0-3.77-.51-5.41-1.47l-.39-.23-3.9.99 1.04-3.8-.25-.39a10.48 10.48 0 0 1-1.61-5.61c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5-4.71 10.51-10.48 10.51Z"
        />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <defs>
          <linearGradient id="instagramGradient" x1="0%" x2="100%" y1="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="45%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="22" height="22" rx="7" fill="url(#instagramGradient)" />
        <circle cx="16" cy="16" r="5.2" fill="none" stroke="white" strokeWidth="2.2" />
        <circle cx="22.3" cy="9.8" r="1.4" fill="white" />
      </svg>
    );
  }

  if (name === "Telegram") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="#229ED9" />
        <path
          fill="white"
          d="M22.54 10.07 9.92 14.93c-.86.34-.86.82-.16 1.03l3.24 1.01 1.25 4.02c.16.45.08.62.55.62.36 0 .52-.17.72-.37.12-.12.8-.78 1.57-1.52l3.27 2.41c.6.33 1.03.16 1.18-.55l2.15-10.15c.22-.87-.33-1.27-1.15-.9Zm-2.22 2.25-5.9 5.33-.23 2.29-1.04-3.41 7.17-4.52Z"
        />
      </svg>
    );
  }

  if (name === "Gmail") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#EA4335"
          d="M6 24.5V9.75l10 7.5 10-7.5V24.5h-3.5V14.93L16 19.65l-6.5-4.72v9.57Z"
        />
        <path fill="#34A853" d="M26 9.75v14.72H21.9V14.93L26 9.75Z" />
        <path fill="#FBBC04" d="M6 9.75v14.72h4.1V14.93L6 9.75Z" />
        <path
          fill="#4285F4"
          d="M6 9.75 16 17.1l10-7.35V8.5A2.5 2.5 0 0 0 23.5 6h-15A2.5 2.5 0 0 0 6 8.5Z"
        />
      </svg>
    );
  }

  return <Sparkles className="h-5 w-5" />;
}

/* ----------------------------- SERVICES ----------------------------- */
export function Services() {
  const { t } = useT();
  const icons = [
    Code2,
    Database,
    Users,
    Workflow,
    Brain,
    Bot,
    Globe,
    Smartphone,
    Building2,
    Compass,
    Plug,
    Cloud,
    LifeBuoy,
    RefreshCw,
    ArrowRightLeft,
    GitBranch,
  ];
  const services = t.services.items.map((s, i) => ({ ...s, icon: icons[i] }));
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={
            <>
              {t.services.titleA} <span className="text-gradient">{t.services.titleB}</span>{" "}
              {t.services.titleC}
            </>
          }
          description={t.services.desc}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 6) * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card)]">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.20_250)] to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-glow)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.45_0.18_250)] hover:gap-2 transition-all"
                >
                  {t.services.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PLATFORM SOLUTIONS ----------------------------- */
export function PlatformSolutions() {
  const { t } = useT();
  const icons = [
    BarChart3,
    Boxes,
    Warehouse,
    Calculator,
    Wallet,
    UserCog,
    Users,
    BarChart3,
    ClipboardList,
    FileText,
    CheckSquare,
    Cog,
    Sparkles,
  ];
  const tabs = t.platform.tabs.map((tab, i) => ({ ...tab, icon: icons[i] }));
  const [active, setActive] = useState(0);
  const cur = tabs[active];
  return (
    <section id="solutions" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.platform.eyebrow}
          title={
            <>
              {t.platform.titleA} <span className="text-gradient">{t.platform.titleB}</span>{" "}
              {t.platform.titleC}
            </>
          }
          description={t.platform.desc}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                  active === i
                    ? "border-transparent bg-card shadow-[var(--shadow-card)]"
                    : "border-border bg-card/50 hover:bg-card"
                }`}
              >
                <div
                  className={`grid h-9 w-9 place-items-center rounded-lg transition ${
                    active === i
                      ? "bg-gradient-brand text-white"
                      : "bg-secondary text-foreground/70"
                  }`}
                >
                  <t.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{t.name}</p>
                </div>
                <ArrowRight
                  className={`h-4 w-4 transition ${active === i ? "text-[oklch(0.55_0.20_250)] translate-x-1" : "text-muted-foreground"}`}
                />
              </button>
            ))}
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-[var(--shadow-card)]">
              <div className="relative overflow-hidden rounded-2xl bg-[oklch(0.98_0.01_250)] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.15_30)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.15_90)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.17_165)]" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    cervision.platform / {cur.name.toLowerCase().replace(/\s+/g, "-")}
                  </p>
                </div>
                <div className="mt-6 flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white">
                    <cur.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{cur.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cur.desc}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { l: t.platform.m1, v: 24580, s: "" },
                    { l: t.platform.m2, v: 1320, s: "" },
                    { l: t.platform.m3, v: 8400, s: "" },
                  ].map((m) => (
                    <div key={m.l} className="rounded-xl border border-border bg-card p-4">
                      <p className="text-xs text-muted-foreground">{m.l}</p>
                      <p className="mt-1 text-2xl font-semibold">
                        <Counter value={m.v} />
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-border bg-card p-4">
                  <div className="flex items-end justify-between">
                    <p className="text-sm font-medium">{t.platform.perf}</p>
                    <p className="text-xs text-[oklch(0.45_0.15_165)]">▲ 23.4%</p>
                  </div>
                  <div className="mt-4 flex h-32 items-end gap-1.5">
                    {Array.from({ length: 30 }).map((_, i) => {
                      const h = 20 + (Math.sin(i / 2 + active) + 1) * 35 + (i % 5) * 4;
                      return (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[oklch(0.55_0.20_250)] to-[oklch(0.72_0.17_165)]"
                          style={{ height: `${h}%` }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SYSTEM ARCHITECTURE ----------------------------- */
export function SystemArchitecture() {
  const { t } = useT();
  const blockIcons = [Users, Globe, Database, Plug];
  const flowIcons = [Bot, ShoppingBag, Boxes, UserCog];
  const blocks = t.architecture.blocks.map((block, i) => ({ ...block, icon: blockIcons[i] }));
  const flows = t.architecture.flows.map((flow, i) => ({ ...flow, icon: flowIcons[i] }));

  return (
    <section id="process" className="relative overflow-hidden bg-secondary/30 py-28">
      <div className="absolute inset-0 -z-10 [background:var(--gradient-radial)] opacity-70" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.architecture.eyebrow}
          title={
            <>
              {t.architecture.titleA} <span className="text-gradient">{t.architecture.titleB}</span>
            </>
          }
          description={t.architecture.desc}
        />

        <div className="mt-14 space-y-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white/92 p-6 shadow-[var(--shadow-card)] md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.55_0.20_250)]">
                    Platform map
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    {t.architecture.coreTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-[15px]">
                    {t.architecture.coreText}
                  </p>
                </div>
                <div className="hidden h-32 w-32 shrink-0 xl:block">
                  <MiniOrbitVisual variant="prism" className="opacity-90" />
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {t.architecture.channels.map((channel, i) => (
                  <div
                    key={channel.name}
                    className="rounded-2xl border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,248,255,0.92))] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl ${
                          i === 0
                            ? "bg-[linear-gradient(135deg,#22c55e,#16a34a)] text-white"
                            : i === 1
                              ? "bg-[linear-gradient(135deg,#f97316,#ec4899)] text-white"
                              : i === 2
                                ? "bg-[linear-gradient(135deg,#38bdf8,#2563eb)] text-white"
                                : i === 3
                                  ? "bg-white ring-1 ring-border"
                                  : "bg-gradient-brand text-white"
                        }`}
                      >
                        <ChannelIcon name={channel.name} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{channel.name}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {channel.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {blocks.map((block, i) => (
                  <div
                    key={block.title}
                    className={`rounded-[1.75rem] border border-border p-5 ${
                      i === 1
                        ? "bg-[linear-gradient(135deg,rgba(17,78,189,0.96),rgba(10,163,171,0.9))] text-white"
                        : "bg-[oklch(1_0_0/0.88)]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                          i === 1
                            ? "bg-white/15 text-white"
                            : i % 2 === 0
                              ? "bg-[oklch(0.95_0.06_165)] text-[oklch(0.35_0.12_165)]"
                              : "bg-[oklch(0.96_0.03_250)] text-[oklch(0.45_0.18_250)]"
                        }`}
                      >
                        <block.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold">{block.title}</h4>
                        <p
                          className={`mt-2 text-sm leading-6 ${
                            i === 1 ? "text-white/85" : "text-muted-foreground"
                          }`}
                        >
                          {block.text}
                        </p>
                      </div>
                    </div>

                    {i === 1 && (
                      <div className="mt-5 h-36 max-w-[180px]">
                        <MiniOrbitVisual variant="orbit" className="opacity-95" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {t.architecture.badges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm font-medium text-foreground/80"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-brand align-middle" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
              <div className="absolute right-0 top-0 h-40 w-40 opacity-80">
                <MiniOrbitVisual variant="mesh" />
              </div>
              <div className="relative max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.55_0.20_250)]">
                  {t.architecture.panelEyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  {t.architecture.panelTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-[15px]">
                  {t.architecture.panelDesc}
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {flows.map((flow, i) => (
                  <Reveal key={flow.title} delay={i * 0.06}>
                    <article className="group h-full rounded-[1.75rem] border border-border bg-white/80 p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                      <div className="flex items-start gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-glow)]">
                          <flow.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold leading-snug">{flow.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {flow.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INDUSTRIES ----------------------------- */
export function Industries() {
  const { t } = useT();
  const icons = [
    Plane,
    ShoppingBag,
    Factory,
    HardHat,
    Stethoscope,
    GraduationCap,
    Truck,
    PackageSearch,
    Store,
    Landmark,
    Building2,
    Briefcase,
  ];
  const items = t.industries.items.map((it, i) => ({ ...it, icon: icons[i] }));
  return (
    <section id="industries" className="relative bg-secondary/40 py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.industries.eyebrow}
          title={
            <>
              {t.industries.titleA} <span className="text-gradient">{t.industries.titleB}</span>
            </>
          }
          description={t.industries.desc}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 0.05}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[oklch(0.95_0.06_165)] text-[oklch(0.35_0.12_165)] transition group-hover:bg-gradient-brand group-hover:text-white">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{it.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROCESS ----------------------------- */
export function Process() {
  const { t } = useT();
  const steps = t.process.steps;
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.process.eyebrow}
          title={
            <>
              {t.process.titleA} <span className="text-gradient">{t.process.titleB}</span>
            </>
          }
          description={t.process.desc}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 0.06}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold tracking-tighter text-gradient">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-12 rounded-full bg-gradient-brand opacity-30 transition group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INNOVATION ----------------------------- */
export function Innovation() {
  const { t } = useT();
  const icons = [Brain, Cog, BarChart3, Database, Workflow, Compass, Sparkles];
  const items = t.innovation.items.map((it, i) => ({ ...it, icon: icons[i] }));
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 [background:var(--gradient-radial)]" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.innovation.eyebrow}
          title={
            <>
              {t.innovation.titleA} <span className="text-gradient">{t.innovation.titleB}</span>
              {t.innovation.titleC}
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-20 blur-3xl transition group-hover:opacity-40" />
                <div className="relative">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-white shadow-[var(--shadow-glow)]">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CASE STUDIES ----------------------------- */
export function CaseStudies() {
  const { t } = useT();
  const cases = t.cases.items;
  return (
    <section id="cases" className="relative bg-secondary/40 py-28">
      <div className="absolute right-0 top-10 hidden h-56 w-56 opacity-70 lg:block">
        <MiniOrbitVisual variant="mesh" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.cases.eyebrow}
          title={
            <>
              {t.cases.titleA} <span className="text-gradient">{t.cases.titleB}</span>
            </>
          }
          description={t.cases.desc}
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="relative h-44 overflow-hidden bg-gradient-brand">
                  <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
                  <div className="absolute right-2 top-2 h-24 w-24 opacity-80">
                    <MiniOrbitVisual variant={i % 2 === 0 ? "prism" : "orbit"} />
                  </div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">
                      {c.tag}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold leading-snug">{c.title}</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-foreground">{t.cases.challenge} </span>
                      <span className="text-muted-foreground">{c.challenge}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">{t.cases.solution} </span>
                      <span className="text-muted-foreground">{c.solution}</span>
                    </p>
                  </div>
                  <div className="mt-6 border-t border-border pt-5">
                    <div className="grid gap-2">
                      {c.results.map((r) => (
                        <div
                          key={r.l}
                          className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/50 px-4 py-3"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand" />
                          <span className="text-sm text-foreground/80">{r.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */
export function Testimonials() {
  const { t } = useT();
  const items = t.testimonials.items;
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={
            <>
              {t.testimonials.titleA} <span className="text-gradient">{t.testimonials.titleB}</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={(i % 3) * 0.06}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <Quote className="h-8 w-8 text-[oklch(0.55_0.20_250)] opacity-60" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
                  "{it.t}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-sm font-semibold text-white">
                    {it.n
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{it.n}</p>
                    <p className="text-xs text-muted-foreground">{it.r}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FAQ ----------------------------- */
export function FAQ() {
  const { t } = useT();
  const faqs = t.faq.items;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-secondary/40 py-28">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader
          eyebrow={t.faq.eyebrow}
          title={
            <>
              {t.faq.titleA} <span className="text-gradient">{t.faq.titleB}</span>
            </>
          }
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 5) * 0.04}>
              <div
                className={`rounded-2xl border border-border bg-card transition ${open === i ? "shadow-[var(--shadow-card)]" : ""}`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-base font-semibold md:text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[oklch(0.55_0.20_250)] transition ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */
export function FinalCTA() {
  const { t } = useT();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    businessDirection: "",
    companyActivity: "",
    teamSize: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const telegramConfig = getTelegramConfig();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!telegramConfig.botToken || !telegramConfig.chatId) {
      setStatus(t.cta.fConfigNote);
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus("");
      await sendTelegramLead(form);
      setStatus(t.cta.fSuccess);
      setForm({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        businessDirection: "",
        companyActivity: "",
        teamSize: "",
        message: "",
      });
    } catch {
      setStatus(t.cta.fError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-white shadow-[var(--shadow-glow)] md:p-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-blob" />
            <div
              className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[oklch(0.85_0.18_165)]/40 blur-3xl animate-blob"
              style={{ animationDelay: "3s" }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> {t.cta.tag}
                </span>
                <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  {t.cta.title}
                </h2>
                <p className="mt-4 max-w-xl text-white/85 md:text-lg">{t.cta.desc}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:office@cervision.com"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:translate-y-[-1px]"
                  >
                    {t.cta.b1} <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:office@cervision.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {t.cta.b2}
                  </a>
                  <a
                    href="mailto:office@cervision.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    {t.cta.b3}
                  </a>
                </div>
              </div>

              <form
                className="rounded-2xl bg-white/95 p-6 text-foreground shadow-[var(--shadow-card)] md:p-7"
                onSubmit={handleSubmit}
              >
                <p className="text-sm font-semibold">{t.cta.formTitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t.cta.formSub}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <input
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((current) => ({ ...current, fullName: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                    placeholder={t.cta.fName}
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                    placeholder={t.cta.fEmail}
                  />
                  <input
                    value={form.company}
                    onChange={(e) =>
                      setForm((current) => ({ ...current, company: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                    placeholder={t.cta.fCompany}
                  />
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((current) => ({ ...current, phone: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                    placeholder={t.cta.fPhone}
                  />
                  <input
                    value={form.businessDirection}
                    onChange={(e) =>
                      setForm((current) => ({ ...current, businessDirection: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)] md:col-span-2"
                    placeholder={t.cta.fDirection}
                  />
                  <input
                    value={form.companyActivity}
                    onChange={(e) =>
                      setForm((current) => ({ ...current, companyActivity: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)] md:col-span-2"
                    placeholder={t.cta.fActivity}
                  />
                  <input
                    value={form.teamSize}
                    onChange={(e) =>
                      setForm((current) => ({ ...current, teamSize: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)] md:col-span-2"
                    placeholder={t.cta.fTeam}
                  />
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((current) => ({ ...current, message: e.target.value }))
                    }
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)] md:col-span-2"
                    placeholder={t.cta.fMsg}
                  />
                  <div className="space-y-3 md:col-span-2">
                    {status && (
                      <div className="rounded-xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground/75">
                        {status}
                      </div>
                    )}
                    <button
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : t.cta.fSend}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
export function Footer() {
  const { t } = useT();
  const cols = t.footer.cols;
  const [socialLinks, setSocialLinks] = useState(getSocialLinks());

  useEffect(() => {
    setSocialLinks(getSocialLinks());
  }, []);

  const socialItems = [
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.55_0.20_250)] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <BrandLogo className="h-12 w-auto" />
            </a>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[oklch(0.55_0.20_250)]" /> office@cervision.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[oklch(0.55_0.20_250)]" /> +994 77 354 45 45
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[oklch(0.55_0.20_250)]" /> Baku, Azerbaijan
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  target={item.href && item.href !== "#" ? "_blank" : undefined}
                  rel={item.href && item.href !== "#" ? "noreferrer" : undefined}
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-foreground/70 transition hover:bg-gradient-brand hover:text-white hover:border-transparent"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  {c.h}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-muted-foreground transition hover:text-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
              {t.footer.news}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.newsDesc}</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                placeholder={t.footer.emailPh}
              />
              <button className="rounded-xl bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white">
                {t.footer.join}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Cer Vision. {t.footer.rights}
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-foreground">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-foreground">
              {t.footer.cookies}
            </a>
            <a href="#" className="hover:text-foreground">
              {t.footer.security}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
