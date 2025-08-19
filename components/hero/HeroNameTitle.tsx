"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HeroNameTitle() {
  const logoControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // detect mobile (Tailwind 'sm' breakpoint)
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(max-width: 640px)").matches;

    if (prefersReduced) {
      // Skip fancy motion for reduced-motion users
      logoControls.set({ x: 0, opacity: 1 });
      textControls.set({ x: 0 });
      return;
    }

    let mounted = true;

    async function run() {
      if (!mounted) return;

      // Step 1: logo flies in while text is pushed to the right
      // use a much smaller push on mobile so they remain close
      const textPush = isMobile ? 28 : 120;
      const logoStart = isMobile ? -160 : -300;

      logoControls.start({
        x: [logoStart, -30],
        opacity: [0, 1],
        transition: { type: "spring", stiffness: 320, damping: 28 },
      });
      textControls.start({
        x: [0, textPush],
        transition: { type: "spring", stiffness: 260, damping: 22 },
      });

      // Wait a bit so the push is visible
      await new Promise((r) => setTimeout(r, 600));

      if (!mounted) return;

      // Step 2: both settle back into the centered group (final small offsets)
      const logoFinal = isMobile ? -24 : -48;
      logoControls.start({
        x: logoFinal,
        transition: { type: "spring", stiffness: 240, damping: 20 },
      });
      textControls.start({
        x: 0,
        transition: { type: "spring", stiffness: 240, damping: 20 },
      });
    }

    run();

    return () => {
      mounted = false;
    };
  }, [logoControls, textControls]);

  return (
    <div className="relative z-10 mx-auto max-w-4xl text-center mt-16 pt-16 mb-8">
      {/* Keep animations intact. Layout: side-by-side with smaller mobile gap so elements feel closer. */}
      <div className="flex items-center justify-center sm:gap-4">
        {/* Logo container — allow overflow so the animated entrance isn't clipped */}
        <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex-shrink-0 rounded-full overflow-visible">
          <motion.img
            src="/avataaars.png"
            alt="logo"
            className="absolute left-0 top-0 w-full h-full object-cover"
            // reduce extreme initial offset to avoid being cut off on small screens
            initial={{ x: -200, opacity: 0 }}
            animate={logoControls}
          />
        </div>

        {/* Name text - will be pushed and then settle */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-700 dark:text-slate-300"
          initial={{ x: 0 }}
          animate={textControls}
        >
          Pratham Snehi
        </motion.h1>
      </div>
    </div>
  );
}
