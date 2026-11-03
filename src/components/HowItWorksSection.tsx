"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { WindowsIcon, WaveText } from "./Navbar";

interface RawWord {
  text: string;
  tag?: "fill" | "corr" | "rep";
}

const RAW_WORDS: RawWord[] = [
  { text: "Hey" },
  { text: "so", tag: "fill" },
  { text: "um", tag: "fill" },
  { text: "can" },
  { text: "you" },
  { text: "actually", tag: "corr" },
  { text: "wait", tag: "corr" },
  { text: "can", tag: "corr" },
  { text: "you", tag: "corr" },
  { text: "tell" },
  { text: "the" },
  { text: "team" },
  { text: "that" },
  { text: "the", tag: "rep" },
  { text: "the", tag: "rep" },
  { text: "launch" },
  { text: "is" },
  { text: "gonna" },
  { text: "slip" },
  { text: "I", tag: "corr" },
  { text: "think", tag: "corr" },
  { text: "to", tag: "corr" },
  { text: "like", tag: "fill" },
  { text: "not", tag: "corr" },
  { text: "Friday", tag: "corr" },
  { text: "the" },
  { text: "following" },
  { text: "Monday" },
  { text: "because" },
  { text: "QA" },
  { text: "found" },
  { text: "a" },
  { text: "couple" },
  { text: "of" },
  { text: "edge" },
  { text: "cases" },
];

const POLISHED_WORDS = [
  "Can",
  "you",
  "tell",
  "the",
  "team",
  "that",
  "the",
  "launch",
  "is",
  "slipping",
  "to",
  "the",
  "following",
  "Monday",
  "because",
  "QA",
  "found",
  "a",
  "couple",
  "of",
  "edge",
  "cases?",
];

const CHAPTERS = [
  {
    id: "speak-naturally",
    tabLabel: "Speak naturally",
    title: "Speak naturally",
    description:
      "Talk the way you actually think—pause, ramble, or change your mind mid-sentence. Flow captures your intent without forcing you to sound like a robot.",
    targetProgress: 0.46,
  },
  {
    id: "edits-as-you-speak",
    tabLabel: "Edits as you speak",
    title: "Flow edits as you speak",
    description:
      "Filler words, false starts, and repetitions are stripped out automatically. Your spoken thoughts turn into crisp, structured prose in real time.",
    targetProgress: 0.68,
  },
  {
    id: "use-it-anywhere",
    tabLabel: "Use it anywhere",
    title: "Works in every app",
    description:
      "Press one shortcut to dictate directly into Slack, Claude, Gmail, Cursor, or Notion—formatted for the exact app you are working in.",
    targetProgress: 0.88,
  },
];

const FAN_CARDS = [
  {
    app: "Slack",
    badgeBg: "#4A154B",
    recipient: "#product-launch",
    content:
      "Hey team — heads up that we're moving the launch to next Monday so we can wrap up a few edge cases from QA.",
  },
  {
    app: "Claude",
    badgeBg: "#D97757",
    recipient: "Ask Claude...",
    content:
      "Draft a release checklist covering the QA edge cases we need resolved before next Monday's launch.",
  },
  {
    app: "Gmail",
    badgeBg: "#EA4335",
    recipient: "To: Leadership Team",
    content:
      "Hi everyone,\n\nWe are shifting the launch date to the following Monday to address a few remaining QA edge cases.",
  },
];

const FLOW_SPEED_STREAM =
  "sound good? Cool, give me a sec... Alright, got the structure ready. Want to walk me through what you're already working with...   ";

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

