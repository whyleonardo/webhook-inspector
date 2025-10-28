import "./.polyfills/ compression-polyfill";
import { defineConfig } from "drizzle-kit";
import { env } from "@/env";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schema: "./src/db/schema/*",
  out: "./src/db/migrations",
  casing: "snake_case",
});
