"use client";

import React, { useRef } from "react";
import { useDynamicCorners } from "@/hooks/useDynamicCorners";

const CLIENT_LOGOS = [
  { name: "Amazon", src: "/assets/amazon-lumen.svg" },
  { name: "Notion", src: "/assets/notion-lumen.svg" },
  { name: "Klarna", src: "/assets/klarna-lumen.svg" },
  { name: "Groupon", src: "/assets/groupon-lumen.svg" },
  { name: "Vercel", src: "/assets/vercel-lumen.svg" },
  { name: "Mercury", src: "/assets/mercury-lumen.svg" },
  { name: "Microsoft", src: "/assets/microsoft-lumen.svg" },
];

export function LogoMarqueeAndSpeed() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useDynamicCorners(sectionRef, { maxDesktop: 80, maxMobile: 40, topOnly: true });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1A1A1A] text-[#FFFFEB] pt-16 pb-28 md:pt-20 md:pb-32 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <p className="text-center text-[12px] md:text-[13px] uppercase tracking-[0.16em] text-[#FFFFEB]/75 font-semibold mb-12">
          USED BY PROFESSIONALS AT
        </p>

        {/* Infinite Logo Marquee with Edge Gradients */}
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

          <div className="flex w-max animate-marquee items-center gap-16 md:gap-24">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center h-10 opacity-90 hover:opacity-100 transition-opacity shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 md:h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
