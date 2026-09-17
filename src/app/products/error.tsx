"use client"

export default function ProductError({retry} : {retry: () => void}){
    return(
        <section role="alert" className="panel space-y-4">
            <h1>Produk tidak ditemukan</h1>
            <p>ID produk tidak valid atau produk tersebut tidak tersedia</p>
            <button type="button" className="button" onClick={() => retry()}>Coba lagi</button>
        </section>
    )
}