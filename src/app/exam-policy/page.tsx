import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { BookOpen, ShieldAlert, Award, CheckCircle2, AlertTriangle, FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Examination Policy | Dayanand Arya Vidya Public School",
  description: "Official examination norms, grading criteria, continuous assessment scheme, pass rules, and conduct guidelines at Dayanand Arya Vidya Public School.",
};

export default function ExamPolicyPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Examination & Assessment Policy"
        subtitle="Official CBSE continuous assessment framework, achievement grading norms, and examination integrity terms."
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. ASSESSMENT SCHEME */}
        <section className="space-y-8">
          <SectionHeading
            badge="Evaluation Scheme"
            title="Continuous & Comprehensive Assessment"
            subtitle="Two major terms per academic year, periodic tests, and holistic grading."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Term 1 Examination (April - Sept)</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Includes Periodic Assessment 1 (PA-1), subject enrichment activities, portfolio evaluation, notebook submission grades, and Mid-Term Half-Yearly Examinations.
              </p>
              <div className="p-4 bg-orange-50 rounded-2xl text-xs font-bold text-slate-800">
                ★ 50% Annual Weightage Coverage
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Term 2 Examination (Oct - March)</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Includes Periodic Assessment 2 (PA-2), pre-board examinations for Class X & XII, practical laboratory exams, and the Annual Cumulative Examination.
              </p>
              <div className="p-4 bg-amber-50 rounded-2xl text-xs font-bold text-slate-800">
                ★ 50% Annual Weightage Coverage
              </div>
            </div>
          </div>
        </section>

        {/* 2. GRADING SCALE TABLE */}
        <section className="space-y-8">
          <SectionHeading
            badge="CBSE Standards"
            title="9-Point Scholastic Grading Scale"
            subtitle="Achievement grades awarded based on continuous evaluation."
          />

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-black uppercase tracking-wider">
                    <th className="p-4">Marks Range</th>
                    <th className="p-4">Grade</th>
                    <th className="p-4">Performance Indicator</th>
                    <th className="p-4">Grade Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-semibold text-slate-800">
                  <tr className="bg-emerald-50/60">
                    <td className="p-4 font-black">91% - 100%</td>
                    <td className="p-4 font-extrabold text-emerald-700">A1</td>
                    <td className="p-4">Top Outstanding Performance</td>
                    <td className="p-4 font-black">10.0</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-black">81% - 90%</td>
                    <td className="p-4 font-extrabold text-emerald-600">A2</td>
                    <td className="p-4">Excellent Performance</td>
                    <td className="p-4 font-black">9.0</td>
                  </tr>
                  <tr className="bg-amber-50/60">
                    <td className="p-4 font-black">71% - 80%</td>
                    <td className="p-4 font-extrabold text-amber-700">B1</td>
                    <td className="p-4">Very Good Performance</td>
                    <td className="p-4 font-black">8.0</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-black">61% - 70%</td>
                    <td className="p-4 font-extrabold text-amber-600">B2</td>
                    <td className="p-4">Good Performance</td>
                    <td className="p-4 font-black">7.0</td>
                  </tr>
                  <tr className="bg-orange-50/60">
                    <td className="p-4 font-black">51% - 60%</td>
                    <td className="p-4 font-extrabold text-orange-700">C1</td>
                    <td className="p-4">Above Average Performance</td>
                    <td className="p-4 font-black">6.0</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-black">41% - 50%</td>
                    <td className="p-4 font-extrabold text-orange-600">C2</td>
                    <td className="p-4">Average Performance</td>
                    <td className="p-4 font-black">5.0</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-black">33% - 40%</td>
                    <td className="p-4 font-extrabold text-slate-700">D</td>
                    <td className="p-4">Pass Criteria Threshold</td>
                    <td className="p-4 font-black">4.0</td>
                  </tr>
                  <tr className="bg-rose-50 text-rose-800">
                    <td className="p-4 font-black">Below 33%</td>
                    <td className="p-4 font-extrabold text-rose-700">E1 / E2</td>
                    <td className="p-4">Needs Remedial Assistance / Re-examination</td>
                    <td className="p-4 font-black">0.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. EXAMINATION INTEGRITY & ABSENCE NORMS */}
        <section className="space-y-8">
          <SectionHeading
            badge="Integrity & Norms"
            title="Examination Conduct & Medical Absence Policy"
            subtitle="Strict rules governing examination integrity and medical leave exceptions."
          />

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-rose-400 shrink-0" />
                <h4 className="text-xl font-black">Strict Prohibition of Unfair Means (UFM)</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Students found cheating, using unauthorized notes, or communicating during any examination will be awarded <strong>zero marks</strong> for that paper and face disciplinary action.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-400 shrink-0" />
                <h4 className="text-xl font-black">Medical Condition & Absence Policy</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Students absent from an examination will <strong>not be re-examined</strong> except in the case of a serious, verified medical condition certified by a registered medical practitioner. In cases of unexcused absence, students will be excluded from rank merit list, prizes, and academic awards.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
