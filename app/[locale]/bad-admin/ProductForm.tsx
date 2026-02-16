'use client'

import { createReview } from "@/lib/actions/admin";
import { TProduct } from "@/lib/db/types";
import { useRef, useState } from 'react'

interface Props {
    product: TProduct[]
}

export function ProductForm({product}: Props) {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true)
        await createReview(formData)
        formRef.current?.reset()
        setLoading(false)
        alert('Товар добавлен')
    }

    return (
        <form
            ref={formRef}
            action={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-4">Добавить отзыв</h2>

            <div>
                <label className="block text-sm font-medium mb-4">Название</label>
                <input 
                    type="text" 
                    name='nameProduct'
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-4">Описание</label>
                <textarea 
                    name='description'
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-center gap-5">
                <div>
                    <label className="block text-sm font-medium mb-4">Цена</label>
                    <input 
                        type="number" 
                        name='price'
                        required
                        min={0}
                        step='0.1'
                        className="w-85 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-4">Цена со скидкой</label>
                    <input 
                        type="number" 
                        name='price'
                        required
                        min={0}
                        step='0.1'
                        className="w-85 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-4">URL картинки</label>
                <input 
                    type="url" 
                    name='image'
                    required
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type='submit'
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Добавление...' : 'Добавить товар'}
            </button>
        </form>
    )
}