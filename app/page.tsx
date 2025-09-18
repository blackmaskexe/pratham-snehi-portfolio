"use client";

import { useRef, useEffect, useState } from "react";
import HeroSection from "@/components/hero/HeroSection";
import NavbarSection from "@/components/navbar/NavbarSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import TimelineSection from "@/components/timeline/TimelineSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
    </div>
  );
}
