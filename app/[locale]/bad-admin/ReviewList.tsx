'use client'

import { deleteReview } from '@/lib/actions/admin';
import type { TRewiew } from '@/lib/db/types';
import { Trash2 } from 'lucide-react';

interface Props {
    reviews: TRewiew[]
}

export function ReviewList({reviews}: Props) {
    const handleDelete = async (id: string) => {
        if (confirm('Удалить отзыв')) {
            await deleteReview(id)
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
                Список отзывов ({reviews.length})
            </h2>

            <div className="space-y-2">
                {reviews.length === 0 ? (
                    <p className="text-gray-500">Отзывов пока нет</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="flex items-start justify-between p-3 border rounded hover:bg-gray-50">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold">Product ID: {review.productId}</span>
                                    <span className="text-yellow-400 text-sm">
                                        {"★".repeat(Math.round(review.rating))}
                                        {"☆".repeat(5 - Math.round(review.rating))}
                                    </span>
                                    <span className='text-gray-400'>({review.rating})</span>
                                </div>
                                <p className="text-sm text-gray-600">User: {review.userId}</p>
                                {review.comment && <p className="text-sm mt-1">{review.comment}</p>}
                            </div>

                            <button 
                                onClick={() => handleDelete(review.id)}
                                className='text-red-600 hover:text-red-800 p-2'
                            >
                                <Trash2 size={20}/>
                            </button>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}