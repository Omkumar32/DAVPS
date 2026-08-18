import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { Award, Users, HeartHandshake, Sparkles, GraduationCap, Quote, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Principal's Message | From the Desk of Principal Aarti Singh",
  description: "Read the official message from Principal Aarti Singh of Dayanand Arya Vidya Public School on building future leaders through team effort between students, teachers, and parents.",
};

export default function PrincipalMessagePage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Principal's Message"
        subtitle="From the Desk of Principal Aarti Singh — Dayanand Arya Vidya Public School"
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* MAIN PRINCIPAL DESK CARD */}
        <section className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Image & Badge Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-[420px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400">
                <Image
                  src="/placeholder.png"
                  alt="Principal Aarti Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <h4 className="text-xl font-black">Aarti Singh</h4>
                    <p className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">Principal, Dayanand Arya Vidya</p>
                  </div>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="bg-orange-50/80 p-5 rounded-2xl border border-orange-200 space-y-2">
                <div className="flex items-center gap-2 text-orange-800 font-black text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>Educational Leadership</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Dedicated to building future leaders through modern world-class facilities, character development, and active parent-teacher collaboration.
                </p>
              </div>
            </div>

            {/* Right Message Body Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Header Badge */}
              <div className="space-y-2 border-b border-slate-100 pb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 font-black text-xs uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>From the Desk of Principal</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Welcome to Dayanand Arya Vidya Public School
                </h2>
              </div>

              {/* Verbatim Letter Body */}
              <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p className="font-bold text-slate-900 text-base">
                  Dear parents,
                </p>

                <p>
                  I am delighted to be associated with you for your child's education. While I walked the dream of creating Dayanand Arya Vidya Public School. I focused on creating the best of facilities which I always wanted for myself as a school going kid. Building a school is one thing and ensuring success to every child who passes through the portals of Dayanand Arya Vidya Public School is another thing. The later has to be a team effort between the students, teachers and parents.
                </p>

                <p>
                  Children do better in school when parents communicate often with teachers and be a part of the school. I invite you to join us in this most joyous journey of building future leaders.
                </p>

                <p>
                  Thank you for entrusting your child to our care.
                </p>

                <p className="font-extrabold text-orange-600 text-base sm:text-lg italic pt-2">
                  "Let's walk hand in hand and meet the aspirations of your child."
                </p>
              </div>

              {/* Sign-off Block */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 font-black text-lg flex items-center justify-center shadow-lg">
                    DAV
                  </div>
                  <div>
                    <h4 className="text-base font-black text-slate-900">Aarti Singh</h4>
                    <p className="text-xs font-bold text-orange-600">Principal</p>
                    <p className="text-[11px] text-slate-500 font-semibold">Dayanand Arya Vidya Public School</p>
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

      </div>
    </div>
  );
}
