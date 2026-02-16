'use client'

import { deleteProduct } from '@/lib/actions/admin';
import { product } from '@/lib/db/schema';
import { TProduct } from '@/lib/db/types';
import { Trash2 } from 'lucide-react';

interface Props {
    products: TProduct[];
}

export function ProductList({products}: Props) {
    const handleDelete = async (id: string) => {
        if (confirm('Удалить товар')) {
            await deleteProduct(id)
        }
    };

    return (
        <div className='bg-white p-6 rounded-lg shadow'>
            <h2 className='text-2xl font-bold mb-4'>
                Список товаров ({products.length})
            </h2>

            <div className='space-y-2'>
                {products.length === 0 ? (
                    <p className="text-gray-500">Товаров пока нет</p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className='flex items-center justify-between p-3 border rounded hover:bg-gray-50'>
                            <div className='flex items-center gap-4'>
                                <img src={product.image} alt={product.name} className='w-16 h-16 object-cover rounded'/>
                                <div>
                                    <h3 className='font-semibold'>{product.name}</h3>
                                    <p className='text-sm text-gray-600'>
                                        {product.discountPrice ? (
                                            <>
                                                <span className='line-through text-gray-400'>{product.price} P</span>
                                            </>
                                        ) : (
                                            <span>{product.price} P</span>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleDelete(product.id)}
                                className='text-red-600 hover:text-red-800 p-2'
                            >
                                <Trash2 size={20}/>
                            </button>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    )
}