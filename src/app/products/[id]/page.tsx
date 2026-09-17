import FavoriteButton from "@/components/FavoriteButton";
import { getProduct } from "@/lib/product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {params:Promise<{id:string}>}


export async function generateMetaData({params}:ProductPageProps):Promise<Metadata> {
    const {id} =  await params;
    const product = await getProduct(id)
    if(!product) notFound()

    return {title: product.title, description:product.description}
}

export default async function ProductPage({params}:ProductPageProps ){
    const {id} =  await params;
    const product = await getProduct(id)
    if(!product) notFound()


        return (
            <article className="space-y-6">
                <Link href='/products'>Kembali ke daftar produk</Link>
                <div>
                <Image sizes="(max-width: 768px) 100vw, 50vw" width={500} height={500} className="h-80 w-full object-contain" alt={`Foto ${product.title}`} src={product.image || '/product-placeholder.svg'}/>

                <div>
                    <p className="space-y-5">{product.category}</p>
                    <h1 className="text-3xl">{product.title}</h1>
                    <p className="font-semibold text-2xl text-green-500">{product.price.toFixed(2)}</p>
                    <p className="text-slate-600">{product.description}</p>

                    <FavoriteButton key={product.id}/>
                </div>
                </div>
            </article>
        )
    
}