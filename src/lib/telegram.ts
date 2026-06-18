export type TelegramConfig = {
  botToken: string;
  chatId: string;
};

export type TelegramLeadPayload = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  businessDirection: string;
  companyActivity: string;
  teamSize: string;
  message: string;
};

const BOT_TOKEN_KEY = "cv_telegram_bot_token";
const CHAT_ID_KEY = "cv_telegram_chat_id";

export function getTelegramConfig(): TelegramConfig {
  if (typeof window === "undefined") return { botToken: "", chatId: "" };

  return {
    botToken: localStorage.getItem(BOT_TOKEN_KEY) ?? "",
    chatId: localStorage.getItem(CHAT_ID_KEY) ?? "",
  };
}

export function saveTelegramConfig(config: TelegramConfig) {
  if (typeof window === "undefined") return;

  localStorage.setItem(BOT_TOKEN_KEY, config.botToken.trim());
  localStorage.setItem(CHAT_ID_KEY, config.chatId.trim());
}

export async function sendTelegramLead(payload: TelegramLeadPayload) {
  const { botToken, chatId } = getTelegramConfig();

  if (!botToken || !chatId) {
    throw new Error("Telegram config is missing.");
  }

  const text = [
    "New Cer Vision lead",
    "",
    `Full name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Phone: ${payload.phone}`,
    `Business direction: ${payload.businessDirection}`,
    `Activity focus: ${payload.companyActivity}`,
    `Team size: ${payload.teamSize}`,
    "",
    "Message:",
    payload.message || "-",
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error("Telegram request failed.");
  }

  const result = (await response.json()) as { ok?: boolean };

  if (!result.ok) {
    throw new Error("Telegram message was not accepted.");
  }
}

export async function sendTelegramTestMessage() {
  const { botToken, chatId } = getTelegramConfig();

  if (!botToken || !chatId) {
    throw new Error("Telegram config is missing.");
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: "Cer Vision Business Operations Platform admin test message.",
    }),
  });

  if (!response.ok) {
    throw new Error("Telegram test request failed.");
  }
}
