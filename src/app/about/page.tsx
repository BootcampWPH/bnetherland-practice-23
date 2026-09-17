import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Tentang latihan' };

export default function AboutPage() {
  return (
    <section className="panel max-w-3xl space-y-5">
      <p className="eyebrow">Belajar sambil membangun</p>
      <h1>Tentang Mini Store</h1>
      <p>
        Mini Store adalah project latihan Meet 23 — Next.js Fundamentals dengan topik Next.js App
        Router basics and routing.
      </p>
      <p>Mentor: Henry Rivardo - Software engineer.</p>
      <p>
        Data dan gambar berasal dari Fake Store API. Nama, kategori, dan deskripsi produk mengikuti
        bahasa asli API. Harga ditampilkan dalam USD tanpa konversi mata uang.
      </p>
      <p>
        Tombol favorit hanya menyimpan state lokal di component. Status tidak dikirim ke server dan
        dapat hilang ketika component di-unmount atau halaman di-refresh.
      </p>
      <Link href="/products" className="text-link">
        Mulai dari katalog →
      </Link>
    </section>
  );
}
