"use client";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSiteSettings } from "@/context/SiteSettingsContext";
import { Trophy, Award, Star, Medal, CheckCircle2 } from "lucide-react";

const EXTRA_TOPPERS = [
  { name: "Sneha Mukherjee", score: "98.8%", stream: "CBSE Class 12 Commerce", year: "2025", rank: "State Rank 2" },
  { name: "Vikram Kumar", score: "98.4%", stream: "CBSE Class 10 Board", year: "2025", rank: "School Topper" },
  { name: "Priya Ranjan", score: "AIR 412", stream: "NEET UG Medical 2025", year: "2025", rank: "RIMS Qualified" },
  { name: "Karan Johar", score: "AIR 89", stream: "National Cyber Olympiad", year: "2025", rank: "Gold Medalist" },
];

export default function AchievementsPage() {
  const { achievements } = useSiteSettings();

  return (
    <div className="space-y-20 pb-20">
      <PageHeader
        title="Hall of Fame & Achievements"
        subtitle="Honoring academic brilliance, competitive exam success, sports trophies, and extraordinary student accomplishments."
        
      />

      {/* 1. FEATURED TOPPERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Excellence Spotlight"
          title="Board & Olympiad Champions 2025"
          subtitle="Profiles of students who set new benchmarks of perfection in CBSE board exams and national Olympiads."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center hover:border-amber-400 transition-all"
            >
              <div className="sm:col-span-5 relative h-56 w-full rounded-2xl overflow-hidden shadow-md bg-slate-900">
                {ach.image ? (
                  <img
                    src={ach.image}
                    alt={ach.studentName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <span className="text-5xl font-black text-amber-400">{ach.studentName.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-700 text-white font-black text-xs shadow-md">
                  {ach.scoreOrMedal}
                </div>
              </div>

              <div className="sm:col-span-7 space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-extrabold text-[11px] uppercase tracking-wider border border-amber-200">
                  {ach.category} • {ach.year}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">{ach.studentName}</h3>
                <p className="text-xs font-bold text-red-700">{ach.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{ach.achievement}</p>
                {ach.quote && (
                  <p className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    "{ach.quote}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. BOARD EXAMINATION WALL OF HONOR */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            dark
            badge="Result Summary"
            title="100% CBSE Pass Record Legacy"
            subtitle="Year after year, our graduating classes consistently achieve outstanding aggregate percentages."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXTRA_TOPPERS.map((top, idx) => (
              <div key={idx} className="bg-slate-800 rounded-3xl p-6 border border-slate-700 space-y-3 hover:border-amber-400 transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold mx-auto">
                  <Trophy className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{top.name}</h4>
                <p className="text-2xl font-black text-amber-400">{top.score}</p>
                <p className="text-xs text-slate-300 font-semibold">{top.stream}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-red-400 text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                  {top.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WALL OF HONOR CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Distinction Metrics"
          title="Institutional Excellence Pillars"
          subtitle="Key figures demonstrating academic and competitive superiority of our students."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">95%+ Distinction Rate</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over 65% of our Class 10 & Class 12 batch score above 90% aggregate marks in CBSE board exams annually.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-700 text-white flex items-center justify-center font-bold">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">JEE & NEET Selections</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated coaching modules produce top 1000 ranks in JEE Advanced, NEET, and Olympiads year after year.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Medal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">National Sports Trophies</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our athletes regularly secure Gold and Silver medals at CBSE National Athletics and Inter-School Tournaments.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
