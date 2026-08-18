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

    if (!studentName || !parentName || !phone) {
      return NextResponse.json(
        { success: false, message: "Student Name, Parent Name, and Phone are required" },
        { status: 400 }
      );
    }

    const enquiry = await prisma.admissionEnquiry.create({
      data: {
        studentName,
        parentName,
        phone,
        email: email || "",
        grade: grade || "Nursery",
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
