// DATA DUMMY untuk Landing Page. Pisah dari komponen supaya mudah diganti data Supabase.
import type { LaundryService, OperatingHour } from "@/types";

export const services: LaundryService[] = [
  {
    id: "svc-1",
    name: "Cuci Kering",
    description: "Cuci bersih dan dikeringkan, siap disetrika sendiri.",
    pricePerKg: 5000,
    estimateDays: 2,
    icon: "wash",
  },
  {
    id: "svc-2",
    name: "Setrika Saja",
    description: "Pakaian bersih Anda dirapikan dengan setrika uap.",
    pricePerKg: 4000,
    estimateDays: 1,
    icon: "iron",
  },
  {
    id: "svc-3",
    name: "Cuci + Setrika",
    description: "Paket lengkap: dicuci, dikeringkan, disetrika, dan dilipat.",
    pricePerKg: 7000,
    estimateDays: 3,
    icon: "full",
  },
  {
    id: "svc-4",
    name: "Kilat (Express)",
    description: "Layanan prioritas, selesai di hari yang sama.",
    pricePerKg: 12000,
    estimateDays: 1,
    icon: "express",
  },
];

export const operatingHours: OperatingHour[] = [
  { day: "Senin - Jumat", open: "07.00", close: "20.00" },
  { day: "Sabtu", open: "08.00", close: "18.00" },
  { day: "Minggu", open: "-", close: "-", closed: true },
];

export const orderSteps = [
  { title: "Pilih layanan", desc: "Tentukan jenis perawatan yang Anda butuhkan." },
  { title: "Atur penjemputan", desc: "Masukkan alamat dan kontak yang bisa dihubungi." },
  { title: "Pantau Status", desc: "Lihat progres cucian dari dashboard." },
  { title: "Bayar & Ambil", desc: "Lunasi tagihan, lalu ambil cucian Anda." },
];

