import { Elysia } from "elysia";
import z from "zod";
import { HTTP_METHODS } from "@/utils/http-methods";

export const listWebhooks = new Elysia().get(
  "/webhooks",
  (ctx) => {
    const { limit } = ctx.query;

    return [
      {
        id: "d9a27aa6-f953-499e-9a71-413d037d68dc",
        method: "GET",
      },
    ];
  },
  {
    detail: {
      summary: "List Webhooks",
      tags: ["Webhooks"],
    },
    query: z.object({
      limit: z.coerce.number().min(1).max(100).default(20),
    }),
    response: {
      200: z.array(
        z.object({
          id: z.uuid(),
          method: z.literal(HTTP_METHODS),
        })
      ),
    },
  }
);
