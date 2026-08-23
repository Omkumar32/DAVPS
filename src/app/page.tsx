"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  Users,
  Award,
  Laptop,
  Trophy,
  HeartHandshake,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Quote,
  Star,
  X,
  Sparkles,
  GraduationCap,
  BookOpen,
  Bus,
  Building2,
  ThumbsUp
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import NoticeCalendarSection from "@/components/home/NoticeCalendarSection";
import {
  SCHOOL_INFO,
  PROGRAMS_DATA,
  NEWS_EVENTS_DATA,
  FAQS_DATA,
  WHY_CHOOSE_US_DATA,
  ADMISSION_STEPS_DATA,
  TESTIMONIALS_DATA
} from "@/data/schoolData";
import { useSiteSettings } from "@/context/SiteSettingsContext";

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Award,
  Laptop,
  Trophy,
  Users,
  ShieldCheck: ShieldCheckIcon,
  HeartHandshake
};

export default function HomePage() {
  const { settings, achievements, programs } = useSiteSettings();
  const displayPrograms = programs && programs.length > 0 ? programs : PROGRAMS_DATA;
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [heroImgError, setHeroImgError] = useState(false);

  useEffect(() => {
    setHeroImgError(false);
  }, [settings.heroImage]);

  // 4-Second Auto-Scroll Interval for Testimonials Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTestimonialHovered) {
        setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isTestimonialHovered]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: contactForm.name,
          parentName: contactForm.name,
          phone: contactForm.phone,
          email: contactForm.email,
          grade: "General Enquiry",
          address: contactForm.message,
        }),
      });
    } catch (err) {
      console.error("Failed to post enquiry:", err);
    }
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <div className="space-y-10 sm:space-y-12 pb-16 bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full min-h-[calc(100vh-88px)] flex flex-col justify-between bg-slate-50 border-b border-slate-200 overflow-hidden shrink-0">
        
        {/* Title Area */}
        <div className="pt-3 sm:pt-4 pb-2 px-3 sm:px-4 text-center shrink-0 z-20">
          <div className="max-w-5xl mx-auto space-y-1">
            <h1 className="text-lg sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase font-sans leading-tight">
              {settings.heroTitle}
            </h1>
            <div className="text-[10px] sm:text-xs md:text-sm font-extrabold text-slate-800 tracking-wide uppercase leading-tight space-y-0.5">
              {settings.heroSubhead.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Flex-1 Campus Image Container */}
        <div className="relative flex-1 w-full min-h-[200px] sm:min-h-[320px] overflow-hidden my-auto bg-slate-50 flex items-center justify-center">
          {settings.heroImage && settings.heroImage !== "/placeholder.png" && !heroImgError ? (
            /* Render uploaded image */
            <img
              src={settings.heroImage}
              alt="Dayanand Arya Vidya Public School Building"
              className="w-full h-full object-contain md:object-cover object-top max-h-[60vh]"
              onError={() => setHeroImgError(true)}
            />
          ) : (
            <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-8 text-center">
              <Building2 className="w-16 h-16 mb-2 opacity-50" />
              <p className="text-sm font-medium">Hero Image Not Uploaded Yet</p>
              <p className="text-xs text-slate-400">Upload a Hero Banner photo from Admin CMS</p>
            </div>
          )}
        </div>

        {/* Action Buttons Below Image for Clean Mobile Layout */}
        <div className="py-2.5 sm:py-3 px-4 z-20 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 bg-slate-50 max-w-lg mx-auto w-full">
          <Link
            href="/admissions"
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>Apply for Admission</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <a
            href="#contact-section"
            className="w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:scale-105 transition-all text-center"
          >
            Book Campus Visit
          </a>
        </div>

        {/* Bottom Marquee Notice Ticker Bar */}
        <div className="bg-[#FDEBD0] border-t border-b border-[#F7DC6F] py-2 px-4 overflow-hidden shrink-0 shadow-inner z-20">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-8 text-xs font-bold text-[#6E2C00] uppercase tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600 inline-block animate-ping" />
              {settings.tickerText}
            </span>
          </div>
        </div>
      </section>


      {/* 2. QUICK STATS SECTION */}
      <section id="stats-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60 border border-amber-200/80 hover:border-orange-500/50 transition-all hover:-translate-y-1 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-bl-full pointer-events-none group-hover:bg-orange-500/15 transition-colors" />
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACADEMIC PROGRAMS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          title={settings.programsTitle || "Academic Programs"}
          subtitle={settings.programsSubtitle || "Empowering learners from early childhood discovery to senior secondary mastery."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <Image
                  src={prog.image || "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"}
                  alt={prog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={prog.image?.startsWith("data:")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                  {prog.grades}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {prog.title}
                    </h3>
                  </div>
                  <p className="text-[11px] font-semibold text-orange-600">Age: {prog.ageGroup}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{prog.description}</p>
                </div>

                <ul className="space-y-2 pt-3 border-t border-slate-100">
                  {(prog.features || []).slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/academics"
                  className="w-full py-2.5 rounded-xl bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-orange-200/80 mt-2"
                >
                  <span>Explore Curriculum</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. NOTICE SECTION & ACADEMIC CALENDAR */}
      <NoticeCalendarSection />


      {/* 6. ACHIEVEMENTS HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          title="Student Achievements"
          subtitle="Our students shine in CBSE board exams, Olympiads, competitive exams, and sports."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 hover:border-orange-500/40 hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100">
                  {ach.image ? (
                    <img
                      src={ach.image}
                      alt={ach.studentName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-50">
                      <span className="text-4xl font-black text-orange-400">{ach.studentName.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-600 text-white font-black text-xs shadow-md">
                    {ach.scoreOrMedal}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-700 bg-amber-100/90 px-2 py-0.5 rounded">
                    {ach.category} • {ach.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{ach.studentName}</h3>
                  <p className="text-xs font-semibold text-orange-600">{ach.title}</p>
                </div>

                <p className="text-xs text-slate-600 italic">"{ach.achievement}"</p>
              </div>

              {ach.quote && (
                <p className="text-[11px] text-slate-500 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100 mt-2">
                  "{ach.quote}"
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>View Full Achievements Wall & Past Results</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


      {/* 7. DIRECTOR'S MESSAGE */}
      <section className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-100/70 border-t border-amber-200/80 text-slate-900 pt-14 pb-6 relative overflow-hidden">
        {/* Decorative Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT SIDE: DIRECTOR'S MESSAGE */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-black text-orange-600 uppercase tracking-wider">
                  Director&apos;s Message
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {settings.directorHeading}
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {settings.directorMessage1 && <p>&ldquo;{settings.directorMessage1}&rdquo;</p>}
                {settings.directorMessage2 && <p>&ldquo;{settings.directorMessage2}&rdquo;</p>}
                {settings.directorMessage3 && <p>&ldquo;{settings.directorMessage3}&rdquo;</p>}
              </div>

              <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-orange-600/20 border border-amber-300">
                    {settings.directorName ? settings.directorName.split(" ").map(n => n[0]).join("") : "DAV"}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{settings.directorName}</h3>
                    <p className="text-xs text-orange-600 font-bold">{settings.directorDesignation}</p>
                    <p className="text-xs text-slate-600 font-medium">{settings.directorQualification}</p>
                  </div>
                </div>

                <Link
                  href="/director-message"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-all shadow-md shadow-orange-600/20 hover:scale-105"
                >
                  <span>Read Leadership Vision</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: DIRECTOR IMAGE */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 opacity-25 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300 bg-white shadow-2xl">
                  <div className="relative h-[440px] sm:h-[480px] w-full">
                    {settings.directorImage ? (
                      <img
                        src={settings.directorImage}
                        alt={`Director ${settings.directorName}`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
                        <span className="text-6xl font-black text-orange-300">{settings.directorName ? settings.directorName.split(" ").map(n => n[0]).join("") : "DAV"}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-85" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 backdrop-blur-md bg-slate-950/85 border-t border-slate-800/80 space-y-1">
                    <p className="text-base font-extrabold text-amber-300">{settings.directorName}</p>
                    <p className="text-xs text-slate-300">{settings.directorDesignation}</p>
                    {settings.directorExperience && (
                      <div className="flex items-center gap-2 pt-1 text-[11px] text-amber-400 font-medium">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{settings.directorExperience}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="bg-gradient-to-br from-amber-50/70 via-white to-orange-50/50 pt-4 pb-16 border-b border-amber-200/60 relative overflow-hidden -mt-10">
        {/* Background Glow Accents */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about admissions, curriculum, transport, and facilities."
          />

          {/* Grid Layout: Left Help Card + Right Accordion */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: QUICK HELP CARD */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border-2 border-amber-200/90 shadow-lg space-y-5 lg:sticky lg:top-28">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-orange-800 font-extrabold text-[11px] uppercase tracking-wider border border-amber-200">
                  Admissions Helpdesk
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                  Have a specific question not listed here?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Our dedicated admission counselors are ready to assist you with class availability, campus tours, and document verification.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/80 hover:bg-orange-50 border border-amber-200/80 text-slate-900 group transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Call Admission Office</p>
                    <p className="text-xs font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {SCHOOL_INFO.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SCHOOL_INFO.admissionEmail}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/80 hover:bg-orange-50 border border-amber-200/80 text-slate-900 group transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Support</p>
                    <p className="text-xs font-bold text-slate-900 truncate max-w-[180px] group-hover:text-orange-600 transition-colors">
                      {SCHOOL_INFO.admissionEmail}
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Admissions Open for Session 2026–27</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: ACCORDION LIST */}
            <div className="lg:col-span-8 space-y-3">
              {FAQS_DATA.map((faq, index) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    onMouseEnter={() => setOpenFaq(faq.id)}
                    onMouseLeave={() => setOpenFaq(null)}
                    className={`bg-white rounded-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-sm ${
                      isOpen
                        ? "border-2 border-orange-500 shadow-md shadow-orange-500/10 ring-1 ring-orange-500/10"
                        : "border border-amber-200/90 hover:border-orange-400 hover:shadow"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full py-4 px-5 text-left font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-3.5 hover:bg-amber-50/40 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="flex items-center gap-3.5">
                        <span
                          className={`w-7 h-7 rounded-lg font-extrabold text-xs flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isOpen
                              ? "bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-sm scale-105"
                              : "bg-amber-100 text-orange-800"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{faq.question}</span>
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isOpen
                            ? "bg-orange-600 text-white shadow-sm rotate-180"
                            : "bg-slate-100 text-slate-500 hover:bg-amber-100"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 transition-transform duration-500" />
                      </div>
                    </button>

                    {/* Silky Smooth CSS Grid & Opacity Height Transition */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                        }`}
                      >
                        <div className="p-5 pt-2 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-amber-100 bg-gradient-to-b from-amber-50/40 via-amber-50/20 to-white space-y-3">
                          <p className="font-normal">{faq.answer}</p>
                          
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-amber-100/60 text-[11px] text-slate-500 font-medium">
                            <span className="px-2.5 py-0.5 rounded bg-amber-100/80 text-orange-800 font-bold">
                              Category: {faq.category}
                            </span>
                            <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                              <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Verified Official Information</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      {/* 9. TESTIMONIALS SECTION (3D Auto-scrolling Carousel with Antialiased Smooth Track) */}
      <section className="bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 py-16 border-y border-amber-200/60 relative overflow-hidden antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Heading matching screenshot */}
          <div className="text-center space-y-3 max-w-3xl mx-auto antialiased">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Parents & Students Say
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Real experiences from our school community about academic excellence and values.
            </p>
          </div>

          {/* Continuous Smooth Horizontal Track Carousel with antialiased font smoothing */}
          <div
            className="relative max-w-7xl mx-auto overflow-hidden px-4 sm:px-12 py-6 antialiased"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            {/* Sliding Track */}
            <div className="flex items-center justify-center relative min-h-[320px]">
              {TESTIMONIALS_DATA.map((testimonial, idx) => {
                // Calculate relative offset from active index for infinite seamless wrap
                let offset = idx - activeTestimonial;
                const total = TESTIMONIALS_DATA.length;
                if (offset < -Math.floor(total / 2)) offset += total;
                if (offset > Math.floor(total / 2)) offset -= total;

                const isActive = offset === 0;
                const isPrev = offset === -1;
                const isNext = offset === 1;
                const isVisible = isActive || isPrev || isNext;

                if (!isVisible) return null;

                return (
                  <div
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`absolute transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu antialiased cursor-pointer ${
                      isActive
                        ? "z-20 scale-100 opacity-100 translate-x-0 w-[92%] sm:w-[480px] lg:w-[540px]"
                        : isPrev
                        ? "z-10 scale-90 opacity-60 -translate-x-[75%] sm:-translate-x-[90%] lg:-translate-x-[105%] w-[85%] sm:w-[420px] lg:w-[460px]"
                        : "z-10 scale-90 opacity-60 translate-x-[75%] sm:translate-x-[90%] lg:translate-x-[105%] w-[85%] sm:w-[420px] lg:w-[460px]"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 sm:p-8 border shadow-xl relative overflow-hidden flex flex-col justify-between transition-all duration-500 antialiased ${
                        isActive
                          ? "border-t-4 border-t-orange-500 border-amber-200/90 shadow-2xl shadow-orange-500/10 min-h-[280px]"
                          : "border-slate-200/80 shadow-md min-h-[260px] hover:opacity-90"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className={`fill-amber-400 text-amber-400 ${
                                isActive ? "w-4.5 h-4.5" : "w-4 h-4"
                              }`}
                            />
                          ))}
                        </div>
                        <span
                          className={`font-serif text-red-200/90 font-black leading-none ${
                            isActive ? "text-5xl" : "text-4xl"
                          }`}
                        >
                          ”
                        </span>
                      </div>

                      <p
                        className={`italic font-semibold leading-relaxed text-slate-800 antialiased ${
                          isActive ? "text-sm sm:text-base" : "text-xs sm:text-sm line-clamp-4"
                        }`}
                      >
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`relative rounded-full overflow-hidden border-2 border-orange-500 shadow-md shrink-0 ${
                              isActive ? "w-11 h-11" : "w-9 h-9"
                            }`}
                          >
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.parentName}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div>
                            <p
                              className={`font-extrabold text-slate-900 ${
                                isActive ? "text-sm" : "text-xs"
                              }`}
                            >
                              {testimonial.parentName}
                            </p>
                            <p
                              className={`font-bold text-orange-600 ${
                                isActive ? "text-xs" : "text-[10px]"
                              }`}
                            >
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <Building2
                          className={`text-red-100 shrink-0 ${
                            isActive ? "w-9 h-9" : "w-7 h-7"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left & Right Circle Arrow Navigation */}
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
                )
              }
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-orange-600 shadow-xl border border-slate-200 flex items-center justify-center hover:scale-110 hover:bg-orange-600 hover:text-white transition-all z-30 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length)
              }
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-orange-600 shadow-xl border border-slate-200 flex items-center justify-center hover:scale-110 hover:bg-orange-600 hover:text-white transition-all z-30 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    activeTestimonial === idx
                      ? "w-6 h-2.5 rounded-full bg-orange-600 shadow-md"
                      : "w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Testimonial slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 10. CONTACT SECTION */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          title="Visit Our Campus or Send an Enquiry"
          subtitle="Our admissions desk and administrative office are open Monday to Saturday."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold border-l-4 border-orange-500 pl-3">Dayanand Arya Vidya Public School</h3>
              
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">Campus Address:</p>
                    <p>{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Helpline & Admissions:</p>
                    <p>{SCHOOL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Email Communications:</p>
                    <p>{SCHOOL_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-200 rounded-3xl h-64 overflow-hidden relative shadow-inner border border-slate-300 flex items-center justify-center">
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.274189391039!2d85.3484!3d23.3852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e137c8e878bd%3A0xb3a82efd978a3c8a!2sBariatu%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-200 space-y-6">
            <div>
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">Fast Response</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Send Us a Direct Message</h3>
            </div>

            {contactSubmitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600">Our representative will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message or Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full p-4 text-xs rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
