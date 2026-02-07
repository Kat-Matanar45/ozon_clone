import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from './db/schema';

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'sqlite',
        schema
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    trustedOrigins: ['http://localhost:3000']
})

export type Session = typeof auth.$Infer.Session.session;
export type User = typeof auth.$Infer.Session.user;