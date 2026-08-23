import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Allow large base64 image payloads
export const maxDuration = 60;

const DEFAULT_SETTINGS: Record<string, string> = {
  schoolLogo: "",
  heroImage: "/placeholder.png",
  heroTitle: "DAYANAND ARYA VIDYA PUBLIC SCHOOL",
  heroSubhead: "AFFILIATED TO CBSE NEW DELHI, AFF. NO. 3430396, SCHOOL NO. - 66599\nKANDRI MORE, MANDAR, RANCHI, JHARKHAND-835214",
  tickerText: "Admissions Open 2026-27 (as per Govt. norms) for Nursery to Grade IX & XI • CBSE Affiliation No: 3430396 | School Code: 66599 • Kandri More, Mandar, Ranchi, Jharkhand-835214 • Helpline: +91 94311 02847",
  affiliationNo: "3430396",
  helplinePhone: "+91 94311 02847",
  admissionStatus: "Open 2026-27",
  programsBadge: "Educational Journey",
  programsTitle: "Academic Programs Tailored for Growth",
  programsSubtitle: "From early childhood discovery to senior secondary board mastery, our curriculum empowers learners at every developmental milestone.",
  directorHeroBadge: "Dayanand Arya Vidya Public School",
  directorHeroTitle: "Director's Message",
  directorHeroSubtitle: "From the Desk of Director Er. Alok Nath Verma — Dayanand Arya Vidya Public School",
  directorHeroImage: "",
  directorName: "Er. Alok Nath Verma",
  directorDesignation: "Director & Managing Trustee",
  directorQualification: "M.Tech (IIT Kanpur) | Senior Educationist",
  directorImage: "/placeholder.png",
  directorHeading: "Empowering Young Minds for a Brighter Tomorrow",
  directorMessage1: "Welcome to Dayanand Arya Vidya Public School. For over two decades, our institution has been committed to fostering educational excellence, moral integrity, and holistic development in every child who walks through our doors.",
  directorMessage2: "We believe that true education extends beyond textbooks. By combining modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values, we inspire our students to become creative thinkers, compassionate citizens, and lifelong learners.",
  directorMessage3: "Our dedicated faculty and world-class campus facilities provide a safe, nurturing environment where every child's potential is recognized, nurtured, and elevated to international standards.",
  directorExperience: "25+ Years of Educational Leadership & Vision",
  directorLeadershipDesc: "Steering Dayanand Arya Vidya Public School with a vision of intellectual rigor, technological excellence, and deep-rooted ethical values.",
  directorLocation: "Mandar, Ranchi",
  // About Page defaults
  aboutHeroBadge: "Dayanand Arya Vidya Public School",
  aboutHeroTitle: "About Our School",
  aboutHeroSubtitle: "The Dayanand Arya Vidya Public School — Universal Literacy, High Quality English Medium Education & All-Round Character Building.",
  aboutHeroImage: "",
  aboutSectionBadge: "Institutional Vision",
  aboutSectionTitle: "About Our School",
  aboutSectionSubtitle: "Fostering academic excellence, moral integrity, and lifelong learning.",
  aboutHeading: "High-Quality English Medium Education",
  aboutParagraph1: "Universal literacy and academic excellence are at the core of our institution. We are dedicated to providing high-standard English medium education that inspires critical thinking, character building, and responsible citizenship in every child.",
  aboutQuote: "We nurture self-confidence in our students, empowering them to pursue rewarding careers and become proud assets to their families and the nation.",
  aboutMainImage: "/placeholder.png",
  aboutImagesJson: "",
  visionTitle: "Empowering Future Leaders",
  visionDescription: "To evolve as a center of educational excellence that combines modern scientific pedagogy, state-of-the-art STEM infrastructure, and timeless Vedic values—nurturing creative thinkers, compassionate citizens, and lifelong achievers.",
  missionTitle: "Nurturing Excellence & Values",
  missionDescription: "To provide a safe, vibrant, and inclusive learning environment that fosters intellectual curiosity, critical thinking, moral integrity, and all-round personality development in every child.",
  // School Difference & Salient Features defaults
  differenceTitle: "The School with a Difference",
  differenceSubtitle: "Activity blended education awakening creative and leadership skills dormant in every child.",
  differenceParagraph1: "The Dayanand Arya Vidya Public School's ideology believes in activity blended education. Numerous activities going at per with academic curriculum in the Dayanand Arya Vidya Public School's system are to strengthen the edifice of career of the students and bring them all round development in the true sence of the term.",
  differenceParagraph2: "Apart from this, the system gives wide recognition to various other aspects of knowledge found in those who are not even sound in academic curriculum. No branch of knowledge is neglected.",
  differenceParagraph3: "The perceptive teaching imparted in School awakens the creative and leadership skills dormant in every child. Education is customize to meet the aspirational demands of youngsters.",
  differenceCardHeading: "Enlightening Young Minds",
  differenceCardText: "The School embarks on the mission to enlighten young minds with deliberate and systematic education, inculcate into them the spirit of humane as well as social values and spiritual development in a harmonious manner, so that they can confidently face life’s hardships, succeed in the struggle for existence and prove themselves the assets to humanity.",
  differenceCardFooter: "★ Such contribution of the Dayanand Arya Vidya Public School to the nation makes them the School with Difference.",
  salientFeaturesTitle: "Salient Features",
  salientFeaturesSubtitle: "Guiding pillars shaping ideal citizens, discipline of highest order, and continuous academic evaluation.",
  salientFeaturesJson: "",
  // General Info Page defaults
  genInfoHeroBadge: "Dayanand Arya Vidya Public School",
  genInfoHeroTitle: "General Information",
  genInfoHeroSubtitle: "Official Academic Regulations, Fee Payment Schedule, Examination Norms, Student Care & Parent Guidelines.",
  genInfoHeroImage: "",
  genInfoEvalTitle: "Evaluation & Examination System",
  genInfoEvalSubtitle: "Continuous assessment policy, achievement grades, effort grading, and examination integrity rules.",
  genInfoEvalCard1Heading: "Continuous Evaluation Policy",
  genInfoEvalCard1Text1: "The school follows a system of continuous evaluation and regularly provides parents with an assessment of their child's academic progress, based on a comprehensive system of tests, examinations, grades, reports, and parent-teacher meetings.",
  genInfoEvalCard1Text2: "The school follows a policy of awarding grades rather than marks for class assessments. Tests, Quizzes, and other class assessments will receive achievement grades while effort grades may be given for homework, class work, and projects.",
  genInfoEvalCard1Highlight: "✓ Continuous evaluation ensures stress-free, holistic academic growth without high-pressure competitive fatigue.",
  genInfoEvalCard2Heading: "Examination Rules",
  genInfoEvalCard2Sub: "Two Main Sets Per Academic Year",
  genInfoEvalCard2Text: "The school holds two sets of examinations in an academic year. The combination of grades and reports serves to assess the progress of the student.",
  genInfoEvalCard2Rule1: "Integrity Rule: Students found cheating in any examination will be given zero marks for that paper.",
  genInfoEvalCard2Rule2: "Absence Norms: Absent students will not be re-examined except in cases of serious, verified medical conditions. Unexpected absence excludes students from prizes and awards.",
  genInfoPtmTitle: "PTM, Promotions & Tuitions Policy",
  genInfoPtmSubtitle: "Monthly parent-teacher interaction, promotion criteria, in-house extra classes, and strict tuition guidelines.",
  genInfoPtmCard1Title: "Parent-Teachers Meetings",
  genInfoPtmCard1Desc: "There will be monthly parent-teacher meetings. All parents are requested to be present for regular updates. Parents can also fix up prior appointments with teachers to discuss their child's progress.",
  genInfoPtmCard1Badge: "★ Monthly Regular Attendance Required",
  genInfoPtmCard2Title: "Promotions Criteria",
  genInfoPtmCard2Desc: "Promotions are decided based on the student's performance throughout the year. A student who fails to secure promotion for the second time in his/her school career may be asked to leave the school.",
  genInfoPtmCard2Badge: "★ Year-Round Performance Metric",
  genInfoPtmCard3Title: "In-House Extra Classes",
  genInfoPtmCard3Desc: "Extra classes are scheduled on a regular basis for students who require additional guidance. Parents will be contacted directly when it is determined that a student would benefit from extra classes.",
  genInfoPtmCard3Badge: "★ Free Remedial Guidance After School",
  genInfoPtmCard4Title: "Private Tuitions Policy",
  genInfoPtmCard4Desc: "Students are strongly discouraged from taking private tuitions. Parents needing extra help for their children should discuss needs with respective class teachers so after-school extra classes can be arranged.",
  genInfoPtmCard4Badge: "★ Private Tuitions Discouraged",
  genInfoTransTitle: "School Transport Services",
  genInfoTransSubtitle: "Safe GPS bus transport fleet ensuring comfortable pick-up and drop-off for students.",
  genInfoTransHeading: "School Transport Fleet",
  genInfoTransDesc: "Dayanand Arya Vidya Public School, provides buses for pick-up and drop-off children. This ensures that children reach the school comfortably.",
  genInfoTransImage: "/placeholder.png",
  genInfoTransRule1: "Bus Stops & Routes: Mandar, Ranchi & Environs",
  genInfoTransRule2: "Transport Rules & Safety Policy: Speed Limiters & CCTV",
  genInfoTransRule3: "Female Bus Attendants & Live GPS Monitoring",
  genInfoTransRule4: "Conduct & Discipline on Board: Orderly Seating",
  genInfoTransFooter: "★ Equipped with speed governors, CCTV cameras, female bus attendants, and live route monitoring for total peace of mind.",
  genInfoFeeTitle: "Fee Payment Schedule & Late Fee Policy",
  genInfoFeeSubtitle: "Quarterly fee payment structure, installment due dates, and late payment penalty terms.",
  genInfoFeeDesc: "School fee payments have to be made on a quarterly basis. If desired, multiple instalments can be paid in advance.",
  genInfoFeeLate1: "Rs. 100",
  genInfoFeeLate2: "Rs. 100 + Rs. 50 / day",
  genInfoWithdrawTitle: "Withdrawal Policy & School Leaving Certificate",
  genInfoWithdrawSubtitle: "Formal application guidelines and fee clearance rules for student withdrawal.",
  genInfoWithdrawText1: "Applications for withdrawal of students from the school should be submitted in writing on the school's prescribed form, addressed to the Head of the School at the earliest opportunity.",
  genInfoWithdrawText2: "If a student leaves school before the end of a term, fees will be payable for the full term.",
  genInfoWithdrawHighlight: "★ The School Leaving Certificate (TC) will be issued only after all dues are cleared and all library books are returned.",
  genInfoPtaTitle: "Communication Between School & Parents (PTA)",
  genInfoPtaSubtitle: "School diary protocols, circular acknowledgements, address updates, and PTA liaison helpline numbers.",
  genInfoPtaCard1Title: "Contact Info Update",
  genInfoPtaCard1Desc: "Parents are expected to communicate to the school any change in address and contact details promptly.",
  genInfoPtaCard2Title: "Appointments & Letters",
  genInfoPtaCard2Desc: "Parents wishing to meet faculty and administrative staff should seek a prior appointment via the School Diary or by telephoning the school. All letters addressed to the school must mention the student's full name, class, and division.",
  genInfoPtaCard3Title: "Circular Acknowledgement",
  genInfoPtaCard3Desc: "Parents should acknowledge receipt of each circular issued by the school by signing the respective section in the diary. Wherever a response is required, it must be completed and returned via the child by the required deadline.",
  genInfoPtaCard4Title: "School Diary Remarks",
  genInfoPtaCard4Desc: "Parents are requested to read notes written in the School Diary by teachers and write their own remarks for the information of teachers.",
  genInfoPtaBanner: "Communication between Dayanand Arya Vidya and our parents will be streamlined and liaised through our Parent Teacher Association (PTA).",
  genInfoPtaPhone1: "94313-83057",
  genInfoPtaPhone2: "87576-74340",
  // Principal Message defaults
  principalHeroBadge: "Dayanand Arya Vidya Public School",
  principalHeroTitle: "Principal's Message",
  principalHeroSubtitle: "From the Desk of Principal Aarti Singh — Dayanand Arya Vidya Public School",
  principalHeroImage: "",
  principalPhoto: "/placeholder.png",
  principalName: "Aarti Singh",
  principalDesignation: "Principal, Dayanand Arya Vidya Public School",
  principalLeadershipTitle: "Educational Leadership",
  principalLeadershipDesc: "Dedicated to building future leaders through modern world-class facilities, character development, and active parent-teacher collaboration.",
  principalWelcomeHeading: "Welcome to Dayanand Arya Vidya Public School",
  principalGreeting: "Dear parents,",
  principalParagraph1: "I am delighted to be associated with you for your child's education. While I walked the dream of creating Dayanand Arya Vidya Public School. I focused on creating the best of facilities which I always wanted for myself as a school going kid. Building a school is one thing and ensuring success to every child who passes through the portals of Dayanand Arya Vidya Public School is another thing. The later has to be a team effort between the students, teachers and parents.",
  principalParagraph2: "Children do better in school when parents communicate often with teachers and be a part of the school. I invite you to join us in this most joyous journey of building future leaders.",
  principalParagraph3: "Thank you for entrusting your child to our care.",
  principalQuote: "Let's walk hand in hand and meet the aspirations of your child.",
  principalLocation: "Mandar, Ranchi",
  // Faculty Page defaults
  facultyHeroBadge: "Dayanand Arya Vidya Public School",
  facultyHeroTitle: "Faculty & Teaching Staff",
  facultyHeroSubtitle: "Meet the 50+ qualified, passionate educators and mentors of Dayanand Arya Vidya Public School.",
  facultyHeroImage: "",
  facultyStat1Value: "50+",
  facultyStat1Label: "Certified Faculty",
  facultyStat2Value: "100%",
  facultyStat2Label: "CBSE / OASIS Registered",
  facultyStat3Value: "12:1",
  facultyStat3Label: "Student-Teacher Ratio",
  facultyStat4Value: "M.A / M.Sc / B.Ed",
  facultyStat4Label: "Qualified Pedagogy",
};

export async function GET() {
  try {
    const dbSettings = await prisma.siteSetting.findMany();
    if (dbSettings.length === 0) {
      return NextResponse.json({ success: true, settings: DEFAULT_SETTINGS, source: "default" });
    }

    const settingsObject: Record<string, string> = { ...DEFAULT_SETTINGS };
    dbSettings.forEach((item) => {
      settingsObject[item.key] = item.value;
    });

    return NextResponse.json({ success: true, settings: settingsObject, source: "database" });
  } catch (error: any) {
    console.error("Error fetching site settings from DB:", error);
    return NextResponse.json({ success: true, settings: DEFAULT_SETTINGS, source: "fallback", error: error?.message });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { settings } = body;

    if (!settings || typeof settings !== "object") {
      return NextResponse.json({ success: false, message: "Invalid settings format" }, { status: 400 });
    }

    // Process keys sequentially to prevent exhausting database connections on Supabase
    for (const [key, value] of Object.entries(settings)) {
      await prisma.siteSetting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) },
      });
    }

    return NextResponse.json({ success: true, message: "Settings updated successfully" });
  } catch (error: any) {
    console.error("Error saving site settings to DB:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Database update failed" },
      { status: 500 }
    );
  }
}
