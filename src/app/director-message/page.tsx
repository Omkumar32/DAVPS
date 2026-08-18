"use client";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSiteSettings } from "@/context/SiteSettingsContext";
import { Award, Sparkles, GraduationCap, Quote, Star, Compass, ShieldCheck, HeartHandshake } from "lucide-react";

export default function DirectorMessagePage() {
  const { settings } = useSiteSettings();

  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Director's Message"
        subtitle={`From the Desk of Director ${settings.directorName} — Dayanand Arya Vidya Public School`}
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* MAIN DIRECTOR DESK CARD */}
        <section className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Image & Credentials Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-[440px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400">
                {settings.directorImage ? (
                  <img
                    src={settings.directorImage}
                    alt={`Director ${settings.directorName}`}
                    className="w-full h-full object-cover object-top"
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
                  Steering Dayanand Arya Vidya Public School with a vision of intellectual rigor, technological excellence, and deep-rooted ethical values.
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
                  {settings.directorHeading.includes("Brighter Tomorrow") ? (
                    <>
                      {settings.directorHeading.split("Brighter Tomorrow")[0]}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700">Brighter Tomorrow</span>
                    </>
                  ) : (
                    settings.directorHeading
                  )}
                </h2>
              </div>

              {/* Message Copy */}
              <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {settings.directorMessage1 && <p>&ldquo;{settings.directorMessage1}&rdquo;</p>}
                {settings.directorMessage2 && <p>&ldquo;{settings.directorMessage2}&rdquo;</p>}
                {settings.directorMessage3 && <p>&ldquo;{settings.directorMessage3}&rdquo;</p>}

                <p className="font-extrabold text-orange-600 text-base sm:text-lg italic pt-2">
                  &ldquo;We welcome parents to join hands with us as partners in shaping a bright, morally grounded, and successful future for our children.&rdquo;
                </p>
              </div>

              {/* Sign-off Block */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-xl flex items-center justify-center shadow-lg border border-amber-300">
                    DAV
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900">{settings.directorName}</h4>
                    <p className="text-xs font-bold text-orange-600">{settings.directorDesignation}</p>
                    <p className="text-[11px] text-slate-500 font-semibold">{settings.directorQualification}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">Affiliated to CBSE</span>
                  <span className="text-xs font-bold text-slate-700">Mandar, Ranchi</span>
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
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Modern Scientific Pedagogy</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Combining interactive teaching methods, critical problem-solving, and continuous evaluation for academic success.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">Timeless Vedic Values</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Instilling moral integrity, discipline (*Anushasan*), truthfulness (*Satya*), and service (*Sewa*) in every learner.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-black text-slate-900">State-of-the-Art STEM</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Equipping students with modern computer labs, smart classrooms, and experimental science facilities.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
