import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { PROGRAMS_DATA, Program } from "@/data/schoolData";

export async function GET() {
  try {
    let programs = await prisma.program.findMany({
      orderBy: { createdAt: "asc" },
    });

    const mappedPrograms = programs.map((p) => {
      let parsedFeatures: string[] = [];
      if (p.features) {
        try {
          parsedFeatures = JSON.parse(String(p.features));
        } catch (e) {
          parsedFeatures = [];
        }
      }
      return {
        ...p,
        features: parsedFeatures,
      };
    });

    return NextResponse.json({ success: true, programs: mappedPrograms, source: "database" });
  } catch (error) {
    console.error("Error fetching programs from DB:", error);
    return NextResponse.json({ success: true, programs: [], source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, grades, ageGroup, description, features, image, iconName } = body;

    if (!title || !grades) {
      return NextResponse.json({ success: false, message: "Title and grades are required" }, { status: 400 });
    }

    const featuresJson = Array.isArray(features) ? JSON.stringify(features) : JSON.stringify([]);

    const newProgram = await prisma.program.create({
      data: {
        title,
        grades,
        ageGroup: ageGroup || "All Ages",
        description: description || "",
        features: featuresJson,
        image: image || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
        iconName: iconName || "BookOpen",
      },
    });

    return NextResponse.json({ success: true, program: newProgram });
  } catch (error) {
    console.error("Error creating program in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to create program" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Program ID is required" }, { status: 400 });
    }

    const updated = await prisma.program.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json({ success: true, program: updated, message: "Program updated successfully" });
  } catch (error) {
    console.error("Error updating program in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to update program" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Program ID is required" }, { status: 400 });
    }

    await prisma.program.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Program deleted successfully" });
  } catch (error) {
    console.error("Error deleting program from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete program" }, { status: 500 });
  }
}
