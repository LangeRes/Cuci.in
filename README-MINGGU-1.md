# Frontend Laundry — Minggu 1 (Landing Page)

Berisi file untuk DISALIN ke proyek Next.js Anda yang sudah ada.
Tidak ada inisialisasi ulang proyek. Tidak ada kode backend (hanya data dummy).

## 1. Cek versi Tailwind
Buka `package.json` proyek Anda, lihat `"tailwindcss"`:
- `^4.x` -> pakai `styles/theme-tailwind-v4.css`
- `^3.x` -> pakai `styles/theme-tailwind-v3.ts`

## 2. Pasang dependensi
```bash
npm install lucide-react
```

## 3. Salin file
Salin folder berikut ke proyek (jika ada file dengan nama sama, bandingkan dulu, jangan langsung timpa):
- `app/layout.tsx` dan `app/page.tsx`
- `components/` (ui, layout, landing)
- `lib/` (utils, mock-data, services)
- `types/index.ts`

## 4. Pasang tema warna
- Tailwind v4: tempel isi `styles/theme-tailwind-v4.css` ke `app/globals.css`, di bawah `@import "tailwindcss";`
- Tailwind v3: gabungkan bagian `theme.extend.colors` dari `styles/theme-tailwind-v3.ts` ke `tailwind.config.ts`, dan tambahkan style `body` seperti di komentar file tersebut.

## 5. Cek alias `@/`
Di `tsconfig.json` harus ada:
```json
"paths": { "@/*": ["./*"] }
```
(Jika proyek memakai folder `src/`, ubah menjadi `["./src/*"]` dan salin semua folder ke dalam `src/`.)

## 6. Jalankan
```bash
npm run dev
```
Buka http://localhost:3000

## 7. Halaman interaktif
- Pilih kartu layanan atau tombol pesan untuk membuka `/pesan`.
- Halaman pemesanan menyimpan contoh pesanan di browser ini dan memberi kode pelacakan.
- Halaman `/cek-status` menerima kode pesanan dan menampilkan pesanan contoh atau pesanan lokal.
- Pencarian laundry sekitar memakai izin lokasi browser dan data OpenStreetMap.

## Penjelasan file
| File | Fungsi |
|---|---|
| `components/ui/*` | Button, Card, Badge, SectionHeading yang dipakai ulang |
| `components/layout/Navbar.tsx` | Navbar responsif + menu mobile |
| `components/layout/Footer.tsx` | Footer |
| `components/landing/*` | Section Landing Page |
| `components/booking/*` | Form pemesanan dan pencarian laundry sekitar |
| `lib/mock-data/landing.ts` | Data dummy layanan, jam, pesanan |
| `lib/services/orders.ts` | Fungsi mock `getOrderByCode`, nanti diganti API Anggota 2 |
| `types/index.ts` | Tipe sementara, nanti disesuaikan `database.types.ts` |

## Catatan
- Contoh pesanan disimpan di browser dan belum terhubung ke backend laundry.
- Hasil laundry terdekat mengikuti kelengkapan data OpenStreetMap di sekitar lokasi.
