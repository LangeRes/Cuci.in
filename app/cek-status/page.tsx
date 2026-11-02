import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { OrderStatusForm } from "@/components/landing/OrderStatusForm";

export default async function OrderStatusPage({ searchParams }: { searchParams: Promise<{ kode?: string }> }) {
  const { kode } = await searchParams;
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] bg-soft/40">
        <OrderStatusForm initialCode={kode} />
      </main>
      <Footer />
    </>
  );
}
