import MacbookFrame from "./MacbookFrame";
import MacosDesktop from "./react-macos-desktop/lib";
import ProjectSectionPointer from "./ProjectSectionPointer";
import React, { forwardRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectsSection = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className } = props as React.HTMLAttributes<HTMLDivElement>;
  const controls = useAnimation();

  useEffect(() => {
    const onCtaDone = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    };

    // start hidden
    controls.set({ opacity: 0, y: 12 });

    window.addEventListener("hero:cta:done", onCtaDone as EventListener);
    return () =>
      window.removeEventListener("hero:cta:done", onCtaDone as EventListener);
  }, [controls]);

  return (
    <motion.div
      ref={ref as any}
      className={className}
      animate={controls as any}
    >
      <ProjectSectionPointer />

      <div className="relative z-[99] h-[90vh] mr-12 ml-12">
        <MacbookFrame>
          <MacosDesktop />
        </MacbookFrame>
      </div>
      {/* Your screen content goes here */}
    </motion.div>
  );
});
export default ProjectsSection;
