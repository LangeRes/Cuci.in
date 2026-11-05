import Link from "next/link";
import { ArrowRight, Clock3, PackageCheck, Wallet } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { DashboardOrdersTable } from "@/components/dashboard/DashboardOrdersTable";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatRupiah } from "@/lib/utils/format";
import { dashboardOrders, statusLabels } from "@/lib/mock-data/dashboard";

const stats = [
  { label: "Pesanan aktif", value: "2", icon: PackageCheck, note: "Sedang diproses" },
  { label: "Menunggu diambil", value: "1", icon: Clock3, note: "Siap diambil" },
  { label: "Total transaksi", value: formatRupiah(56500), icon: Wallet, note: "Dari data contoh" },
];

export default function CustomerDashboardPage() {
  const latest = dashboardOrders[0];
  return <DashboardShell role="pelanggan">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3"><div><p className="text-sm font-semibold text-brand-600">Halo, Nadia 👋</p><h1 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">Ringkasan pesanan</h1><p className="mt-1 text-sm text-muted">Pantau laundry dan tagihan Anda di satu tempat.</p></div><Link href="/pesan" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-bold text-white hover:bg-brand-600">Buat pesanan <ArrowRight size={16} /></Link></div>
    <div className="grid gap-4 sm:grid-cols-3">{stats.map(({ label, value, icon: Icon, note }) => <Card key={label} className="p-5"><div className="flex items-start justify-between"><div><p className="text-sm text-muted">{label}</p><p className="mt-2 text-2xl font-extrabold text-ink">{value}</p><p className="mt-1 text-xs text-muted">{note}</p></div><span className="rounded-xl bg-brand-500/10 p-2.5 text-brand-700"><Icon size={20} /></span></div></Card>)}</div>
    <Card className="mt-6 p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-brand-600">Pesanan terbaru</p><h2 className="mt-1 text-lg font-bold text-ink">{latest.code}</h2><p className="text-sm text-muted">{latest.service} · {latest.createdAt}</p></div><Badge tone="info">{statusLabels[latest.status]}</Badge></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-soft"><div className="h-full w-2/3 rounded-full bg-brand-500" /></div><p className="mt-2 text-xs text-muted">Progres pesanan · estimasi selesai menyesuaikan antrean</p></Card>
    <section className="mt-8"><div className="mb-4"><h2 className="text-xl font-bold text-ink">Riwayat pesanan</h2><p className="mt-1 text-sm text-muted">Cari dan filter pesanan Anda.</p></div><DashboardOrdersTable customerOnly /></section>
  </DashboardShell>;
}
