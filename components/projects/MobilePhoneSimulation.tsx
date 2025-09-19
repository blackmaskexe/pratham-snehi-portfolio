"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GainsChatApp } from "./react-macos-desktop/lib/components/apps/gains-chat/gains-chat-app";
import { HabitMentorAIApp } from "./react-macos-desktop/lib/components/apps/habitmentor-ai/habitmentor-ai-app";

interface MobilePhoneSimulationProps {
  className?: string;
}

// Apps for the phone simulation - only my two apps
const phoneApps = [
  { id: "gains-chat", name: "Gains Chat", color: "bg-gradient-to-br from-blue-500 to-blue-600", icon: "💪" },
  { id: "habitmentor-ai", name: "Habit Mentor", color: "bg-gradient-to-br from-green-500 to-green-600", icon: "🎯" },
];

export default function MobilePhoneSimulation({ className }: MobilePhoneSimulationProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openApp, setOpenApp] = useState<string | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onCtaDone = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    };

    controls.set({ opacity: 0, y: 12 });
    window.addEventListener("hero:cta:done", onCtaDone as EventListener);
    return () =>
      window.removeEventListener("hero:cta:done", onCtaDone as EventListener);
  }, [controls]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const openAppHandler = (appId: string) => {
    setOpenApp(appId);
    // Close app after varying time based on app type
    const autoCloseTime = (appId === "gains-chat" || appId === "habitmentor-ai") ? 8000 : 3000;
    setTimeout(() => setOpenApp(null), autoCloseTime);
  };

  const renderAppContent = (appId: string) => {
    // Mobile phone constraints: optimized for better fit without notch
    const mobileWidth = 256; // Account for phone frame padding
    const mobileHeight = 484; // Full height without notch interference

    switch (appId) {
      case "gains-chat":
        return (
          <GainsChatApp
            containerWidth={mobileWidth}
            containerHeight={mobileHeight}
          />
        );
      case "habitmentor-ai":
        return (
          <HabitMentorAIApp
            containerWidth={mobileWidth}
            containerHeight={mobileHeight}
          />
        );
      default:
        return (
          <div className="h-full bg-gradient-to-b from-purple-400 to-purple-600 text-white p-4 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Project Showcase</h2>
              <p className="text-sm opacity-90">Exploring my work...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div className={`flex justify-center items-center h-full ${className}`} animate={controls}>
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">

            {/* Status Bar - only show for home screen and non-real apps */}
            {(!openApp || (openApp !== "gains-chat" && openApp !== "habitmentor-ai")) && (
              <div className="absolute top-0 left-0 right-0 h-12 bg-black flex items-end justify-between px-6 pb-2 text-white text-sm z-40">
                <span className="font-medium">{formatTime(currentTime)}</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-3/4 h-full bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen Content */}
            <div className="h-full">
              {openApp ? (
                // App View - Full screen for real apps, with status bar overlay for others
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full relative"
                >
                  {(openApp === "gains-chat" || openApp === "habitmentor-ai") ? (
                    // Real apps get full screen with their own status bars
                    <div className="h-full">
                      {renderAppContent(openApp)}
                    </div>
                  ) : (
                    // Other apps get the old layout with phone status bar
                    <div className="h-full pt-12">
                      {renderAppContent(openApp)}
                    </div>
                  )}

                  {/* Home Indicator - always visible */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50">
                    <button
                      onClick={() => setOpenApp(null)}
                      className="w-32 h-1 bg-white rounded-full opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              ) : (
                // Home Screen
                <div className="h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 pt-12">
                  <div className="flex justify-center items-start mt-16">
                    <div className="grid grid-cols-2 gap-6">
                    {phoneApps.map((app, index) => (
                      <motion.button
                        key={app.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openAppHandler(app.id)}
                        className={`w-20 h-20 ${app.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg`}
                      >
                        <span className="text-2xl mb-1">{app.icon}</span>
                        <span className="text-xs font-medium text-center leading-tight">{app.name}</span>
                      </motion.button>
                    ))}
                    </div>
                  </div>

                  {/* Dock */}
                  <div className="absolute bottom-8 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                      <div className="flex justify-center space-x-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">💪</span>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">🎯</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}