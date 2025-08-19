"use client";

import { motion } from "framer-motion";

const todos = [
  { label: "Refactor projects UI", done: true },
  { label: "Add unit tests", done: false },
  { label: "Integrate CI/CD", done: false },
  { label: "Mobile perf improvements", done: false },
  { label: "Write technical blog", done: true },
];

type Props = { style?: React.CSSProperties; startDelay?: number };

export default function HeroStickyNoteTodoList({
  style,
  startDelay = 0,
}: Props) {
  const delaySec = (startDelay || 0) / 1000;

  return (
    <motion.div
      initial={{ scale: 0.82, rotate: 6, opacity: 0 }}
      animate={{ scale: 1, rotate: [4, -3, 1, 0], opacity: 1 }}
      transition={{ delay: delaySec, duration: 0.9, ease: "easeOut" }}
      style={style}
      className="w-60 sm:w-72 lg:w-80 p-4 rounded-lg bg-yellow-50/95 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-800 shadow-2xl"
    >
      <div className="text-sm md:text-xl font-bold text-yellow-700 dark:text-yellow-300">
        My 2025 to-do list
      </div>
      <ul className="mt-2 space-y-1 text-xs md:text-lg text-neutral-700 dark:text-neutral-200">
        {todos.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full ${
                t.done ? "bg-emerald-500" : "bg-neutral-300"
              }`}
            ></span>
            <span
              className={`${t.done ? "line-through text-neutral-400" : ""}`}
            >
              {t.label}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
