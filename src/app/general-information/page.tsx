"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSiteSettings } from "@/context/SiteSettingsContext";
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
  HelpCircle,
  ChevronRight,
  MapPin,
  ShieldCheck,
  UserCheck,
  Compass
} from "lucide-react";

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

function FullWidthWaveDivider() {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-1 sm:my-2 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
      <svg
        className="w-full h-10 sm:h-14 block"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C280,95 520,10 760,75 C1000,140 1240,25 1440,50 L1440,120 L0,120 Z"
          fill="url(#wave-gradient)"
        />
        <path
          d="M0,32 C280,95 520,10 760,75 C1000,140 1240,25 1440,50"
          stroke="url(#stroke-gradient)"
          strokeWidth="2.5"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFEBDC" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFF4EC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFF7F0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE5D3" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FFD3B5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFE5D3" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function GeneralInformationPage() {
  const { settings } = useSiteSettings();

  const heroBadge = settings.genInfoHeroBadge || "Dayanand Arya Vidya Public School";
  const heroTitle = settings.genInfoHeroTitle || "General Information";
  const heroSubtitle = settings.genInfoHeroSubtitle || "Official Academic Regulations, Fee Payment Schedule, Examination Norms, Student Care & Parent Guidelines.";
  const heroImage = settings.genInfoHeroImage || "";

  const evalTitle = settings.genInfoEvalTitle || "Evaluation & Examination System";
  const evalSubtitle = settings.genInfoEvalSubtitle || "Continuous assessment policy, achievement grades, effort grading, and examination integrity rules.";
  const evalCard1Heading = settings.genInfoEvalCard1Heading || "Continuous Evaluation Policy";
  const evalCard1Text1 = settings.genInfoEvalCard1Text1 || "The school follows a system of continuous evaluation and regularly provides parents with an assessment of their child's academic progress, based on a comprehensive system of tests, examinations, grades, reports, and parent-teacher meetings.";
  const evalCard1Text2 = settings.genInfoEvalCard1Text2 || "The school follows a policy of awarding grades rather than marks for class assessments. Tests, Quizzes, and other class assessments will receive achievement grades while effort grades may be given for homework, class work, and projects.";
  const evalCard1Highlight = settings.genInfoEvalCard1Highlight || "✓ Continuous evaluation ensures stress-free, holistic academic growth without high-pressure competitive fatigue.";
  const evalCard2Heading = settings.genInfoEvalCard2Heading || "Examination Rules";
  const evalCard2Sub = settings.genInfoEvalCard2Sub || "Two Main Sets Per Academic Year";
  const evalCard2Text = settings.genInfoEvalCard2Text || "The school holds two sets of examinations in an academic year. The combination of grades and reports serves to assess the progress of the student.";
  const evalCard2Rule1 = settings.genInfoEvalCard2Rule1 || "Integrity Rule: Students found cheating in any examination will be given zero marks for that paper.";
  const evalCard2Rule2 = settings.genInfoEvalCard2Rule2 || "Absence Norms: Absent students will not be re-examined except in cases of serious, verified medical conditions. Unexpected absence excludes students from prizes and awards.";

  const ptmTitle = settings.genInfoPtmTitle || "PTM, Promotions & Tuitions Policy";
  const ptmSubtitle = settings.genInfoPtmSubtitle || "Monthly parent-teacher interaction, promotion criteria, in-house extra classes, and strict tuition guidelines.";
  const ptmCard1Title = settings.genInfoPtmCard1Title || "Parent-Teachers Meetings";
  const ptmCard1Desc = settings.genInfoPtmCard1Desc || "There will be monthly parent-teacher meetings. All parents are requested to be present for regular updates. Parents can also fix up prior appointments with teachers to discuss their child's progress.";
  const ptmCard1Badge = settings.genInfoPtmCard1Badge || "★ Monthly Regular Attendance Required";

  const ptmCard2Title = settings.genInfoPtmCard2Title || "Promotions Criteria";
  const ptmCard2Desc = settings.genInfoPtmCard2Desc || "Promotions are decided based on the student's performance throughout the year. A student who fails to secure promotion for the second time in his/her school career may be asked to leave the school.";
  const ptmCard2Badge = settings.genInfoPtmCard2Badge || "★ Year-Round Performance Metric";

  const ptmCard3Title = settings.genInfoPtmCard3Title || "In-House Extra Classes";
  const ptmCard3Desc = settings.genInfoPtmCard3Desc || "Extra classes are scheduled on a regular basis for students who require additional guidance. Parents will be contacted directly when it is determined that a student would benefit from extra classes.";
  const ptmCard3Badge = settings.genInfoPtmCard3Badge || "★ Free Remedial Guidance After School";

  const ptmCard4Title = settings.genInfoPtmCard4Title || "Private Tuitions Policy";
  const ptmCard4Desc = settings.genInfoPtmCard4Desc || "Students are strongly discouraged from taking private tuitions. Parents needing extra help for their children should discuss needs with respective class teachers so after-school extra classes can be arranged.";
  const ptmCard4Badge = settings.genInfoPtmCard4Badge || "★ Private Tuitions Discouraged";

  const transTitle = settings.genInfoTransTitle || "School Transport Services";
  const transSubtitle = settings.genInfoTransSubtitle || "Safe GPS bus transport fleet ensuring comfortable pick-up and drop-off for students.";
  const transHeading = settings.genInfoTransHeading || "School Transport Fleet";
  const transDesc = settings.genInfoTransDesc || "Dayanand Arya Vidya Public School, provides buses for pick-up and drop-off children. This ensures that children reach the school comfortably.";
  const transImage = settings.genInfoTransImage || "/placeholder.png";
  const transRule1 = settings.genInfoTransRule1 || "Bus Stops & Routes: Mandar, Ranchi & Environs";
  const transRule2 = settings.genInfoTransRule2 || "Transport Rules & Safety Policy: Speed Limiters & CCTV";
  const transRule3 = settings.genInfoTransRule3 || "Female Bus Attendants & Live GPS Monitoring";
  const transRule4 = settings.genInfoTransRule4 || "Conduct & Discipline on Board: Orderly Seating";
  const transFooter = settings.genInfoTransFooter || "★ Equipped with speed governors, CCTV cameras, female bus attendants, and live route monitoring for total peace of mind.";

  const feeTitle = settings.genInfoFeeTitle || "Fee Payment Schedule & Late Fee Policy";
  const feeSubtitle = settings.genInfoFeeSubtitle || "Quarterly fee payment structure, installment due dates, and late payment penalty terms.";
  const feeDesc = settings.genInfoFeeDesc || "School fee payments have to be made on a quarterly basis. If desired, multiple instalments can be paid in advance.";
  const feeLate1 = settings.genInfoFeeLate1 || "Rs. 100";
  const feeLate2 = settings.genInfoFeeLate2 || "Rs. 100 + Rs. 50 / day";

  const withdrawTitle = settings.genInfoWithdrawTitle || "Withdrawal Policy & School Leaving Certificate";
  const withdrawSubtitle = settings.genInfoWithdrawSubtitle || "Formal application guidelines and fee clearance rules for student withdrawal.";
  const withdrawText1 = settings.genInfoWithdrawText1 || "Applications for withdrawal of students from the school should be submitted in writing on the school's prescribed form, addressed to the Head of the School at the earliest opportunity.";
  const withdrawText2 = settings.genInfoWithdrawText2 || "If a student leaves school before the end of a term, fees will be payable for the full term.";
  const withdrawHighlight = settings.genInfoWithdrawHighlight || "★ The School Leaving Certificate (TC) will be issued only after all dues are cleared and all library books are returned.";

  const ptaTitle = settings.genInfoPtaTitle || "Communication Between School & Parents (PTA)";
  const ptaSubtitle = settings.genInfoPtaSubtitle || "School diary protocols, circular acknowledgements, address updates, and PTA liaison helpline numbers.";
  const ptaCard1Title = settings.genInfoPtaCard1Title || "Contact Info Update";
  const ptaCard1Desc = settings.genInfoPtaCard1Desc || "Parents are expected to communicate to the school any change in address and contact details promptly.";
  const ptaCard2Title = settings.genInfoPtaCard2Title || "Appointments & Letters";
  const ptaCard2Desc = settings.genInfoPtaCard2Desc || "Parents wishing to meet faculty and administrative staff should seek a prior appointment via the School Diary or by telephoning the school. All letters addressed to the school must mention the student's full name, class, and division.";
  const ptaCard3Title = settings.genInfoPtaCard3Title || "Circular Acknowledgement";
  const ptaCard3Desc = settings.genInfoPtaCard3Desc || "Parents should acknowledge receipt of each circular issued by the school by signing the respective section in the diary. Wherever a response is required, it must be completed and returned via the child by the required deadline.";
  const ptaCard4Title = settings.genInfoPtaCard4Title || "School Diary Remarks";
  const ptaCard4Desc = settings.genInfoPtaCard4Desc || "Parents are requested to read notes written in the School Diary by teachers and write their own remarks for the information of teachers.";
  const ptaBanner = settings.genInfoPtaBanner || "Communication between Dayanand Arya Vidya and our parents will be streamlined and liaised through our Parent Teacher Association (PTA).";
  const ptaPhone1 = settings.genInfoPtaPhone1 || "94313-83057";
  const ptaPhone2 = settings.genInfoPtaPhone2 || "87576-74340";
  return (
    <div className="space-y-5 sm:space-y-6 pb-8 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title={heroTitle}
        subtitle={heroSubtitle}
        category={heroBadge}
        bgImage={heroImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">

        {/* 1. EVALUATION & EXAMINATION */}
        <section className="space-y-6 relative">
          <SectionHeading
            title={evalTitle}
            subtitle={evalSubtitle}
          />

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              
              {/* Left Card: Continuous Evaluation Policy */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{evalCard1Heading}</h3>
                      <p className="text-xs font-extrabold text-orange-600 tracking-wider uppercase mt-0.5">Achievement & Effort Grading</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {evalCard1Text1 && <p>{evalCard1Text1}</p>}
                    {evalCard1Text2 && (
                      <p>
                        The school follows a policy of awarding <strong className="font-bold text-slate-900">grades rather than marks</strong> for class assessments. Tests, Quizzes, and other class assessments will receive achievement grades while effort grades may be given for homework, class work, and projects.
                      </p>
                    )}
                  </div>
                </div>

                {evalCard1Highlight && (
                  <div className="p-4 bg-orange-50/80 border border-orange-200/80 rounded-2xl flex items-start gap-3 mt-auto">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
                      {evalCard1Highlight.replace(/^✓\s*/, "")}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Card: Examination Rules */}
              <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
                {/* Background Ambient Glow & Dot Grid */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute top-3 right-3 w-32 h-32 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:8px_8px]" />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25">
                      <BookOpen className="w-7 h-7 text-slate-950" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{evalCard2Heading}</h3>
                      <p className="text-xs font-black text-amber-400 tracking-wider uppercase mt-0.5">{evalCard2Sub}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    The school holds <strong className="font-bold text-white">two main sets of examinations</strong> in an academic year. The combination of continuous grades and term reports serves to assess comprehensive student progress.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    {evalCard2Rule1 && (
                      <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 p-4 rounded-2xl flex items-start gap-3.5 hover:border-slate-600 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                          <ShieldAlert className="w-4.5 h-4.5 text-rose-400" />
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <strong className="font-bold text-white block mb-0.5">Integrity Rule:</strong>
                          <span>Students found cheating in any examination will be given zero marks for that paper.</span>
                        </div>
                      </div>
                    )}
                    {evalCard2Rule2 && (
                      <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 p-4 rounded-2xl flex items-start gap-3.5 hover:border-slate-600 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertTriangle className="w-4.5 h-4.5 text-amber-400" />
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <strong className="font-bold text-white block mb-0.5">Absence Norms:</strong>
                          <span>Absent students will not be re-examined except for serious verified medical conditions. Unexpected absence excludes students from awards.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Soft Wave Curve Divider 1 */}
        <FullWidthWaveDivider />

        {/* 2. PTM, PROMOTIONS, EXTRA CLASSES & TUITIONS */}
        <section className="space-y-4 sm:space-y-5">
          <SectionHeading
            title={ptmTitle}
            subtitle={ptmSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* PTM Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">{ptmCard1Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptmCard1Desc}
                </p>
              </div>
              {ptmCard1Badge && (
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-orange-600">
                  {ptmCard1Badge}
                </div>
              )}
            </div>

            {/* Promotions Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">{ptmCard2Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptmCard2Desc}
                </p>
              </div>
              {ptmCard2Badge && (
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-600">
                  {ptmCard2Badge}
                </div>
              )}
            </div>

            {/* Extra Classes Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">{ptmCard3Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptmCard3Desc}
                </p>
              </div>
              {ptmCard3Badge && (
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                  {ptmCard3Badge}
                </div>
              )}
            </div>

            {/* Tuitions Prohibition Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg space-y-4 flex flex-col justify-between hover:border-orange-500 transition-all">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-slate-900">{ptmCard4Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptmCard4Desc}
                </p>
              </div>
              {ptmCard4Badge && (
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-rose-600">
                  {ptmCard4Badge}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Soft Wave Curve Divider 2 */}
        <FullWidthWaveDivider />

        {/* 3. TRANSPORT SERVICES */}
        <section className="space-y-4 sm:space-y-5">
          <SectionHeading
            title={transTitle}
            subtitle={transSubtitle}
          />

          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25">
                    <Bus className="w-7 h-7 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{transHeading}</h4>
                    <p className="text-xs font-black text-amber-600 tracking-wider uppercase mt-0.5">Safe Pickup & Drop-Off Services</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {transDesc}
                </p>
              </div>

              {/* Transport Guidelines Cards */}
              <div className="space-y-2.5">
                {transRule1 && (
                  <div className="bg-slate-50 hover:bg-amber-50/60 border border-slate-200/90 hover:border-amber-400/80 p-3.5 rounded-2xl flex items-center gap-3.5 transition-all shadow-sm group">
                    <div className="w-9 h-9 rounded-xl bg-amber-100/80 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                      <MapPin className="w-4.5 h-4.5 text-amber-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{transRule1}</span>
                  </div>
                )}
                {transRule2 && (
                  <div className="bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/90 hover:border-emerald-400/80 p-3.5 rounded-2xl flex items-center gap-3.5 transition-all shadow-sm group">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-4.5 h-4.5 text-emerald-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{transRule2}</span>
                  </div>
                )}
                {transRule3 && (
                  <div className="bg-slate-50 hover:bg-blue-50/60 border border-slate-200/90 hover:border-blue-400/80 p-3.5 rounded-2xl flex items-center gap-3.5 transition-all shadow-sm group">
                    <div className="w-9 h-9 rounded-xl bg-blue-100/80 border border-blue-200 text-blue-800 flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                      <UserCheck className="w-4.5 h-4.5 text-blue-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{transRule3}</span>
                  </div>
                )}
                {transRule4 && (
                  <div className="bg-slate-50 hover:bg-purple-50/60 border border-slate-200/90 hover:border-purple-400/80 p-3.5 rounded-2xl flex items-center gap-3.5 transition-all shadow-sm group">
                    <div className="w-9 h-9 rounded-xl bg-purple-100/80 border border-purple-200 text-purple-800 flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                      <Compass className="w-4.5 h-4.5 text-purple-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{transRule4}</span>
                  </div>
                )}
              </div>

              {transFooter && (
                <div className="p-4 bg-orange-50/80 border border-orange-200/80 rounded-2xl flex items-start gap-3 mt-auto">
                  <Sparkles className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
                    {transFooter.replace(/^★\s*/, "")}
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Transport Image Container with Floating Badge */}
            <div className="lg:col-span-5 relative h-full min-h-[320px] sm:min-h-[360px] w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200 shrink-0 bg-slate-900 group">
              {transImage.startsWith("data:") ? (
                <img
                  src={transImage}
                  alt="School Bus Transport Fleet"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <Image
                  src={transImage}
                  alt="School Bus Transport Fleet"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              )}
              {/* Overlay Gradient & Floating Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
                  <Bus className="w-4.5 h-4.5 text-slate-950" />
                </div>
                <div className="text-xs font-bold leading-tight">
                  <p className="text-white">GPS Fleet Tracking & CCTV</p>
                  <p className="text-amber-400 text-[11px] font-semibold">100% Safe Student Transport</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Wave Curve Divider 3 */}
        <FullWidthWaveDivider />

        {/* 4. FEE PAYMENT SCHEDULE & LATE FEES */}
        <section className="space-y-4 sm:space-y-5">
          <SectionHeading
            title={feeTitle}
            subtitle={feeSubtitle}
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden space-y-6 p-6 sm:p-8">
            <div className="space-y-2">
              <h4 className="text-xl font-black text-slate-900">Quarterly Fee Schedule</h4>
              <p className="text-xs text-slate-600 font-medium">
                {feeDesc}
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
                  <span className="text-rose-700 font-black">{feeLate1}</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-rose-200 flex items-center justify-between">
                  <span>After 15 days of due date:</span>
                  <span className="text-rose-700 font-black">{feeLate2}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Wave Curve Divider 4 */}
        <FullWidthWaveDivider />

        {/* 5. WITHDRAWAL POLICY */}
        <section className="space-y-4 sm:space-y-5">
          <SectionHeading
            title={withdrawTitle}
            subtitle={withdrawSubtitle}
          />

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-4">
            <h4 className="text-xl font-black text-slate-900">Withdrawal Guidelines</h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {withdrawText1 && <p>{withdrawText1}</p>}
              {withdrawText2 && <p>{withdrawText2}</p>}
              {withdrawHighlight && (
                <div className="p-4 bg-amber-50 rounded-2xl border-l-4 border-amber-500 text-slate-900 font-bold text-xs sm:text-sm">
                  {withdrawHighlight}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Soft Wave Curve Divider 5 */}
        <FullWidthWaveDivider />

        {/* 6. COMMUNICATION BETWEEN SCHOOL AND PARENTS & PTA */}
        <section className="space-y-4 sm:space-y-5 pb-12">
          <SectionHeading
            title={ptaTitle}
            subtitle={ptaSubtitle}
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            
            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Contact Info */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">{ptaCard1Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptaCard1Desc}
                </p>
              </div>

              {/* Card 2: Appointments & Letters */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">{ptaCard2Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptaCard2Desc}
                </p>
              </div>

              {/* Card 3: Circular Acknowledgement */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">{ptaCard3Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptaCard3Desc}
                </p>
              </div>

              {/* Card 4: School Diary Remarks */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 hover:border-orange-500 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900">{ptaCard4Title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {ptaCard4Desc}
                </p>
              </div>

            </div>

            {/* PTA Banner Callout */}
            {ptaBanner && (
              <div className="p-5 bg-orange-50 rounded-2xl border-l-4 border-orange-600 text-xs sm:text-sm font-bold text-slate-900 leading-relaxed flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-orange-600 shrink-0" />
                <span>{ptaBanner}</span>
              </div>
            )}

            {/* Direct Contact Numbers Callout Card */}
            <div className="bg-[#101935] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
              {/* Background Ambient Glow Accent */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-3 right-3 w-32 h-32 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:8px_8px]" />

              <div className="space-y-2 text-center sm:text-left relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-amber-500/15 text-amber-300 rounded-full text-xs font-black uppercase tracking-wider border border-amber-500/30">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  School Enquiries & Issue Resolution
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">Parent Teacher Association Helpline</h4>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  If you have any issue or school related enquiry, kindly contact us on our official numbers:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl relative z-10">
                {ptaPhone1 && (
                  <a
                    href={`tel:${ptaPhone1.replace(/[^0-9]/g, "")}`}
                    className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-sm transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
                  >
                    <PhoneCall className="w-4.5 h-4.5 text-slate-950" />
                    <span>{ptaPhone1}</span>
                  </a>
                )}
                {ptaPhone2 && (
                  <a
                    href={`tel:${ptaPhone2.replace(/[^0-9]/g, "")}`}
                    className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm transition-all shadow-lg shadow-orange-500/20 hover:scale-105"
                  >
                    <PhoneCall className="w-4.5 h-4.5 text-white" />
                    <span>{ptaPhone2}</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
