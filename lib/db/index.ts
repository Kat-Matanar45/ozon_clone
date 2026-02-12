// import Database from "better-sqlite3";
// import { drizzle } from "drizzle-orm/better-sqlite3";
// import * as schema from './schema'

// const sqlite = new Database('./sqlite.db')
// export const db = drizzle(sqlite, {schema})
// // export const db = drizzle(process.env.DB_FILE_NAME!)

import path from "path"
import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

const dbPath = path.join(process.cwd(), "sqlite.db")

const sqlite = new Database(dbPath)

export const db = drizzle(sqlite)