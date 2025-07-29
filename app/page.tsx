"use client";

import HeroSection from "@/components/hero/HeroSection";
import NavbarSection from "@/components/navbar/NavbarSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Anything after this navbar ending, and before this div will make the navbar resize after scrolling */}
      <NavbarSection />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
