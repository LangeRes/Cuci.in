import type { OrderTracking } from "@/types";

export async function getOrderByCode(
  code: string
): Promise<OrderTracking | null> {
  const response = await fetch(`/api/orders/track?code=${encodeURIComponent(code.trim())}`, {
    cache: "no-store",
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Status pesanan tidak dapat dimuat.");

  const result: { order: OrderTracking } = await response.json();
  return result.order;
}
