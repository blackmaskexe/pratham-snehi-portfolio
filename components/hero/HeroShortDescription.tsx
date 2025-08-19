"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroShortDescription() {
  const subtitleControls = useAnimation();

  // individual controls for each highlighted word and the underline
  const fullstackControl = useAnimation();
  const rnControl = useAnimation();
  const aiControl = useAnimation();
  const apisControl = useAnimation();
  const cloudControl = useAnimation();
  const underlineControl = useAnimation();

  useEffect(() => {
    let mounted = true;

    async function run() {
      // initial subtitle fade in
      await subtitleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });

      if (!mounted) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) return;

      // animate highlights sequentially with a little bounce
      // light blue highlighter
      await fullstackControl.start({
        backgroundColor: "rgba(96,165,250,0.28)",
        transition: { duration: 0.28 },
      });

      await rnControl.start({
        backgroundColor: "rgba(96,165,250,0.28)",
        transition: { duration: 0.28 },
      });

      await aiControl.start({
        backgroundColor: "rgba(96,165,250,0.28)",
        transition: { duration: 0.22 },
      });
      await aiControl.start({
        backgroundColor: "rgba(96,165,250,0.28)",
        transition: { duration: 0.22 },
      });
      await apisControl.start({
        backgroundColor: "rgba(96,165,250,0.28)",
        transition: { duration: 0.22 },
      });
      await cloudControl.start({
        backgroundColor: "rgba(96,165,250,0.28)",
        transition: { duration: 0.22 },
      });

      // playful underline draw for certification
      await underlineControl.start({
        pathLength: 1,
        transition: { duration: 0.6, ease: "easeOut" },
      });
    }

    // small delay before starting everything so subtitle feels connected
    const startTimer = setTimeout(run, 800);
    return () => {
      mounted = false;
      clearTimeout(startTimer);
    };
  }, [
    subtitleControls,
    fullstackControl,
    rnControl,
    aiControl,
    apisControl,
    cloudControl,
    underlineControl,
  ]);

  return (
    <motion.p
      className="relative z-10 mx-auto max-w-xl py-4 text-center text-xl md:text-2xl font-normal text-neutral-600 dark:text-neutral-400"
      initial={{ opacity: 0, y: 10 }}
      animate={subtitleControls}
      style={{ opacity: 0 }}
    >
      <motion.span
        className="inline-block px-0.5 sm:px-1 rounded-sm"
        animate={fullstackControl}
        style={{ backgroundColor: "transparent" }}
      >
        Fullstack developer
      </motion.span>{" "}
      building beautiful{" "}
      <motion.span
        className="inline-block px-0.5 sm:px-1 rounded-sm"
        animate={rnControl}
        style={{ backgroundColor: "transparent" }}
      >
        React Native
      </motion.span>{" "}
      mobile apps with{" "}
      <motion.span
        className="inline-block px-0.5 sm:px-1 rounded-sm"
        animate={aiControl}
        style={{ backgroundColor: "transparent" }}
      >
        AI
      </motion.span>
      , custom{" "}
      <motion.span
        className="inline-block px-0.5 sm:px-1 rounded-sm"
        animate={apisControl}
        style={{ backgroundColor: "transparent" }}
      >
        APIs
      </motion.span>
      , and{" "}
      <motion.span
        className="inline-block px-0.5 sm:px-1 rounded-sm"
        animate={cloudControl}
        style={{ backgroundColor: "transparent" }}
      >
        Cloud
      </motion.span>
      . {/* Certification with cartoonish underline */}
      <span className="relative inline-block ml-1">
        <span className="underline-text">AWS & Microsoft certified</span>
        {/* SVG underline drawn left-to-right */}
        <svg
          viewBox="0 0 220 28"
          className="absolute left-0 right-0 bottom-0 h-6 w-full overflow-visible pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M 2 14 C 30 26, 60 6, 100 14 C 140 26, 170 6, 218 14"
            fill="transparent"
            stroke="#3B82F6"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={1}
            strokeDashoffset={1}
            animate={underlineControl}
            initial={{ pathLength: 0 }}
            style={{ translateY: 12 }}
          />
        </svg>
      </span>
      .
    </motion.p>
  );
}
