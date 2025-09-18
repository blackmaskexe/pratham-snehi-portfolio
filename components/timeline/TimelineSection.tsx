"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Rocket,
  Code,
  Users,
  TrendingUp,
  Star
} from "lucide-react";

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const timelineData = [
    {
      year: "2024",
      type: "achievement",
      icon: Award,
      title: "AWS & Microsoft Certified",
      description: "Achieved <strong>cloud certifications</strong> to strengthen expertise in <strong>cloud architecture</strong> and <strong>deployment strategies</strong>.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
      year: "2023",
      type: "work",
      icon: Rocket,
      title: "Lead Full-Stack Developer",
      description: "Led development of <strong>AI-powered mobile applications</strong> with <strong>React Native</strong>, implementing <strong>machine learning features</strong> and <strong>cloud integrations</strong>.",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      year: "2023",
      type: "project",
      icon: Code,
      title: "Gains Chat AI Platform",
      description: "Built an <strong>intelligent fitness coaching platform</strong> using <strong>React Native</strong> and <strong>AI</strong>, helping users achieve their health goals through <strong>personalized conversations</strong>.",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      year: "2022",
      type: "work",
      icon: Users,
      title: "Senior React Developer",
      description: "Specialized in building <strong>responsive web applications</strong> and <strong>mobile apps</strong>, <strong>mentoring junior developers</strong> and establishing <strong>best practices</strong>.",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      year: "2022",
      type: "project",
      icon: TrendingUp,
      title: "Habit Mentor AI",
      description: "Developed an <strong>AI-driven habit tracking application</strong> with <strong>personalized coaching</strong>, <strong>data visualization</strong>, and <strong>progress analytics</strong>.",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
      year: "2021",
      type: "education",
      icon: GraduationCap,
      title: "Computer Science Focus",
      description: "Deepened knowledge in <strong>software engineering</strong>, <strong>algorithms</strong>, and <strong>system design</strong> while building multiple side projects.",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
      year: "2020",
      type: "achievement",
      icon: Star,
      title: "Open Source Contributor",
      description: "Started contributing to <strong>open source projects</strong>, focusing on <strong>React ecosystem tools</strong> and <strong>mobile development libraries</strong>.",
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    {
      year: "2019",
      type: "work",
      icon: Briefcase,
      title: "Junior Developer",
      description: "Began professional journey building <strong>web applications</strong> with <strong>modern JavaScript frameworks</strong> and learning <strong>industry best practices</strong>.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
    },
  ];

  const getTypeLabel = (type: string) => {
    const labels = {
      work: "Experience",
      project: "Project",
      education: "Education",
      achievement: "Achievement",
    };
    return labels[type as keyof typeof labels] || type;
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
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
            My Journey
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A timeline of my professional growth, key projects, and achievements in the world of software development
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0`}>
                  <motion.div
                    className={`${item.bgColor} ${item.borderColor} border-2 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 ${item.bgColor} rounded-lg ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${item.bgColor} ${item.color}`}>
                          {getTypeLabel(item.type)}
                        </span>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.year}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    <p
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </motion.div>
                </div>

                {/* Year Display (Hidden on mobile, shown on desktop) */}
                <div className={`hidden md:block w-1/2 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <div className="text-4xl font-bold text-gray-300 dark:text-gray-700">
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "3", label: "Certifications" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}