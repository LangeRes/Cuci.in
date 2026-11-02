"use client"; // butuh state (buka/tutup menu mobile), jadi Client Component

import { useState } from "react";
import Link from "next/link";
import { Menu, Shirt, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/#layanan", label: "Layanan" },
  { href: "/#tarif", label: "Tarif" },
  { href: "/#panduan", label: "Panduan" },
  { href: "/cek-status", label: "Cek Status" },
  { href: "/#jam-operasional", label: "Jam Operasional" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-page/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-600">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
            <Shirt size={20} />
          </span>
          <span className="text-lg">Cuci.in</span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/cek-status" variant="outline">Lacak Pesanan</Button>
          <Button href="/pesan">Pesan</Button>
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-brand-600 hover:bg-soft md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-soft bg-page px-4 pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <Button href="/cek-status" variant="outline">Lacak Pesanan</Button>
            <Button href="/pesan">Pesan</Button>
          </div>
        </div>
      )}
    </header>
  );
}
