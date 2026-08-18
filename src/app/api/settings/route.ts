import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const DEFAULT_SETTINGS: Record<string, string> = {
  schoolLogo: "",
  heroImage: "/placeholder.png",
  heroTitle: "DAYANAND ARYA VIDYA PUBLIC SCHOOL",
  heroSubhead: "AFFILIATED TO CBSE NEW DELHI, AFF. NO. 3430396, SCHOOL NO. - 66599\nKANDRI MORE, MANDAR, RANCHI, JHARKHAND-835214",
  tickerText: "Admissions Open 2026-27 (as per Govt. norms) for Nursery to Grade IX & XI • CBSE Affiliation No: 3430396 | School Code: 66599 • Kandri More, Mandar, Ranchi, Jharkhand-835214 • Helpline: +91 94311 02847",
  affiliationNo: "3430396",
  helplinePhone: "+91 94311 02847",
  admissionStatus: "Open 2026-27",
  directorName: "Er. Alok Nath Verma",
  directorDesignation: "Director & Managing Trustee",
  directorQualification: "M.Tech (IIT Kanpur) | Senior Educationist",
  directorImage: "/placeholder.png",
  directorHeading: "Empowering Young Minds for a Brighter Tomorrow",
  directorMessage1: "Welcome to Dayanand Arya Vidya Public School. For over two decades, our institution has been committed to fostering educational excellence, moral integrity, and holistic development in every child who walks through our doors.",
  directorMessage2: "We believe that true education extends beyond textbooks. By combining modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values, we inspire our students to become creative thinkers, compassionate citizens, and lifelong learners.",
  directorMessage3: "Our dedicated faculty and world-class campus facilities provide a safe, nurturing environment where every child's potential is recognized, nurtured, and elevated to international standards.",
  directorExperience: "25+ Years of Educational Leadership & Vision",
};

export async function GET() {
  try {
    const dbSettings = await prisma.siteSetting.findMany();
    if (dbSettings.length === 0) {
      // Return default settings
      return NextResponse.json({ success: true, settings: DEFAULT_SETTINGS, source: "default" });
    }

    const settingsObject: Record<string, string> = { ...DEFAULT_SETTINGS };
    dbSettings.forEach((item) => {
      settingsObject[item.key] = item.value;
    });

    return NextResponse.json({ success: true, settings: settingsObject, source: "database" });
  } catch (error) {
    console.error("Error fetching site settings from DB:", error);
    return NextResponse.json({ success: true, settings: DEFAULT_SETTINGS, source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { settings } = body;

    if (!settings || typeof settings !== "object") {
      return NextResponse.json({ success: false, message: "Invalid settings format" }, { status: 400 });
    }

    const upsertPromises = Object.entries(settings).map(([key, value]) =>
      prisma.siteSetting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) },
      })
    );

    await Promise.all(upsertPromises);

    return NextResponse.json({ success: true, message: "Settings updated successfully" });
  } catch (error) {
    console.error("Error saving site settings to DB:", error);
    return NextResponse.json({ success: false, message: "Database update failed" }, { status: 500 });
  }
}
