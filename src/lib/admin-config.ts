export type SocialLinks = {
  linkedin: string;
  twitter: string;
  github: string;
  facebook: string;
};

const ADMIN_SESSION_KEY = "cv_admin_session";
const SOCIAL_LINKS_KEY = "cv_social_links";

const ADMIN_USERNAME_HASH = "817a966d21e5bab53a7857d0d0807cd2947652b315f9101dc74d93928ee5a462";
const ADMIN_PASSWORD_HASH = "f66ae2a4a1cfedd35dcb8d56093a421f61761038838195a11a63dd9052305957";

const DEFAULT_SOCIAL_LINKS: SocialLinks = {
  linkedin: "#",
  twitter: "#",
  github: "#",
  facebook: "#",
};

async function sha256(value: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function authenticateAdmin(username: string, password: string) {
  const [usernameHash, passwordHash] = await Promise.all([
    sha256(username.trim()),
    sha256(password),
  ]);

  const isValid = usernameHash === ADMIN_USERNAME_HASH && passwordHash === ADMIN_PASSWORD_HASH;

  if (isValid && typeof window !== "undefined") {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "authorized");
  }

  return isValid;
}

export function isAdminAuthenticated() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "authorized";
}

export function logoutAdmin() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

export function getSocialLinks(): SocialLinks {
  if (typeof window === "undefined") return DEFAULT_SOCIAL_LINKS;

  try {
    const raw = localStorage.getItem(SOCIAL_LINKS_KEY);
    if (!raw) return DEFAULT_SOCIAL_LINKS;
    return { ...DEFAULT_SOCIAL_LINKS, ...(JSON.parse(raw) as Partial<SocialLinks>) };
  } catch {
    return DEFAULT_SOCIAL_LINKS;
  }
}

export function saveSocialLinks(links: SocialLinks) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SOCIAL_LINKS_KEY, JSON.stringify(links));
}
