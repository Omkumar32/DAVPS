import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEFAULT_NOTICES: any[] = [];

export async function GET() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: { date: "desc" },
    });

    return NextResponse.json({ success: true, notices, source: "database" });
  } catch (error) {
    console.error("Error fetching notices from DB:", error);
    return NextResponse.json({ success: true, notices: [], source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, date, category, description, pdfUrl } = body;

    if (!title || !category) {
      return NextResponse.json({ success: false, message: "Title and category are required" }, { status: 400 });
    }

    const newNotice = await prisma.notice.create({
      data: {
        title,
        date: date || new Date().toISOString().split("T")[0],
        category,
        description: description || "",
        pdfUrl: pdfUrl || "",
      },
    });

    return NextResponse.json({ success: true, notice: newNotice });
  } catch (error) {
    console.error("Error creating notice in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to create notice" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Notice ID is required" }, { status: 400 });
    }

    const updated = await prisma.notice.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json({ success: true, notice: updated });
  } catch (error) {
    console.error("Error updating notice in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to update notice" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Notice ID is required" }, { status: 400 });
    }

    await prisma.notice.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Notice deleted successfully" });
  } catch (error) {
    console.error("Error deleting notice from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete notice" }, { status: 500 });
  }
}
