/** biome-ignore-all lint/suspicious/noConsole: Server Entry */
import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { z } from "zod";
import { env } from "@/env";
import { listWebhooks } from "@/routes/list-webhooks";

const app = new Elysia()
  .use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    })
  )
  .use(
    openapi({
      mapJsonSchema: {
        zod: z.toJSONSchema,
      },
      path: "/docs",
      documentation: {
        info: {
          title: "Webhook Inspector API",
          description: "API for capturing and inspecting webhooks",
          version: "1.0.0",
        },
      },
    })
  )
  .use(listWebhooks)
  .listen({
    hostname: "0.0.0.0",
    port: env.PORT,
  });

console.log(`🦊 Elysia is running at http://localhost:${app.server?.port}`);

console.log(`📚 Docs is available at http://localhost:${env.PORT}/docs`);
