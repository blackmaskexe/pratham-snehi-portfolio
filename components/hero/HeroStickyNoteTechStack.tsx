"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiGithub,
  SiAmazon,
  SiGooglecloud,
} from "react-icons/si";

type Props = {
  style?: React.CSSProperties;
  startDelay?: number; // milliseconds
};

export default function HeroStickyNoteTechStack({
  style,
  startDelay = 0,
}: Props) {
  const delaySec = (startDelay || 0) / 1000;
  const items = useMemo(
    () => [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "AWS", icon: <SiAmazon /> },
      { name: "GCP", icon: <SiGooglecloud /> },
    ],
    []
  );

  return (
    <motion.div
      initial={{ scale: 0.75, rotate: -8, opacity: 0 }}
      animate={{ scale: 1, rotate: [-4, 2, -1, 0], opacity: 1 }}
      transition={{ delay: delaySec, duration: 0.9, ease: "easeOut" }}
      style={style}
      className="w-72 md:w-96 lg:w-[36rem] p-4 md:p-6 rounded-lg bg-blue-50/90 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-800 shadow-2xl"
    >
      <div className="text-sm md:text-xl font-bold text-sky-700 dark:text-sky-300">
        Tech stack
      </div>
      <div className="mt-3 grid grid-cols-5 md:grid-cols-5 gap-2 md:gap-3 text-xs md:text-xl text-neutral-700 dark:text-neutral-200 items-center">
        {items.map((it) => (
          <div
            key={it.name}
            className="flex flex-col items-center justify-center gap-1 p-1 md:p-2 rounded-sm bg-white/60 dark:bg-neutral-800/40"
            title={it.name}
          >
            <div className="text-lg md:text-3xl text-sky-600 dark:text-sky-300">
              {it.icon}
            </div>
            <div className="text-[10px] md:text-xl text-center">
              {it.name.split(" ")[0]}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
