import { SectionHeading } from "@/components/ui/SectionHeading";
import { orderSteps } from "@/lib/mock-data/landing";

export function HowItWorks() {
  return (
    <section id="panduan" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Panduan Pemesanan"
        title="Pesan laundry dalam 4 langkah"
      />
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {orderSteps.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl border border-soft bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-muted">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
