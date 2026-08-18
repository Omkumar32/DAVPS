import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { GraduationCap, Users, Calendar, Award, BookOpen, Sparkles, CheckCircle2, Video, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seminar, Workshop & Training Programs | Dayanand Arya Vidya",
  description: "Explore teacher capacity building workshops, student career seminars, NEP 2020 training programs, and skill enrichment workshops at Dayanand Arya Vidya Public School.",
};

const WORKSHOPS = [
  {
    title: "CBSE Mandatory Capacity Building (NEP 2020)",
    target: "Faculty & Educators",
    duration: "3-Day Intensive Workshop",
    badge: "Teacher Training",
    description: "Focusing on experiential learning methodologies, competency-based assessment designs, and art-integrated pedagogy conducted by CBSE Centre of Excellence (COE) master trainers.",
    icon: GraduationCap,
  },
  {
    title: "AI, STEM & Robotics Hands-on Seminar",
    target: "Classes VI - XII Students",
    duration: "2-Day Interactive Session",
    badge: "Student Skill",
    description: "Interactive session on Python programming, robotics automation, 3D printing concepts, and practical artificial intelligence applications in daily life.",
    icon: Sparkles,
  },
  {
    title: "Career Counseling & Stream Selection Summit",
    target: "Classes IX - XII Students & Parents",
    duration: "Full-Day Summit",
    badge: "Career Guidance",
    description: "Expert guidance from career psychologists on JEE, NEET, CUET, CLAT, NDA, and international study avenues along with psychometric analysis.",
    icon: Award,
  },
  {
    title: "Adolescent Health, Mindful Parenting & Digital Wellness",
    target: "Parents & Faculty",
    duration: "Weekend Seminar Series",
    badge: "Parenting & Health",
    description: "Addressing screen-time management, exam stress relief techniques, emotional resilience, and fostering positive parent-child communication.",
    icon: Users,
  },
];

export default function SeminarWorkshopPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Seminar, Workshop & Training Programs"
        subtitle="Empowering educators through CBSE capacity building and inspiring students with futuristic skill workshops."
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. OVERVIEW & VISION */}
        <section className="space-y-8">
          <SectionHeading
            badge="Continuous Enrichment"
            title="Institutional Training & Skill Ecosystem"
            subtitle="Regular workshops to elevate pedagogical standards and broaden student horizons."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Professional & Academic Growth</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Investing in Minds, Elevating Standards
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Dayanand Arya Vidya Public School firmly believes that education is a continuous journey of learning and adaptation. We regularly host <strong>CBSE-certified teacher capacity building programs</strong>, student leadership seminars, career expos, and mental health workshops.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-orange-50/80 rounded-2xl border-l-4 border-orange-600 text-xs font-bold text-slate-800">
                  ✓ 50+ Hours Annual Teacher Training Mandate
                </div>
                <div className="p-4 bg-amber-50/80 rounded-2xl border-l-4 border-amber-500 text-xs font-bold text-slate-800">
                  ✓ Hands-on Student Skill Masterclasses
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200">
              <Image
                src="/placeholder.png"
                alt="Teacher Workshop and Training Seminar"
                fill
                className="object-cover"
                sizes="600px"
              />
            </div>
          </div>
        </section>

        {/* 2. FEATURED WORKSHOP PROGRAM CARDS */}
        <section className="space-y-8">
          <SectionHeading
            badge="Program Directory"
            title="Key Seminars & Training Modules"
            subtitle="Structured training modules designed for teachers, students, and parent groups."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-5 hover:border-orange-500 transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 bg-slate-900 text-amber-400 rounded-full text-xs font-black uppercase tracking-wider">
                        {w.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-slate-900">{w.title}</h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {w.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5 text-orange-600">
                      <Users className="w-4 h-4" /> {w.target}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="w-4 h-4" /> {w.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. UPCOMING TRAINING SCHEDULE TABLE */}
        <section className="space-y-8">
          <SectionHeading
            badge="Calendar 2026-27"
            title="Upcoming Training & Workshop Schedule"
            subtitle="Mark your calendars for scheduled faculty and student empowerment sessions."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4">Date / Month</th>
                    <th className="p-4">Program Title</th>
                    <th className="p-4">Conducting Body</th>
                    <th className="p-4">Target Audience</th>
                    <th className="p-4">Venue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  <tr className="hover:bg-orange-50/50">
                    <td className="p-4 font-black text-orange-600">April 18, 2026</td>
                    <td className="p-4 font-extrabold text-slate-900">NEP 2020 Art-Integrated Pedagogy</td>
                    <td className="p-4 text-slate-600">CBSE COE Patna / Ranchi</td>
                    <td className="p-4">All School Teachers</td>
                    <td className="p-4 font-bold text-slate-700">School Auditorium</td>
                  </tr>
                  <tr className="bg-slate-50/60 hover:bg-orange-50/50">
                    <td className="p-4 font-black text-orange-600">May 10, 2026</td>
                    <td className="p-4 font-extrabold text-slate-900">Cyber Safety & Digital Ethics Summit</td>
                    <td className="p-4 text-slate-600">Cyber Crime Cell & DAV IT Dept</td>
                    <td className="p-4">Classes VII - XII</td>
                    <td className="p-4 font-bold text-slate-700">Digital Seminar Hall</td>
                  </tr>
                  <tr className="hover:bg-orange-50/50">
                    <td className="p-4 font-black text-orange-600">July 22, 2026</td>
                    <td className="p-4 font-extrabold text-slate-900">Competitive Exam Strategy (JEE/NEET/CUET)</td>
                    <td className="p-4 text-slate-600">Senior Academic Mentors</td>
                    <td className="p-4">Classes XI & XII Students</td>
                    <td className="p-4 font-bold text-slate-700">Conference Room</td>
                  </tr>
                  <tr className="bg-slate-50/60 hover:bg-orange-50/50">
                    <td className="p-4 font-black text-orange-600">Sept 05, 2026</td>
                    <td className="p-4 font-extrabold text-slate-900">Teacher Excellence & Holistic Assessment</td>
                    <td className="p-4 text-slate-600">Internal Quality Assurance Cell</td>
                    <td className="p-4">Faculty Members</td>
                    <td className="p-4 font-bold text-slate-700">School Auditorium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
