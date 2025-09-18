import MacbookFrame from "./MacbookFrame";
import MacosDesktop from "./react-macos-desktop/lib";
import MobilePhoneSimulation from "./MobilePhoneSimulation";
import ProjectSectionPointer from "./ProjectSectionPointer";
import React, { forwardRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectsSection = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className } = props as React.HTMLAttributes<HTMLDivElement>;
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref as any}
          className={className}
          animate={controls as any}
        >
          <ProjectSectionPointer />

          {/* Projects Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Interactive showcase of my applications - {isMobile ? "tap on mobile apps" : "click on desktop apps"} to explore them
            </p>
          </div>

          {/* Responsive Project Display */}
          <div className="flex justify-center items-center">
            {isMobile ? (
              <MobilePhoneSimulation className="max-w-sm mx-auto" />
            ) : (
              <div className="relative z-[99] h-[70vh] w-full max-w-5xl">
                <MacbookFrame>
                  <MacosDesktop />
                </MacbookFrame>
              </div>
            )}
          </div>

          {/* Project Info Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Gains Chat",
                description: "<strong>AI-powered fitness coaching platform</strong> with <strong>personalized conversations</strong>",
                tech: ["React Native", "AI/ML", "Node.js"],
                color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
              },
              {
                name: "Habit Mentor",
                description: "<strong>Smart habit tracking</strong> with <strong>AI-driven insights</strong> and coaching",
                tech: ["React Native", "Analytics", "AI"],
                color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
              },
              {
                name: "Project Manager",
                description: "<strong>Comprehensive project management tool</strong> with <strong>team collaboration</strong>",
                tech: ["React", "TypeScript", "Cloud"],
                color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
              },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${project.color} border-2 p-6 rounded-xl`}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.name}
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});
export default ProjectsSection;
