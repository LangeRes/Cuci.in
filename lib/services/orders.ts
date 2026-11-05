// SERVICE (mock) untuk pesanan.
// Nanti isi fungsi ini diganti pemanggilan Server Action / API dari Anggota 2.
// Komponen UI cukup memanggil fungsi ini, sehingga tidak perlu diubah.
import type { OrderTracking } from "@/types";
import { statusTestOrders } from "@/lib/mock-data/status-orders";
import { getLocalOrders } from "@/lib/services/local-orders";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getOrderByCode(
  code: string
): Promise<OrderTracking | null> {
  await delay(700); // simulasi loading jaringan
  const normalized = code.trim().toUpperCase();
  if (typeof window !== "undefined") {
    const localOrder = getLocalOrders().find((order) => order.code.toUpperCase() === normalized);
    if (localOrder) return localOrder;
  }
  return statusTestOrders.find((order) => order.code === normalized) ?? null;
}
