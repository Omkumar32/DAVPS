"use client";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSiteSettings } from "@/context/SiteSettingsContext";
import { VISION_PILLARS_DATA, VisionPillarItem } from "@/data/schoolData";
import { Award, Sparkles, GraduationCap, Quote, Star, Compass, ShieldCheck, HeartHandshake } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Compass,
  ShieldCheck,
  GraduationCap
};

export default function DirectorMessagePage() {
  const { settings } = useSiteSettings();

  const heroBadge = settings.directorHeroBadge || "Dayanand Arya Vidya Public School";
  const heroTitle = settings.directorHeroTitle || "Director's Message";
  const heroSubtitle = settings.directorHeroSubtitle || `From the Desk of Director ${settings.directorName || "Er. Alok Nath Verma"} — Dayanand Arya Vidya Public School`;
  const heroImage = settings.directorHeroImage || "";
  const leadershipDesc = settings.directorLeadershipDesc || "Steering Dayanand Arya Vidya Public School with a vision of intellectual rigor, technological excellence, and deep-rooted ethical values.";
  const location = settings.directorLocation || "Mandar, Ranchi";

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title={heroTitle}
        subtitle={heroSubtitle}
        category={heroBadge}
        bgImage={heroImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* MAIN DIRECTOR DESK CARD */}
        <section className="space-y-8">
          <div className="bg-white rounded-3xl p-7 sm:p-14 shadow-2xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Image & Credentials Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-[440px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-slate-900 group">
                {settings.directorImage ? (
                  <img
                    src={settings.directorImage}
                    alt={`Director ${settings.directorName}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
                    <span className="text-6xl font-black text-orange-300">{settings.directorName.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <h4 className="text-2xl font-black">{settings.directorName}</h4>
                    <p className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">{settings.directorDesignation}</p>
                    <p className="text-[11px] text-slate-300 font-medium">{settings.directorQualification}</p>
                  </div>
                </div>
              </div>

              {/* Leadership Info Box */}
              <div className="bg-amber-50/90 p-5 rounded-2xl border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-black text-xs uppercase tracking-wider">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span>{settings.directorExperience}</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {leadershipDesc}
                </p>
              </div>
            </div>

            {/* Right Message Body Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Header Badge */}
              <div className="space-y-2 border-b border-slate-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-800 font-black text-xs uppercase tracking-widest">
                  <Quote className="w-3.5 h-3.5 text-orange-600" />
                  <span>Director&apos;s Message</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                  {settings.directorHeading}
                </h2>
              </div>

              {/* Message Copy */}
              <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {settings.directorMessage1 && <p>&ldquo;{settings.directorMessage1}&rdquo;</p>}
                {settings.directorMessage2 && <p>&ldquo;{settings.directorMessage2}&rdquo;</p>}
                {settings.directorMessage3 && <p>&ldquo;{settings.directorMessage3}&rdquo;</p>}
              </div>

              {/* Sign-off Block */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-xl flex items-center justify-center shadow-lg border border-amber-300">
                    {settings.directorName ? settings.directorName.split(" ").map(n => n[0]).join("") : "DAV"}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900">{settings.directorName}</h4>
                    <p className="text-xs font-bold text-orange-600">{settings.directorDesignation}</p>
                    <p className="text-[11px] text-slate-500 font-semibold">{settings.directorQualification}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Affiliated to CBSE</span>
                  <span className="text-xs font-bold text-slate-700">{location}</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* VISION PILLARS SECTION */}
        <section className="space-y-8">
          <SectionHeading
            badge="Institutional Philosophy"
            title="The Director's Vision & Core Pillars"
            subtitle="Building academic mastery, ethical character, and technological readiness."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VISION_PILLARS_DATA.map((pillar: VisionPillarItem, idx: number) => {
              const IconComp = ICON_MAP[pillar.iconName] || Sparkles;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center font-bold`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
