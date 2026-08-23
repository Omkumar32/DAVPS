import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { NEWS_EVENTS_DATA, NewsItem } from "@/data/schoolData";

export async function GET() {
  try {
    let news = await prisma.newsEvent.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (news.length === 0) {
      try {
        await prisma.newsEvent.createMany({
          data: NEWS_EVENTS_DATA.map((n) => ({
            id: n.id,
            title: n.title,
            date: n.date,
            category: n.category,
            excerpt: n.excerpt,
            fullContent: n.fullContent,
            image: n.image,
            author: n.author || "Academic Coordinator",
            readTime: n.readTime || "3 min read",
          })),
          skipDuplicates: true,
        });
        news = await prisma.newsEvent.findMany({ orderBy: { createdAt: "desc" } });
      } catch (seedErr) {
        return NextResponse.json({ success: true, news: NEWS_EVENTS_DATA, source: "default" });
      }
    }

    return NextResponse.json({ success: true, news, source: "database" });
  } catch (error) {
    console.error("Error fetching news from DB:", error);
    return NextResponse.json({ success: true, news: NEWS_EVENTS_DATA, source: "fallback" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, date, category, excerpt, fullContent, image, author, readTime } = body;

    if (!title || !category) {
      return NextResponse.json({ success: false, message: "Title and category are required" }, { status: 400 });
    }

    const newArticle = await prisma.newsEvent.create({
      data: {
        title,
        date: date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        category,
        excerpt: excerpt || "",
        fullContent: fullContent || excerpt || "",
        image: image || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        author: author || "Academic Coordinator",
        readTime: readTime || "3 min read",
      },
    });

    return NextResponse.json({ success: true, news: newArticle });
  } catch (error) {
    console.error("Error creating news article in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to create news article" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "News ID is required" }, { status: 400 });
    }

    const updated = await prisma.newsEvent.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json({ success: true, news: updated });
  } catch (error) {
    console.error("Error updating news article in DB:", error);
    return NextResponse.json({ success: false, message: "Failed to update news article" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "News ID is required" }, { status: 400 });
    }

    await prisma.newsEvent.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "News article deleted successfully" });
  } catch (error) {
    console.error("Error deleting news article from DB:", error);
    return NextResponse.json({ success: false, message: "Failed to delete news article" }, { status: 500 });
  }
}
