import Image from 'next/image'
import { useMemo } from "react"

import { Dot, Heart, MessageCircle, Star } from "lucide-react"

import { TProduct } from "@/lib/db/types"
import { addCurrency } from '@/utils/add-currency'

interface Props {
    product: TProduct
    reviewAverage?: number
    reviewCount?: number
}

export function ProductItem({product, reviewAverage, reviewCount}: Props) {

    const discountPercent = useMemo(() => {
        if (!product.discountPrice) return null
        return Math.round(
            ((product.price - product.discountPrice) / product.price) * 100
        )
    }, [product.price, product.discountPrice])

    return (
        <div>
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

            <div>
                <span>{addCurrency(product.price)}</span>

                {product.discountPrice && (
                    <span>{addCurrency(product.discountPrice)}</span>
                )}

                {discountPercent && (
                    <span>-{discountPercent}%</span>
                )}
            </div>

            <div>
                {product.name}
            </div>  

            <div className='flex items-center gap-3'>
                <div>
                    <Star className='fill-amber-400'/>
                    <span>{reviewAverage}</span>
                </div>

                <div>
                    <MessageCircle className='fill-stone-600'/>
                    <span>{reviewCount}</span>
                </div>
                
            </div> 

        </div>
    )
}