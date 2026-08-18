import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Award,
  BookOpen,
  Sparkles,
  HeartHandshake,
  BrainCircuit,
  Lightbulb,
  ShieldCheck,
  Calendar,
  Monitor,
  Music,
  PhoneCall,
  Star,
  CheckCircle2,
  Building2,
  Compass,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Our School | Dayanand Arya Vidya Public School",
  description: "Learn about Dayanand Arya Vidya Public School's philosophy, 9 salient features, tested teaching methods, teaching subjects, PTM system, and holistic co-curricular education.",
};

const SALIENT_FEATURES = [
  {
    title: "Child-Oriented Methodology",
    desc: "Imparting child-oriented education with innovative and interactive methodology.",
    icon: BrainCircuit,
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Congenial Atmosphere",
    desc: "Creating healthy and congenial atmosphere to generate love for knowledge in the child.",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Comprehensive Syllabus & CCE",
    desc: "Implementation of comprehensive and composite syllabus with continuous evaluation system.",
    icon: BookOpen,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Highest Order Discipline",
    desc: "Discipline of highest order in every sphere of activities.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Noble Moral & Aesthetic Values",
    desc: "Inculcating noble, moral and aesthetic values into the character of the children for shaping them up as ideal citizens.",
    icon: HeartHandshake,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Remedial Classes for Slow Learners",
    desc: "Arrangement of remedial class for slow learners.",
    icon: Lightbulb,
    color: "bg-rose-100 text-rose-600"
  },
  {
    title: "Scholastic & Co-Scholastic Exposure",
    desc: "Providing the students with adequate exposure to register their scholastic and co-scholastic excellence in broader spheres of competitions.",
    icon: Star,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Regular Parent-Teachers' Meetings",
    desc: "Regular Parent-Teachers' meeting, exchange of views and resolutions in the best interest of the children.",
    icon: PhoneCall,
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Vigilant Departmental Monitoring",
    desc: "A computer, cohesive and cumulative monitoring system for every department of the institution under eternal vigilance.",
    icon: Building2,
    color: "bg-cyan-100 text-cyan-600"
  }
];

