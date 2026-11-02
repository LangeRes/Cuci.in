// Tipe data SEMENTARA untuk frontend.
// Nanti sesuaikan dengan database.types.ts dari Anggota 1/2.

export type OrderStatus =
  | "menunggu"
  | "diterima"
  | "dicuci"
  | "disetrika"
  | "siap_diambil"
  | "selesai";

export type PaymentStatus = "belum_bayar" | "lunas";

export interface LaundryService {
  id: string;
  name: string;
  description: string;
  pricePerKg: number;
  estimateDays: number;
  icon: "wash" | "iron" | "full" | "express";
}

export interface OperatingHour {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface OrderTracking {
  code: string;
  customerName: string;
  serviceName: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  weightKg: number;
  total: number;
  estimatedDone: string;
}
