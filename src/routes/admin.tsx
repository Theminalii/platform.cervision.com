import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Bot,
  LogOut,
  LockKeyhole,
  MessageSquare,
  Save,
  Send,
  Share2,
} from "lucide-react";
import { getTelegramConfig, saveTelegramConfig, sendTelegramTestMessage } from "@/lib/telegram";
import {
  authenticateAdmin,
  getSocialLinks,
  isAdminAuthenticated,
  logoutAdmin,
  saveSocialLinks,
} from "@/lib/admin-config";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [botToken, setBotToken] = useState("");
  const [chatId, setChatId] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "#",
    twitter: "#",
    github: "#",
    facebook: "#",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setIsAuthed(isAdminAuthenticated());

    const config = getTelegramConfig();
    setBotToken(config.botToken);
    setChatId(config.chatId);
    setSocialLinks(getSocialLinks());
  }, []);

  const handleSave = () => {
    saveTelegramConfig({ botToken, chatId });
    saveSocialLinks(socialLinks);
    setStatus("Telegram ayarlari ve sosial media linkleri yadda saxlanildi.");
  };

  const handleTest = async () => {
    try {
      setIsSending(true);
      setStatus("");
      saveTelegramConfig({ botToken, chatId });
      await sendTelegramTestMessage();
      setStatus("Test mesaji Telegram-a ugurla gonderildi.");
    } catch {
      setStatus("Test mesaji gonderile bilmedi. Bot token ve chat ID-ni yoxlayin.");
    } finally {
      setIsSending(false);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginStatus("");

    const success = await authenticateAdmin(username, password);

    if (!success) {
      setLoginStatus("Login ve ya parol yanlishdir.");
      return;
    }

    setIsAuthed(true);
    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthed(false);
    setLoginStatus("");
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,rgba(244,249,255,0.96),rgba(255,255,255,1))] px-4 py-10 text-foreground">
        <div className="mx-auto max-w-md">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana sehifeye qayit
          </a>

          <div className="mt-6 overflow-hidden rounded-[2rem] border border-border bg-white shadow-[var(--shadow-card)]">
            <div className="bg-gradient-brand px-8 py-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                <LockKeyhole className="h-3.5 w-3.5" />
                Protected admin
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight">Admin girishi</h1>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Telegram ayarlarini ve sosial media linklerini deyishmek ucun login ve parol daxil
                edin.
              </p>
            </div>

            <form className="space-y-4 px-8 py-8" onSubmit={handleLogin}>
              <div>
                <label className="text-sm font-semibold">Login</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                  placeholder="Login"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Parol</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                  placeholder="Parol"
                />
              </div>
              {loginStatus && (
                <div className="rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground/80">
                  {loginStatus}
                </div>
              )}
              <button className="w-full rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white">
                Daxil ol
              </button>
              <p className="text-xs leading-5 text-muted-foreground">
                Qeyd: Bu qoruma frontend seviyyesindedir. Production-da tam guvenli admin access
                ucun backend auth daha dogru yoldur.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,rgba(244,249,255,0.96),rgba(255,255,255,1))] px-4 py-10 text-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana sehifeye qayit
          </a>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" />
            Cixish et
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-border bg-white shadow-[var(--shadow-card)]">
          <div className="bg-gradient-brand px-8 py-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <Bot className="h-3.5 w-3.5" />
              Admin panel
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Admin panel</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Burada Telegram baglantisini ve footer-da gorunen sosial media linklerini idare ede
              bilersen. Ana sehifedeki forma doldurulanda melumatlar birbasa bu bot vasitəsile sene
              gonderilecek.
            </p>
          </div>

          <div className="grid gap-8 px-8 py-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <div className="rounded-[1.75rem] border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.95_0.06_165)] text-[oklch(0.35_0.12_165)]">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">Telegram ayarlari</h2>
                    <p className="text-sm text-muted-foreground">Bot token ve chat ID qeyd et.</p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <label className="text-sm font-semibold">Bot token</label>
                    <input
                      value={botToken}
                      onChange={(e) => setBotToken(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                      placeholder="123456789:AA..."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold">User ID / Chat ID</label>
                    <input
                      value={chatId}
                      onChange={(e) => setChatId(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                      placeholder="123456789"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border bg-card p-5">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.96_0.03_250)] text-[oklch(0.45_0.18_250)]">
                    <Share2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">Sosial media linkleri</h2>
                    <p className="text-sm text-muted-foreground">
                      Footer-daki ikonlar bu linklerle acilacaq.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  <div>
                    <label className="text-sm font-semibold">LinkedIn</label>
                    <input
                      value={socialLinks.linkedin}
                      onChange={(e) =>
                        setSocialLinks((current) => ({ ...current, linkedin: e.target.value }))
                      }
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                      placeholder="https://linkedin.com/company/..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Twitter / X</label>
                    <input
                      value={socialLinks.twitter}
                      onChange={(e) =>
                        setSocialLinks((current) => ({ ...current, twitter: e.target.value }))
                      }
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                      placeholder="https://x.com/..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">GitHub</label>
                    <input
                      value={socialLinks.github}
                      onChange={(e) =>
                        setSocialLinks((current) => ({ ...current, github: e.target.value }))
                      }
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">Facebook</label>
                    <input
                      value={socialLinks.facebook}
                      onChange={(e) =>
                        setSocialLinks((current) => ({ ...current, facebook: e.target.value }))
                      }
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[oklch(0.55_0.20_250)]"
                      placeholder="https://facebook.com/..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white"
                >
                  <Save className="h-4 w-4" />
                  Hamisini yadda saxla
                </button>
                <button
                  type="button"
                  onClick={handleTest}
                  disabled={isSending}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground/85 transition hover:bg-secondary disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSending ? "Gonderilir..." : "Test mesaji gonder"}
                </button>
              </div>

              {status && (
                <div className="rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground/80">
                  {status}
                </div>
              )}
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(247,251,255,0.98),rgba(238,247,255,0.94))] p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.95_0.06_165)] text-[oklch(0.35_0.12_165)]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">Istifade qaydasi</h2>
              <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                <li>Telegram-da yeni bot yarat ve token-i buraya yaz.</li>
                <li>Botun mesaj atacaği user ID ve ya chat ID-ni daxil et.</li>
                <li>Ayarlari yadda saxla ve test mesaji ile yoxla.</li>
                <li>
                  Ana sehifedeki musderi formu doldurulanda melumatlar avtomatik olaraq bu bot
                  vasitəsile Telegram-a gelecek.
                </li>
              </ul>
              <div className="rounded-2xl border border-border bg-white/80 p-4 text-xs leading-5 text-foreground/65">
                Qeyd: Bot token-i frontend storage-da saxlanilir. Demo ucun uyğundur, amma
                production ucun bunu backend vasitəsile gizli saxlamaq daha tehlukesizdir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
