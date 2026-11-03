"use client";

import React, { useEffect, useState } from "react";

const BADGE_STATES = [
  { label: "Removed", highlight: "Umm", strike: true },
  { label: "Fixed", highlight: "their → they're", strike: false },
  { label: "Cleaned", highlight: "the the", strike: true },
  { label: "Formatted", highlight: "Paragraphs", strike: false },
];

const RAW_SPOKEN_STREAM =
  "Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I’m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it’s probably going to slip. There’s been a lot of back and forth and honestly the the whole thing’s been kind of chaotic, like nobody really knows what’s going on so can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting. I think Cheyene mentioned it but didn’t confirm, and now I’m a little lost.   •   " +
  "Umm, hope your week has started well…I was talking to Cheyene earlier but reception was really bad and I think their going to handle the first part of the project, but I’m not totally sure. Also, I told the team the the new timeline should be ready by Friday, although it’s probably going to slip. There’s been a lot of back and forth and honestly the the whole thing’s been kind of chaotic, like nobody really knows what’s going on so can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting.";

const POLISHED_OUTPUT_STREAM =
  "Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they’re going to handle the first part of the project, but I’m not totally sure. I also told the team the new timeline should be ready by Friday — although it might slip. There’s been a lot of back and forth, and honestly, the whole thing has been a bit chaotic. It feels like nobody really knows what’s going on. Can you check in with them and see if the notes from yesterday’s meeting were sent out, or if they’re still waiting? I think Cheyene mentioned it, but didn’t confirm — and now I’m a little lost!   •   " +
  "Hope your week is off to a good start. I was talking to Cheyene earlier, but the reception was really bad. I think they’re going to handle the first part of the project, but I’m not totally sure. I also told the team the new timeline should be ready by Friday — although it might slip.";

interface HeroSectionProps {
  activeProduct: "dictation" | "notetaker";
}

export function HeroSection({ activeProduct }: HeroSectionProps) {
  const [badgeIdx, setBadgeIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBadgeIdx((prev) => (prev + 1) % BADGE_STATES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const currentBadge = BADGE_STATES[badgeIdx];

  return (
    <section className="relative pt-16 pb-6 md:pt-20 md:pb-12 overflow-hidden select-none">
      {/* Center Hero Copy */}
      <div className="relative z-20 max-w-[780px] mx-auto px-4 text-center flex flex-col items-center">
        <div className="text-[12px] tracking-[0.14em] uppercase text-[#1A1A1A]/75 font-medium mb-4">
          {activeProduct === "dictation"
            ? "WISPR FLOW DICTATION"
            : "WISPR FLOW NOTETAKER"}
        </div>

        <h1 className="font-garamond text-[64px] sm:text-[84px] md:text-[96px] leading-[0.95] tracking-[-0.03em] font-normal text-[#1A1A1A] mb-6">
          {activeProduct === "dictation" ? (
            <>
              Don’t type,
              <br />
              <em className="italic font-normal">just speak.</em>
            </>
          ) : (
            <>
              No bots,
              <br />
              <em className="italic font-normal">just great notes.</em>
            </>
          )}
        </h1>

        <p className="text-[17px] md:text-[18.5px] leading-[1.45] text-[#1A1A1A]/85 max-w-[440px] mb-8 font-normal">
          {activeProduct === "dictation"
            ? "The voice-to-text AI that turns speech into clear, polished writing in every app."
            : "AI meeting notes accurate enough to act on. Works seamlessly across Zoom, Meet, Teams, and Slack."}
        </p>

        <a
          href="#download"
          className="bg-[#EBDCFF] hover:bg-[#E2CEFF] active:scale-[0.99] text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] rounded-[10px] px-6 py-3.5 text-[15px] font-medium inline-flex items-center gap-2.5 transition-all duration-150 shadow-[0_2px_0_rgba(26,26,26,0.12)] mb-4"
        >
          <img
            src="/assets/windows.svg"
            alt="Windows"
            className="w-4 h-4"
          />
          <span>Get started on Windows</span>
        </a>

        <p className="text-[12.5px] text-[#1A1A1A]/60 font-normal">
          Available on Mac, Windows, iPhone, and Android
        </p>
      </div>

      {/* Animated SVG Loop Stream + Transformation Pill + Polished Output Ribbon */}
      <div className="relative w-full max-w-[1440px] mx-auto -mt-36 md:-mt-56 h-[320px] md:h-[420px] pointer-events-none">
        <svg
          viewBox="0 0 1440 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Left Raw Speech Loop Path */}
          <path
            id="hero-raw-curve"
            d="M -120 340 C 60 365, 345 310, 355 190 C 365 75, 165 65, 155 200 C 145 335, 390 450, 720 435"
            stroke="none"
            fill="none"
          />

          <text
            fill="#8D8D7B"
            fontSize="16.5"
            fontFamily="var(--font-figtree), sans-serif"
            letterSpacing="-0.01em"
          >
            <textPath href="#hero-raw-curve" startOffset="0%">
              {RAW_SPOKEN_STREAM}
              <animate
                attributeName="startOffset"
                from="-120%"
                to="0%"
                dur="32s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>

          {/* Right Polished Writing Ribbon Path */}
          <path
            id="hero-polished-curve"
            d="M 720 435 C 940 435, 1180 410, 1540 315"
            stroke="#1A1A1A"
            strokeWidth="34"
            strokeLinecap="round"
            fill="none"
          />

          <text
            fill="#FFFFEB"
            fontSize="16.5"
            fontWeight="500"
            fontFamily="var(--font-figtree), sans-serif"
            letterSpacing="-0.01em"
            dy="5.5"
          >
            <textPath href="#hero-polished-curve" startOffset="0%">
              {POLISHED_OUTPUT_STREAM}
              <animate
                attributeName="startOffset"
                from="-100%"
                to="0%"
                dur="28s"
                repeatCount="indefinite"
              />
            </textPath>
          </text>
        </svg>

        {/* Center Transformation Pill Badge */}
        <div className="absolute bottom-4 md:bottom-7 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <div className="bg-[#034F46] text-[#FFFFEB] border-2 border-[#76A89E]/40 rounded-full px-5 py-2.5 shadow-[0_8px_30px_rgba(3,79,70,0.28)] flex items-center gap-2.5 min-w-[186px] justify-center transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-[#7FFFD4] animate-pulse" />
            <span className="text-[14.5px] font-medium tracking-[-0.01em]">
              {currentBadge.label}{" "}
              <span
                className={
                  currentBadge.strike
                    ? "line-through decoration-[#FFFFEB]/70 opacity-85"
                    : "underline decoration-[#7FFFD4] underline-offset-2"
                }
              >
                {currentBadge.highlight}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

