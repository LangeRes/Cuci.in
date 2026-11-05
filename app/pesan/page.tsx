import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackToHome } from "@/components/layout/BackToHome";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingForm } from "@/components/booking/BookingForm";

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ layanan?: string }> }) {
  const { layanan } = await searchParams;
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-soft/40 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <BackToHome />
          <SectionHeading eyebrow="Pemesanan" title="Atur laundry dari rumah" subtitle="Pilih layanan, isi alamat jemput, dan temukan laundry terdekat dari lokasi Anda." />
          <BookingForm initialServiceId={layanan} />
        </div>
      </main>
      <Footer />
    </>
  );
}