const SUBJECTS_LIST = [
  "Hindi",
  "Bengali",
  "English Language and Literature",
  "Environmental Education",
  "Social Studies",
  "General Science",
  "Mathematics",
  "Health Education",
  "Computer Science (Compulsory from Std. I onwards)"
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-50/50">
      
      {/* PAGE HEADER */}
      <PageHeader
        title="About Our School"
        subtitle="The Dayanand Arya Vidya Public School — Universal Literacy, High Quality English Medium Education & All-Round Character Building."
        
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. ABOUT OUR SCHOOL OVERVIEW */}
        <section id="general-info" className="scroll-mt-28 space-y-8">
          <SectionHeading
            badge="Institutional Vision"
            title="About Our School"
            subtitle="Stress on high standard English literacy paving the way to brilliant academic success and responsible citizenship."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Main Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                High Quality English Medium Education across Every District
              </h3>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Literacy in the present day scenario plays a vital role in determining the standard of civilization of a particular country. Universal literacy is, therefore, the goal of every nation. Considering the importance of English, the accepted global motion and to keep pace with any other advanced countries of the world, our School evolves its policies to stress on high standard English literacy which would pave the way to brilliant academic success. As well as transforming the learners as the useful responsible members of our society. With this end of view, the group endeavours to open school in each and every district of the country so as to impart high quality education through English medium.
                </p>
                <div className="p-5 bg-orange-50/90 rounded-2xl border-l-4 border-orange-600 text-slate-900 font-semibold italic text-sm sm:text-base">
                  "The Dayanand Arya Vidya Public School looks forward to build up students with self confidence so that they can choose a good befitting career for themselves and become a credit not only to themselves but also to the School, their families and to the Nation."
                </div>
              </div>
            </div>

            {/* Visual Container */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400">
              <Image
                src="/placeholder.png"
                alt="Dayanand Arya Vidya Public School Building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </section>

        {/* 2. SALIENT FEATURES */}
        <section id="salient-features" className="scroll-mt-28 space-y-8">
          <SectionHeading
            badge="Key Benchmarks"
            title="Salient Features"
            subtitle="Guiding pillars shaping ideal citizens, discipline of highest order, and continuous academic evaluation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SALIENT_FEATURES.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all space-y-4 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center font-bold shadow-sm`}>
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

        {/* 3. TEACHING SUBJECTS */}
        <section id="curriculum" className="scroll-mt-28 space-y-8">
          <SectionHeading
            badge="Academic Curriculum"
            title="Teaching Subjects"
            subtitle="CBSE and State Board courses with multimedia, computer education, and skill furtherance."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200 space-y-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              Our School follows CBSE and state Board courses with the subjects like <strong>Hindi, Bengali, English Language and Literature, Environmental Education, Social Studies, General Science, Mathematics, Health Education, Computer Science</strong> as per CBSE norms. <strong>Computer Education is compulsory from Std. I onwards.</strong> In addition, the prescribed regular computer courses with Multimedia, and Internet facility are facilitated to students for furtherance of skill.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {SUBJECTS_LIST.map((subject, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PARENTS-TEACHERS INTERACTION */}
        <section id="ptm-interaction" className="scroll-mt-28 space-y-8">
          <div className="bg-gradient-to-br from-orange-600 to-amber-500 text-white rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-black text-xs uppercase tracking-wider border border-white/30">
                Continuous Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Parents-Teachers Interaction (PTM)
              </h3>
              <p className="text-sm sm:text-base leading-relaxed font-medium text-amber-50">
                The school keeps a provision of PTM (Parents Teachers Meeting) at Inter calls to discuss and identify psychological, academic related problems of individual students and find out solution to them. Help line system has been evolved to strengthen such interaction.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <PhoneCall className="w-10 h-10 text-white mx-auto" />
              <h4 className="text-lg font-black text-white">Help Line System</h4>
              <p className="text-xs text-amber-100 font-medium">Strengthening interaction & individual student support.</p>
              <a
                href="tel:+919431102847"
                className="inline-block px-5 py-2.5 rounded-xl bg-white text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-100 transition-colors shadow-md"
              >
                Helpline: +91 94311 02847
              </a>
            </div>
          </div>
        </section>

        {/* 5. TESTED TEACHING METHODS */}
        <section id="teaching-methods" className="scroll-mt-28 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl space-y-5">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/40 font-extrabold text-xs uppercase tracking-wider">
                Pedagogical Approach
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Tested Teaching Methods
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Academic council with eminent deucationists have devises teaching methods thet are effective and enjoyable. Education based on routine process causes mental fatigue in students.
                </p>
                <p>
                  The approach underlying Xaverian teaching method makes a child desire to learn. The teaching methods are so devised and designed as to create, develop and quench the psychological thirst of a child.
                </p>
                <div className="p-4 bg-slate-800 rounded-2xl border-l-4 border-amber-400 text-amber-300 font-bold text-sm sm:text-base italic">
                  "Activity blended teaching successfully brings about integral development in the learner."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. THE SCHOOL WITH A DIFFERENCE */}
        <section id="school-difference" className="scroll-mt-28 space-y-8">
          <SectionHeading
            badge="Institutional Identity"
            title="The School with a Difference"
            subtitle="Activity blended education awakening creative and leadership skills dormant in every child."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  The Dayanand Arya Vidya Public School's ideology believes in activity blended education. Numerous activities going at per with academic curriculum in the Dayanand Arya Vidya Public School's system are to strengthen the edifice of career of the students and bring them all round development in the true sence of the term.
                </p>
                <p>
                  Apart from this, the system gives wide recognition to various other aspects of knowledge found in those who are not even sound in academic curriculum. No branch of knowledge is neglected.
                </p>
                <p>
                  The perceptive teaching imparted in School awakens the creative and leadership skills dormant in every child. Education is customize to meet the aspirational demands of youngsters.
                </p>
              </div>

              <div className="bg-orange-50/80 p-6 sm:p-8 rounded-2xl border border-orange-200 space-y-4">
                <h4 className="text-lg font-black text-orange-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-orange-600" />
                  <span>Enlightening Young Minds</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  The School embarks on the mission to enlighten young minds with deliberate and systematic education, inculcate into them the spirit of humane as well as social values and spiritual development in a harmonious manner, so that they can confidently face life’s hardships, succeed in the struggle for existence and prove themselves the assets to humanity.
                </p>
                <div className="pt-2 text-xs font-black text-orange-700 uppercase tracking-wider">
                  ★ Such contribution of the Dayanand Arya Vidya Public School to the nation makes them the School with Difference.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE WAY WE TEACH & CO-CURRICULAR ACTIVITIES */}
        <section id="way-we-teach" className="scroll-mt-28 space-y-8">
          <SectionHeading
            badge="Holistic Development"
            title="The Way We Teach"
            subtitle="Term-based evaluation, building team spirit, artistic training, and national festival observances."
          />

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Present system refers to term based evaluation of students that covers all aspects of students’ development. The main aim of the school is to enhance the total personality of the child in an appropriate manner. Also to provide a liberal and comprehensive education so as to enhance and buils theam spirit through group and house activity.
              </p>
              <p>
                It is a curricular initiative, attempting to shift emphasis from testing to holistic learning, it aims at creating good citizen possessing sound health, appropriate skills and desirable qualities beside, academic excellence, co-curricular & culture activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Artistic Fields */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                    <Music className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-slate-900">Artistic Fields</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  To unearth the potential in every student the school offers training in innumerable artistic fields:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Vocal", "Instrumental", "Dance", "Painting"].map((art, i) => (
                    <span key={i} className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                      ✓ {art}
                    </span>
                  ))}
                </div>
              </div>

              {/* National Festivals & Special Days */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-black text-slate-900">National Festivals & Observances</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  The School joins the nation in observing National festivals and special school days:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Republic Day", "Independence Day", "Gandhi Jayanti", "Annual Day", "Sports Day", "Saraswati Puja", "Christmas"].map((fest, i) => (
                    <span key={i} className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-sm">
                      • {fest}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-orange-600 font-bold">Children are encouraged to participate in school activities.</p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
