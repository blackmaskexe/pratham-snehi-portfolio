"use client";

import HeroShortDescription from "./HeroShortDescription";
import HeroNameTitle from "./HeroNameTitle";

export default function HeroSection() {
  return (
    <div className="relative px-4 py-10 md:py-20 h-[100vh]">
      <HeroNameTitle />
      <HeroShortDescription />
    </div>
  );
}
