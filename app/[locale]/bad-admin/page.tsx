import type { Metadata } from "next";

import { ProductForm } from './ProductForm';
import { ReviewForm } from './ReviewForm';
import { ProductList } from './ProductList';
import { ReviewList } from './ReviewList';
import { getAllProducts, getAllReviews } from '@/lib/actions/admin'

export const metadata: Metadata = {
  title: "Bad Admin Page",
};

export default async function Page() {
    const products = await getAllProducts();
    const reviews = await getAllReviews();

  return (
    <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8">
            <h1 className='text-4xl font-bold mb-8 text-center'>
                Bad Admin Panel
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <ProductForm/>
                <ReviewForm product={products}/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProductList products={products}/>
                <ReviewList reviews={reviews}/>
            </div>
        </div>
    </div>
  );
}
