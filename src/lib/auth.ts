import { cookies } from "next/headers";

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

export function verifyAdminCredentials(email: string, pass: string): boolean {
  const normalizedEmail = (email || "").trim().toLowerCase();
  const validEmail = normalizedEmail === "admin@dayanandariaschool.edu.in" || 
                     normalizedEmail === "davmandar01@gmail.com" || 
                     normalizedEmail === "admin";
  const validPass = pass === "Admin@DAV2026" || pass === "admin123" || pass === "dav2026";
  return validEmail && validPass;
}

const ADMIN_SESSION_COOKIE = "dav_admin_session";

export async function getAdminSession(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
    if (!sessionToken) return null;

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
