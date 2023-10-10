"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I am a <span className="font-bold">senior</span> at the{" "}
        <span className="font-bold">University of Nevada, Las Vegas</span>,
        pursuing a <span className="font-bold">Bachelor's</span> degree in{" "}
        <span className="font-bold">Computer Science</span> with an application area in{" "}
        <span className="font-bold">English.</span>
      </p>

      <p>
        I have a strong interest in full-stack development, where I find great
        satisfaction in problem-solving. My core tech stack includes <span className="font-bold">C++, React,
        Next.js, and TypeScript.</span> Currently, I am
        seeking an internship in software development to apply my skills and
        contribute to meaningful projects.
      </p>
      <p>
        Outside of coding, I'm passionate about fitness, regularly hitting the
        gym, playing pickleball, and practicing hot yoga for well-being. I'm also a dog
        enthusiast and enjoy spending quality time with my furry companion. My
        curiosity extends beyond programming, as I'm always eager to learn new
        things and broaden my horizons.
      </p>
    </motion.section>
  );
}
