"use client";

import React from "react";
import { GainsChatApp } from "../apps/gains-chat/gains-chat-app";
import { HabitMentorAIApp } from "../apps/habitmentor-ai/habitmentor-ai-app";

interface IOSSimulatorWindowProps {
  appId: string;
  appName: string;
}

export function IOSSimulatorWindow({
  appId,
  appName,
}: IOSSimulatorWindowProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [measured, setMeasured] = React.useState<{
    width: number | null;
    height: number | null;
  }>({ width: null, height: null });

  React.useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;

    // Initial measure
    const measure = () => {
      const rect = node.getBoundingClientRect();
      setMeasured({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    };

    measure();

    // ResizeObserver to track container changes
    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(node);

    // Also listen for window resize as a fallback
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const renderAppContent = () => {
    const containerWidth = measured.width ?? undefined;
    const containerHeight = measured.height ?? undefined;

    switch (appId) {
      case "gains-chat":
        return (
          <GainsChatApp
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />
        );

      case "habitmentor-ai":
        return (
          <HabitMentorAIApp
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />
        );

      default:
        return (
          <div className="h-full bg-gray-100 flex items-center justify-center">
            <p>App not found</p>
          </div>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-black relative pointer-events-auto"
      style={{ zIndex: 1 }}
    >
      <div className="flex-1 flex flex-col w-full h-full pointer-events-auto relative">
        {renderAppContent()}
      </div>
    </div>
  );
}
