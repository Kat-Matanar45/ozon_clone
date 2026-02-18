import Image from 'next/image'
import { useMemo } from "react"

import { Heart, MessageCircle, Star } from "lucide-react"

import { TProduct } from "@/lib/db/types"
import { addCurrency } from '@/utils/add-currency'
import { cn } from '@/utils/cn'

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
                    height={373}
                    alt={product.name}
                    src={product.image}
                    draggable={false}
                    className='object-cover h-93.25 rounded-2xl'
                />

                <button className="absolute top-2 right-2">
                    <Heart fill='white'/>
                </button>

                {discountPercent && discountPercent > 50 && (
                    <div className="rounded-lg bg-black absolute left-2 bottom-2 px-2 py-0.5 gap-1.5 flex items-center text-white text-sm font-medium">
                        <div className='w-2 h-2 bg-pink-700 rounded-full'/>
                        <span>Вау-цены</span>
                    </div>
                )}

            </div>

            <div className='mt-2 flex items-center'>
                <span className={cn('text-lg font-bold', {
                    'text-pink-600': product.discountPrice
                })}>{addCurrency(product.price)}</span>

                {product.discountPrice && (
                    <span className='line-through ml-2 opacity-50 font-bold text-sm'>{addCurrency(product.discountPrice)}</span>
                )}

                {discountPercent && (
                    <span className='text-pink-600 font-bold text-sm ml-2'>-{discountPercent}%</span>
                )}
            </div>

            <div className='leading-snug'>
                {product.name}
            </div>  

            <div className='flex items-center gap-3 mt-2'>
                <div>
                    <Star size={16} className='fill-amber-400 stroke-amber-400'/>
                    <span>{reviewAverage}</span>
                </div>

                <div>
                    <MessageCircle size={16} className='fill-neutral-400 stroke-stone-500'/>
                    <span>{reviewCount}</span>
                </div>
                
            </div> 

        </div>
    )
}