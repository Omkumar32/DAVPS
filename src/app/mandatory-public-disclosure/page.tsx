import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { Download, FileText, CheckCircle2, ShieldCheck, ExternalLink, Video, Award, Users, Search, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Mandatory Public Disclosure | SARAS 7.0 Appendix IX",
  description: "Official CBSE SARAS 7.0 Mandatory Public Disclosure details for Dayanand Arya Vidya Public School, Mandar, Ranchi (Affiliation No. 3430396, School Code 66599).",
};

const GENERAL_INFO = [
  { sno: 1, label: "NAME OF THE SCHOOL", value: "DAYANAND ARYA VIDYA PUB SCH MANDAR RANCHI JH" },
  { sno: 2, label: "AFFILIATION NO. (IF APPLICABLE)", value: "3430396" },
  { sno: 3, label: "SCHOOL CODE (IF APPLICABLE)", value: "66599" },
  { sno: 4, label: "COMPLETE ADDRESS WITH PIN CODE", value: "DAYANAND ARYA VIDYA PUBLIC SCHOOL, KANDRI MORE, MANDAR, RANCHI, - 835214" },
  { sno: 5, label: "PRINCIPAL NAME", value: "RAJESH PRASAD DUTTA" },
  { sno: 6, label: "PRINCIPAL QUALIFICATION", value: "M.A B.Ed." },
  { sno: 7, label: "SCHOOL EMAIL ID", value: "davmandar01@gmail.com" },
  { sno: 8, label: "CONTACT DETAILS (LANDLINE/MOBILE)", value: "8757674340" },
];

