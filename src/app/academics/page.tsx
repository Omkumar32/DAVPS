import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { Download, BookOpen, Brain, Laptop, FileText, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Academics | Curriculum, Smart Classrooms & Syllabus",
  description: "Explore Dayanand Arya Vidya Public School's CBSE curriculum, Science/Commerce/Arts streams, teaching methodology, and download academic calendars.",
};

const DOWNLOADS = [
  { title: "CBSE Academic Calendar 2026-27", size: "2.4 MB", format: "PDF", category: "Calendar" },
  { title: "Class IX - XII Board Exam Syllabus Overview", size: "3.1 MB", format: "PDF", category: "Syllabus" },
  { title: "Pre-Primary & Primary Activity Planner", size: "1.8 MB", format: "PDF", category: "Planner" },
  { title: "List of CBSE Prescribed Textbooks 2026", size: "950 KB", format: "PDF", category: "Books" },
];

export default function AcademicsPage() {
  return (
    <div className="space-y-20 pb-20 bg-[#FFFDF9]">
      <PageHeader
        title="Academic Excellence"
        subtitle="CBSE curriculum designed to foster conceptual clarity, analytical problem solving, and technological competence."
        
      />

      {/* 1. CURRICULUM OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Curriculum Framework"
          title="Comprehensive CBSE Learning Continuum"
          subtitle="Structuring education from early years to senior secondary specializations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Science Stream */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 space-y-4 hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-extrabold">
              PCM/PCB
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Science Stream</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Physics, Chemistry, Mathematics / Biology with elective choices in Computer Science, Biotechnology, and Physical Education. Integrated JEE & NEET entrance prep.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Advanced Physics & Chem Labs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Weekly Entrance Test Series</li>
            </ul>
          </div>

          {/* Commerce Stream */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 space-y-4 hover:border-amber-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-extrabold">
              COMM
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Commerce Stream</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Accountancy, Business Studies, Economics, Applied Mathematics, Financial Markets, and Entrepreneurship designed for future corporate & financial leaders.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Stock Market Simulation Labs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> CA / Foundation Mentorship</li>
            </ul>
          </div>

          {/* Humanities Stream */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 space-y-4 hover:border-slate-900 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-extrabold">
              ARTS
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">Humanities Stream</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              History, Political Science, Economics, Psychology, Sociology, and Fine Arts tailored for law, civil services, journalism, and social research aspirations.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Model United Nations (MUN)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> CLAT / CUET Coaching Modules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. TEACHING METHODOLOGY & SMART CLASSROOMS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            dark
            badge="Pedagogy"
            title="Innovative Teaching & Smart Rooms"
            subtitle="Integrating digital technology with interactive, inquiry-driven learning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-3">
              <Laptop className="w-8 h-8 text-amber-300" />
              <h4 className="text-lg font-bold">70+ Smart Classrooms</h4>
              <p className="text-xs text-slate-300">Interactive digital whiteboards with 3D anatomical, geographic, and scientific simulations.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-3">
              <Brain className="w-8 h-8 text-orange-500" />
              <h4 className="text-lg font-bold">STEM & AI Labs</h4>
              <p className="text-xs text-slate-300">Hands-on coding in Python, IoT robotics, 3D printing, and artificial intelligence basics.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-3">
              <BookOpen className="w-8 h-8 text-amber-300" />
              <h4 className="text-lg font-bold">Language Proficiency</h4>
              <p className="text-xs text-slate-300">Digital language lab for phonetics, accent modulation, public speaking, and debates.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-3">
              <Award className="w-8 h-8 text-emerald-400" />
              <h4 className="text-lg font-bold">Olympiad Mentorship</h4>
              <p className="text-xs text-slate-300">Specialized training for Science, Math, Cyber, and General Knowledge national Olympiads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXAMINATION SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Assessment"
          title="Evaluation & Examination Policy"
          subtitle="Continuous and Comprehensive Evaluation aligned with CBSE NEP 2020 guidelines."
        />

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Periodic & Term Assessment Pattern</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We follow a balanced assessment policy comprising Periodic Tests (PT1 & PT2), Mid-Term Examinations, and Annual Term Assessments. Internal assessment scores incorporate portfolio work, practical lab performance, subject enrichment activities, and regular attendance.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="font-bold text-orange-600 block">Internal Assessment</span>
                <span className="text-slate-600">20% Weightage</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="font-bold text-amber-600 block">Term Exams</span>
                <span className="text-slate-600">80% Weightage</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 text-white rounded-2xl p-6 space-y-3">
            <h4 className="text-base font-bold text-amber-300">Assessment Highlights</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">✓ Detailed Parent-Teacher Performance Review Meetings</li>
              <li className="flex items-center gap-2">✓ Diagnostic Remedial Classes for Concept Reinforcement</li>
              <li className="flex items-center gap-2">✓ Digital Progress Reports via Mobile App</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. DOWNLOADABLE RESOURCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Resources"
          title="Download Academic Downloads"
          subtitle="Access official CBSE syllabus documents, academic calendars, and book lists."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOWNLOADS.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-lg border border-amber-100 flex flex-col justify-between hover:border-orange-500 transition-all space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-orange-700 bg-amber-100/80 px-2 py-0.5 rounded">{doc.category}</span>
                <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                <p className="text-[11px] text-slate-500">{doc.format} • {doc.size}</p>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
