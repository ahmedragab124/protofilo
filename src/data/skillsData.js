import { FaCode, FaBrain, FaGears, FaUserCheck } from "react-icons/fa6";

export const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: FaCode,
    badge: "PRIMARY STACK",
    badgeColor: "bg-teal-500/10 text-teal-700 border-teal-500/30",
    skills: [
      "React.js (React 19)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite & Build Tools",
      "Framer Motion",
      "Responsive Web Design",
      "HTML5 & Semantic UI",
    ],
  },
  {
    title: "Core CS & Algorithms",
    icon: FaBrain,
    badge: "COMPETITIVE RANKED",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
    skills: [
      "C++ Programming",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Competitive Programming (ECPC Finalist)",
      "Problem Solving",
      "Analytical Thinking",
    ],
  },
  {
    title: "Architecture & Tools",
    icon: FaGears,
    badge: "PRODUCTION READY",
    badgeColor: "bg-cyan-500/10 text-cyan-700 border-cyan-500/30",
    skills: [
      "RESTful API Integration",
      "Git & GitHub Version Control",
      "React Hook Form & Zod",
      "State Management",
      "Lighthouse Performance Optimization",
      "Clean Code Architecture",
    ],
  },
  {
    title: "Professional Competencies",
    icon: FaUserCheck,
    badge: "DEPI CERTIFIED",
    badgeColor: "bg-teal-600/10 text-teal-800 border-teal-600/30",
    skills: [
      "DEPI React Track Graduate",
      "ICPC SVNU Community Mentor",
      "Business English Communication",
      "Agile & Team Collaboration",
      "Freelancing & Client Delivery",
    ],
  },
];
