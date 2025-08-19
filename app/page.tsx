"use client";

import { useRef, useEffect, useState } from "react";
import HeroSection from "@/components/hero/HeroSection";
import NavbarSection from "@/components/navbar/NavbarSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavbarSection />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
