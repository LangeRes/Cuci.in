import type { OrderTracking } from "@/types";

const ORDERS_STORAGE_KEY = "laundryku.orders";

/** Read locally created demo orders without breaking the page on invalid browser storage. */
export function getLocalOrders(): OrderTracking[] {
  if (typeof window === "undefined") return [];

  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(ORDERS_STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed)
      ? parsed.filter((item): item is OrderTracking => Boolean(item && typeof item === "object" && typeof item.code === "string"))
      : [];
  } catch {
    return [];
  }
}

/** Save a demo order and reserve codes used by the built-in tracking fixtures. */
export function saveLocalOrder(order: Omit<OrderTracking, "code">): OrderTracking {
  const existing = getLocalOrders();
  const reservedCodes = new Set([
    ...existing.map((item) => item.code.toUpperCase()),
  ]);

  let code = "";
  for (let attempt = 0; attempt < 10_000; attempt += 1) {
    const candidate = `LDR-${String(Math.floor(Math.random() * 10_000)).padStart(4, "0")}`;
    if (!reservedCodes.has(candidate)) {
      code = candidate;
      break;
    }
  }
  if (!code) throw new Error("Kode pesanan demo sedang penuh. Silakan coba lagi.");

  const savedOrder = { ...order, code };
  window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([savedOrder, ...existing]));
  return savedOrder;
}

export function isValidIndonesianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.startsWith("62") ? `0${digits.slice(2)}` : digits;
  return /^08\d{7,11}$/.test(normalized);
}
