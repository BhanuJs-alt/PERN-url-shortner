import { z } from "zod";

export const createShortUrlSchema = z.object({
  originalUrl: z
    .url("Please provide a valid URL")
    .startsWith("http", "URL must start with http:// or https://"),
});
