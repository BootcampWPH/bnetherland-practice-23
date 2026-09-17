import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}: {product:Product}){
        return(
            <article>
                <Image sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" width={320} height={240} className="h-48 w-full object-contain" alt={`Foto ${product.title}`} src={product.image || '/product-placeholder.svg'}/>
                <h2 className="text-lg">{product.title}</h2>
                <p className="font-semibold text-green-500">{product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} className="text-link mt-auto" aria-label={`Lihat detail ${product.title}`}>Lihat detail</Link>
            </article>
        )
}