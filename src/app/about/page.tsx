"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSiteSettings } from "@/context/SiteSettingsContext";
import { SALIENT_FEATURES_DATA } from "@/data/schoolData";
import {
  Sparkles,
  HeartHandshake,
  BrainCircuit,
  Lightbulb,
  ShieldCheck,
  PhoneCall,
  Star,
  CheckCircle2,
  Building2,
  Compass,
  Users,
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  Star,
  PhoneCall,
  Building2,
  Users
};

export default function AboutPage() {
  const { settings } = useSiteSettings();

  const heroBadge = settings.aboutHeroBadge || "Dayanand Arya Vidya Public School";
  const heroTitle = settings.aboutHeroTitle || "About Our School";
  const heroSubtitle = settings.aboutHeroSubtitle || "The Dayanand Arya Vidya Public School — Universal Literacy, High Quality English Medium Education & All-Round Character Building.";
  const heroImage = settings.aboutHeroImage;

  const sectionBadge = settings.aboutSectionBadge || "Institutional Vision";
  const sectionTitle = settings.aboutSectionTitle || "About Our School";
  const sectionSubtitle = settings.aboutSectionSubtitle || "Fostering academic excellence, moral integrity, and lifelong learning.";
  const heading = settings.aboutHeading || "High-Quality English Medium Education";
  const paragraph1 = settings.aboutParagraph1 || "Universal literacy and academic excellence are at the core of our institution. We are dedicated to providing high-standard English medium education that inspires critical thinking, character building, and responsible citizenship in every child.";
  const quote = settings.aboutQuote || "We nurture self-confidence in our students, empowering them to pursue rewarding careers and become proud assets to their families and the nation.";

  const visionTitle = settings.visionTitle || "Empowering Future Leaders";
  const visionDesc = settings.visionDescription || "To evolve as a center of educational excellence that combines modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values—nurturing creative thinkers, compassionate citizens, and lifelong achievers.";

  const missionTitle = settings.missionTitle || "Nurturing Excellence & Values";
  const missionDesc = settings.missionDescription || "To provide a safe, vibrant, and inclusive learning environment that fosters intellectual curiosity, critical thinking, moral integrity, and all-round personality development in every child.";

  // Salient Features Parsing & Fallbacks
  let salientFeaturesList = SALIENT_FEATURES_DATA;
  try {
    if (settings.salientFeaturesJson) {
      const parsed = JSON.parse(settings.salientFeaturesJson);
      if (Array.isArray(parsed) && parsed.length > 0) {
        salientFeaturesList = parsed;
      }
    }
  } catch (e) {}

  const salientTitle = settings.salientFeaturesTitle || "Salient Features";
  const salientSubtitle = settings.salientFeaturesSubtitle || "Guiding pillars shaping ideal citizens, discipline of highest order, and continuous academic evaluation.";

  // School Difference Fallbacks
  const diffTitle = settings.differenceTitle || "The School with a Difference";
  const diffSubtitle = settings.differenceSubtitle || "Activity blended education awakening creative and leadership skills dormant in every child.";
  const diffP1 = settings.differenceParagraph1 || "The Dayanand Arya Vidya Public School's ideology believes in activity blended education. Numerous activities going at per with academic curriculum in the Dayanand Arya Vidya Public School's system are to strengthen the edifice of career of the students and bring them all round development in the true sence of the term.";
  const diffP2 = settings.differenceParagraph2 || "Apart from this, the system gives wide recognition to various other aspects of knowledge found in those who are not even sound in academic curriculum. No branch of knowledge is neglected.";
  const diffP3 = settings.differenceParagraph3 || "The perceptive teaching imparted in School awakens the creative and leadership skills dormant in every child. Education is customize to meet the aspirational demands of youngsters.";
  const diffCardHeading = settings.differenceCardHeading || "Enlightening Young Minds";
  const diffCardText = settings.differenceCardText || "The School embarks on the mission to enlighten young minds with deliberate and systematic education, inculcate into them the spirit of humane as well as social values and spiritual development in a harmonious manner, so that they can confidently face life’s hardships, succeed in the struggle for existence and prove themselves the assets to humanity.";
  const diffCardFooter = settings.differenceCardFooter || "★ Such contribution of the Dayanand Arya Vidya Public School to the nation makes them the School with Difference.";

  // Image Slider Parsing & Auto-scroll setup
  let sliderImages: string[] = [];
  try {
    if (settings.aboutImagesJson) {
      const parsed = JSON.parse(settings.aboutImagesJson);
      if (Array.isArray(parsed) && parsed.length > 0) {
        sliderImages = parsed;
      }
    }
  } catch (e) {}

  if (sliderImages.length === 0) {
    sliderImages = [settings.aboutMainImage || "/placeholder.png"];
  }

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (sliderImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <div className="space-y-10 sm:space-y-12 pb-12 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title={heroTitle}
        subtitle={heroSubtitle}
        category={heroBadge}
        bgImage={heroImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* 1. ABOUT OUR SCHOOL OVERVIEW */}
        <section id="general-info" className="scroll-mt-24 space-y-4 sm:space-y-5">
          <SectionHeading
            title={sectionTitle}
            subtitle={sectionSubtitle}
          />

          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {heading}
              </h3>

              <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                <p>{paragraph1}</p>
                {quote && (
                  <div className="p-4 bg-orange-50/80 rounded-2xl border-l-4 border-orange-500 text-slate-800 font-medium italic text-xs sm:text-sm leading-relaxed shadow-sm">
                    &ldquo;{quote}&rdquo;
                  </div>
                )}
              </div>
            </div>

            {/* Visual Container Auto-Scrolling Slider */}
            <div className="lg:col-span-6 relative h-72 sm:h-80 lg:h-[380px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400 group bg-slate-900">
              {sliderImages.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentSlideIndex ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  {imgSrc.startsWith("data:") ? (
                    <img
                      src={imgSrc}
                      alt={`Dayanand Arya Vidya Public School Photo ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={imgSrc}
                      alt={`Dayanand Arya Vidya Public School Photo ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                      priority={idx === 0}
                    />
                  )}
                </div>
              ))}

              {/* Slider Navigation Overlay (if more than 1 image) */}
              {sliderImages.length > 1 && (
                <>
                  {/* Prev Button */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-orange-600 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-orange-600 text-white backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md">
                    {sliderImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlideIndex(idx)}
                        className={`h-2.5 rounded-full transition-all ${
                          idx === currentSlideIndex ? "w-7 bg-orange-500" : "w-2.5 bg-white/60 hover:bg-white"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* 2. OUR MISSION & VISION */}
        <section id="mission-vision" className="scroll-mt-24 space-y-4 sm:space-y-5">
          <SectionHeading
            title="Our Mission & Vision"
            subtitle="Guiding principles inspiring academic excellence, ethical values, and holistic leadership."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-200/90 hover:border-orange-500/50 transition-all space-y-5 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold shadow-sm">
                  <Compass className="w-7 h-7" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-600">Our Vision</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                    {visionTitle}
                  </h3>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  {visionDesc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-amber-100 text-xs sm:text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Universal high-quality English medium literacy</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Character building rooted in Vedic ethics & discipline</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Preparing students for global academic & career success</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-amber-200/90 hover:border-orange-500/50 transition-all space-y-5 flex flex-col justify-between group">
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-orange-600 font-bold shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-600">Our Mission</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                    {missionTitle}
                  </h3>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  {missionDesc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-amber-100 text-xs sm:text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Activity-blended learning & experiential pedagogy</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Integrated competitive exam prep & digital classrooms</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Equal opportunity for holistic co-curricular growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SALIENT FEATURES */}
        <section id="salient-features" className="scroll-mt-24 space-y-4 sm:space-y-5">
          <SectionHeading
            title={salientTitle}
            subtitle={salientSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salientFeaturesList.map((feature, idx) => {
              const IconComp = ICON_MAP[feature.iconName] || Sparkles;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all space-y-4 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${feature.color || "bg-orange-100 text-orange-600"} flex items-center justify-center font-bold shadow-sm`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-slate-300 group-hover:text-orange-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. THE SCHOOL WITH A DIFFERENCE */}
        <section id="school-difference" className="scroll-mt-24 space-y-4 sm:space-y-5">
          <SectionHeading
            title={diffTitle}
            subtitle={diffSubtitle}
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {diffP1 && <p>{diffP1}</p>}
                {diffP2 && <p>{diffP2}</p>}
                {diffP3 && <p>{diffP3}</p>}
              </div>

              <div className="bg-orange-50/80 p-6 sm:p-8 rounded-2xl border border-orange-200 space-y-4">
                <h4 className="text-lg font-black text-orange-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-orange-600" />
                  <span>{diffCardHeading}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {diffCardText}
                </p>
                {diffCardFooter && (
                  <div className="pt-2 text-xs font-black text-orange-700 uppercase tracking-wider">
                    {diffCardFooter}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
