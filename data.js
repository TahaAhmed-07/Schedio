// A2 (Class of 2027) — Pine Avenue campus subject-group timetable data
// Extracted from the school's official PDF timetable (last updated 25 Aug 2026).
// Slot/day grid positions were reconstructed from the PDF's character coordinates,
// cross-checked against a manual read of the printed grid.

const SLOT_TIMES = {
  1: "8:00 – 9:00 AM",
  2: "9:05 – 10:05 AM",
  3: "10:10 – 11:10 AM",
  4: "11:10 – 11:30 AM",
  5: "11:30 AM – 12:30 PM",
  6: "12:35 – 1:30 PM",
  7: "2:00 – 3:00 PM",
  8: "3:00 – 4:00 PM",
};

// Friday runs slots 5 & 6 on a shifted clock (shorter Jumma-adjusted periods)
const FRIDAY_SLOT_TIMES = {
  5: "11:10 – 12:10 PM",
  6: "12:10 – 1:10 PM",
};

const NAMAZ_BREAK_TIME = "1:35 – 2:00 PM";

const DAYS = [
  { id: "MON", label: "Monday", short: "Mon" },
  { id: "TUE", label: "Tuesday", short: "Tue" },
  { id: "WED", label: "Wednesday", short: "Wed" },
  { id: "THUR", label: "Thursday", short: "Thu" },
  { id: "FRI", label: "Friday", short: "Fri" },
  { id: "SAT", label: "Saturday", short: "Sat" },
];

const SLOT_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8];

function slotTime(day, slot) {
  if (day === "FRI" && FRIDAY_SLOT_TIMES[slot]) return FRIDAY_SLOT_TIMES[slot];
  return SLOT_TIMES[slot];
}

