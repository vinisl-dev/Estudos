import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query"], // faz um log no terminal a cada query executada
})