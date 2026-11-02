import { CalendlyCarousel, type CarouselItem } from "@/components/ui/connected-carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

const customerStories: CarouselItem[] = [
  {
    id: "review-1",
    stat: "Cucian kembali bersih dan wangi",
    quote: "Pesan jemputnya gampang. Hasil cuciannya bersih, wanginya juga enak dan tahan lama.",
    author: "Nadia Putri",
    role: "Cuci + Setrika",
    defaultImage: "https://images.unsplash.com/photo-1569925444984-9e2e5fc3d1fb?auto=format&fit=crop&w=1200&q=88",
    selectedImage: "https://images.unsplash.com/photo-1776356829215-37929a717f0d?auto=format&fit=crop&w=1800&q=88",
    alt: "Potret Nadia Putri",
    sceneAlt: "Ruang laundry bersih dengan deretan mesin cuci",
  },
  {
    id: "review-2",
    stat: "Jemput dan antar sesuai jadwal",
    quote: "Suka karena nggak perlu keluar rumah. Kurirnya datang sesuai waktu yang dipilih.",
    author: "Rizky Pratama",
    role: "Cuci Kering",
    defaultImage: "https://images.unsplash.com/photo-1534399315465-2b91232de345?auto=format&fit=crop&w=1200&q=88",
    selectedImage: "https://images.unsplash.com/photo-1775386575603-cfade9ec478b?auto=format&fit=crop&w=1800&q=88",
    alt: "Potret Rizky Pratama",
    sceneAlt: "Pelanggan di ruang laundry modern",
  },
  {
    id: "review-3",
    stat: "Pakaian rapi tanpa repot",
    quote: "Kemeja dan pakaian kantor jadi rapi. Tinggal ambil, semuanya sudah dilipat dengan baik.",
    author: "Dewi Lestari",
    role: "Setrika Saja",
    defaultImage: "https://images.unsplash.com/flagged/photo-1573582677725-863b570e3c00?auto=format&fit=crop&w=1200&q=88",
    selectedImage: "https://images.unsplash.com/photo-1749318475359-800b8318ee7f?auto=format&fit=crop&w=1800&q=88",
    alt: "Potret Dewi Lestari",
    sceneAlt: "Deretan mesin cuci di ruang laundry yang terang",
  },
  {
    id: "review-4",
    stat: "Layanan kilat sangat membantu",
    quote: "Butuh baju untuk acara mendadak dan selesai tepat waktu. Proses pesan juga jelas.",
    author: "Fajar Ramadhan",
    role: "Kilat Express",
    defaultImage: "https://images.unsplash.com/photo-1551847812-f815b31ae67c?auto=format&fit=crop&w=1200&q=88",
    selectedImage: "https://images.unsplash.com/photo-1757233285714-4de702bb8a56?auto=format&fit=crop&w=1800&q=88",
    alt: "Potret Fajar Ramadhan",
    sceneAlt: "Mesin cuci dan pengering di laundromat",
  },
  {
    id: "review-5",
    stat: "Selimut bersih dan lembut lagi",
    quote: "Selimut tebal saya dicuci bersih dan terasa lembut. Senang bisa pesan dari rumah.",
    author: "Maya Sari",
    role: "Cuci Satuan",
    defaultImage: "https://images.unsplash.com/photo-1533030861215-66387403772f?auto=format&fit=crop&w=1200&q=88",
    selectedImage: "https://cdn.uc.assets.prezly.com/7adcee31-0129-46a8-8d32-5ab226659b42/pexels-darya-sannikova-2927523.jpg",
    alt: "Potret Maya Sari",
    sceneAlt: "Tumpukan pakaian bersih yang sedang dirapikan di ruang laundry",
  },
];

export function CustomerReviews() {
  return (
    <section className="overflow-hidden bg-page px-4 py-14 sm:px-6 sm:py-18">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Cerita pelanggan"
          title="Laundry lebih ringan, hari lebih lega"
          subtitle="Pengalaman yang bikin urusan cucian terasa lebih sederhana."
        />
        <CalendlyCarousel items={customerStories} autoPlayInterval={6500} pauseOnHover={false} className="mx-auto max-w-[1080px]" />
      </div>
    </section>
  );
}
