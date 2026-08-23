export interface FacultyMember {
  sno: number;
  name: string;
  gender: "M" | "F";
  oasisId: string;
  designation: "PRINCIPAL" | "PGT" | "TGT" | "PRT" | "PTI";
  highestQualification: string;
  subjectTaught: string;
  image: string;
}

function getFacultyImage(gender: "M" | "F", sno: number): string {
  return "";
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  { sno: 1, name: "Dr. Rajesh Prasad Dutta", gender: "M", oasisId: "2594849", designation: "PRINCIPAL", highestQualification: "M.A. / B.Ed. / EdD", subjectTaught: "History", image: getFacultyImage("M", 1) },
  { sno: 2, name: "Neha Kumari", gender: "F", oasisId: "2848344", designation: "TGT", highestQualification: "P.G. / D.El.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 2) },
  { sno: 3, name: "Hemlata Sahu", gender: "F", oasisId: "2848247", designation: "PGT", highestQualification: "P.G. / B.Ed.", subjectTaught: "Chemistry", image: getFacultyImage("F", 3) },
  { sno: 4, name: "Kishor Kumar Das", gender: "M", oasisId: "2848220", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "Hindi", image: getFacultyImage("M", 4) },
  { sno: 5, name: "Shristi Kumari", gender: "F", oasisId: "2848189", designation: "TGT", highestQualification: "M.A. / D.El.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 5) },
  { sno: 6, name: "Nisha Kumari", gender: "F", oasisId: "2842452", designation: "PRT", highestQualification: "M.Com / B.Ed.", subjectTaught: "English", image: getFacultyImage("F", 6) },
  { sno: 7, name: "Rehana Khatoon", gender: "F", oasisId: "2842109", designation: "TGT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "English Lng. & Lit.", image: getFacultyImage("F", 7) },
  { sno: 8, name: "Shiv Bhajan Prasad", gender: "M", oasisId: "2841915", designation: "PGT", highestQualification: "M.Tech", subjectTaught: "Mathematics", image: getFacultyImage("M", 8) },
  { sno: 9, name: "Rajendra Kumar", gender: "M", oasisId: "2841802", designation: "PGT", highestQualification: "B.Tech", subjectTaught: "Physics", image: getFacultyImage("M", 9) },
  { sno: 10, name: "Edward Lugun", gender: "M", oasisId: "2841755", designation: "PGT", highestQualification: "M.A. / M.Ed.", subjectTaught: "English", image: getFacultyImage("M", 10) },
  { sno: 11, name: "Kamlesh Kumar Paswan", gender: "M", oasisId: "2773183", designation: "PGT", highestQualification: "B.Tech / B.Ed.", subjectTaught: "Computer Science", image: getFacultyImage("M", 11) },
  { sno: 12, name: "Sujata Kumari", gender: "F", oasisId: "2755261", designation: "PRT", highestQualification: "B.A. / B.Ed.", subjectTaught: "English", image: getFacultyImage("F", 12) },
  { sno: 13, name: "Anamika Singh", gender: "F", oasisId: "2742727", designation: "TGT", highestQualification: "B.Sc / B.Ed.", subjectTaught: "Science", image: getFacultyImage("F", 13) },
  { sno: 14, name: "Sunaina Indwar", gender: "F", oasisId: "2551811", designation: "TGT", highestQualification: "P.G. / B.Ed.", subjectTaught: "Biology", image: getFacultyImage("F", 14) },
  { sno: 15, name: "Bipendra Pandey", gender: "M", oasisId: "2537610", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("M", 15) },
  { sno: 16, name: "Neeru Kumari", gender: "F", oasisId: "2496514", designation: "PRT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 16) },
  { sno: 17, name: "Megha Singh", gender: "F", oasisId: "2429104", designation: "PRT", highestQualification: "M.Com / B.Ed.", subjectTaught: "English", image: getFacultyImage("F", 17) },
  { sno: 18, name: "Prity Kumari", gender: "F", oasisId: "2419725", designation: "PRT", highestQualification: "M.A. / B.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("F", 18) },
  { sno: 19, name: "Suraj Kumar", gender: "M", oasisId: "2419694", designation: "PGT", highestQualification: "B.P.Ed.", subjectTaught: "Physical Education", image: getFacultyImage("M", 19) },
  { sno: 20, name: "Sadhana Singh", gender: "F", oasisId: "2250652", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("F", 20) },
  { sno: 21, name: "Panchali Kumari", gender: "F", oasisId: "2249624", designation: "TGT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "Hindi Course-A", image: getFacultyImage("F", 21) },
  { sno: 22, name: "Minu Kumari", gender: "F", oasisId: "2248203", designation: "PRT", highestQualification: "M.Com / D.El.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("F", 22) },
  { sno: 23, name: "Poonam Bharti", gender: "F", oasisId: "2248157", designation: "TGT", highestQualification: "B.A. / B.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 23) },
  { sno: 24, name: "Bandana Kumari", gender: "F", oasisId: "2248083", designation: "PGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "History", image: getFacultyImage("F", 24) },
  { sno: 25, name: "Om Prakash Sharma", gender: "M", oasisId: "2148570", designation: "TGT", highestQualification: "BCA", subjectTaught: "Info. Tech.", image: getFacultyImage("M", 25) },
  { sno: 26, name: "Pupen Khalkho", gender: "F", oasisId: "2148510", designation: "TGT", highestQualification: "B.A. / B.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 26) },
  { sno: 27, name: "Nitu Kumari Pathak", gender: "F", oasisId: "2148459", designation: "TGT", highestQualification: "B.A. / B.Ed.", subjectTaught: "Music & Dance", image: getFacultyImage("F", 27) },
  { sno: 28, name: "Krishna Singh", gender: "F", oasisId: "2145172", designation: "TGT", highestQualification: "B.A. / B.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 28) },
  { sno: 29, name: "Premlata", gender: "F", oasisId: "2145159", designation: "TGT", highestQualification: "B.A. / B.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 29) },
  { sno: 30, name: "Deepmala Kumari", gender: "F", oasisId: "2145021", designation: "PRT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 30) },
  { sno: 31, name: "Aarti Singh", gender: "F", oasisId: "2133896", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "English Lng. & Lit.", image: getFacultyImage("F", 31) },
  { sno: 32, name: "Prakirna Prabhas", gender: "M", oasisId: "2131904", designation: "PGT", highestQualification: "P.G. / B.Ed.", subjectTaught: "Accountancy & Business Std.", image: getFacultyImage("M", 32) },
  { sno: 33, name: "Dipti Prabha", gender: "F", oasisId: "2031102", designation: "TGT", highestQualification: "BCA", subjectTaught: "Info. Tech.", image: getFacultyImage("F", 33) },
  { sno: 34, name: "Rakhi Kumari Verma", gender: "F", oasisId: "1867148", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "Science", image: getFacultyImage("F", 34) },
  { sno: 35, name: "Pramod Kumar", gender: "M", oasisId: "1867045", designation: "TGT", highestQualification: "P.G. / B.Ed.", subjectTaught: "Chemistry", image: getFacultyImage("M", 35) },
  { sno: 36, name: "Bindu", gender: "F", oasisId: "1867044", designation: "TGT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 36) },
  { sno: 37, name: "Jaya Dey", gender: "F", oasisId: "1867035", designation: "PTI", highestQualification: "B.P.Ed.", subjectTaught: "P.T.I.", image: getFacultyImage("F", 37) },
  { sno: 38, name: "Satyam Singh", gender: "F", oasisId: "1867032", designation: "TGT", highestQualification: "B.A. / B.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("F", 38) },
  { sno: 39, name: "Puja Kumari", gender: "F", oasisId: "1790105", designation: "PRT", highestQualification: "B.Com / D.El.Ed.", subjectTaught: "Mathematics", image: getFacultyImage("F", 39) },
  { sno: 40, name: "Ranju Sahu", gender: "F", oasisId: "1790090", designation: "PRT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 40) },
  { sno: 41, name: "Tannushree Karmakar", gender: "F", oasisId: "1785357", designation: "PRT", highestQualification: "B.Lib.", subjectTaught: "Library Science", image: getFacultyImage("F", 41) },
  { sno: 42, name: "Raj Kumar Ranjan", gender: "M", oasisId: "1701528", designation: "PGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "English Core", image: getFacultyImage("M", 42) },
  { sno: 43, name: "Usha Singh", gender: "F", oasisId: "1701208", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "Hindi", image: getFacultyImage("F", 43) },
  { sno: 44, name: "Upasna Kakkar", gender: "F", oasisId: "1701188", designation: "TGT", highestQualification: "M.Com / B.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("F", 44) },
  { sno: 45, name: "Rahul Raj", gender: "M", oasisId: "1701124", designation: "PGT", highestQualification: "M.Sc / B.Ed.", subjectTaught: "Chemistry", image: getFacultyImage("M", 45) },
  { sno: 46, name: "Neelam Kumari", gender: "F", oasisId: "1282450", designation: "PGT", highestQualification: "M.Sc / B.Ed.", subjectTaught: "Biology", image: getFacultyImage("F", 46) },
  { sno: 47, name: "Reeta Giri", gender: "F", oasisId: "1282448", designation: "TGT", highestQualification: "B.A. / D.El.Ed.", subjectTaught: "Hindi Course-A", image: getFacultyImage("F", 47) },
  { sno: 48, name: "Subodh Kumar Pandey", gender: "M", oasisId: "1282425", designation: "PGT", highestQualification: "M.Com / B.Ed.", subjectTaught: "Mathematics", image: getFacultyImage("M", 48) },
  { sno: 49, name: "Satyendra Kumar", gender: "M", oasisId: "1282242", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "S.S.T.", image: getFacultyImage("M", 49) },
  { sno: 50, name: "Mahesh Kumar Saw", gender: "M", oasisId: "1282236", designation: "TGT", highestQualification: "M.A. / B.Ed.", subjectTaught: "English Lng. & Lit.", image: getFacultyImage("M", 50) },
];
