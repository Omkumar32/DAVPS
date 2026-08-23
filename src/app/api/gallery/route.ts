import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GALLERY_DATA, GalleryItem } from "@/data/schoolData";

export async function GET() {
  try {
    const gallery = await prisma.galleryItem.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, gallery, source: "database" });
  } catch (error) {
    console.error("Error fetching gallery from DB:", error);
    return NextResponse.json({ success: true, gallery: [], source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, category, image, caption, date } = body;

    if (!title || !image) {
      return NextResponse.json({ success: false, message: "Title and image are required" }, { status: 400 });
    }

    const newItem = await prisma.galleryItem.create({
      data: {
        title,
        category: category || "Campus",
        image,
        caption: caption || "",
        date: date || new Date().getFullYear().toString(),
      },
    });

    return NextResponse.json({ success: true, gallery: newItem });
  } catch (error) {
    console.error("Error creating gallery item in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to create gallery item" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Gallery ID is required" }, { status: 400 });
    }

    await prisma.galleryItem.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Gallery item deleted successfully" });
  } catch (error) {
    console.error("Error deleting gallery item from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete gallery item" }, { status: 500 });
  }
}
