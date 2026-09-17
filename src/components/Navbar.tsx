import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav aria-label="Navigasi utama" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-xl font-bold text-teal-800">Mini Store<span className="text-slate-400">.</span></Link>
        <div className="flex flex-wrap gap-5 text-base font-semibold">
          <Link href="/">Beranda</Link>
          <Link href="/products">Produk</Link>
          <Link href="/about">Tentang</Link>
        </div>
      </nav>
    </header>
  );
}
