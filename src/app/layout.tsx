import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: { default: "Mini Store | Meet 23", template: "%s | Mini Store" },
  description: "Belajar Next.js App Router melalui toko sederhana bersama Henry Rivardo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only">Lewati navigasi</a>
        <Navbar/>
        <main id="main-content" className="mx-auto min-h-[80vh] max-w-6xl px-6 py-10">
          {children}
        </main>
        <footer className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-600">
          Meet 23 · Henry Rivardo - Software engineer
        </footer>
      </body>
    </html>
  );
}
