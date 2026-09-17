import ProductCard from "@/components/ProductCard"
import { getProducts } from "@/lib/product"

export default async function ProductPage() {

    const products = await getProducts()
    return(
        <section className="space-y-6">
            <div className="space-y-2">
                <h1>Halaman Product</h1>
                <p>Pilih produk untuk kamu beli</p>
            </div>

            {products.length === 0 ? (
                <p>Belum ada produk di katalog</p>
            ): (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {products.map((product) => <ProductCard key={product.id} product={product}/>)}
                </div>
            )}
        </section>
    )
}