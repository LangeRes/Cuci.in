import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BackToHome } from "@/components/layout/BackToHome";
import { OrderStatusForm } from "@/components/landing/OrderStatusForm";

export default async function OrderStatusPage({ searchParams }: { searchParams: Promise<{ kode?: string }> }) {
  const { kode } = await searchParams;
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-soft/40">
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <BackToHome />
        </div>
        <OrderStatusForm initialCode={kode} />
      </main>
      <Footer />
    </>
  );
}
