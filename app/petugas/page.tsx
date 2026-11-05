import { Clock3, PackageCheck, Shirt } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StaffQueue } from "@/components/dashboard/StaffQueue";
import { Card } from "@/components/ui/Card";

export default function StaffDashboardPage() {
  return <DashboardShell role="petugas">
    <div className="mb-6"><p className="text-sm font-semibold text-brand-600">Operasional laundry</p><h1 className="mt-1 text-2xl font-extrabold text-ink sm:text-3xl">Antrean pengerjaan</h1><p className="mt-1 text-sm text-muted">Periksa cucian masuk, masukkan berat, dan perbarui progres.</p></div>
    <div className="mb-6 grid gap-4 sm:grid-cols-3"><Card className="flex items-center gap-3 p-5"><span className="rounded-xl bg-amber-100 p-3 text-amber-700"><Clock3 size={20} /></span><div><p className="text-sm text-muted">Menunggu</p><p className="text-2xl font-extrabold text-ink">2</p></div></Card><Card className="flex items-center gap-3 p-5"><span className="rounded-xl bg-brand-500/10 p-3 text-brand-700"><Shirt size={20} /></span><div><p className="text-sm text-muted">Dalam proses</p><p className="text-2xl font-extrabold text-ink">3</p></div></Card><Card className="flex items-center gap-3 p-5"><span className="rounded-xl bg-emerald-100 p-3 text-emerald-700"><PackageCheck size={20} /></span><div><p className="text-sm text-muted">Siap diserahkan</p><p className="text-2xl font-extrabold text-ink">1</p></div></Card></div>
    <StaffQueue />
  </DashboardShell>;
}