const DOCUMENTS = [
  { sno: 1, title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", url: "https://www.dayanandaryaschool.in/affiliation_letter.php" },
  { sno: 2, title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", url: "https://www.dayanandaryaschool.in/trust_certificate.php" },
  { sno: 3, title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT", url: "https://www.dayanandaryaschool.in/noc.php" },
  { sno: 4, title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE", url: "https://www.dayanandaryaschool.in/noc.php" },
  { sno: 5, title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", url: "https://www.dayanandaryaschool.in/building.php" },
  { sno: 6, title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", url: "https://www.dayanandaryaschool.in/fire_safety.php" },
  { sno: 7, title: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION", url: "https://www.dayanandaryaschool.in/deo_certificate.php" },
  { sno: 8, title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", url: "https://www.dayanandaryaschool.in/water.php" },
];

const RESULTS_ACADEMICS = [
  { sno: 1, title: "FEE STRUCTURE OF THE SCHOOL", url: "https://www.dayanandaryaschool.in/fee_structure.php" },
  { sno: 2, title: "ANNUAL ACADEMIC CALENDER", url: "https://www.dayanandaryaschool.in/academic_calendar.php" },
  { sno: 3, title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", url: "https://www.dayanandaryaschool.in/smc.php" },
  { sno: 4, title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", url: "https://www.dayanandaryaschool.in/pta.php" },
  { sno: 5, title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY", url: "https://www.dayanandaryaschool.in/results.php" },
];

const STAFF_STATS = [
  { sno: 1, label: "PRINCIPAL", value: "RAJESH PRASAD DUTTA" },
  { sno: 2, label: "TOTAL NO. OF TEACHERS", value: "50" },
  { label: "• PGT (POST GRADUATE TEACHER)", value: "13" },
  { label: "• TGT (TRAINED GRADUATE TEACHER)", value: "25" },
  { label: "• PRT (PRIMARY TEACHER)", value: "11" },
  { sno: 3, label: "TEACHERS SECTION RATIO", value: "30:1" },
  { sno: 4, label: "DETAILS OF SPECIAL EDUCATOR", value: "REMA KUMARI (B.Ed. SPECIAL EDUCATION)" },
  { sno: 5, label: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER", value: "USHA SINGH (M.A. & B.Ed.)" },
];

const BOARD_RESULTS_X = [
  { year: "2025", registered: 277, passed: 262, passPercentage: "94.58%" }
];

const BOARD_RESULTS_XII = [
  { year: "2025", registered: 57, passed: 42, passPercentage: "73.68%" }
];

const INFRASTRUCTURE = [
  { sno: 1, label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)", value: "8096 SQ. MTRS." },
  { sno: 2, label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", value: "40 Classrooms (46 SQ. MTR Each)" },
  { sno: 3, label: "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)", value: "5 Laboratories (441 SQ. MTR Combined)" },
  { sno: 4, label: "INTERNET FACILITY", value: "YES" },
  { sno: 5, label: "NO. OF GIRLS TOILETS", value: "14" },
  { sno: 6, label: "NO. OF BOYS TOILETS", value: "14" },
  { sno: 7, label: "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING INFRASTRUCTURE", value: "https://youtu.be/YkVLjw2SCN8" },
];

const TEACHERS_50 = [
  { sno: 1, name: "MAHESH KUMAR SAW", designation: "TGT", qualification: "POST GRADUATE" },
  { sno: 2, name: "SATYENDRA KUMAR", designation: "TGT", qualification: "POST GRADUATE" },
  { sno: 3, name: "SUBODH KUMAR PANDEY", designation: "PGT", qualification: "Post Graduation" },
  { sno: 4, name: "REETA GIRI", designation: "TGT", qualification: "GRADUATE" },
  { sno: 5, name: "NEELAM KUMARI", designation: "PGT", qualification: "POST GRADUATE" },
  { sno: 6, name: "RAHUL RAJ", designation: "PGT", qualification: "BSC" },
  { sno: 7, name: "USHA SINGH", designation: "TGT", qualification: "MA" },
  { sno: 8, name: "TANNUSHREE KARMAKAR", designation: "PRT", qualification: "M.A." },
  { sno: 9, name: "RANJU SAHU", designation: "PRT", qualification: "BA" },
  { sno: 10, name: "JAYA DEY", designation: "PTI", qualification: "BA" },
  { sno: 11, name: "BINDU", designation: "TGT", qualification: "BA" },
  { sno: 12, name: "PRAMOD KUMAR", designation: "TGT", qualification: "M.SC" },
  { sno: 13, name: "RAKHI KUMARI VERMA", designation: "TGT", qualification: "MA" },
  { sno: 14, name: "DIPTI PRABHA", designation: "TGT", qualification: "MCA" },
  { sno: 15, name: "PRAKIRNA PRABHAS", designation: "PGT", qualification: "POST GRADUATION" },
  { sno: 16, name: "AARTI SINGH", designation: "TGT", qualification: "M.A." },
  { sno: 17, name: "SHWETA VERMA", designation: "PRT", qualification: "GRADUATION" },
  { sno: 18, name: "DEEPMALA KUMARI", designation: "PRT", qualification: "GRADUATION" },
  { sno: 19, name: "PREMLATA", designation: "TGT", qualification: "B.A." },
  { sno: 20, name: "KRISHNA SINGH", designation: "TGT", qualification: "GRADUATION" },
  { sno: 21, name: "NITU KUMARI PATHAK", designation: "TGT", qualification: "SANGEET PRABHAKAR" },
  { sno: 22, name: "PUPEN KHALKHO", designation: "TGT", qualification: "B.A." },
  { sno: 23, name: "OM PRAKASH SHARMA", designation: "TGT", qualification: "B.A." },
  { sno: 24, name: "BANDANA KUMARI", designation: "PGT", qualification: "M.A." },
  { sno: 25, name: "PANCHALI KUMARI", designation: "TGT", qualification: "B.A." },
  { sno: 26, name: "SADHANA SINGH", designation: "TGT", qualification: "M.A." },
  { sno: 27, name: "NEERU KUMARI", designation: "PRT", qualification: "B.A." },
  { sno: 28, name: "BIPENDRA PANDEY", designation: "TGT", qualification: "B.A." },
  { sno: 29, name: "SUNAINA INDWAR", designation: "TGT", qualification: "M.SC." },
  { sno: 30, name: "SHIVESH KUMAR", designation: "PTI", qualification: "POST GRADUATE" },
  { sno: 31, name: "RAJESH PRASAD DUTTA", designation: "PRINCIPAL", qualification: "M.A" },
  { sno: 32, name: "ANAMIKA SINGH", designation: "TGT", qualification: "B.SC." },
  { sno: 33, name: "SUJATA KUMARI", designation: "PRT", qualification: "M.A." },
  { sno: 34, name: "KAMLESH KUMAR PASWAN", designation: "PGT", qualification: "B.A." },
  { sno: 35, name: "RAJENDRA KUMAR", designation: "PGT", qualification: "B.A." },
  { sno: 36, name: "SHIV BHAJAN PRASAD", designation: "PGT", qualification: "M.A." },
  { sno: 37, name: "REHANA KHATOON", designation: "TGT", qualification: "B.A." },
  { sno: 38, name: "SHRISTI KUMARI", designation: "TGT", qualification: "M.A." },
  { sno: 39, name: "KISHOR KUMAR DAS", designation: "TGT", qualification: "M.A." },
  { sno: 40, name: "HEMLATA SAHU", designation: "PGT", qualification: "B.A." },
  { sno: 41, name: "NEHA KUMARI", designation: "TGT", qualification: "B.A." },
  { sno: 42, name: "KUMARI DEEPSHIKHA", designation: "PRT", qualification: "M.A." },
  { sno: 43, name: "SHWETA SINGH", designation: "PRT", qualification: "M.A." },
  { sno: 44, name: "NEHA SINHA", designation: "PRT", qualification: "B.COM" },
  { sno: 45, name: "RENU DEVI", designation: "PRT", qualification: "B.Sc." },
  { sno: 46, name: "PRITI RAJ", designation: "PGT", qualification: "M.SC." },
  { sno: 47, name: "JUEL EKKA", designation: "PGT", qualification: "M.A." },
  { sno: 48, name: "JYOTI KUMARI", designation: "PGT", qualification: "M.COM" },
  { sno: 49, name: "SNEHA KUMARI", designation: "TGT", qualification: "B.A." },
  { sno: 50, name: "NITU KUMARI", designation: "PRT", qualification: "B.A." },
];

export default function MandatoryPublicDisclosurePage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50 min-h-screen">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Mandatory Public Disclosure"
        subtitle="APPENDIX - IX | Mandatory Disclosure Details (SARAS 7.0) — Dayanand Arya Vidya Public School"
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* APPENDIX IX NOTICE BANNER */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="px-3.5 py-1 bg-amber-400 text-slate-950 rounded-full text-xs font-black uppercase tracking-wider">
              CBSE SARAS 7.0 APPENDIX - IX
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              DAYANAND ARYA VIDYA PUB SCH MANDAR RANCHI JH
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Affiliation No: <span className="text-amber-400 font-black">3430396</span> | School Code: <span className="text-amber-400 font-black">66599</span> | Contact: <span className="text-amber-400 font-black">8757674340</span>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-bold shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* A : GENERAL INFORMATION */}
        <section className="space-y-6">
          <SectionHeading
            badge="A : GENERAL INFORMATION"
            title="General Information & School Credentials"
            subtitle="Official registration numbers, school address, and head of institution details."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 w-16">SL NO.</th>
                    <th className="p-4 w-1/3">INFORMATION</th>
                    <th className="p-4">DETAILS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {GENERAL_INFO.map((row) => (
                    <tr key={row.sno} className={row.sno % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="p-4 font-bold text-slate-400">{row.sno}</td>
                      <td className="p-4 font-black text-slate-900">{row.label}</td>
                      <td className="p-4 text-orange-700 font-extrabold">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* B : DOCUMENTS AND INFORMATION */}
        <section className="space-y-6">
          <SectionHeading
            badge="B : DOCUMENTS AND INFORMATION"
            title="Regulatory Certificates & Clearances"
            subtitle="Self-attested copies of certificates uploaded on school website as per norms."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 w-16">SL NO.</th>
                    <th className="p-4 w-2/3">DOCUMENTS / INFORMATION</th>
                    <th className="p-4 text-right">LINKS OF UPLOADED DOCUMENTS ON SCHOOL WEBSITE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {DOCUMENTS.map((doc) => (
                    <tr key={doc.sno} className={doc.sno % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="p-4 font-bold text-slate-400">{doc.sno}</td>
                      <td className="p-4 font-bold text-slate-900 flex items-center gap-3">
                        <FileText className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>{doc.title}</span>
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-black shadow-sm transition-all"
                        >
                          <span>Open Document</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* C : RESULT AND ACADEMICS */}
        <section className="space-y-6">
          <SectionHeading
            badge="C : RESULT AND ACADEMICS"
            title="Academic & Fee Disclosures"
            subtitle="Fee structure, academic calendar, SMC, PTA list, and 3-year board results."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 w-16">SL NO.</th>
                    <th className="p-4 w-2/3">DOCUMENTS / INFORMATION</th>
                    <th className="p-4 text-right">LINKS OF UPLOADED DOCUMENTS ON SCHOOL WEBSITE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {RESULTS_ACADEMICS.map((item) => (
                    <tr key={item.sno} className={item.sno % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="p-4 font-bold text-slate-400">{item.sno}</td>
                      <td className="p-4 font-bold text-slate-900 flex items-center gap-3">
                        <Award className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{item.title}</span>
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-xl text-xs font-black shadow-sm transition-all"
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* D : STAFF (TEACHING) & BOARD RESULTS */}
        <section className="space-y-8">
          <SectionHeading
            badge="D : STAFF (TEACHING)"
            title="Staff Strengths & Board Exam Performance"
            subtitle="Teaching staff counts, special educator, counselor details, and 2025 Board Examination pass percentages."
          />

          {/* Staff Stats Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 w-16">SL NO.</th>
                    <th className="p-4 w-1/2">INFORMATION</th>
                    <th className="p-4">DETAILS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {STAFF_STATS.map((staff, idx) => (
                    <tr key={idx} className={staff.sno ? "bg-slate-50 font-black" : ""}>
                      <td className="p-4 font-bold text-slate-400">{staff.sno || ""}</td>
                      <td className="p-4 text-slate-900">{staff.label}</td>
                      <td className="p-4 text-orange-700 font-extrabold">{staff.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Board Exam Results Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Class X Results */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-black text-slate-900">RESULT CLASS: X</h4>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-black">
                  Pass: 94.58%
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                      <th className="p-3">YEAR</th>
                      <th className="p-3">REGISTERED</th>
                      <th className="p-3">PASSED</th>
                      <th className="p-3">PASS %</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold text-slate-800">
                    {BOARD_RESULTS_X.map((r, idx) => (
                      <tr key={idx} className="bg-slate-50">
                        <td className="p-3 font-black text-slate-900">{r.year}</td>
                        <td className="p-3 text-slate-600">{r.registered}</td>
                        <td className="p-3 text-slate-600">{r.passed}</td>
                        <td className="p-3 text-emerald-700 font-black">{r.passPercentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Class XII Results */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-black text-slate-900">RESULT CLASS: XII</h4>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black">
                  Pass: 73.68%
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                      <th className="p-3">YEAR</th>
                      <th className="p-3">REGISTERED</th>
                      <th className="p-3">PASSED</th>
                      <th className="p-3">PASS %</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold text-slate-800">
                    {BOARD_RESULTS_XII.map((r, idx) => (
                      <tr key={idx} className="bg-slate-50">
                        <td className="p-3 font-black text-slate-900">{r.year}</td>
                        <td className="p-3 text-slate-600">{r.registered}</td>
                        <td className="p-3 text-slate-600">{r.passed}</td>
                        <td className="p-3 text-amber-700 font-black">{r.passPercentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* E : SCHOOL INFRASTRUCTURE */}
        <section className="space-y-6">
          <SectionHeading
            badge="E : SCHOOL INFRASTRUCTURE"
            title="Infrastructure & Sanitation Details"
            subtitle="Campus area, classroom measurements, lab area, and YouTube inspection video link."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 w-16">SL NO.</th>
                    <th className="p-4 w-1/2">INFORMATION</th>
                    <th className="p-4">DETAILS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  {INFRASTRUCTURE.map((row) => (
                    <tr key={row.sno} className={row.sno % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="p-4 font-bold text-slate-400">{row.sno}</td>
                      <td className="p-4 font-black text-slate-900">{row.label}</td>
                      <td className="p-4 text-orange-700 font-extrabold">
                        {row.value.startsWith("http") ? (
                          <a
                            href={row.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-black shadow-md transition-all"
                          >
                            <Video className="w-4 h-4" />
                            <span>Watch YouTube Campus Inspection Video</span>
                          </a>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* F : TEACHER DETAILS TABLE (50 TEACHERS) */}
        <section className="space-y-6">
          <SectionHeading
            badge="F : TEACHER DETAILS"
            title="Complete 50-Member Faculty Roster"
            subtitle="Official SARAS 7.0 registered teaching staff list with designations and qualifications."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4 w-16">SL NO.</th>
                    <th className="p-4">TEACHER NAME</th>
                    <th className="p-4">DESIGNATION</th>
                    <th className="p-4">QUALIFICATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  {TEACHERS_50.map((t) => (
                    <tr key={t.sno} className={t.sno % 2 === 0 ? "bg-slate-50" : ""}>
                      <td className="p-4 font-bold text-slate-400">{t.sno}</td>
                      <td className="p-4 font-extrabold text-slate-900">{t.name}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-bold">
                          {t.designation}
                        </span>
                      </td>
                      <td className="p-4 text-orange-700 font-bold">{t.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
