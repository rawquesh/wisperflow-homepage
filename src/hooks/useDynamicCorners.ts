"use client";

import { useEffect, RefObject } from "react";

interface DynamicCornersOptions {
  maxDesktop?: number;
  maxMobile?: number;
  smooth?: number;
  topOnly?: boolean;
  bottomOnly?: boolean;
}

/**
 * Replicates Wispr Flow's scroll-reactive corner radius effect (`[data-corners]`).
 * As a section enters or exits the viewport, its top and bottom border radii
 * smoothly interpolate between 0px (when flush with or past the viewport edge)
 * and `maxDesktop` (80px on desktop, 40px on mobile).
 */
export function useDynamicCorners<T extends HTMLElement | null>(
  ref: RefObject<T>,
  options: DynamicCornersOptions = {}
) {
  const {
    maxDesktop = 80,
    maxMobile = 40,
    smooth = 0.16,
    topOnly = false,
    bottomOnly = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let currentTop = 0;
    let currentBottom = 0;
    let rafId: number | null = null;
    let lastTime = performance.now();

    const clamp = (val: number, min: number, max: number) =>
      Math.max(min, Math.min(max, val));

    const update = (now: number) => {
      rafId = null;
      const node = ref.current;
      if (!node) return;

      const dt = Math.min(3, Math.max(0.5, (now - lastTime) / 16.6667));
      lastTime = now;
      const lerpFactor = 1 - Math.pow(1 - smooth, dt);

      const maxRadius = window.innerWidth <= 991 ? maxMobile : maxDesktop;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;

      const targetTop = bottomOnly ? 0 : clamp(rect.top, 0, maxRadius);
      const targetBottom = topOnly ? 0 : clamp(vh - rect.bottom, 0, maxRadius);

      currentTop += (targetTop - currentTop) * lerpFactor;
      currentBottom += (targetBottom - currentBottom) * lerpFactor;

      if (Math.abs(targetTop - currentTop) < 0.15) currentTop = targetTop;
      if (Math.abs(targetBottom - currentBottom) < 0.15) currentBottom = targetBottom;

      if (!bottomOnly) {
        const topPx = `${currentTop.toFixed(2)}px`;
        node.style.borderTopLeftRadius = topPx;
        node.style.borderTopRightRadius = topPx;
      }
      if (!topOnly) {
        const bottomPx = `${currentBottom.toFixed(2)}px`;
        node.style.borderBottomLeftRadius = bottomPx;
        node.style.borderBottomRightRadius = bottomPx;
      }

      if (
        Math.abs(targetTop - currentTop) >= 0.15 ||
        Math.abs(targetBottom - currentBottom) >= 0.15
      ) {
        rafId = requestAnimationFrame(update);
      }
    };

    const requestTick = () => {
      if (rafId === null) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(update);
      }
    };

    requestTick();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick, { passive: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, [ref, maxDesktop, maxMobile, smooth, topOnly, bottomOnly]);
}

