import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  BookOpen,
  Award,
  Calendar,
  Users,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Bus,
  CreditCard,
  FileText,
  MessageSquare,
  PhoneCall,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Sparkles,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "General Information | Evaluation, Fees, PTM & Rules",
  description: "Official General Information of Dayanand Arya Vidya Public School regarding evaluation, examinations, fee payment schedule, PTM, student care centre, transport, and parent communication.",
};

const FEE_SCHEDULE = [
  {
    installment: "One Time Fee",
    period: "At the time of admission",
    dueDate: "At Admission",
    bg: "bg-slate-50"
  },
  {
    installment: "1st Quarter Payment",
    period: "April, May, June",
    dueDate: "On or before March 31st",
    bg: "bg-orange-50/60"
  },
  {
    installment: "2nd Quarter Payment",
    period: "July, August, Sept.",
    dueDate: "On or before June 30th",
    bg: "bg-slate-50"
  },
  {
    installment: "3rd Quarter Payment",
    period: "Oct., Nov., Dec.",
    dueDate: "On or before September 20th",
    bg: "bg-orange-50/60"
  },
  {
    installment: "4th Quarter Payment",
    period: "Jan., Feb., March",
    dueDate: "On or before December 15th",
    bg: "bg-slate-50"
  }
];

export default function GeneralInformationPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="General Information"
        subtitle="Official Academic Regulations, Fee Payment Schedule, Examination Norms, Student Care & Parent Guidelines."
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. EVALUATION & EXAMINATION */}
        <section className="space-y-8">
          <SectionHeading
            badge="Academic Standards"
            title="Evaluation & Examination System"
            subtitle="Continuous assessment policy, achievement grades, effort grading, and examination integrity rules."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Card: Evaluation Policy */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Continuous Evaluation Policy</h3>
                  <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Achievement & Effort Grading</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p>
                  The school follows a system of continuous evaluation and regularly provides parents with an assessment of their child's academic progress, based on a comprehensive system of tests, examinations, grades, reports, and parent-teacher meetings.
                </p>
                <p>
                  The school follows a policy of awarding <strong>grades rather than marks</strong> for class assessments. Tests, Quizzes, and other class assessments will receive achievement grades while effort grades may be given for homework, class work, and projects.
                </p>
              </div>

              <div className="p-4 bg-orange-50/80 rounded-2xl border-l-4 border-orange-600 text-xs text-slate-800 font-semibold">
                ✓ Continuous evaluation ensures stress-free, holistic academic growth without high-pressure competitive fatigue.
              </div>
            </div>

            {/* Right Card: Examination Rules */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Examination Rules</h3>
                  <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Two Main Sets Per Academic Year</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  The school holds <strong>two sets of examinations</strong> in an academic year. The combination of grades and reports serves to assess the progress of the student.
                </p>
                
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Integrity Rule:</strong> Students found cheating in any examination will be given zero marks for that paper.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-200">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Absence Norms:</strong> Absent students will not be re-examined except in cases of serious, verified medical conditions. Unexpected absence excludes students from prizes and awards.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. PTM, PROMOTIONS, EXTRA CLASSES & TUITIONS */}
        <section className="space-y-8">
          <SectionHeading
            badge="Academic Progress"
            title="PTM, Promotions & Tuitions Policy"
            subtitle="Monthly parent-teacher interaction, promotion criteria, in-house extra classes, and strict tuition guidelines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PTM Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">Parent-Teachers Meetings</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  There will be <strong>monthly parent-teacher meetings</strong>. All parents are requested to be present for regular updates. Parents can also fix up prior appointments with teachers to discuss their child's progress.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-orange-600">
                ★ Monthly Regular Attendance Required
              </div>
            </div>

            {/* Promotions Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">Promotions Criteria</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Promotions are decided based on the student's performance throughout the year. A student who fails to secure promotion for the <strong>second time</strong> in his/her school career may be asked to leave the school.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-600">
                ★ Year-Round Performance Metric
              </div>
            </div>

            {/* Extra Classes Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">In-House Extra Classes</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Extra classes are scheduled on a regular basis for students who require additional guidance. Parents will be contacted directly when it is determined that a student would benefit from extra classes.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                ★ Free Remedial Guidance After School
              </div>
            </div>

            {/* Tuitions Prohibition Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">Private Tuitions Policy</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Students are <strong>strongly discouraged</strong> from taking private tuitions. Parents needing extra help for their children should discuss needs with respective class teachers so after-school extra classes can be arranged.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-rose-600">
                ★ Private Tuitions Discouraged
              </div>
            </div>

          </div>
        </section>

        {/* 3. TRANSPORT SERVICES */}
        <section className="space-y-8">
          <SectionHeading
            badge="Student Welfare & Safety"
            title="School Transport Services"
            subtitle="Safe GPS bus transport fleet ensuring comfortable pick-up and drop-off for students."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch min-h-[440px]">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">
                    <Bus className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tight">School Transport Fleet</h4>
                    <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">Safe Pickup & Drop-Off Services</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Dayanand Arya Vidya Public School, provides buses for pick-up and drop-off children. This ensures that children reach the school comfortably.
                </p>
              </div>

              {/* Transport Guidelines Accordion Boxes (Matching Reference UI) */}
              <div className="space-y-1.5 font-bold text-xs sm:text-sm text-white">
                <div className="bg-slate-900 hover:bg-slate-800 p-3.5 rounded-xl flex items-center justify-between transition-colors">
                  <span>+ Bus Stops and Routes</span>
                  <span className="text-amber-400 font-normal text-xs">Mandar, Ranchi & Environs</span>
                </div>
                <div className="bg-slate-900 hover:bg-slate-800 p-3.5 rounded-xl flex items-center justify-between transition-colors">
                  <span>+ Transport Rules & Safety Policy</span>
                  <span className="text-amber-400 font-normal text-xs">Speed Limiters & CCTV</span>
                </div>
                <div className="bg-slate-900 hover:bg-slate-800 p-3.5 rounded-xl flex items-center justify-between transition-colors">
                  <span>+ Female Bus Attendants & Live GPS Monitoring</span>
                  <span className="text-amber-400 font-normal text-xs">Parent App Tracking</span>
                </div>
                <div className="bg-slate-900 hover:bg-slate-800 p-3.5 rounded-xl flex items-center justify-between transition-colors">
                  <span>+ Conduct & Discipline on Board</span>
                  <span className="text-amber-400 font-normal text-xs">Orderly Seating</span>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border-l-4 border-amber-500 text-xs font-bold text-slate-800">
                ★ Equipped with speed governors, CCTV cameras, female bus attendants, and live route monitoring for total peace of mind.
              </div>
            </div>

            {/* Right Column: Tall Yellow Bus Image Container */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] w-full rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 shrink-0">
              <Image
                src="/placeholder.png"
                alt="School Bus Transport Fleet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </section>

        {/* 4. FEE PAYMENT SCHEDULE & LATE FEES */}
        <section className="space-y-8">
          <SectionHeading
            badge="Financial Regulations"
            title="Fee Payment Schedule & Late Fee Policy"
            subtitle="Quarterly fee payment structure, installment due dates, and late payment penalty terms."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden space-y-6 p-6 sm:p-8">
            <div className="space-y-2">
              <h4 className="text-xl font-black text-slate-900">Quarterly Fee Schedule</h4>
              <p className="text-xs text-slate-600 font-medium">
                School fee payments have to be made on a quarterly basis. If desired, multiple instalments can be paid in advance.
              </p>
            </div>

            {/* Schedule Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 rounded-l-xl">Installment Term</th>
                    <th className="p-4">Period Covered</th>
                    <th className="p-4 rounded-r-xl">Payment Due Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {FEE_SCHEDULE.map((row, idx) => (
                    <tr key={idx} className={row.bg}>
                      <td className="p-4 font-extrabold text-slate-900 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>{row.installment}</span>
                      </td>
                      <td className="p-4 text-slate-600">{row.period}</td>
                      <td className="p-4 text-orange-700 font-black">{row.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Late Fees Box */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-black text-sm uppercase tracking-wider">
                <Clock className="w-4 h-4 text-rose-600" />
                <span>Late Fee Penalty Rules:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-bold text-slate-800 pt-1">
                <div className="bg-white p-3 rounded-xl border border-rose-200 flex items-center justify-between">
                  <span>First 15 days after due date:</span>
                  <span className="text-rose-700 font-black">Rs. 100</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 flex items-center justify-between">
                  <span>After 15 days of due date:</span>
                  <span className="text-rose-700 font-black">Rs. 100 + Rs. 50 / day</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WITHDRAWAL POLICY */}
        <section className="space-y-8">
          <SectionHeading
            badge="Administrative Process"
            title="Withdrawal Policy & School Leaving Certificate"
            subtitle="Formal application guidelines and fee clearance rules for student withdrawal."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-4">
            <h4 className="text-xl font-black text-slate-900">Withdrawal Guidelines</h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <p>
                Applications for withdrawal of students from the school should be submitted in writing on the school's prescribed form, addressed to the Head of the School at the earliest opportunity.
              </p>
              <p>
                If a student leaves school before the end of a term, fees will be payable for the full term.
              </p>
              <div className="p-4 bg-amber-50 rounded-2xl border-l-4 border-amber-500 text-slate-900 font-bold text-xs sm:text-sm">
                ★ The School Leaving Certificate (TC) will be issued only after all dues are cleared and all library books are returned.
              </div>
            </div>
          </div>
        </section>

        {/* 6. COMMUNICATION BETWEEN SCHOOL AND PARENTS & PTA */}
        <section className="space-y-8 pb-12">
          <SectionHeading
            badge="Parent Partnership"
            title="Communication Between School & Parents (PTA)"
            subtitle="School diary protocols, circular acknowledgements, address updates, and PTA liaison helpline numbers."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            
            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Contact Info */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">Contact Info Update</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Parents are expected to communicate to the school any change in address and contact details promptly.
                </p>
              </div>

              {/* Card 2: Appointments & Letters */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">Appointments & Letters</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Parents wishing to meet faculty and administrative staff should seek a prior appointment via the School Diary or by telephoning the school. All letters addressed to the school must mention the student's full name, class, and division.
                </p>
              </div>

              {/* Card 3: Circular Acknowledgement */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">Circular Acknowledgement</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Parents should acknowledge receipt of each circular issued by the school by signing the respective section in the diary. Wherever a response is required, it must be completed and returned via the child by the required deadline.
                </p>
              </div>

              {/* Card 4: School Diary Remarks */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">School Diary Remarks</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Parents are requested to read notes written in the School Diary by teachers and write their own remarks for the information of teachers.
                </p>
              </div>

            </div>

            {/* PTA Banner Callout */}
            <div className="p-5 bg-orange-50 rounded-2xl border-l-4 border-orange-600 text-xs sm:text-sm font-bold text-slate-900 leading-relaxed flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-orange-600 shrink-0" />
              <span>Communication between Dayanand Arya Vidya and our parents will be streamlined and liaised through our Parent Teacher Association (PTA).</span>
            </div>

            {/* Direct Contact Numbers Callout Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 space-y-6">
              <div className="space-y-2 text-center sm:text-left">
                <span className="px-3.5 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-black uppercase tracking-wider border border-orange-500/30">
                  School Enquiries & Issue Resolution
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">Parent Teacher Association Helpline</h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  If you have any issue or school related enquiry, kindly contact us on our official numbers:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                <a
                  href="tel:9431383057"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm transition-all shadow-lg hover:scale-105"
                >
                  <PhoneCall className="w-4 h-4 text-slate-950" />
                  <span>94313-83057</span>
                </a>
                <a
                  href="tel:8757674340"
                  className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-sm transition-all shadow-lg hover:scale-105"
                >
                  <PhoneCall className="w-4 h-4 text-white" />
                  <span>87576-74340</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
