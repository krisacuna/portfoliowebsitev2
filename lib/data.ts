import React, { ReactElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import frame from "@/public/frame.png";
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

type ExperienceType = Readonly<Array<{
  title?: string;
  linkedTitle?: string;
  location: string;
  description: string;
  icon: ReactElement;
  date: string;
}>>;

 export const experiencesData : ExperienceType = [
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
    description: "Over a 10-month period, I collaborated with Master's and PhD students to develop a 1/10th scale autonomous RC vehicle. In June 2022, I traveled to Cluj, Romania, under the guidance of Dr. Brendan Morris from UNLV's Transportation Research Department.",
    icon: React.createElement(FaReact),
    date: "Summer 2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "Current Project: Grammar Interpreter",
    description:
      "Creating an interpreter for a language and developing a parser to construct a syntax tree and implement parsing techniques.",
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
    title: "SpellChecker",
    description:
      "Spell Checker program that uses a dictionary .txt file containing over 50,000 predefined English words using data structures like Vectors and Hash Maps at its core.",
    tags: ["C++"],
    imageUrl: frame,
  },

] as const;

export const skillsData = [
  "C++",
  "C",
  "BASH",
  "JavaScript",
  "TypeScript",
  "React",
  "Assembly x86",
  "MIPS",
  "Antlr",
  "Visual Studio Code",
  "GitHub",
] as const;
