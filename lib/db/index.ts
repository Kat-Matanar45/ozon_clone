import path from "path"
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

const dbPath = path.join(process.cwd(), "sqlite.db")

const sqlite = new Database(dbPath)

export const db = drizzle(sqlite)