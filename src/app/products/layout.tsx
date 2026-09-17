import Link from 'next/link';
import { ReactNode } from 'react';

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-300 pb-5">
        <p className="eyebrow">Katalog Mini Store</p>
        <Link href="/products" className="text-link text-base">
          Semua produk
        </Link>
      </div>
      {children}
    </div>
  );
}