function invLerp(a: number, b: number, v: number) {
  return clamp((v - a) / (b - a), 0, 1);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const speedTextPathRef = useRef<SVGTextPathElement | null>(null);
  const [progress, setProgress] = useState(0);

  // Animate curved speed textPath inside the 220 WPM card
  useEffect(() => {
    let rafId: number;
    let offset = 0;
    const tick = () => {
      offset = (offset + 0.08) % 50;
      if (speedTextPathRef.current) {
        speedTextPathRef.current.setAttribute("startOffset", `${-offset}%`);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Smooth scroll progress tracker
  useEffect(() => {
    let rafId: number | null = null;
    let currentP = 0;

    const update = () => {
      rafId = null;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const totalScroll = Math.max(1, rect.height - window.innerHeight);
      const rawP = clamp(-rect.top / totalScroll, 0, 1);

      currentP += (rawP - currentP) * 0.22;
      if (Math.abs(rawP - currentP) < 0.0005) {
        currentP = rawP;
      } else {
        rafId = requestAnimationFrame(update);
      }
      setProgress(currentP);
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToChapter = (targetP: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absTop = window.scrollY + rect.top;
    const scrollable = Math.max(1, rect.height - window.innerHeight);
    window.scrollTo({
      top: absTop + targetP * scrollable,
      behavior: "smooth",
    });
  };

  // --- Phase calculations matching flow-stack.js ---
  // Phase 1 (0.00 -> 0.18): Split (Keyboard 28% + Flow 72%) -> Flow expands to 100%
  const splitCollapseT = easeInOutCubic(invLerp(0.02, 0.18, progress));

  // Phase 2 (0.18 -> 0.36): Full-width Flow card shrinks to centered 400x540 portrait card
  const shrinkCardT = easeInOutCubic(invLerp(0.18, 0.36, progress));

  // Green curtain lift (0.24 -> 0.42): #034F46 curtain lifts up (-105vh) revealing HOW IT WORKS
  const curtainLiftT = easeInOutCubic(invLerp(0.24, 0.42, progress));

  // How It Works chrome (tabs, right copy, SVG ribbon) entrance (0.34 -> 0.44)
  const chromeRevealT = easeInOutCubic(invLerp(0.34, 0.44, progress));

  // Active chapter index (0, 1, 2)
  const activeChapter = progress < 0.6 ? 0 : progress < 0.8 ? 1 : 2;

  // Sub-progress within each chapter
  const ch0Progress = invLerp(0.4, 0.59, progress);
  const ch1Progress = invLerp(0.6, 0.79, progress);
  const ch2Progress = invLerp(0.8, 0.98, progress);

  // Word-by-word reveal in Chapter 0
  const visibleRawWords =
    progress < 0.4
      ? 0
      : Math.min(
          RAW_WORDS.length,
          Math.floor(ch0Progress * (RAW_WORDS.length + 2))
        );

  const latestTaggedWord = RAW_WORDS.slice(0, visibleRawWords)
    .reverse()
    .find((w) => w.tag);
  const activeTag = latestTaggedWord?.tag ?? null;

  // Chapter 1: Gradient wave sweep & polished words reveal
  const polishSweepT = easeInOutCubic(invLerp(0.05, 0.65, ch1Progress));
  const visiblePolishedWords = Math.floor(
    invLerp(0.25, 0.85, ch1Progress) * POLISHED_WORDS.length
  );

  // Chapter 2: Fan arc position (0 -> 2 across the 3 destination apps)
  const fanTimeline = ch2Progress * 2;
  const activeFanIndex = Math.min(2, Math.round(fanTimeline));

  // Geometry interpolations for the Flow stage & card
  const keyboardWidthPct = (1 - splitCollapseT) * 28;
  const gapPx = (1 - splitCollapseT) * 16;

  const cardMaxWidthPx = Math.round(1120 - shrinkCardT * (1120 - 400));
  const cardHeightPx = Math.round(470 + shrinkCardT * (540 - 470));
  const cardRadiusPx = Math.round(32 - shrinkCardT * (32 - 20));
  const speedOverlayOpacity = 1 - easeInOutCubic(invLerp(0.15, 0.28, progress));

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative h-[620vh] bg-[#FFFFEB] select-none -mt-12 z-20"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* ============================================================
            UNDERNEATH LAYER: Cream "HOW IT WORKS" Stage (Revealed as Green Curtain lifts)
           ============================================================ */}
        <div className="absolute inset-0 bg-[#FFFFEB] flex flex-col justify-between py-10 md:py-14 px-4 sm:px-8 pointer-events-none">
          {/* Decorative Scroll-Drawn Curved Ribbon SVG */}
          <svg
            viewBox="0 0 1440 700"
            fill="none"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20"
          >
            <path
              d="M -100,560 C 320,640 520,160 720,350 C 920,540 1140,140 1540,220"
              stroke="#034F46"
              strokeWidth="3"
              strokeDasharray="2200"
              strokeDashoffset={2200 * (1 - invLerp(0.35, 0.95, progress))}
              strokeLinecap="round"
            />
          </svg>

          {/* Top Section Header */}
          <div
            style={{
              opacity: chromeRevealT,
              transform: `translateY(${(1 - chromeRevealT) * 24}px)`,
            }}
            className="relative z-10 text-center max-w-[780px] mx-auto pt-12 md:pt-14"
          >
            <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/70 mb-2.5">
              HOW IT WORKS
            </p>
            <h2 className="font-garamond text-[36px] sm:text-[48px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-[#1A1A1A]">
              Speak at the speed you think,{" "}
              <span className="italic font-normal">in every app,</span> on every device.
            </h2>
          </div>

          {/* Middle 3-Column Interactive Showcase */}
          <div
            style={{
              opacity: chromeRevealT,
              transform: `translateY(${(1 - chromeRevealT) * 20}px)`,
            }}
            className="relative z-20 max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 my-auto pointer-events-auto"
          >
            {/* Left Column: 3 Chapter Tabs with Sliding #FF5C35 Indicator Bar */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-start pl-4">
              <div className="relative flex flex-col gap-1 border-l-2 border-[#1A1A1A]/12 pl-5">
                <div
                  style={{
                    transform: `translateY(${activeChapter * 44}px)`,
                  }}
                  className="absolute -left-[2px] top-1 w-[3px] h-9 bg-[#FF5C35] rounded-full transition-transform duration-300 ease-out"
                />

                {CHAPTERS.map((chap, idx) => {
                  const isActive = activeChapter === idx;
                  return (
                    <button
                      key={chap.id}
                      type="button"
                      onClick={() => scrollToChapter(chap.targetProgress)}
                      className={`h-10 text-left font-garamond text-[22px] transition-colors cursor-pointer flex items-center ${
                        isActive
                          ? "text-[#1A1A1A] font-medium"
                          : "text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70"
                      }`}
                    >
                      <span>{chap.tabLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Center Column Spacer */}
            <div className="lg:col-span-4 h-[540px]" />

            {/* Right Column: Active Chapter Description & CTA */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-start pr-4">
              <div className="max-w-[350px] transition-all duration-300">
                <h3 className="font-garamond text-[36px] leading-[1.08] text-[#1A1A1A] mb-3">
                  {CHAPTERS[activeChapter].title}
                </h3>
                <p className="text-[15.5px] leading-[1.6] text-[#1A1A1A]/75 mb-7">
                  {CHAPTERS[activeChapter].description}
                </p>
                <a
                  href="#download"
                  className="group inline-flex items-center gap-2.5 bg-[#F0D7FF] hover:bg-[#E5C2FA] text-[#1A1A1A] font-semibold text-[14px] px-5 py-3 rounded-xl border border-[#1A1A1A] transition-all"
                >
                  <WindowsIcon className="w-4 h-4" />
                  <WaveText text="Get started on Windows" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-4" />
        </div>

        {/* ============================================================
            TOP CURTAIN LAYER: Deep Teal (#034F46) "4x faster than typing"
            Starts with 80px top corners and lifts upward with 80px bottom corners
           ============================================================ */}
        <div
          style={{
            transform: `translate3d(0, ${-curtainLiftT * 105}vh, 0)`,
            borderTopLeftRadius: "80px",
            borderTopRightRadius: "80px",
            borderBottomLeftRadius: `${curtainLiftT > 0.01 ? 80 : 0}px`,
            borderBottomRightRadius: `${curtainLiftT > 0.01 ? 80 : 0}px`,
          }}
          className="absolute inset-0 bg-[#034F46] text-[#FFFFEB] z-10 flex flex-col justify-between py-12 md:py-16 px-4 sm:px-8 pointer-events-none will-change-transform shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
        >
          <div
            style={{
              opacity: 1 - invLerp(0.16, 0.28, progress),
              transform: `translateY(${-invLerp(0.16, 0.28, progress) * 30}px)`,
            }}
            className="text-center max-w-[760px] mx-auto pt-8"
          >
            <h2 className="font-garamond text-[52px] sm:text-[68px] md:text-[80px] leading-[0.96] tracking-[-0.02em] text-[#FFFFEB]">
              4x faster <span className="italic font-normal">than typing</span>
            </h2>
            <p className="mt-4 text-[16px] md:text-[18px] text-[#FFFFEB]/85 max-w-[540px] mx-auto leading-[1.5]">
              Voice that finally works is here. Flow lets you create, code, message, and write at the speed of thought, 4x faster than your keyboard.
            </p>
          </div>
          <div className="h-6" />
        </div>

        {/* ============================================================
            SHARED MORPHING STAGE (Z-30):
            Phase 1: Left Keyboard (45 wpm) + Right Flow (220 wpm)
            Phase 2: Morphs into Centered 400x540 Portrait Card
            Phase 3: Runs Chapters 0, 1, 2 Inside the Centered Card
           ============================================================ */}
        <div className="relative z-30 max-w-[1120px] w-full mx-auto px-4 flex items-center justify-center translate-y-16 md:translate-y-20">
          <div
            style={{
              width: shrinkCardT > 0.001 ? `${cardMaxWidthPx}px` : "100%",
              gap: `${gapPx}px`,
            }}
            className="flex items-stretch justify-center mx-auto"
          >
            {/* LEFT SPLIT CARD: Keyboard 45 WPM matching shot-02-1450.png */}
            {keyboardWidthPct > 0.4 && (
              <div
                style={{
                  width: `${keyboardWidthPct}%`,
                  height: `${cardHeightPx}px`,
                  opacity: 1 - splitCollapseT * 1.15,
                  borderRadius: `${cardRadiusPx}px`,
                }}
                className="bg-[#034F46] border-2 border-[#FFFFEB]/20 p-6 md:p-8 flex flex-col justify-between overflow-hidden shrink-0 text-[#FFFFEB]"
              >
                <div className="text-center pt-2">
                  <div className="text-[14px] font-semibold text-[#FFFFEB]/90">
                    Keyboard
                  </div>
                  <div className="font-garamond text-[38px] md:text-[44px] leading-tight text-[#FFFFEB]">
                    45 wpm
                  </div>
                </div>

                <div className="my-auto overflow-hidden whitespace-nowrap text-[16px] text-[#FFFFEB]/45 font-medium">
                  <span>you&apos;re already working with. What sou</span>
                  <span className="inline-block w-0.5 h-4 bg-[#FFFFEB]/60 ml-0.5 animate-pulse align-middle" />
                </div>

                <div className="h-8" />
              </div>
            )}

            {/* RIGHT / CENTER MORPHING FLOW CARD */}
            <div
              style={{
                height: `${cardHeightPx}px`,
                borderRadius: `${cardRadiusPx}px`,
              }}
              className="relative flex-1 bg-[#1A1A1A] shadow-[0_24px_60px_rgba(0,0,0,0.28)] overflow-hidden flex flex-col justify-between"
            >
              {/* Background Portraits Crossfading Across Chapters */}
              <img
                src="/assets/flow-card-1.webp"
                alt="Speak naturally"
                style={{ opacity: activeChapter === 0 ? 1 : 0 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <img
                src="/assets/flow-card-2.webp"
                alt="Edits as you speak"
                style={{ opacity: activeChapter === 1 ? 1 : 0 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <img
                src="/assets/flow-card-3.webp"
                alt="Use it anywhere"
                style={{ opacity: activeChapter === 2 ? 1 : 0 }}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Subtle dark vignette for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55 pointer-events-none" />

              {/* ========================================================
                  PHASE 1 OVERLAY: "Flow / 220 wpm" Speed Showcase matching shot-02-1450.png
                 ======================================================== */}
              {speedOverlayOpacity > 0.01 && (
                <div
                  style={{ opacity: speedOverlayOpacity }}
                  className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-between pointer-events-none"
                >
                  <div className="text-center pt-2">
                    <div className="text-[14px] font-semibold text-[#FFFFEB]">
                      Flow
                    </div>
                    <div className="font-garamond text-[38px] md:text-[44px] leading-tight text-[#FFFFEB]">
                      220 wpm
                    </div>
                  </div>

                  {/* Curved SVG Text Stream Across the Card */}
                  <div className="my-auto w-full overflow-visible">
                    <svg
                      viewBox="0 0 800 140"
                      fill="none"
                      className="w-full h-28 overflow-visible"
                    >
                      <defs>
                        <path
                          id="flow-speed-arc"
                          d="M -60,115 C 200,25 480,15 860,120"
                        />
                      </defs>
                      <text
                        fill="#FFFFEB"
                        fontSize="18"
                        fontWeight="600"
                        letterSpacing="-0.01em"
                      >
                        <textPath
                          ref={speedTextPathRef}
                          href="#flow-speed-arc"
                          startOffset="0%"
                        >
                          {FLOW_SPEED_STREAM.repeat(4)}
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="h-12" />
                </div>
              )}

              {/* ========================================================
                  PHASE 3 OVERLAY: 3 Interactive Chapters (p >= 0.36)
                 ======================================================== */}
              {progress >= 0.34 && (
                <div
                  style={{ opacity: invLerp(0.34, 0.42, progress) }}
                  className="relative z-20 flex-1 flex flex-col justify-between p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-[#FFFFEB] text-[12px] font-medium border border-white/15">
                      {activeChapter === 0 && "Listening..."}
                      {activeChapter === 1 && "Auto-editing filler & corrections"}
                      {activeChapter === 2 &&
                        `Formatting for ${FAN_CARDS[activeFanIndex].app}`}
                    </span>

                    {activeChapter === 2 && (
                      <span
                        style={{
                          backgroundColor: FAN_CARDS[activeFanIndex].badgeBg,
                        }}
                        className="px-3 py-1 rounded-full text-white text-[12px] font-bold shadow-md transition-colors duration-300"
                      >
                        {FAN_CARDS[activeFanIndex].app}
                      </span>
                    )}
                  </div>

                  {/* CHAPTER 0 & 1: Live Word-by-Word Transcript & Gradient Wave Polish */}
                  {activeChapter < 2 && (
                    <div className="my-auto relative">
                      {(activeChapter === 0 || polishSweepT < 0.95) && (
                        <div
                          style={{
                            opacity: activeChapter === 0 ? 1 : 1 - polishSweepT,
                            transform: `scale(${
                              activeChapter === 0 ? 1 : 1 - polishSweepT * 0.06
                            })`,
                          }}
                          className="bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-[15px] leading-[1.65] text-[#FFFFEB] transition-all"
                        >
                          <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                            {RAW_WORDS.slice(
                              0,
                              activeChapter === 0 ? visibleRawWords : RAW_WORDS.length
                            ).map((word, i) => {
                              let pillStyle = "";
                              if (word.tag === "fill") {
                                pillStyle =
                                  "bg-[#FFA946]/25 text-[#FFA946] border border-[#FFA946]/50 px-1.5 rounded-md line-through decoration-[#FFA946]";
                              } else if (word.tag === "corr") {
                                pillStyle =
                                  "bg-[#FF6C4C]/25 text-[#FF6C4C] border border-[#FF6C4C]/50 px-1.5 rounded-md line-through decoration-[#FF6C4C]";
                              } else if (word.tag === "rep") {
                                pillStyle =
                                  "bg-[#FFBCF2]/25 text-[#FFBCF2] border border-[#FFBCF2]/50 px-1.5 rounded-md line-through decoration-[#FFBCF2]";
                              }
                              return (
                                <span
                                  key={i}
                                  className={`inline-block transition-all duration-200 ${pillStyle}`}
                                >
                                  {word.text}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* CHAPTER 1: Multi-Color Gradient Sweep + Clean Cream Message Card */}
                      {activeChapter === 1 && (
                        <div
                          style={{
                            opacity: invLerp(0.1, 0.4, ch1Progress),
                            transform: `translateY(${
                              (1 - invLerp(0.1, 0.5, ch1Progress)) * 18
                            }px)`,
                          }}
                          className="mt-3 relative rounded-2xl p-[2px] overflow-hidden shadow-2xl"
                        >
                          <div
                            style={{
                              background:
                                "linear-gradient(100deg, #F0D7FF 0%, #FFA946 23%, #FF6C4C 39%, #FFBCF2 67%, #7232A6 91%)",
                            }}
                            className="absolute inset-0 opacity-90"
                          />
                          <div className="relative bg-[#FFFFEB] text-[#1A1A1A] rounded-[14px] p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-[#034F46] flex items-center gap-1">
                                <Sparkles className="w-3.5 h-3.5" />
                                Polished Output
                              </span>
                              <span className="text-[11px] text-[#1A1A1A]/50 font-medium">
                                −14 filler words removed
                              </span>
                            </div>
                            <p className="text-[15px] leading-[1.55] font-medium text-[#1A1A1A]">
                              {POLISHED_WORDS.slice(
                                0,
                                Math.max(4, visiblePolishedWords)
                              ).join(" ")}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CHAPTER 2: 3-Card ±45° Arc Fan-Out (Slack / Claude / Gmail) */}
                  {activeChapter === 2 && (
                    <div className="my-auto relative h-[250px] flex items-center justify-center">
                      {FAN_CARDS.map((card, idx) => {
                        const rel = idx - fanTimeline;
                        const tx = rel * 240;
                        const cy = Math.abs(rel) * 32;
                        const rot = rel * 28;
                        const isFront = Math.abs(rel) < 0.55;

                        return (
                          <div
                            key={card.app}
                            style={{
                              transform: `translate3d(${tx}px, ${cy}px, 0) rotate(${rot}deg) scale(${
                                isFront ? 1 : 0.88
                              })`,
                              opacity: clamp(1 - Math.abs(rel) * 0.45, 0, 1),
                              zIndex: 10 - Math.round(Math.abs(rel) * 5),
                            }}
                            className="absolute w-[310px] bg-[#FFFFEB] text-[#1A1A1A] rounded-2xl p-4 border-2 border-[#1A1A1A] shadow-xl transition-transform duration-150"
                          >
                            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#1A1A1A]/10">
                              <span className="text-[12px] font-bold text-[#1A1A1A]">
                                {card.recipient}
                              </span>
                              <span
                                style={{ backgroundColor: card.badgeBg }}
                                className="text-[10px] uppercase tracking-wider font-bold text-white px-2 py-0.5 rounded-full"
                              >
                                {card.app}
                              </span>
                            </div>
                            <p className="text-[13.5px] leading-[1.5] text-[#1A1A1A]/90 whitespace-pre-line">
                              {card.content}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Floating Category Pill Above Bottom Waveform */}
                  <div className="h-8 flex items-center justify-center">
                    {activeChapter === 0 && activeTag && (
                      <span
                        className={`px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all ${
                          activeTag === "fill"
                            ? "bg-[#FFA946] text-[#1A1A1A]"
                            : activeTag === "corr"
                            ? "bg-[#FF6C4C] text-white"
                            : "bg-[#FFBCF2] text-[#1A1A1A]"
                        }`}
                      >
                        {activeTag === "fill"
                          ? "Filler removed"
                          : activeTag === "corr"
                          ? "Mid-sentence correction"
                          : "Repetition cleaned"}
                      </span>
                    )}
                    {activeChapter === 1 && (
                      <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#F0D7FF] text-[#1A1A1A] flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        Polishing...
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Shared Bottom Waveform Pill (Scales from 1.25 -> 1.0 as card morphs) */}
              <div className="relative z-20 mt-auto pb-8 flex justify-center">
                <div
                  style={{
                    transform: `scale(${1.25 - shrinkCardT * 0.25})`,
                  }}
                  className="bg-[#1A1A1A]/95 border-2 border-[#FFFFEB] rounded-full px-5 py-2.5 flex items-center gap-1.5 shadow-lg"
                >
                  {[0.55, 0.9, 0.75, 1, 0.85, 0.95, 0.7, 0.9, 0.6].map(
                    (bar, idx) => (
                      <span
                        key={idx}
                        style={{
                          height: `${Math.round(bar * 15)}px`,
                          animationDelay: `${idx * 90}ms`,
                        }}
                        className="w-[2.5px] bg-[#FFFFEB] rounded-full animate-waveform"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
