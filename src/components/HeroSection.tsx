"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { WindowsIcon, WaveText } from "./Navbar";

const RAW_SPEECH_STREAM =
  "kind of chaotic, like nobody really knows what's going on so can you check in with them and see if the notes from yesterday's meeting were sent out, or if they're still waiting...   ";

const POLISHED_TEXT_STREAM =
  "Can you check in with the team to see if yesterday's meeting notes were sent out, or if they're still waiting?   ";

export function HeroSection() {
  const rawTextPathRef = useRef<SVGTextPathElement | null>(null);
  const polishedTextPathRef = useRef<SVGTextPathElement | null>(null);

  useEffect(() => {
    let rafId: number;
    let offset = 0;

    const animateTextPaths = () => {
      offset = (offset + 0.06) % 50;
      if (rawTextPathRef.current) {
        rawTextPathRef.current.setAttribute("startOffset", `${-offset}%`);
      }
      if (polishedTextPathRef.current) {
        polishedTextPathRef.current.setAttribute("startOffset", `${-offset}%`);
      }
      rafId = requestAnimationFrame(animateTextPaths);
    };

    rafId = requestAnimationFrame(animateTextPaths);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative pt-10 pb-10 md:pt-14 md:pb-14 overflow-hidden bg-[#FFFFEB]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center relative z-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] text-[#1A1A1A]/75 font-semibold mb-3"
        >
          WISPR FLOW DICTATION
        </motion.p>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="font-garamond text-[58px] sm:text-[80px] md:text-[96px] leading-[0.94] tracking-[-0.025em] text-[#1A1A1A] font-normal"
        >
          Don&apos;t type,
          <br />
          <span className="italic font-normal">just speak.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-[460px] mx-auto text-[17px] md:text-[18.5px] leading-[1.48] text-[#1A1A1A]/85 font-normal"
        >
          The voice-to-text AI that turns speech into clear, polished writing in every app.
        </motion.p>

        {/* Primary CTA + Platform Availability */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-col items-center gap-3.5"
        >
          <a
            href="#download"
            className="group inline-flex items-center gap-2.5 bg-[#F0D7FF] hover:bg-[#E5C2FA] text-[#1A1A1A] font-semibold text-[15px] px-6 py-3.5 rounded-xl border border-[#1A1A1A] transition-all"
          >
            <WindowsIcon className="w-4 h-4" />
            <WaveText text="Get started on Windows" />
          </a>

          <p className="text-[13px] text-[#1A1A1A]/55 font-medium">
            Available on Mac, Windows, iPhone, and Android
          </p>
        </motion.div>
      </div>

      {/* Curved SVG Text Stream with Loop-de-Loop on Left + Ribbon on Right */}
      <div className="relative -mt-20 md:-mt-28 w-full max-w-[1440px] mx-auto h-[270px] md:h-[300px] flex items-end justify-center select-none pointer-events-none">
        <svg
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Left Loop-de-Loop Curve matching shot-00-0.png */}
            <path
              id="hero-raw-curve"
              d="M -60,210 C 160,240 360,190 350,90 C 340,-10 150,0 160,120 C 170,240 450,330 720,315"
            />
            {/* Right Polished Ribbon Curve */}
            <path
              id="hero-polished-curve"
              d="M 720,315 C 980,315 1220,255 1520,185"
            />
          </defs>

          {/* Flowing raw speech on left */}
          <text
            fill="#1A1A1A"
            fillOpacity="0.38"
            fontSize="16"
            fontWeight="500"
            letterSpacing="-0.01em"
          >
            <textPath ref={rawTextPathRef} href="#hero-raw-curve" startOffset="0%">
              {RAW_SPEECH_STREAM.repeat(4)}
            </textPath>
          </text>

          {/* Thick dark ribbon backing on right */}
          <use
            href="#hero-polished-curve"
            stroke="#1A1A1A"
            strokeWidth="34"
            strokeLinecap="round"
          />

          {/* Flowing polished white writing inside dark ribbon on right */}
          <text
            fill="#FFFFEB"
            fontSize="17"
            fontWeight="600"
            letterSpacing="-0.01em"
            dy="6"
          >
            <textPath ref={polishedTextPathRef} href="#hero-polished-curve" startOffset="0%">
              {POLISHED_TEXT_STREAM.repeat(4)}
            </textPath>
          </text>
        </svg>

        {/* Center Grammar Corrected Pill + Flowbar Pill */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <div className="bg-[#034F46] text-[#FFFFEB] text-[14px] font-semibold px-5 py-2 rounded-full shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFFFEB]" />
            <span>Grammar corrected</span>
          </div>

          <img
            src="/assets/flowbar.svg"
            alt="Wispr Flowbar"
            className="h-9 w-auto drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
