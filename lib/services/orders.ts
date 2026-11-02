// SERVICE (mock) untuk pesanan.
// Nanti isi fungsi ini diganti pemanggilan Server Action / API dari Anggota 2.
// Komponen UI cukup memanggil fungsi ini, sehingga tidak perlu diubah.
import type { OrderTracking } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
const ORDERS_STORAGE_KEY = "laundryku.orders";

export async function getOrderByCode(
  code: string
): Promise<OrderTracking | null> {
  await delay(700); // simulasi loading jaringan
  const normalized = code.trim().toUpperCase();
  if (typeof window !== "undefined") {
    const saved = JSON.parse(window.localStorage.getItem(ORDERS_STORAGE_KEY) ?? "[]") as OrderTracking[];
    const localOrder = saved.find((order) => order.code === normalized);
    if (localOrder) return localOrder;
  }
  return null;
}
