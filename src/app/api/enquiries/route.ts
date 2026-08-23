import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const enquiries = await prisma.admissionEnquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, enquiries });
  } catch (error) {
    console.error("Error fetching enquiries from DB:", error);
    return NextResponse.json({ success: true, enquiries: [] });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { studentName, parentName, phone, email, grade, address } = body;

    if (!parentName || !phone) {
      return NextResponse.json(
        { success: false, message: "Parent Name and Phone are required" },
        { status: 400 }
      );
    }

    const enquiry = await prisma.admissionEnquiry.create({
      data: {
        studentName: studentName || "Applicant",
        parentName,
        phone,
        email: email || "",
        grade: grade || "General",
        address: address || "",
        status: "Pending",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully! Our admissions office will contact you soon.",
      enquiry,
    });
  } catch (error) {
    console.error("Error saving admission enquiry to DB:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Could not process enquiry." },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "Enquiry ID and Status are required" },
        { status: 400 }
      );
    }

    const updated = await prisma.admissionEnquiry.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    console.error("Error updating enquiry status in DB:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update enquiry status" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Enquiry ID is required" }, { status: 400 });
    }

    await prisma.admissionEnquiry.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Enquiry deleted successfully" });
  } catch (error) {
    console.error("Error deleting enquiry from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete enquiry" }, { status: 500 });
  }
}
