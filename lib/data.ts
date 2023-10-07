import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import connect4 from "@/public/connect4.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

 export const experiencesData : any = [
  {
    title: "Expected graduation",
    location: "University of Nevada, Las Vegas",
    description:
      "Prospective graduation",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Construction Estimator",
    location: "Las Vegas, NV",
    description:
      "Employed by Interior Logic Group, I review architectual plans and estimate bid costs for brand new residential communities in Reno & Las Vegas.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    linkedTitle: "Team Member - Bosch Future Mobility Challenge",
    location: "Las Vegas, NV & Cluj-Napoca, Romania",
    description: "",
    icon: React.createElement(FaReact),
    date: "Summer 2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "Current Project : Grammar Interpreter",
    description:
      "Working on an interpreter to create lexical rules and grammars.",
    tags: ["JAVA", "ANTLR", "IntelliJ IDE"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ConnectFour",
    description:
      "A small, but fun programming project where I built a Connect Four game whilst in the command-line terminal.",
    tags: ["C++"],
    imageUrl: connect4,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },

] as const;

export const skillsData = [
  "C++",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GitHub",
  "X86 / MIPS",
  "Antlr",
  "BASH",
  "Framer Motion",
] as const;
