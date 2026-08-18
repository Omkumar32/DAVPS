import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { BookOpen, Download, Laptop, FileText, CheckCircle2, Search, ExternalLink, Library, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Resources & Digital Study Portal | Dayanand Arya Vidya",
  description: "Access CBSE sample papers, NCERT e-books, smart digital library modules, lab manuals, and previous year question banks at Dayanand Arya Vidya Public School.",
};

const RESOURCES = [
  {
    title: "CBSE NCERT Digital Textbooks (Class I - XII)",
    category: "E-Books",
    format: "PDF / ePub",
    size: "250+ Books",
    description: "Official NCERT digital textbooks and supplementary reading materials prescribed by CBSE for all subjects.",
    icon: BookOpen,
  },
  {
    title: "Class X & XII Board Sample Question Papers",
    category: "Question Bank",
    format: "PDF & Marking Scheme",
    size: "5 Years Papers",
    description: "Solved sample papers, HOTS practice questions, and official CBSE marking scheme answers for board exam preparation.",
    icon: FileText,
  },
  {
    title: "Science & Computer Lab Practical Guides",
    category: "Lab Manuals",
    format: "PDF Manuals",
    size: "Physics, Chem, Bio, CS",
    description: "Comprehensive step-by-step experiment instructions, safety guidelines, viva voce questions, and observation logs.",
    icon: Laptop,
  },
  {
    title: "Interactive E-Learning Quiz & Video Modules",
    category: "Digital Portal",
    format: "3D Animations",
    size: "Online Access",
    description: "Access smart classroom 3D animation modules, topic summaries, and interactive self-assessment practice quizzes.",
    icon: Library,
  },
];

export default function LearningResourcesPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Learning Resources"
        subtitle="Digital study portal, NCERT textbooks, board sample papers, and practical lab manuals."
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. DIGITAL REPOSITORY OVERVIEW */}
        <section className="space-y-8">
          <SectionHeading
            badge="Digital Study Hub"
            title="Comprehensive Knowledge Repository"
            subtitle="Equipping students with 24/7 access to curated study materials and entrance prep resources."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Smart Academic Support</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Empowering Students Beyond Classroom Walls
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Dayanand Arya Vidya Public School provides a rich collection of <strong>digital learning assets</strong>, including e-books, previous years' board exam papers, subject-wise worksheets, and laboratory practical manuals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-orange-50/80 rounded-2xl border-l-4 border-orange-600 text-xs font-bold text-slate-800">
                  ✓ 10,000+ Digital Library Titles & Journals
                </div>
                <div className="p-4 bg-amber-50/80 rounded-2xl border-l-4 border-amber-500 text-xs font-bold text-slate-800">
                  ✓ Solved Board Exam Sample Papers & Marking Keys
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200">
              <Image
                src="/placeholder.png"
                alt="Digital Library and Learning Resources"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
          </div>
        </section>

        {/* 2. RESOURCE CATEGORY CARDS */}
        <section className="space-y-8">
          <SectionHeading
            badge="Study Portal"
            title="Downloadable Study Materials"
            subtitle="Select a category to download official syllabus guidelines and practice papers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-5 hover:border-orange-500 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 bg-slate-900 text-amber-400 rounded-full text-xs font-black uppercase tracking-wider">
                        {r.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-slate-900">{r.title}</h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {r.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-bold text-slate-500">
                      Format: <span className="text-slate-900">{r.format}</span> ({r.size})
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-black shadow-md transition-all">
                      <Download className="w-3.5 h-3.5" /> Access Files
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
