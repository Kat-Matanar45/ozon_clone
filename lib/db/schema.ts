import { sql } from "drizzle-orm/sql/sql";
import { sqliteTable, text, integer, real, int } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
    id: int().primaryKey({autoIncrement: true}),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    name: text('name'),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text('updated_at').notNull().default(sql`(CURRENT_TIMESTAMP)`).$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
})

export const sessions = sqliteTable('sessions', {
    id: int().primaryKey({autoIncrement: true}),
    userId: text('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    expiresAt: text('expires_at').notNull(),
})

export const reviews = sqliteTable('reviews', {
    id: int().primaryKey({autoIncrement: true}),
    userId: int('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    productId: int('product_id').notNull().references(() => products.id, {onDelete: 'cascade'}),
    rating: real('rating').notNull(),
    comment: text('comment'),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`)
})

export const products = sqliteTable('products', { 
    id: int().primaryKey({autoIncrement: true}),
    name: text('name').notNull(),
    description: text('description'),
    price: int('price').notNull(),
    discountPrice: int('discount_price'),
    image: text('image_url').notNull(),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`)
})

export const orders = sqliteTable('orders', { 
    id: int().primaryKey({autoIncrement: true}),
    userId: int('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    total: integer('total').notNull(),
    status: text('status').notNull().default('pending'),
    createdAt: text('created_at').notNull().default(sql`(CURRENT_TIMESTAMP)`)
})

export const ordersItems = sqliteTable('orders_items', { 
    id: int().primaryKey({autoIncrement: true}),
    orderId: int('order_id').notNull().references(() => orders.id, {onDelete: 'cascade'}),
    productId: int('product_id').notNull().references(() => products.id, {onDelete: 'cascade'}),
    quantity: integer('quantity').notNull().default(1),
    price: integer('price').notNull()
})