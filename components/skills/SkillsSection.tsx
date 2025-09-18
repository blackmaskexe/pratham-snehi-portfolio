"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Cpu,
  Palette,
  Server,
  Globe
} from "lucide-react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeCategory, setActiveCategory] = useState("frontend");

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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      color: "blue",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 },
        { name: "React Native", level: 88 },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "green",
      skills: [
        { name: "Node.js", level: 87 },
        { name: "Python", level: 83 },
        { name: "API Design", level: 90 },
        { name: "GraphQL", level: 78 },
        { name: "Microservices", level: 82 },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "AWS Services", level: 85 },
        { name: "Microsoft Azure", level: 80 },
        { name: "Docker", level: 82 },
        { name: "CI/CD", level: 85 },
        { name: "Serverless", level: 78 },
      ],
    },
    database: {
      title: "Database & AI",
      icon: Database,
      color: "orange",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 75 },
        { name: "Machine Learning", level: 72 },
        { name: "AI Integration", level: 80 },
      ],
    },
  };

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, index * 200);
        return () => clearTimeout(timer);
      }
    }, [isInView, skill.level, index]);

    return (
      <motion.div
        variants={itemVariants}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div
            className={`h-2.5 rounded-full bg-gradient-to-r ${getColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color)}`}
            initial={{ width: 0 }}
            animate={{ width: `${animatedLevel}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </motion.div>
    );
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBgColorClasses = (color: string, isActive: boolean) => {
    if (!isActive) return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";

    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            Technical Skills
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive overview of my <strong className="text-gray-900 dark:text-white">technical expertise</strong> across <strong className="text-gray-900 dark:text-white">different domains</strong>
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-1"
          >
            <div className="space-y-3">
              {Object.entries(skillCategories).map(([key, category]) => {
                const Icon = category.icon;
                const isActive = activeCategory === key;

                return (
                  <motion.button
                    key={key}
                    variants={itemVariants}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left hover:shadow-md ${getBgColorClasses(category.color, isActive)}`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-medium">{category.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-2"
          >
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-8">
                {(() => {
                  const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                  return <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
                })()}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Certifications
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { name: "AWS Certified", icon: "☁️" },
              { name: "Microsoft Certified", icon: "🚀" },
              { name: "React Native", icon: "📱" },
              { name: "Full-Stack Development", icon: "💻" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
              >
                <span className="text-xl">{cert.icon}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {cert.name}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}