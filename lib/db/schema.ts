import { sqliteTable, text, integer, real, int } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('user', {
    id: text('id').primaryKey(),
    email: text('email').notNull().unique(),
    emailVerified: int('email_verified', {mode: 'boolean'}).notNull().default(false),
    name: text('name'),
    createdAt: int('created_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date()),
    updatedAt: int('updated_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date())
})

export const session = sqliteTable('session', {
    id: text('id').primaryKey(),
    userId: int('user_id').notNull().references(() => user.id, {onDelete: 'cascade'}),
    expiresAt: text('expires_at').notNull(),
})

export const account = sqliteTable("account", {
    id: text("id").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),

    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),

    password: text("password"), // тут хранится хеш
    createdAt: int("created_at", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
    updatedAt: int("updated_at", { mode: "timestamp" })
        .notNull()
        .$defaultFn(() => new Date()),
});

export const review = sqliteTable('review', {
    id: text('id').primaryKey(),
    userId: int('user_id').notNull().references(() => user.id, {onDelete: 'cascade'}),
    productId: int('product_id').notNull().references(() => product.id, {onDelete: 'cascade'}),
    rating: real('rating').notNull(),
    comment: text('comment'),
    createdAt: int('created_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date()),
    updatedAt: int('updated_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date())
})

export const product = sqliteTable('product', { 
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    price: int('price').notNull(),
    discountPrice: int('discount_price'),
    image: text('image_url').notNull(),
    createdAt: int('created_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date()),
    updatedAt: int('updated_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date())
})

export const order = sqliteTable('order', { 
    id: text('id').primaryKey(),
    userId: int('user_id').notNull().references(() => user.id, {onDelete: 'cascade'}),
    total: integer('total').notNull(),
    status: text('status').notNull().default('pending'),
    createdAt: int('created_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date()),
    updatedAt: int('updated_at', {mode: 'timestamp'}).notNull().$defaultFn(() => new Date())
})

export const ordersItem = sqliteTable('order_item', { 
    id: text('id').primaryKey(),
    orderId: int('order_id').notNull().references(() => order.id, {onDelete: 'cascade'}),
    productId: int('product_id').notNull().references(() => product.id, {onDelete: 'cascade'}),
    quantity: integer('quantity').notNull().default(1),
    price: integer('price').notNull()
})