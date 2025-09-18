"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code2, Smartphone, Cloud, Brain } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern web technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Creating beautiful, responsive experiences across all devices",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leveraging AI to create intelligent, user-centric applications",
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS & Microsoft certified with scalable cloud solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I'm a passionate <strong className="text-gray-900 dark:text-white">full-stack developer</strong> who believes technology should solve <strong className="text-gray-900 dark:text-white">real problems</strong>
              and create <strong className="text-gray-900 dark:text-white">meaningful experiences</strong>. My journey in software development is driven by an
              insatiable curiosity and a love for building things that matter.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              With expertise spanning from <strong className="text-gray-900 dark:text-white">React Native mobile applications</strong> to <strong className="text-gray-900 dark:text-white">cloud-native
              architectures</strong>, I specialize in creating <strong className="text-gray-900 dark:text-white">seamless digital experiences</strong>. I'm particularly
              excited about integrating <strong className="text-gray-900 dark:text-white">AI</strong> into everyday applications to make them more intelligent
              and user-friendly.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              When I'm not coding, you'll find me exploring the latest in <strong className="text-gray-900 dark:text-white">tech trends</strong>, contributing
              to <strong className="text-gray-900 dark:text-white">open source projects</strong>, or <strong className="text-gray-900 dark:text-white">mentoring fellow developers</strong>. I'm always eager to collaborate
              on projects that push the boundaries of what's possible.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["React", "TypeScript", "Node.js", "React Native", "AWS", "AI/ML"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}