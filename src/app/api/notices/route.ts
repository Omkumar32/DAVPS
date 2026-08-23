import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEFAULT_NOTICES = [
  { id: "not-1", date: "2026-08-04", title: "Admissions Open 2026-27 for Nursery to Class XI", category: "Admissions", description: "Official admissions announcement for academic session 2026-27." },
  { id: "not-2", date: "2026-08-04", title: "Independence Day Cultural Practice Schedule", category: "Events", description: "Rehearsal schedules for students participating in cultural activities." },
  { id: "not-3", date: "2026-08-05", title: "Parent Teacher Meeting (PTM) for Grades 9 & 10", category: "Academic", description: "Mandatory interactive PTM session regarding term exams and CBSE board guidelines." },
  { id: "not-4", date: "2026-08-15", title: "Independence Day Flag Hoisting & Science Exhibition 2026", category: "Celebration", description: "Grand Independence Day celebrations followed by inter-house science model competition." },
  { id: "not-5", date: "2026-08-20", title: "CBSE Board Examination Registration Fee Submission Notice", category: "CBSE Board", description: "Important circular regarding CBSE Class 10 & 12 board registration documentation and fees." },
  { id: "not-6", date: "2026-08-30", title: "Mid-Term Examination Date Sheet Released (Classes I to XII)", category: "Exams", description: "Download the complete mid-term examination timetable and syllabus breakdown." },
  { id: "not-7", date: "2026-08-31", title: "Annual Inter-House Sports Competition Trial Registration", category: "Sports", description: "Trial registration open for athletics, football, cricket, basketball, and badminton." },
];

export async function GET() {
  try {
    let notices = await prisma.notice.findMany({
      orderBy: { date: "desc" },
    });

    if (notices.length === 0) {
      // Auto-seed default notices into database if empty
      try {
        await prisma.notice.createMany({
          data: DEFAULT_NOTICES.map((n) => ({
            id: n.id,
            title: n.title,
            date: n.date,
            category: n.category,
            description: n.description,
          })),
          skipDuplicates: true,
        });
        notices = await prisma.notice.findMany({ orderBy: { date: "desc" } });
      } catch (seedErr) {
        return NextResponse.json({ success: true, notices: DEFAULT_NOTICES, source: "default" });
      }
    }

    return NextResponse.json({ success: true, notices, source: "database" });
  } catch (error) {
    console.error("Error fetching notices from DB:", error);
    return NextResponse.json({ success: true, notices: DEFAULT_NOTICES, source: "fallback" });
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
