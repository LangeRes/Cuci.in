import type { OrderTracking } from "@/types";

export const statusTestOrders: OrderTracking[] = [
  { code: "LDR-9001", customerName: "Nadia Putri", serviceName: "Cuci + Setrika", status: "dicuci", paymentStatus: "belum_bayar", weightKg: 4.5, total: 31500, estimatedDone: "6 Nov 2026" },
  { code: "LDR-9002", customerName: "Rizky Pratama", serviceName: "Cuci Kering", status: "siap_diambil", paymentStatus: "belum_bayar", weightKg: 3, total: 15000, estimatedDone: "6 Nov 2026" },
  { code: "LDR-9003", customerName: "Dewi Lestari", serviceName: "Kilat (Express)", status: "diterima", paymentStatus: "belum_bayar", weightKg: 0, total: 0, estimatedDone: "Menunggu konfirmasi" },
  { code: "LDR-9004", customerName: "Fajar Ramadhan", serviceName: "Setrika Saja", status: "selesai", paymentStatus: "lunas", weightKg: 2.5, total: 10000, estimatedDone: "4 Nov 2026" },
  { code: "LDR-9005", customerName: "Maya Sari", serviceName: "Cuci + Setrika", status: "menunggu", paymentStatus: "belum_bayar", weightKg: 0, total: 0, estimatedDone: "Menunggu konfirmasi" },
  { code: "LDR-9006", customerName: "Andi Saputra", serviceName: "Cuci Kering", status: "disetrika", paymentStatus: "belum_bayar", weightKg: 5, total: 25000, estimatedDone: "6 Nov 2026" },
  { code: "LDR-9007", customerName: "Sinta Maharani", serviceName: "Cuci Satuan · Kaos (2 item)", status: "diterima", paymentStatus: "belum_bayar", weightKg: 0, total: 10000, estimatedDone: "Menunggu konfirmasi" },
  { code: "LDR-9008", customerName: "Bima Pratama", serviceName: "Cuci Satuan · Kemeja (1 item)", status: "siap_diambil", paymentStatus: "lunas", weightKg: 0, total: 8000, estimatedDone: "6 Nov 2026" },
  { code: "LDR-9009", customerName: "Putri Aulia", serviceName: "Cuci + Setrika", status: "selesai", paymentStatus: "lunas", weightKg: 3, total: 21000, estimatedDone: "4 Nov 2026" },
  { code: "LDR-9010", customerName: "Dito Santoso", serviceName: "Kilat (Express)", status: "dicuci", paymentStatus: "belum_bayar", weightKg: 1.5, total: 18000, estimatedDone: "5 Nov 2026" },
];
