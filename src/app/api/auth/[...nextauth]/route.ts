import { NextResponse } from "next/server";
import { verifyAdminCredentials, DEFAULT_ADMIN } from "@/lib/prisma";
import { setAdminSession, clearAdminSession, getAdminSession } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (session) {
    return NextResponse.json({ authenticated: true, user: session });
  }
  return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, action } = body;

    if (action === "logout") {
      await clearAdminSession();
      return NextResponse.json({ success: true, message: "Logged out successfully" });
    }

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const isValid = verifyAdminCredentials(email, password);
    if (isValid) {
      const user = {
        ...DEFAULT_ADMIN,
        email: email.trim().toLowerCase(),
      };
      await setAdminSession(user);
      return NextResponse.json({
        success: true,
        user,
        message: "Authentication successful",
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
