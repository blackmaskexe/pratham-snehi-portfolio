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
  Globe,
  Brain,
  GitBranch,
  Monitor,
  Zap
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAmazondynamodb,
  SiAwslambda,
  SiGit,
  SiGithub,
  SiAmazon,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";

import {
  FaMobile,
  FaCloud,
  FaBrain,
  FaRocket,
  FaLock,
  FaInfinity,
} from "react-icons/fa";

import {
  IoLogoApple,
  IoLogoAndroid,
  IoLogoJavascript,
} from "react-icons/io5";

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
      icon: Monitor,
      color: "blue",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "green",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "API Gateway", icon: FaRocket },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Firebase", icon: SiFirebase },
        { name: "DynamoDB", icon: SiAmazondynamodb },
        { name: "OAuth2.0", icon: FaLock },
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "AWS Lambda", icon: SiAwslambda },
        { name: "CI/CD Pipelines", icon: FaInfinity },
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Cloud Architecture", icon: SiAmazon },
        { name: "Serverless", icon: Zap },
      ],
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      color: "pink",
      skills: [
        { name: "React Native", icon: SiReact },
        { name: "iOS Development", icon: IoLogoApple },
        { name: "Android Development", icon: IoLogoAndroid },
        { name: "Mobile-First Design", icon: FaMobile },
        { name: "App Store Deployment", icon: FaRocket },
      ],
    },
    ai: {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "orange",
      skills: [
        { name: "OpenAI API", icon: SiOpenai },
        { name: "Gemini AI", icon: SiGooglegemini },
        { name: "AI Integration", icon: FaBrain },
        { name: "Machine Learning", icon: Brain },
        { name: "Natural Language Processing", icon: Cpu },
      ],
    },
  };

  const SkillBubble = ({ skill, index }: { skill: { name: string; icon: any }, index: number }) => {
    const IconComponent = skill.icon;

    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: index * 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.3 }
        }}
        className={`relative group cursor-pointer`}
      >
        <div className={`
          ${getBubbleColorClasses(skillCategories[activeCategory as keyof typeof skillCategories].color)}
          px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
          border-2 border-white dark:border-gray-800
          backdrop-blur-sm
          flex items-center space-x-3
        `}>
          <IconComponent className="text-lg w-5 h-5 flex-shrink-0" />
          <span className="font-medium text-sm text-gray-800 dark:text-white whitespace-nowrap">
            {skill.name}
          </span>
        </div>

        {/* Floating animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -4, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{
            duration: 2 + index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.div>
    );
  };

  const getBgColorClasses = (color: string, isActive: boolean) => {
    if (!isActive) return "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400";

    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      green: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      pink: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBubbleColorClasses = (color: string) => {
    const colors = {
      blue: "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40",
      green: "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/40 dark:to-green-800/40",
      purple: "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40",
      orange: "bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40",
      pink: "bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/40 dark:to-pink-800/40",
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

        <div className="space-y-8">
          {/* Category Selector */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-wrap justify-center gap-4"
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;

              return (
                <motion.button
                  key={key}
                  variants={itemVariants}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-md ${getBgColorClasses(category.color, isActive)}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.title}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="w-full"
          >
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center space-x-3 mb-8">
                {(() => {
                  const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon;
                  return <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />;
                })()}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <SkillBubble key={skill.name} skill={skill} index={index} />
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