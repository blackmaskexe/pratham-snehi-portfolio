"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  startDelay?: number; // milliseconds
  style?: React.CSSProperties;
};

export default function ProjectSectionPointer({
  startDelay = 4800,
  style,
}: Props) {
  const delaySec = (startDelay || 0) / 1000;

  const bubbleControls = useAnimation();

  useEffect(() => {
    let mounted = true;

    async function seq() {
      // entrance
      await bubbleControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: delaySec + 0.08, duration: 0.5, ease: "easeOut" },
      });
      if (!mounted) return;

      // subtle repeating lift
      bubbleControls.start({
        y: [0, -6, 0],
        transition: {
          duration: 0.25,
          repeat: Infinity,
          repeatDelay: 1.25,
          ease: "easeOut",
        },
      });
    }

    seq();

    return () => {
      mounted = false;
    };
  }, [bubbleControls, delaySec]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delaySec, duration: 0.6, ease: "easeOut" }}
      style={style}
      className="pointer-events-none flex flex-col items-center gap-2 z-20 mb-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={bubbleControls}
        className="bg-white/90 dark:bg-neutral-900/80 text-sky-700 dark:text-sky-300 px-3 py-1 rounded-full shadow-lg border border-white/60 dark:border-black/40 text-sm font-semibold"
      >
        <span>This macOS is interactive!</span>
      </motion.div>
    </motion.div>
  );
}
