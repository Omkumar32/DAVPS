import { cookies } from "next/headers";
import { verifyAdminCredentials, DEFAULT_ADMIN, AdminUser } from "@/lib/prisma";

const ADMIN_SESSION_COOKIE = "dav_admin_session";

export async function getAdminSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (!sessionToken) return null;

  try {
    const data = JSON.parse(Buffer.from(sessionToken, "base64").toString("utf8"));
    if (data && data.email) {
      return {
        id: data.id || "admin-1",
        email: data.email,
        name: data.name || "School Administrator",
        role: "ADMIN",
      };
    }
  } catch (e) {
    return null;
  }
  return null;
}

export async function setAdminSession(user: AdminUser): Promise<void> {
  const cookieStore = await cookies();
  const token = Buffer.from(JSON.stringify(user)).toString("base64");
  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 Days session
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
}
