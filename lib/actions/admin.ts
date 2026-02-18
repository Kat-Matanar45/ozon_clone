'use server'

import { db } from '@/lib/db';
import { product, review } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function createProduct(formData: FormData) {
    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const price = parseInt(formData.get('price') as string)
    const discountPrice = formData.get('discountPrice') ? parseInt(formData.get('discountPrice') as string) : null
    const image = formData.get('image') as string

    await db.insert(product).values({
        id: crypto.randomUUID(),
        name,
        description,
        price,
        discountPrice,
        image
    }) 

  revalidatePath('/admin')
  return {success: true}
}

export async function deleteProduct(id: string) {
    await db.delete(product).where(eq(product.id, id))
    revalidatePath('/admin')
    return {success: true}
}

export async function getAllProducts() {
    try {
        return await db.select().from(product)
    } catch (e) {
        console.log('Error fetching products:', e)
        throw e
    }
    
}

export async function createReview(formData: FormData) {
    const userId = formData.get('userId') as string
    const productId = formData.get('productId') as string
    const rating = parseInt(formData.get('rating') as string)
    const comment = formData.get('comment') as string | null

    await db.insert(review).values({
        id: crypto.randomUUID(),
        userId,
        productId,
        rating,
        comment
    }) 

    revalidatePath('/admin')
    return {success: true}
}

export async function deleteReview(id: string) {
    await db.delete(review).where(eq(review.id, id))
    revalidatePath('/admin')
    return {success: true}
}

export async function getAllReviews() {
    try {
        return await db.select().from(review)
    } catch (e) {
        console.log('Error fetching reviews:', e)
        throw e
    }
    
}