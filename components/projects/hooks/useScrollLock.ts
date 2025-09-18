"use client";

import { useEffect, useState, useRef, RefObject } from "react";

interface ScrollLockState {
  isLocked: boolean;
  progress: number; // 0 to 1, representing how far through the lock we are
  isDesktopOrTablet: boolean;
}

interface UseScrollLockProps {
  elementRef: RefObject<HTMLElement>;
  lockDuration?: number; // How much scroll distance to lock for (in pixels)
  enabled?: boolean;
}

export function useScrollLock({
  elementRef,
  lockDuration = 800,
  enabled = true
}: UseScrollLockProps): ScrollLockState {
  const [scrollLockState, setScrollLockState] = useState<ScrollLockState>({
    isLocked: false,
    progress: 0,
    isDesktopOrTablet: true,
  });

  const lockStartRef = useRef<number | null>(null);
  const accumulatedScrollRef = useRef(0);
  const isDesktopOrTabletRef = useRef(true);

  useEffect(() => {
    if (!enabled) return;

    // Check if device is desktop/tablet
    const checkDevice = () => {
      const isDesktopOrTablet = window.innerWidth >= 768; // md breakpoint
      isDesktopOrTabletRef.current = isDesktopOrTablet;
      setScrollLockState(prev => ({ ...prev, isDesktopOrTablet }));
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleScroll = (e: WheelEvent) => {
      if (!elementRef.current || !isDesktopOrTabletRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;

      if (isInView) {
        // Start or continue scroll lock
        if (lockStartRef.current === null) {
          lockStartRef.current = window.scrollY;
          accumulatedScrollRef.current = 0;
        }

        // Prevent default scrolling
        e.preventDefault();

        // Accumulate scroll delta
        accumulatedScrollRef.current += e.deltaY;
        const progress = Math.min(Math.max(accumulatedScrollRef.current / lockDuration, 0), 1);

        setScrollLockState(prev => ({
          ...prev,
          isLocked: true,
          progress
        }));

        // If we've scrolled through the entire lock duration, unlock and continue scroll
        if (progress >= 1) {
          const remainingScroll = accumulatedScrollRef.current - lockDuration;

          lockStartRef.current = null;
          accumulatedScrollRef.current = 0;
          setScrollLockState(prev => ({ ...prev, isLocked: false, progress: 0 }));

          // Continue the scroll after a brief delay to allow state update
          setTimeout(() => {
            if (remainingScroll > 0) {
              window.scrollBy(0, remainingScroll);
            }
          }, 50);
        }
      } else {
        // Reset lock if element is out of view
        if (lockStartRef.current !== null) {
          lockStartRef.current = null;
          accumulatedScrollRef.current = 0;
          setScrollLockState(prev => ({ ...prev, isLocked: false, progress: 0 }));
        }
      }
    };

    // Add passive: false to allow preventDefault
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [elementRef, lockDuration, enabled]);

  return scrollLockState;
}