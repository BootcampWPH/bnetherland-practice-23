import { Product } from "@/types/product";



const API_URL = 'https://fakestoreapi.com/'

export async function getProducts():Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`, {cache:'no-store'})

    if(!response.ok){
        throw new Error(`Gagal mengambil daftar produk (HTPP ${response.status})`)
    }

    const products: Product[] = await response.json()

    if(!Array.isArray(products)){
        throw new Error("Format daftar produk dari API tidak sesuai")
    }

    return products
}


export async function getProduct(id:string):Promise<Product | null> {
    const response = await fetch(`${API_URL}/products/${id}`, {cache:'no-store'});

    if(response.status === 404) return null;

    if(!response.ok){
        throw new Error(`Gagal mengambil daftar produk (HTPP ${response.status})`)
    }

    const body = await response.text()
    if(body.trim() === "") return null

    const product: Product | null = JSON.parse(body)

    if(product === null) return null

    if(typeof product !== 'object' || product.id !== Number(id)){
        throw new Error("Format detail produk dari API tidak sesuai")
    }

    return product
}