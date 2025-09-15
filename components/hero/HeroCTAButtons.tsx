"use client";

import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export default function HeroCTAButtons() {
  const controls = useAnimation();
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onDone = async () => {
      // fade in CTA
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45 },
      });
      // notify that CTA animation finished
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("hero:cta:done"));
      }
    };

    // start hidden
    controls.set({ opacity: 0, y: 8 });

    window.addEventListener("hero:subtitle:done", onDone as EventListener);
    return () =>
      window.removeEventListener("hero:subtitle:done", onDone as EventListener);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="mt-8 flex flex-col sm:flex-row items-center sm:justify-center gap-4 w-full"
    >
      <button
        onClick={() => scrollTo("projects")}
        className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full shadow-[0_18px_30px_rgba(0,0,0,0.12)] text-lg font-semibold hover:shadow-2xl transition"
      >
        <span>View Projects</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <button
        onClick={() => scrollTo("contact")}
        className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white/90 text-slate-800 border border-gray-200 px-5 py-2.5 rounded-full shadow-sm text-lg font-medium hover:bg-gray-50 transition"
      >
        Contact Me
      </button>
    </motion.div>
  );
}
