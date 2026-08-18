import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { FACILITIES_DATA } from "@/data/schoolData";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Campus Facilities | Science Labs, Sports & Library",
  description: "Explore Dayanand Arya Vidya Public School's 10-acre campus, STEM labs, GPS transport fleet, digital library, and sports complex in Ranchi.",
};

export default function FacilitiesPage() {
  return (
    <div className="space-y-24 pb-24">
      <PageHeader
        title="Campus & Infrastructure"
        subtitle="Sprawling 10-acre eco-friendly campus featuring cutting-edge science labs, indoor sports arena, GPS transport fleet, and digital learning hubs."
        
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <SectionHeading
          badge="World-Class Environment"
          title="Designed for Safety, Discovery & Peak Performance"
          subtitle="Every facility is meticulously built to enhance physical fitness, scientific inquiry, and creative expression."
        />

        {/* Alternating Facility Blocks */}
        <div className="space-y-20">
          {FACILITIES_DATA.map((fac, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={fac.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image side */}
                <div
                  className={`lg:col-span-6 relative h-96 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={fac.image}
                    alt={fac.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {fac.stats && (
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-around bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700 text-white text-center">
                      {fac.stats.map((st, i) => (
                        <div key={i}>
                          <p className="text-xl font-black text-amber-400">{st.value}</p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{st.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 font-extrabold text-xs uppercase tracking-wider border border-red-200">
                      Facility #{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                      {fac.name}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {fac.detailedDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-500" />
                      <span>Key Highlights & Specifications</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {fac.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
