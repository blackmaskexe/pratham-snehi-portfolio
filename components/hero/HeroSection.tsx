"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "../ui/hero-highlight";

export default function HeroSection() {
  return (
    <div className="px-4 py-10 md:py-20">
      <h1 className="relative z-10 mx-auto max-w-4xl text-center text-6xl font-bold text-slate-700 md:text-7xl lg:text-9xl dark:text-slate-300 mt-16 pt-16">
        {"Pratham Snehi".split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-4 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
        className="relative z-10 mx-auto max-w-xl py-4 text-center text-xl font-normal text-neutral-600 dark:text-neutral-400"
      >
        With AI, you can launch your website in hours, not days. Try our best in
        class, state of the art, cutting edge AI tools to get your website up.
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <button className="w-60 transform rounded-lg bg-black px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          Explore Now
        </button>
        <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
          Contact Support
        </button>
      </motion.div>
    </div>
  );
}
