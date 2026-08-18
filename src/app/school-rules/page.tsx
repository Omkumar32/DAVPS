import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  ShieldCheck,
  Clock,
  Shirt,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  Sparkles,
  PhoneCall,
  UserCheck,
  Ban,
  School,
  Sun,
  Snowflake
} from "lucide-react";

export const metadata: Metadata = {
  title: "School Rules & Code of Conduct | Dayanand Arya Vidya Public School",
  description: "Official School Rules, Code of Conduct, Dress & Appearance Standards, and Attendance & Punctuality Policy of Dayanand Arya Vidya Public School.",
};

const TIMINGS_SUMMER = [
  { grade: "P.NUR. to UKG", timings: "7.30 AM to 1.00 PM" },
  { grade: "Std I to X", timings: "7.30 AM to 1.00 PM" },
  { grade: "Std XI to XII", timings: "7.30 AM to 11.30 AM" },
];

const TIMINGS_WINTER = [
  { grade: "P.NUR. to UKG", timings: "9.00 AM to 2.00 PM" },
  { grade: "Std I to X", timings: "9.00 AM to 2.00 PM" },
  { grade: "Std XI to XII", timings: "9.00 AM to 12.30 PM" },
];

export default function SchoolRulesPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50 min-h-screen">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="School Rules & Regulations"
        subtitle="Institutional Regulations, Code of Conduct, Dress Code Standards & Attendance Timings — Dayanand Arya Vidya Public School"
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. GENERAL FUNDAMENTAL RULE */}
        <section className="space-y-8">
          <SectionHeading
            badge="General Guidelines"
            title="Fundamental School Ethos & Scope"
            subtitle="Core behavioral expectations for all students of Dayanand Arya Vidya Public School."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/90 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">The Golden Rule of Conduct</h3>
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Courtesy, Respect & Integrity</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              There is one fundamental school rule which is that <strong>all students at all times will behave well and sensibly and show courtesy, consideration and respect for others</strong> and will not commit any act which can bring disrepute to the school's name.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-orange-50/80 rounded-2xl border-l-4 border-orange-600 text-xs font-bold text-slate-800">
                ★ <strong>Bus-to-Home Scope:</strong> All school rules apply from the moment the student rides in the school bus to attend school until he/she is dropped off at home.
              </div>
              <div className="p-4 bg-amber-50/80 rounded-2xl border-l-4 border-amber-500 text-xs font-bold text-slate-800">
                ★ <strong>Policy Updates:</strong> The school reserves the right to make necessary amendments in school rules, which will be communicated to parents.
              </div>
            </div>
          </div>
        </section>

        {/* 2. CONDUCT AND DISCIPLINE */}
        <section className="space-y-8">
          <SectionHeading
            badge="Campus Code"
            title="Conduct & Discipline Regulations"
            subtitle="Zero-tolerance substance policy, classroom decorum, gadget prohibition, and property protection."
          />

          {/* Zero Tolerance Callout Card */}
          <div className="bg-rose-950 text-white rounded-3xl p-8 sm:p-10 border border-rose-800 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Ban className="w-8 h-8 text-rose-400 shrink-0" />
              <div>
                <h4 className="text-xl font-black text-white">Strict Zero-Tolerance Substance Policy</h4>
                <p className="text-xs text-rose-300 font-bold uppercase tracking-wider">Severe Disciplinary Action & Expulsion</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              The school operates a <strong>strict 'zero tolerance' policy</strong> in respect of possession or consumption of illegal drugs, narcotic substances, tobacco, alcohol, or any other socially unacceptable substances. Any violation of this policy will be subject to severe disciplinary action, including <strong>immediate expulsion from the school</strong>.
            </p>
          </div>

          {/* Conduct Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Classroom Atmosphere */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3 hover:border-orange-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Classroom Atmosphere</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Students must contribute to a positive learning environment by cooperating with teachers, completing work on time, contributing to discussions, and avoiding distractions.
              </p>
            </div>

            {/* Card 2: Prohibited Gadgets */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3 hover:border-orange-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                <Ban className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Mobile Phones & Gadgets</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Students should not bring mobile phones, walkmans, or similar electronic gadgets. The school will confiscate any unauthorized electronic devices brought to school.
              </p>
            </div>

            {/* Card 3: Money & Gifts Policy */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3 hover:border-orange-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Money & Gifts Policy</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Students should not bring money to school. Neither parents nor students should give money or gifts to any staff member of the school. Chewing gum is strictly banned.
              </p>
            </div>

            {/* Card 4: Behavioral Standards */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3 hover:border-orange-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Anti-Bullying & Suspension</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Bullying of any kind, overt display of affection, theft, forgery, unauthorized borrowing, property damage, or obscene language will result in immediate suspension.
              </p>
            </div>

            {/* Card 5: Care of Property & Litter */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3 hover:border-orange-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <School className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">School Property & Cleanliness</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Willful damage to buildings, furniture, buses, or fittings will be charged to parents for repairs/replacements. Campus must be kept clean; loitering outside classrooms is forbidden.
              </p>
            </div>

            {/* Card 6: Dining & School Activities */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-3 hover:border-orange-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-slate-900">Activities & Public Shows</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Eating is allowed only in designated areas. Participation in school activities is compulsory. Students must not join public shows or external competitions during school hours without Head approval.
              </p>
            </div>

          </div>
        </section>

        {/* 3. DRESS & APPEARANCE */}
        <section className="space-y-8">
          <SectionHeading
            badge="Uniform Norms"
            title="Dress & Appearance Guidelines"
            subtitle="Neatness, uniform discipline, hair grooming, and accessory restrictions."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-xl font-black text-slate-900">Uniform Regulations</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700 font-medium">
                {/* Boys Rules */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h5 className="font-black text-slate-900 text-sm text-orange-600">Boys' Dress Code</h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Shirts must be tucked in at all times.</li>
                    <li>• Hair must be cut short, neat, and clean.</li>
                    <li>• No hair coloring, tinting, or highlights.</li>
                  </ul>
                </div>

                {/* Girls Rules */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h5 className="font-black text-slate-900 text-sm text-orange-600">Girls' Dress Code</h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li>• Shirts tucked in at all times.</li>
                    <li>• Knee-length skirts with leggings & activity T-shirts.</li>
                    <li>• Long hair plaited/tied neatly; no fancy earrings.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border-l-4 border-amber-500 text-xs font-bold text-slate-800">
                ★ <strong>Jewellery & Accessories:</strong> Students are not permitted to wear expensive jewellery, watches, wrist bands, or fancy accessories. Hair for all students must remain natural.
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 w-full rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200">
              <Image
                src="/placeholder.png"
                alt="School Uniform Standards"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>

          </div>
        </section>

        {/* 4. ATTENDANCE & PUNCTUALITY */}
        <section className="space-y-8">
          <SectionHeading
            badge="Schedule & Leave"
            title="Attendance & Punctuality Policy"
            subtitle="Summer & winter school hours, medical certificates, leave sanctions, and late coming rules."
          />

          {/* School Timings Comparison Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Summer Timings Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">Summer School Timings</h4>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Morning Schedule</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                      <th className="p-3 rounded-l-xl">Class Level</th>
                      <th className="p-3 rounded-r-xl">Timings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                    {TIMINGS_SUMMER.map((t, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50" : ""}>
                        <td className="p-3 text-slate-900">{t.grade}</td>
                        <td className="p-3 text-orange-600">{t.timings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Winter Timings Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Snowflake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">Winter School Timings</h4>
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Adjusted Winter Schedule</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                      <th className="p-3 rounded-l-xl">Class Level</th>
                      <th className="p-3 rounded-r-xl">Timings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-bold text-slate-800">
                    {TIMINGS_WINTER.map((t, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50" : ""}>
                        <td className="p-3 text-slate-900">{t.grade}</td>
                        <td className="p-3 text-blue-600">{t.timings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Leave & Absence Rules List */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <h4 className="text-xl font-black text-slate-900">Absence, Medical Certificates & Leave Rules</h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>Telephone Intimation:</strong> In case of absence, a telephone call from a parent is required before school commencement or at the earliest opportunity.</p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>Doctor's Certificate (4+ Days):</strong> A registered medical doctor's certificate is mandatory for absence due to illness lasting 4 or more days.</p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>Punctuality & Late Coming:</strong> Parents must ensure children arrive punctually. Strict disciplinary action will be taken against habitual late comers. If a child misses the school bus, parents must arrange their own transport.</p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>Leaving Campus:</strong> Students are strictly forbidden to leave the school premises during regular school hours.</p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>Closing & Reopening Days:</strong> Students must be present in school on closing and reopening days before and after vacations. Absence for exam preparation is not permitted.</p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <p><strong>Academic School Trips:</strong> School trips are an integral part of the academic program. The same rules and expectations apply during trips as on regular school days.</p>
              </div>

              <div className="p-5 bg-rose-50 border-l-4 border-rose-600 text-rose-900 font-bold text-xs sm:text-sm rounded-2xl">
                ★ <strong>Attendance Record & Detention Policy:</strong> Unsanctioned absence is a major infringement. Repeated unexcused leave warrants detention or suspension by the Head of the School. Teachers are not required to set work for unexcused absentees. Attendance records are permanently kept in the student's official file.
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
