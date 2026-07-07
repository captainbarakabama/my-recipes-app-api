import { defineConfig } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL)
    throw new Error("DATABASE_URL is missing in .env");

export default defineConfig({
    schema: "./src/db/schema.js",
    out: "./src/db/migration",
    dialect: "postgresql",
    dbCredentials: { url: process.env.DATABASE_URL },
});