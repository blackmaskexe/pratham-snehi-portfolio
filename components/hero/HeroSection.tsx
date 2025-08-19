"use client";

import HeroShortDescription from "./HeroShortDescription";
import HeroNameTitle from "./HeroNameTitle";
import HeroProjectSectionPointer from "./HeroProjectSectionPointer";

export default function HeroSection() {
  const pointerDelay = 3000;

  return (
    <div className="relative px-4 py-10 md:py-20 h-[80vh]">
      <HeroNameTitle />
      <HeroShortDescription />

      {/* Pointer to the projects section - centered near the bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6">
        <HeroProjectSectionPointer startDelay={pointerDelay} />
      </div>
    </div>
  );
}
