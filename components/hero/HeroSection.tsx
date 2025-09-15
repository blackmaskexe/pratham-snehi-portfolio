"use client";

import HeroShortDescription from "./HeroShortDescription";
import HeroNameTitle from "./HeroNameTitle";
import HeroCTAButtons from "./HeroCTAButtons";

export default function HeroSection() {
  const pointerDelay = 3000;

  return (
    <div className="relative px-4 py-10 md:py-20 h-full">
      <HeroNameTitle />
      <HeroShortDescription />
      <HeroCTAButtons />

      {/* Pointer moved into ProjectsSection to anchor at its top */}
    </div>
  );
}
