"use client"

import { useState } from "react"


export default function FavoriteButton(){

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="space-y-3">
            <button type="button" aria-pressed={isFavorite} onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? "Favorit" : "Tambah favorit"}</button>
            <p className="text-sm text-slate-600">Favorit hanya tersimpan sementara di component ini, bukan di server</p>
        </div>
    )
}