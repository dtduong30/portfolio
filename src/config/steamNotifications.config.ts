import {
  NotificationData,
  NotificationOptions,
  SteamNotification,
  UserState,
} from "../types";

const userStates = new Map<string, UserState>();

let data: NotificationData | null = null;
const CDN_URL =
  "https://cdn.jsdelivr.net/gh/dtduong30/rich-content@master/notifications.json";

export async function loadNotifications() {
  try {
    const res = await fetch(CDN_URL);

    if (!res.ok) throw new Error("Failed to load notifications");

    const json: NotificationData = await res.json();
    data = json;

    if (!data?.users) return;

    for (const user of data.users) {
      if (!userStates.has(user.name)) {
        userStates.set(user.name, { status: "offline" });
      }
    }
  } catch (err) {
    console.warn("Notification data failed to load", err);
  }
}

function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomExcept<T>(arr: T[], excluded: T[] = []): T | null {
  if (arr.length === 0) return null;

  const filtered = arr.filter((item) => !excluded.includes(item));
  return filtered.length > 0 ? random(filtered) : random(arr);
}

function createNotification(
  user: { name: string; avatar?: string },
  type: SteamNotification["type"],
  message: string,
  action?: string,
): SteamNotification {
  return {
    id: crypto.randomUUID(),
    type,
    name: user.name,
    avatar: user.avatar,
    message,
    action,
  };
}

function getAvailableUsers(excludeUsers: string[] = []) {
  if (!data) return [];

  const available = data.users.filter(
    (user) => !excludeUsers.includes(user.name),
  );

  return available.length > 0 ? available : data.users;
}

/**
 * Notification priority:
 * 1. Offline user comes online
 * 2. Online user starts playing a game
 * 3. Playing user gets achievement
 * 4. Playing/online user sends invite/message
 */
export function getRandomNotification(
  options: NotificationOptions = {},
): SteamNotification {
  if (!data) {
    return {
      id: crypto.randomUUID(),
      type: "friend-online",
      name: "Steam User",
      message: "is now online",
    };
  }

  const excludeUsers = options.excludeUsers ?? [];
  const excludeActions = options.excludeActions ?? [];

  const availableUsers = getAvailableUsers(excludeUsers);

  // Split users by state
  const offlineUsers = availableUsers.filter(
    (user) => userStates.get(user.name)?.status === "offline",
  );

  const onlineUsers = availableUsers.filter(
    (user) => userStates.get(user.name)?.status === "online",
  );

  const playingUsers = availableUsers.filter(
    (user) => userStates.get(user.name)?.status === "playing",
  );

  // Weighted flow to keep notifications natural
  const roll = Math.random();

  // 1) Prefer offline -> online
  if (offlineUsers.length > 0 && roll < 0.45) {
    const user = random(offlineUsers);
    userStates.set(user.name, { status: "online" });

    return createNotification(user, "friend-online", "is now online");
  }

  // 2) Then online -> playing
  if (onlineUsers.length > 0 && roll < 0.75) {
    const user = random(onlineUsers);
    const game = randomExcept(data.games, excludeActions) ?? random(data.games);

    userStates.set(user.name, {
      status: "playing",
      currentGame: game,
    });

    return createNotification(user, "playing", "is now playing", game);
  }

  // 3) Playing -> achievement
  if (playingUsers.length > 0 && roll < 0.88) {
    const user = random(playingUsers);
    const achievement =
      randomExcept(data.achievements, excludeActions) ??
      random(data.achievements);

    return createNotification(
      user,
      "achievement",
      "unlocked an achievement:",
      achievement,
    );
  }

  // 4) Playing/online -> invite
  if ((playingUsers.length > 0 || onlineUsers.length > 0) && roll < 0.95) {
    const candidates = [...playingUsers, ...onlineUsers];
    const user = random(candidates);
    const invite =
      randomExcept(data.invites, excludeActions) ?? random(data.invites);

    return createNotification(user, "invite", "sent you an invite:", invite);
  }

  // 5) Fallback -> message
  {
    const candidates = [...playingUsers, ...onlineUsers, ...offlineUsers];
    const user =
      candidates.length > 0 ? random(candidates) : random(availableUsers);
    const message =
      randomExcept(data.messages, excludeActions) ?? random(data.messages);

    return createNotification(user, "message", "sent you a message:", message);
  }
}
