import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let buffer: Buffer;
    let extension = "webp";
    let customPrefix = "img";

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const file = formData.get("file") as File | null;
      const category = (formData.get("category") as string) || "upload";

      if (!file) {
        return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      buffer = Buffer.from(bytes);
      customPrefix = category.toLowerCase().replace(/[^a-z0-9]/g, "-");
    } else {
      const body = await req.json();
      const { image, category } = body;

      if (!image || typeof image !== "string") {
        return NextResponse.json({ success: false, message: "Invalid image format" }, { status: 400 });
      }

      if (category) {
        customPrefix = String(category).toLowerCase().replace(/[^a-z0-9]/g, "-");
      }

      // Extract base64 payload
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
      buffer = Buffer.from(base64Data, "base64");
    }

    // Ensure public/uploads directory exists
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Generate unique filename with .webp extension
    const filename = `${customPrefix}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${extension}`;
    const filePath = path.join(uploadsDir, filename);

    // Write file to public/uploads/
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename,
      message: "Image converted to WebP and saved successfully to public folder",
    });
  } catch (error: any) {
    console.error("Error saving image to public uploads folder:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to upload image" },
      { status: 500 }
    );
  }
}
