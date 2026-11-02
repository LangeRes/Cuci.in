"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, PackageCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { NearbyLaundryFinder } from "@/components/booking/NearbyLaundryFinder";
import { services } from "@/lib/mock-data/landing";
import { formatRupiah } from "@/lib/utils/format";
import type { OrderTracking } from "@/types";

const ORDERS_STORAGE_KEY = "laundryku.orders";

export function BookingForm({ initialServiceId }: { initialServiceId?: string }) {
  const [serviceId, setServiceId] = useState(services.some((service) => service.id === initialServiceId) ? initialServiceId! : services[0].id);
  const [orderCode, setOrderCode] = useState("");
  const selected = services.find((service) => service.id === serviceId) ?? services[0];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const customerName = String(data.get("name") ?? "").trim();
    const code = `LDR-${String(Date.now() % 10000).padStart(4, "0")}`;
    const done = new Date();
    done.setDate(done.getDate() + selected.estimateDays);
    const estimatedDone = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" }).format(done);
    const order: OrderTracking = {
      code,
      customerName,
      serviceName: selected.name,
      status: "menunggu",
      paymentStatus: "belum_bayar",
      weightKg: 0,
      total: 0,
      estimatedDone,
    };
    const existing: OrderTracking[] = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) ?? "[]");
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([order, ...existing.filter((item) => item.code !== code)]));
    setOrderCode(code);
  }

  if (orderCode) {
    return (
      <Card className="mx-auto max-w-2xl px-6 py-10 text-center sm:px-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 size={30} /></span>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-brand-600">Permintaan tersimpan</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Pesanan Anda siap dilacak</h1>
        <p className="mt-3 text-muted">Kode pesanan Anda:</p>
        <p className="mt-1 font-mono text-2xl font-bold text-brand-700">{orderCode}</p>
        <p className="mt-4 text-sm text-muted">Simpan kode ini untuk melihat perkembangan pesanan Anda.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href={`/cek-status?kode=${orderCode}`} className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600"><PackageCheck size={16} /> Lacak pesanan</Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-700 hover:bg-soft"><ArrowLeft size={16} /> Kembali ke beranda</Link>
        </div>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-6">
      <section>
        <h2 className="text-xl font-bold text-ink">1. Pilih layanan</h2>
        <p className="mt-1 text-sm text-muted">Pilih salah satu. Tarif akhir dihitung setelah cucian ditimbang.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setServiceId(service.id)}
              aria-pressed={service.id === serviceId}
              className={`rounded-2xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${service.id === serviceId ? "border-brand-500 bg-brand-50 ring-1 ring-brand-500" : "border-soft bg-white hover:border-brand-300"}`}
            >
              <span className="flex items-start justify-between gap-3">
                <span className="font-semibold text-ink">{service.name}</span>
                <span className="text-sm font-bold text-brand-700">{formatRupiah(service.pricePerKg)}/kg</span>
              </span>
              <span className="mt-2 block text-sm text-muted">{service.description}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted"><Clock size={13} /> Estimasi {service.estimateDays} hari</span>
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-soft bg-white p-5 sm:p-6">
        <h2 className="text-xl font-bold text-ink">2. Data penjemputan</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-ink">Nama lengkap
            <input name="name" required autoComplete="name" className="mt-1.5 w-full rounded-xl border border-brand-200 px-3.5 py-3 font-normal outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Nama Anda" />
          </label>
          <label className="text-sm font-medium text-ink">Nomor WhatsApp
            <input name="phone" required type="tel" autoComplete="tel" className="mt-1.5 w-full rounded-xl border border-brand-200 px-3.5 py-3 font-normal outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="08xxxxxxxxxx" />
          </label>
          <label className="text-sm font-medium text-ink sm:col-span-2">Alamat penjemputan
            <textarea name="address" required rows={3} autoComplete="street-address" className="mt-1.5 w-full resize-y rounded-xl border border-brand-200 px-3.5 py-3 font-normal outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" placeholder="Jalan, nomor rumah, kecamatan, dan patokan" />
          </label>
        </div>
      </section>

      <NearbyLaundryFinder />

      <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-muted">Layanan dipilih</p>
          <p className="font-semibold text-ink">{selected.name} · {formatRupiah(selected.pricePerKg)}/kg</p>
          <Badge><Clock size={12} className="mr-1" /> Estimasi {selected.estimateDays} hari</Badge>
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-600">
          <PackageCheck size={18} /> Buat pesanan
        </button>
      </Card>
    </form>
  );
}
