"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="px-4 py-10 md:py-20 h-[100vh]">
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
        Fullstack developer building beautiful React Native mobile apps with AI,
        custom APIs, and cloud. AWS & Microsoft certified.
      </motion.p>
    </div>
  );

