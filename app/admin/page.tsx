import { Banknote, ClipboardList, Users, WashingMachine } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { DashboardOrdersTable } from "@/components/dashboard/DashboardOrdersTable";
import { Card } from "@/components/ui/Card";
import { formatRupiah } from "@/lib/utils/format";

const stats = [
  { label: "Pendapatan", value: formatRupiah(2450000), note: "Bulan ini", icon: Banknote },
  { label: "Total pesanan", value: "128", note: "Semua status", icon: ClipboardList },
  { label: "Pelanggan", value: "86", note: "Akun terdaftar", icon: Users },
  { label: "Layanan aktif", value: "4", note: "Tersedia untuk dipesan", icon: WashingMachine },
];

export default function AdminDashboardPage() {
  return <DashboardShell role="admin">
    <div className="mb-6"><p className="text-sm font-semibold text-brand-600">Panel pengelolaan</p><h1 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">Ringkasan bisnis</h1><p className="mt-1 text-sm text-muted">Pantau transaksi, layanan, dan aktivitas laundry.</p></div>
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ label, value, note, icon: Icon }) => <Card key={label} className="p-5"><div className="flex items-start justify-between"><div><p className="text-sm text-muted">{label}</p><p className="mt-2 text-2xl font-extrabold text-ink">{value}</p><p className="mt-1 text-xs text-muted">{note}</p></div><span className="rounded-xl bg-brand-500/10 p-2.5 text-brand-700"><Icon size={20} /></span></div></Card>)}</div>
    <section className="mt-8"><div className="mb-4"><h2 className="text-xl font-bold text-ink">Transaksi terbaru</h2><p className="mt-1 text-sm text-muted">Cari, filter berdasarkan status, dan telusuri daftar transaksi.</p></div><DashboardOrdersTable /></section>
    <section className="mt-8 grid gap-4 md:grid-cols-2"><Card><h2 className="font-bold text-ink">Layanan</h2><p className="mt-1 text-sm text-muted">Pengelolaan tarif dan layanan akan tersedia setelah integrasi database.</p><div className="mt-4 flex flex-wrap gap-2">{["Cuci Kering", "Setrika Saja", "Cuci + Setrika", "Kilat Express"].map((item) => <span key={item} className="rounded-full bg-soft/60 px-3 py-1.5 text-xs font-semibold text-brand-700">{item}</span>)}</div></Card><Card><h2 className="font-bold text-ink">Akses pengguna</h2><p className="mt-1 text-sm text-muted">Kelola akun pelanggan dan petugas melalui Supabase setelah autentikasi dikonfigurasi.</p><p className="mt-4 text-sm font-semibold text-brand-700">86 pelanggan · 4 petugas (data contoh)</p></Card></section>
  </DashboardShell>;
}
