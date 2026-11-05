import type { OrderStatus } from "@/types";

export type DashboardOrder = {
  code: string;
  customer: string;
  service: string;
  status: OrderStatus;
  weight: number | null;
  total: number | null;
  createdAt: string;
};

export const dashboardOrders: DashboardOrder[] = [
  { code: "LDR-2401", customer: "Nadia Putri", service: "Cuci + Setrika", status: "dicuci", weight: 4.5, total: 31500, createdAt: "05 Nov 2026" },
  { code: "LDR-2398", customer: "Rizky Pratama", service: "Cuci Kering", status: "siap_diambil", weight: 3, total: 15000, createdAt: "04 Nov 2026" },
  { code: "LDR-2394", customer: "Dewi Lestari", service: "Kilat (Express)", status: "diterima", weight: null, total: null, createdAt: "04 Nov 2026" },
  { code: "LDR-2389", customer: "Fajar Ramadhan", service: "Setrika Saja", status: "selesai", weight: 2.5, total: 10000, createdAt: "03 Nov 2026" },
  { code: "LDR-2385", customer: "Maya Sari", service: "Cuci + Setrika", status: "menunggu", weight: null, total: null, createdAt: "02 Nov 2026" },
  { code: "LDR-2379", customer: "Andi Saputra", service: "Cuci Kering", status: "disetrika", weight: 5, total: 25000, createdAt: "01 Nov 2026" },
];

export const statusLabels: Record<OrderStatus, string> = {
  menunggu: "Menunggu",
  diterima: "Diterima",
  dicuci: "Sedang dicuci",
  disetrika: "Disetrika",
  siap_diambil: "Siap diambil",
  selesai: "Selesai",
};
