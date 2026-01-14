import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/index.js";

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter: adapter, 
  log: ["warn", "error"],
});

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;