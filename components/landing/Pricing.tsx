import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductRailGallery } from "@/components/ui/product-rail-gallery";
import { services } from "@/lib/mock-data/landing";
import { formatRupiah } from "@/lib/utils/format";

// Menampilkan tarif per kg + estimasi pengerjaan.
export function Pricing() {
  return (
    <section id="tarif" className="scroll-mt-20 bg-soft/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tarif & Estimasi"
          title="Harga jelas, tanpa biaya tersembunyi"
          subtitle="Tarif dihitung per kilogram setelah cucian ditimbang petugas."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.id} className="flex flex-col">
              <h3 className="font-semibold text-ink">{s.name}</h3>
              <p className="mt-4 text-3xl font-bold text-brand-600">
                {formatRupiah(s.pricePerKg)}
                <span className="text-sm font-medium text-muted"> /kg</span>
              </p>
              <div className="mt-4">
                <Badge>
                  <Clock size={12} className="mr-1" />
                  {s.estimateDays === 1 ? "1 hari" : `${s.estimateDays} hari`}
                </Badge>
              </div>
              <div className="mt-6 pt-2">
                <Button href={`/pesan?layanan=${s.id}`} variant="secondary" className="w-full">
                  Pesan Layanan
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-14">
          <SectionHeading
            eyebrow="Cuci Satuan Interaktif"
            title="Koleksi Layanan Cuci Satuan Premium"
            subtitle="Pakaian digantung menyamping pada rail. Arahkan kursor atau sentuh untuk melihat pakaian menghadap ke Anda, dan klik untuk melihat detail serta tampak belakang."
          />
          <ProductRailGallery />
        </div>
      </div>
    </section>
  );
}
