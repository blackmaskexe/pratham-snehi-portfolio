"use client";

import { useEffect, useState } from "react";

interface SimulatorSize {
  width: number;
  height: number;
  phoneWidth: number;
  phoneHeight: number;
}

export function useSimulatorSize() {
  const [simulatorSize, setSimulatorSize] = useState<SimulatorSize>({
    width: 320,
    height: 632,
    phoneWidth: 320,
    phoneHeight: 632,
  });

  useEffect(() => {
    const calculateSize = () => {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // For portfolio component - aim for 80% of available space
      // Account for MacBook frame, menu bar, dock, and padding but allow larger sizing
      const availableHeight = Math.min(viewportHeight * 0.8, 700); // 80% of viewport or 700px max
      const availableWidth = Math.min(viewportWidth * 0.6, 500); // 60% of viewport or 500px max

      // iPhone 16 Pro aspect ratio: 19.5:9
      const phoneAspectRatio = 19.5 / 9;

      // Title bar height
      const titleBarHeight = 56;

      // Gap between title bar and phone
      const gap = 8; // pt-2 = 8px

      // Calculate phone dimensions based on available space
      let phoneWidth: number;
      let phoneHeight: number;

      // Try fitting by height first
      const maxPhoneHeight = availableHeight - titleBarHeight - gap;
      phoneWidth = maxPhoneHeight / phoneAspectRatio;
      phoneHeight = maxPhoneHeight;

      // If it's too wide, fit by width instead
      if (phoneWidth > availableWidth) {
        phoneWidth = availableWidth;
        phoneHeight = phoneWidth * phoneAspectRatio;
      }

      // Ensure minimum size for usability - increase minimum for better visibility
      const minPhoneWidth = 300;
      const minPhoneHeight = minPhoneWidth * phoneAspectRatio;

      if (phoneWidth < minPhoneWidth) {
        phoneWidth = minPhoneWidth;
        phoneHeight = minPhoneHeight;
      }

      // If the total simulator height is greater than the viewport, scale down to fit
      let totalWidth = phoneWidth;
      let totalHeight = phoneHeight + titleBarHeight + gap;

      if (totalHeight > viewportHeight) {
        // Calculate scale factor to fit simulator in viewport
        const scale = viewportHeight / totalHeight;
        phoneWidth = phoneWidth * scale;
        phoneHeight = phoneHeight * scale;
        totalWidth = phoneWidth;
        totalHeight = phoneHeight + titleBarHeight + gap;
      }

      setSimulatorSize({
        width: totalWidth,
        height: totalHeight,
        phoneWidth,
        phoneHeight,
      });
    };

    calculateSize();
    window.addEventListener("resize", calculateSize);

    return () => {
      window.removeEventListener("resize", calculateSize);
    };
  }, []);

  return simulatorSize;
}
