"use client";

import { useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { FAQS_DATA, ELIGIBILITY_DATA, REQUIRED_DOCUMENTS_DATA } from "@/data/schoolData";
import { ChevronDown, FileCheck, HelpCircle, DollarSign, Calendar, Sparkles } from "lucide-react";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("All");

  const filteredFaqs = activeFaqCategory === "All"
    ? FAQS_DATA
    : FAQS_DATA.filter((f) => f.category === activeFaqCategory);

  return (
    <div className="space-y-20 pb-20 bg-[#FFFDF9]">
      <PageHeader
        title="Admissions 2026-27"
        subtitle="Join Dayanand Arya Vidya Public School family. Experience transparent procedures, merit-based selection, and world-class academic nurturing."
        
      />

      {/* 1. AGE ELIGIBILITY MATRIX */}
      <section id="eligibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Criteria"
          title="Class-Wise Age Eligibility Matrix"
          subtitle="Age calculation standard as of March 31, 2026 for the academic session 2026-27."
        />

        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6">Grade / Wing</th>
                  <th className="py-4 px-6">Minimum Age</th>
                  <th className="py-4 px-6">Cutoff Date Requirement</th>
                  <th className="py-4 px-6">Selection Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {ELIGIBILITY_DATA.map((item, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900">{item.grade}</td>
                    <td className="py-4 px-6 text-orange-600 font-extrabold">{item.minAge}</td>
                    <td className="py-4 px-6 text-slate-600">{item.cutoff}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full bg-amber-100/80 text-orange-800 font-semibold border border-amber-200">
                        {item.criteria}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2. REQUIRED DOCUMENTS CHECKLIST */}
      <section className="bg-amber-50/50 py-16 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Checklist"
            title="Documents Required During Verification"
            subtitle="Please bring original documents along with self-attested photocopies during final admission confirmation."
          />

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REQUIRED_DOCUMENTS_DATA.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/40 border border-amber-100">
                  <FileCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-medium leading-relaxed">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEE STRUCTURE SUMMARY */}
      <section id="fee-structure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Transparency"
          title="Fee Structure & Scholarship Guidelines"
          subtitle="Reasonable fee schedule with convenient quarterly payment terms and merit scholarships."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100 space-y-4 hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-bold">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">One-Time Admission Fee</h3>
            <p className="text-xs text-slate-600">Includes Registration Fee, School Security Caution Deposit (Refundable), and Development Fund.</p>
            <div className="text-xl font-black text-orange-600 pt-2 border-t border-slate-100">₹ 12,500 <span className="text-xs font-normal text-slate-500">(One-time)</span></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100 space-y-4 hover:border-amber-400 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Quarterly Composite Fee</h3>
            <p className="text-xs text-slate-600">Covers Tuition, Smart Classroom digital modules, STEM Labs, Sports, and Library facilities.</p>
            <div className="text-xl font-black text-amber-600 pt-2 border-t border-slate-100">₹ 7,800 - ₹ 11,500 <span className="text-xs font-normal text-slate-500">/ Quarter</span></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-amber-100 space-y-4 hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Merit Scholarships</h3>
            <p className="text-xs text-slate-600">Up to 100% tuition fee waiver for Class 10 Board 95%+ scorers & National Sports Medalists.</p>
            <div className="text-xl font-black text-slate-900 pt-2 border-t border-slate-100">Up to 100% Waiver</div>
          </div>
        </div>
      </section>

      {/* 4. ADMISSION FAQ ACCORDION */}
      <section id="faqs" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about school admissions, entrance test, transport, and academics."
        />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {["All", "Admission", "General", "Academics", "Transport & Fees"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFaqCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFaqCategory === cat
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-amber-50 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-orange-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-orange-600" : ""}`} />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-amber-50 bg-amber-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. APPLY NOW CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950 text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <span className="px-4 py-1.5 rounded-full bg-amber-300 text-slate-950 text-xs font-black uppercase tracking-widest inline-block shadow-sm">
            Limited Seats Available
          </span>
          <h2 className="text-3xl sm:text-4xl font-black">Begin Online Registration Today</h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Secure your child's seat for the 2026-27 academic session. Fill out our online application form or call our counselor.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919431102847"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-orange-600 text-white font-extrabold text-sm shadow-xl transition-all"
            >
              Call Admission Helpline: +91 94311 02847
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
