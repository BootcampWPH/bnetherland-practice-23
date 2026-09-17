import Link from "next/link";

export default function ProductNotFound(){
    return(
        <section className="panel space-y-4">
            <h1>Produk tidak ditemukan</h1>
            <p>ID produk tidak valid atau produk tersebut tidak tersedia</p>
            <Link href='/products'>Kembali ke katalog</Link>
        </section>
    )
}