import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "CBSE Class XII State Topper",
    studentName: "Aarav Sharma",
    category: "Board Exam",
    achievement: "Secured 99.2% in CBSE Class XII Science Stream with 100 in Mathematics & Physics.",
    scoreOrMedal: "99.2%",
    year: "2025",
    image: "",
    quote: "The teachers at Dayanand Arya Vidya gave me constant guidance and personalized mock test analysis."
  },
  {
    id: "ach-2",
    title: "National Cyber Olympiad Gold Medalist",
    studentName: "Ananya Roy",
    category: "Olympiad",
    achievement: "Rank 1 International Cyber Olympiad across 12,000+ participating schools.",
    scoreOrMedal: "AIR 1",
    year: "2025",
    image: "",
    quote: "Our school's smart computer lab enabled me to practice advanced algorithmic problems daily."
  },
  {
    id: "ach-3",
    title: "State Level Inter-School Football Champions",
    studentName: "School Senior Boys Team",
    category: "Sports",
    achievement: "Defeated St. Xavier's 3-1 in the state championship finals to lift the trophy.",
    scoreOrMedal: "Gold Cup",
    year: "2025",
    image: "",
    quote: "Rigorous athletic training and team discipline paved our path to victory."
  }
];

export async function GET() {
  try {
    const achievements = await prisma.achievement.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, achievements, source: "database" });
  } catch (error) {
    console.error("Error fetching achievements from DB:", error);
    return NextResponse.json({ success: true, achievements: [], source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, studentName, category, achievement, scoreOrMedal, year, image, quote } = body;

    if (!title || !studentName) {
      return NextResponse.json({ success: false, message: "Title and student name are required" }, { status: 400 });
    }

    const newAch = await prisma.achievement.create({
      data: {
        title,
        studentName,
        category: category || "General",
        achievement: achievement || "",
        scoreOrMedal: scoreOrMedal || "",
        year: year || new Date().getFullYear().toString(),
        image: image || "",
        quote: quote || "",
      },
    });

    return NextResponse.json({ success: true, achievement: newAch });
  } catch (error) {
    console.error("Error creating achievement in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to create achievement" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Achievement ID is required" }, { status: 400 });
    }

    const updated = await prisma.achievement.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json({ success: true, achievement: updated });
  } catch (error) {
    console.error("Error updating achievement in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to update achievement" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Achievement ID is required" }, { status: 400 });
    }

    await prisma.achievement.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Achievement deleted successfully" });
  } catch (error) {
    console.error("Error deleting achievement from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete achievement" }, { status: 500 });
  }
}
