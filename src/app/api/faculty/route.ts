import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { FACULTY_MEMBERS } from "@/data/facultyData";

export async function GET() {
  try {
    const faculty = await prisma.faculty.findMany({
      orderBy: { serialNo: "asc" },
    });

    // Map to FacultyMember format expected by frontend
    const mappedFaculty = faculty.map((f) => ({
      sno: f.serialNo,
      name: f.name,
      designation: f.designation,
      highestQualification: f.qualification,
      gender: "M/F",
      oasisId: `DAV-${f.serialNo}`,
      subjectTaught: f.designation,
      image: f.image || "/placeholder.png",
    }));

    return NextResponse.json({ success: true, faculty: mappedFaculty, source: "database" });
  } catch (error) {
    console.error("Error fetching faculty from DB:", error);
    return NextResponse.json({ success: true, faculty: FACULTY_MEMBERS, source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, designation, qualification, category, image } = body;

    if (!name || !designation) {
      return NextResponse.json({ success: false, message: "Name and designation are required" }, { status: 400 });
    }

    const count = await prisma.faculty.count();
    const newFaculty = await prisma.faculty.create({
      data: {
        serialNo: count + 1,
        name,
        designation,
        qualification: qualification || "Graduate",
        category: category || "TGT",
        image: image || "/placeholder.png",
      },
    });

    return NextResponse.json({ success: true, faculty: newFaculty });
  } catch (error) {
    console.error("Error creating faculty in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to create faculty member" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { sno, serialNo, name, designation, highestQualification, qualification, category, image } = body;
    const rawSno = sno !== undefined ? sno : serialNo;
    const targetSno = parseInt(String(rawSno), 10);

    if (isNaN(targetSno)) {
      return NextResponse.json({ success: false, message: "Serial number is required" }, { status: 400 });
    }

    const existing = await prisma.faculty.findFirst({
      where: { serialNo: targetSno },
    });

    if (existing) {
      const updated = await prisma.faculty.update({
        where: { id: existing.id },
        data: {
          ...(name && { name }),
          ...(designation && { designation }),
          ...(highestQualification && { qualification: highestQualification }),
          ...(qualification && { qualification }),
          ...(category && { category }),
          ...(image !== undefined && { image }),
        },
      });
      return NextResponse.json({ success: true, faculty: updated });
    }

    return NextResponse.json({ success: false, message: "Faculty member not found" }, { status: 404 });
  } catch (error) {
    console.error("Error updating faculty in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to update faculty member" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sno = searchParams.get("sno");

    if (!sno) {
      return NextResponse.json({ success: false, message: "Serial number is required" }, { status: 400 });
    }

    await prisma.faculty.deleteMany({
      where: { serialNo: parseInt(sno, 10) },
    });

    return NextResponse.json({ success: true, message: "Faculty member deleted successfully" });
  } catch (error) {
    console.error("Error deleting faculty from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete faculty member" }, { status: 500 });
  }
}
