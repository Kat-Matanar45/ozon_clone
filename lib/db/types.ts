import { InferSelectModel } from "drizzle-orm";
import { order, ordersItem, product, review } from "./schema";

export type TProduct = InferSelectModel<typeof product>
export type TOrder = InferSelectModel<typeof order>
export type TOrderItem = InferSelectModel<typeof ordersItem>
export type TRewiew = InferSelectModel<typeof review>
