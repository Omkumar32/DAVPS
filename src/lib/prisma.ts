import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Admin User Types & Helpers
export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const DEFAULT_ADMIN: AdminUser = {
  id: "admin-1",
  email: "admin@dayanandariaschool.edu.in",
  name: "School Administrator",
  role: "ADMIN"
};

// Check if credentials match official school admin credentials
export function verifyAdminCredentials(email: string, pass: string): boolean {
  const validEmail = email.trim().toLowerCase() === "admin@dayanandariaschool.edu.in" || email.trim().toLowerCase() === "davmandar01@gmail.com" || email.trim().toLowerCase() === "admin";
  const validPass = pass === "Admin@DAV2026" || pass === "admin123" || pass === "dav2026";
  return validEmail && validPass;
}

