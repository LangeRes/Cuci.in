# Frontend Laundry — Minggu 1 (Landing Page)

Berisi frontend Next.js dan integrasi pemesanan/tracking melalui API server Supabase.
Tidak ada inisialisasi ulang proyek.

## 1. Cek versi Tailwind
Buka `package.json` proyek Anda, lihat `"tailwindcss"`:
- `^4.x` -> pakai `styles/theme-tailwind-v4.css`
- `^3.x` -> pakai `styles/theme-tailwind-v3.ts`

## 2. Pasang dependensi
```bash
npm install
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
- Halaman pemesanan membaca katalog aktif dan menyimpan pesanan ke Supabase melalui API server.
- Halaman `/cek-status` mencari pesanan Supabase dengan kode tracking dan hanya menampilkan status, layanan, serta estimasi.
- Pencarian laundry sekitar memakai izin lokasi browser dan data OpenStreetMap.

## Supabase
1. Install dependency dengan `npm install` agar versi yang terkunci di `package-lock.json` dipakai.
2. Salin `.env.example` menjadi `.env.local`, lalu isi `SUPABASE_URL` dan `SUPABASE_SECRET_KEY` dari pengaturan API proyek Supabase.
3. Pastikan tabel `services` dan `laundry_items` berisi data aktif. Katalog halaman pemesanan bersumber dari dua tabel tersebut.
4. Jalankan `npm run dev`, lalu uji pemesanan kiloan, cuci satuan, dan pelacakan kode dari browser.

Secret key hanya dipakai di API server dan tidak boleh dipindahkan ke variabel `NEXT_PUBLIC_*` atau kode browser. Kode pesanan baru memakai format `LDR-XXXX-XXXX`; kode panjang lama tetap dapat dilacak. Endpoint tracking membatasi data yang ditampilkan dan menerapkan batas 20 percobaan per 15 menit per IP pada tiap instance aplikasi. Karena limiter ini tidak berbagi state antar-instance dan dapat direset saat server restart, production multi-instance tetap perlu rate limit terpusat di WAF/platform atau shared store. Dashboard staf belum terhubung karena halaman tersebut belum memiliki autentikasi dan otorisasi staf.

## Penjelasan file
| File | Fungsi |
|---|---|
| `components/ui/*` | Button, Card, Badge, SectionHeading yang dipakai ulang |
| `components/layout/Navbar.tsx` | Navbar responsif + menu mobile |
| `components/layout/Footer.tsx` | Footer |
| `components/landing/*` | Section Landing Page |
| `components/booking/*` | Form pemesanan dan pencarian laundry sekitar |
| `lib/mock-data/landing.ts` | Jam operasional dan panduan pemesanan statis |
| `app/api/*` | API server untuk katalog, pembuatan pesanan, dan pelacakan Supabase |
| `lib/supabase/admin.ts` | Klien Supabase server-only |
| `types/database.types.ts` | Tipe tabel dan enum Supabase yang digunakan aplikasi |
| `lib/services/orders.ts` | Klien API pelacakan pesanan |
| `types/index.ts` | Tipe frontend |

## Catatan
- Pesanan `localStorage` lama tidak otomatis dipindahkan ke Supabase.
- Hasil laundry terdekat mengikuti kelengkapan data OpenStreetMap di sekitar lokasi.