// sessions: array of {d: dayId, s: slotNumber}
const SUBJECTS = [
  {
    id: "acc", name: "Accounting", category: "Business & Economics",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Muhammad Rizwan", sessions: [{d:"MON",s:5},{d:"TUE",s:2},{d:"FRI",s:6}] },
      { id: "G2", label: "G2", teacher: "Mr. Raja Uzair", sessions: [{d:"MON",s:1},{d:"TUE",s:2},{d:"SAT",s:1}] },
    ],
  },
  {
    id: "art", name: "Art & Design", category: "Languages & Arts",
    options: [
      { id: "STD", label: "Standard", teacher: "Ms. Asima Raza", sessions: [{d:"MON",s:7},{d:"MON",s:8},{d:"WED",s:2},{d:"WED",s:3},{d:"THUR",s:3},{d:"THUR",s:4},{d:"THUR",s:5},{d:"THUR",s:6},{d:"THUR",s:7},{d:"FRI",s:2},{d:"FRI",s:3}] },
    ],
    note: "Runs as extended studio blocks rather than single periods — some sessions span several consecutive slots.",
  },
  {
    id: "bio", name: "Biology", category: "Sciences",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Imran Tahir", sessions: [{d:"THUR",s:1},{d:"THUR",s:2},{d:"FRI",s:1},{d:"SAT",s:5}] },
      { id: "G2", label: "G2", teacher: "Mr. Zeeshan Khalid", sessions: [{d:"MON",s:7},{d:"TUE",s:3},{d:"TUE",s:5},{d:"SAT",s:5}] },
    ],
  },
  {
    id: "bus", name: "Business", category: "Business & Economics",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Aatik Tasneem", sessions: [{d:"WED",s:2},{d:"FRI",s:2},{d:"SAT",s:2}] },
      { id: "G2", label: "G2", teacher: "Mr. Ahmad Javed", sessions: [{d:"WED",s:6},{d:"THUR",s:5}] },
      { id: "G3", label: "G3", teacher: "Mr. Waqas Majeed", sessions: [{d:"THUR",s:6},{d:"FRI",s:8}] },
      { id: "G4", label: "G4", teacher: "Mr. Omer Tahir", sessions: [{d:"MON",s:8},{d:"TUE",s:5},{d:"SAT",s:5}] },
    ],
  },
  {
    id: "chem", name: "Chemistry", category: "Sciences",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Sardar Latif", sessions: [{d:"WED",s:2},{d:"TUE",s:7},{d:"THUR",s:3},{d:"SAT",s:1},{d:"SAT",s:2}] },
      { id: "G2", label: "G2", teacher: "Mr. Hashim Ali", sessions: [{d:"WED",s:7},{d:"FRI",s:7},{d:"FRI",s:8},{d:"SAT",s:3},{d:"SAT",s:4}] },
      { id: "G3", label: "G3", teacher: "Mr. Fraz Yousafi", sessions: [{d:"MON",s:7},{d:"MON",s:8},{d:"TUE",s:7},{d:"SAT",s:6}] },
    ],
  },
  {
    id: "cs", name: "Computer Science", category: "Computing & Technology",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Fawad Khan", sessions: [{d:"TUE",s:8},{d:"THUR",s:2},{d:"SAT",s:1},{d:"SAT",s:2}] },
      { id: "G2", label: "G2", teacher: "Mr. Fawad Khan", sessions: [{d:"WED",s:6},{d:"WED",s:7},{d:"SAT",s:3}] },
      { id: "G3", label: "G3", teacher: "Mr. Zeeshan Haider Malik", sessions: [{d:"WED",s:3},{d:"FRI",s:3},{d:"SAT",s:3},{d:"SAT",s:5}] },
    ],
  },
  {
    id: "eco", name: "Economics", category: "Business & Economics",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Zain Mushtaq", sessions: [{d:"TUE",s:3},{d:"FRI",s:7},{d:"SAT",s:7}] },
      { id: "G2", label: "G2", teacher: "Mr. Ahmad Javed", sessions: [{d:"WED",s:7},{d:"THUR",s:6}] },
      { id: "G3", label: "G3", teacher: "Mr. Waqas Iqbal", sessions: [{d:"WED",s:5},{d:"THUR",s:5},{d:"SAT",s:6}] },
    ],
  },
  {
    id: "el", name: "English Language", category: "Languages & Arts",
    options: [
      { id: "STD", label: "Standard", teacher: "Ms. Aisha Asad", sessions: [{d:"MON",s:4},{d:"MON",s:5},{d:"THUR",s:3}] },
    ],
    note: "Often taken as a compulsory paper — confirm with your coordinator.",
  },
  {
    id: "fm", name: "Further Math", category: "Mathematics",
    options: [
      { id: "STD", label: "Standard", teacher: "Mr. Manzoor Hussain", sessions: [{d:"MON",s:5},{d:"WED",s:5},{d:"THUR",s:6}] },
    ],
  },
  {
    id: "gpr", name: "GPR (General Paper)", category: "Humanities & Social Sciences",
    options: [
      { id: "STD", label: "Standard", teacher: "Mr. Uzair Mahmood", sessions: [{d:"MON",s:7},{d:"WED",s:1},{d:"FRI",s:1}] },
    ],
    note: "Often taken as a compulsory paper — confirm with your coordinator.",
  },
  {
    id: "hist", name: "History", category: "Humanities & Social Sciences",
    options: [
      { id: "STD", label: "Standard", teacher: "Ms. Maryam Qazi", sessions: [{d:"MON",s:1},{d:"MON",s:2},{d:"FRI",s:1}] },
    ],
  },
  {
    id: "it", name: "Information Technology", category: "Computing & Technology",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Faisal Chughtai", sessions: [{d:"MON",s:1},{d:"MON",s:2},{d:"WED",s:3},{d:"SAT",s:5}] },
      { id: "G2", label: "G2", teacher: "Mr. M. Raahim Ahmad", sessions: [{d:"MON",s:3},{d:"MON",s:4},{d:"MON",s:5},{d:"TUE",s:1},{d:"THUR",s:3}] },
    ],
  },
  {
    id: "law", name: "Law", category: "Business & Economics",
    options: [
      { id: "G1", label: "G1", teacher: "Ms. Veshal Jaffry", sessions: [{d:"MON",s:6},{d:"FRI",s:5},{d:"SAT",s:3}] },
      { id: "G2", label: "G2", teacher: "Mr. Salik", sessions: [{d:"MON",s:4},{d:"WED",s:6},{d:"THUR",s:3}] },
    ],
  },
  {
    id: "lit", name: "Literature in English", category: "Languages & Arts",
    options: [
      { id: "G1", label: "G1 (Mr. Aqib)", teacher: "Mr. Aqib", sessions: [{d:"TUE",s:3},{d:"SAT",s:3},{d:"SAT",s:5}] },
      { id: "G2", label: "G2 (Ms. Sakina Zahra)", teacher: "Ms. Sakina Zahra", sessions: [{d:"WED",s:8},{d:"THUR",s:7}] },
    ],
  },
  {
    id: "math", name: "Math", category: "Mathematics",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Jawad Amin", sessions: [{d:"MON",s:3},{d:"MON",s:4},{d:"THUR",s:3},{d:"FRI",s:7},{d:"FRI",s:8}] },
      { id: "G2", label: "G2", teacher: "Mr. Zain Ul Afaq", sessions: [{d:"MON",s:8},{d:"TUE",s:7},{d:"WED",s:8}] },
      { id: "G3", label: "G3", teacher: "Mr. Asad Afzaal", sessions: [{d:"TUE",s:6},{d:"WED",s:5},{d:"THUR",s:7},{d:"THUR",s:8}] },
      { id: "G4", label: "G4", teacher: "Mr. Zain Javed", sessions: [{d:"MON",s:8},{d:"WED",s:8},{d:"THUR",s:7},{d:"THUR",s:8}] },
      { id: "G5", label: "G5", teacher: "Mr. Jawad Saeed", sessions: [{d:"TUE",s:6},{d:"WED",s:2},{d:"SAT",s:7},{d:"SAT",s:8}] },
      { id: "G6", label: "G6", teacher: "Mr. Jawad Saeed", sessions: [{d:"MON",s:8},{d:"TUE",s:7},{d:"WED",s:1},{d:"FRI",s:6}] },
    ],
  },
  {
    id: "media", name: "Media Studies", category: "Computing & Technology",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Omer Gillani", sessions: [{d:"WED",s:3},{d:"THUR",s:1},{d:"THUR",s:2}] },
      { id: "G2", label: "G2", teacher: "Ms. Warda Javed", sessions: [{d:"TUE",s:4},{d:"TUE",s:5},{d:"TUE",s:6},{d:"WED",s:3}] },
    ],
  },
  {
    id: "pol", name: "Politics", category: "Humanities & Social Sciences",
    options: [
      { id: "STD", label: "Standard", teacher: "Ms. Saima Ejaz Khan", sessions: [{d:"TUE",s:1},{d:"TUE",s:2},{d:"FRI",s:3}] },
    ],
  },
  {
    id: "phy", name: "Physics", category: "Sciences",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Jibran Kamran", sessions: [{d:"WED",s:3},{d:"FRI",s:7},{d:"FRI",s:8},{d:"SAT",s:6}] },
      { id: "G2", label: "G2", teacher: "Mr. Cyrus Ishaq", sessions: [{d:"TUE",s:8},{d:"THUR",s:5},{d:"SAT",s:2}] },
      { id: "G3", label: "G3", teacher: "Mr. Cyrus Ishaq", sessions: [{d:"THUR",s:6},{d:"FRI",s:6},{d:"SAT",s:7},{d:"SAT",s:8}] },
      { id: "G4", label: "G4", teacher: "Mr. Shahid Iqbal", sessions: [{d:"WED",s:6},{d:"WED",s:7},{d:"FRI",s:7},{d:"FRI",s:8},{d:"SAT",s:8}] },
      { id: "G5", label: "G5", teacher: "Mr. Hamiz Javed", sessions: [{d:"TUE",s:5},{d:"THUR",s:5},{d:"FRI",s:6},{d:"SAT",s:1},{d:"SAT",s:2}] },
      { id: "G6", label: "G6", teacher: "Mr. Ammar Raza", sessions: [{d:"TUE",s:8},{d:"THUR",s:8},{d:"SAT",s:7},{d:"SAT",s:8}] },
    ],
  },
  {
    id: "psy", name: "Psychology", category: "Humanities & Social Sciences",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Ahmed Waheed", sessions: [{d:"MON",s:5},{d:"WED",s:5},{d:"THUR",s:4},{d:"THUR",s:5}] },
      { id: "G2", label: "G2", teacher: "Mr. Ahmed Waheed", sessions: [{d:"MON",s:6},{d:"TUE",s:3},{d:"WED",s:6}] },
    ],
  },
  {
    id: "soc", name: "Sociology", category: "Humanities & Social Sciences",
    options: [
      { id: "STD", label: "Standard", teacher: "Mr. Nadir Shami", sessions: [{d:"THUR",s:6},{d:"FRI",s:7},{d:"FRI",s:8}] },
    ],
  },
  {
    id: "urdu", name: "Urdu", category: "Languages & Arts",
    options: [
      { id: "G1", label: "G1", teacher: "Mr. Atta Ullah", sessions: [{d:"THUR",s:8},{d:"FRI",s:8},{d:"SAT",s:2}] },
    ],
    note: "Often taken as a compulsory paper — confirm with your coordinator.",
  },
];

const CATEGORY_ORDER = [
  "Sciences",
  "Mathematics",
  "Business & Economics",
  "Computing & Technology",
  "Humanities & Social Sciences",
  "Languages & Arts",
];
