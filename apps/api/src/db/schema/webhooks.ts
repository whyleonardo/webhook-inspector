import { randomUUIDv7 } from "bun";
import {
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { HTTP_METHODS } from "@/utils/http-methods";

export const methodsEnum = pgEnum("methods_enum", HTTP_METHODS);

export const webhooks = pgTable("webhooks", {
  id: text()
    .primaryKey()
    .$defaultFn(() => randomUUIDv7()),
  method: methodsEnum().notNull().default("GET"),
  pathname: text().notNull(),
  ip: text().notNull(),
  statusCode: integer().notNull(),
  contentType: text(),
  contentLength: text(),
  queryParams: jsonb().$type<Record<string, string>>(),
  headers: jsonb().$type<Record<string, string>>().notNull(),
  body: text(),
  createdAt: timestamp().notNull().defaultNow(),
});
