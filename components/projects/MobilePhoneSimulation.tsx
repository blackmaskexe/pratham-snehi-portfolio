"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface MobilePhoneSimulationProps {
  className?: string;
}

// Mock apps for the phone simulation
const phoneApps = [
  { id: "gains-chat", name: "Gains Chat", color: "bg-blue-500", icon: "💪" },
  { id: "habitmentor-ai", name: "Habit Mentor", color: "bg-green-500", icon: "🎯" },
  { id: "project-manager", name: "Projects", color: "bg-purple-500", icon: "📋" },
  { id: "settings", name: "Settings", color: "bg-gray-500", icon: "⚙️" },
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
    // Close app after 3 seconds for demo purposes
    setTimeout(() => setOpenApp(null), 3000);
  };

  const renderAppContent = (appId: string) => {
    switch (appId) {
      case "gains-chat":
        return (
          <div className="h-full bg-gradient-to-b from-blue-400 to-blue-600 text-white p-4">
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold mb-4">Gains Chat</h2>
              <p className="text-sm opacity-90">AI-powered fitness conversations</p>
              <div className="mt-8 space-y-3">
                <div className="bg-white/20 rounded-lg p-3 text-left">
                  <p className="text-sm">How many calories should I eat today?</p>
                </div>
                <div className="bg-white/30 rounded-lg p-3 text-left">
                  <p className="text-sm">Based on your goals, aim for 2,200 calories with 40% carbs, 30% protein, 30% fat.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "habitmentor-ai":
        return (
          <div className="h-full bg-gradient-to-b from-green-400 to-green-600 text-white p-4">
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold mb-4">Habit Mentor</h2>
              <p className="text-sm opacity-90">AI habit tracking & coaching</p>
              <div className="mt-8 space-y-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Reading</span>
                    <span className="text-lg">📚</span>
                  </div>
                  <div className="mt-2 bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Meditation</span>
                    <span className="text-lg">🧘</span>
                  </div>
                  <div className="mt-2 bg-white/20 rounded-full h-2">
                    <div className="bg-white rounded-full h-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

            {/* Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50"></div>

            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black flex items-end justify-between px-6 pb-2 text-white text-sm z-40">
              <span className="font-medium">{formatTime(currentTime)}</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-3/4 h-full bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Screen Content */}
            <div className="h-full pt-12">
              {openApp ? (
                // App View
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full"
                >
                  {renderAppContent(openApp)}

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                    <button
                      onClick={() => setOpenApp(null)}
                      className="w-32 h-1 bg-white rounded-full opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              ) : (
                // Home Screen
                <div className="h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {phoneApps.map((app, index) => (
                      <motion.button
                        key={app.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openAppHandler(app.id)}
                        className={`aspect-square ${app.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg`}
                      >
                        <span className="text-2xl mb-1">{app.icon}</span>
                        <span className="text-xs font-medium">{app.name}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Dock */}
                  <div className="absolute bottom-8 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                      <div className="flex justify-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">💬</span>
                        </div>
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">📱</span>
                        </div>
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-lg">🌐</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}