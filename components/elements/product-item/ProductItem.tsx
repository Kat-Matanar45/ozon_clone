import Image from 'next/image'
import { useMemo } from "react"

import { Dot, Heart } from "lucide-react"

import { TProduct } from "@/lib/db/types"

interface Props {
    product: TProduct
}

export function ProductItem({product}: Props) {

    const discountPercent = useMemo(() => {
        if (!product.discountPrice) return null
        return Math.round(
            ((product.price - product.discountPrice) / product.price) * 100
        )
    }, [product.price, product.discountPrice])

    return (
        <div className="relative">
            <Image
                width={280}
                height={180}
                alt={product.name}
                src={product.image}
                draggable={false}
            />

            <button className="absolute top-2 right-2">
                <Heart fill='white'/>
            </button>

            {discountPercent && discountPercent > 50 && (
                <div className="rounded-lg bg-black absolute left-2 bottom-2 px-1 flex items-center gap-1">
                    <Dot size={30} className="stroke-pink-600"/>
                    Вау-цены
                </div>
            )}

        </div>
    )
}