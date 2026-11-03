"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus, Check, Sparkles, Link2, ChevronRight } from "lucide-react";

const FEATURE_BLOCKS = [
  {
    title: "100+ Languages",
    description:
      "Flow automatically detects and transcribes the language you're speaking, so you can switch between languages naturally.",
  },
  {
    title: "Flow learns your vocabulary",
    description:
      "Flow learns your unique words and names automatically, or lets you add them yourself. From client names to company jargon, it gets the details right.",
  },
  {
    title: "Save your most used text",
    description:
      "Turn short spoken cues like \"my LinkedIn\" or \"send my Calendly\" into full URLs, email templates, or recurring blocks of text.",
  },
  {
    title: "Make Flow sound like you",
    description:
      "Set different writing styles for work emails, team DMs, and personal messages so every dictation matches your voice and context.",
  },
];

const LANGUAGES_DEMO = [
  {
    lang: "Deutsch",
    flag: "🇩🇪",
    text: "Soll ich eine neue Datei einrichten? Hier sind ein paar Optionen für Sie.",
  },
  {
    lang: "English",
    flag: "🇺🇸",
    text: "Let's finalize the Q4 roadmap before Friday's all-hands meeting.",
  },
  {
    lang: "Español",
    flag: "🇪🇸",
    text: "Vamos a finalizar la hoja de ruta del Q4 antes del viernes.",
  },
  {
    lang: "Français",
    flag: "🇫🇷",
    text: "Finalisons la feuille de route du T4 avant la réunion de vendredi.",
  },
];

const TONE_SAMPLES: Record<"Formal" | "Casual" | "Very casual", string> = {
  Formal:
    "Hi Sarah, thank you for sending over the proposal. Could we schedule 15 minutes tomorrow afternoon to review the timeline?",
  Casual:
    "Hey Sarah! Thanks for sending the proposal over. Want to hop on a quick 15-min call tomorrow afternoon to go over the timeline?",
  "Very casual":
    "hey sarah! thx for the proposal — down for a quick 15m chat tmrw afternoon to sync on timeline?",
};

export function FeaturesSection() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const stickyCardRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [underlineProgress, setUnderlineProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardPop, setCardPop] = useState(false);

  const [selectedLang, setSelectedLang] = useState(0);
  const [typedVocab, setTypedVocab] = useState("");
  const [vocabAdded, setVocabAdded] = useState(false);
  const [snippetExpanded, setSnippetExpanded] = useState(false);
  const [selectedTone, setSelectedTone] = useState<"Formal" | "Casual" | "Very casual">("Casual");

  useEffect(() => {
    const onScroll = () => {
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.92;
        const end = vh * 0.32;
        const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
        setUnderlineProgress(p);
      }

      const lineY = stickyCardRef.current
        ? stickyCardRef.current.getBoundingClientRect().top +
          stickyCardRef.current.getBoundingClientRect().height * 0.5
        : window.innerHeight * 0.5;

      let bestIdx = 0;
      let bestDist = Infinity;

      blockRefs.current.forEach((el, idx) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height * 0.5;
        const dist = Math.abs(mid - lineY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActiveIndex((prev) => {
        if (prev !== bestIdx) {
          setCardPop(true);
          setTimeout(() => setCardPop(false), 260);
        }
        return bestIdx;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === 0) {
      const id = setInterval(() => {
        setSelectedLang((prev) => (prev + 1) % LANGUAGES_DEMO.length);
      }, 2400);
      return () => clearInterval(id);
    }

    if (activeIndex === 1) {
      const target = "Wispr Flow";
      let step = 0;
      setTypedVocab("");
      setVocabAdded(false);

      const id = setInterval(() => {
        step++;
        if (step <= target.length) {
          setTypedVocab(target.slice(0, step));
        } else if (step === target.length + 3) {
          setVocabAdded(true);
        } else if (step > target.length + 10) {
          step = 0;
          setTypedVocab("");
          setVocabAdded(false);
        }
      }, 160);
      return () => clearInterval(id);
    }

    if (activeIndex === 2) {
      const id = setInterval(() => {
        setSnippetExpanded((prev) => !prev);
      }, 2200);
      return () => clearInterval(id);
    }

    if (activeIndex === 3) {
      const tones: ("Formal" | "Casual" | "Very casual")[] = [
        "Formal",
        "Casual",
        "Very casual",
      ];
      let idx = 1;
      const id = setInterval(() => {
        idx = (idx + 1) % tones.length;
        setSelectedTone(tones[idx]);
      }, 2600);
      return () => clearInterval(id);
    }
  }, [activeIndex]);

  return (
    <section className="relative py-24 md:py-36 bg-[#FFFFEB] text-[#1A1A1A]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-8">
        {/* Section Heading with Scroll-Scrubbed Lavender SVG Underline */}
        <div className="max-w-[820px] mx-auto text-center mb-20 md:mb-28">
          <h2
            ref={headingRef}
            className="font-garamond text-[44px] sm:text-[60px] md:text-[72px] leading-[1.02] tracking-[-0.02em] text-[#1A1A1A]"
          >
            <span className="relative inline-block">
              Built around how you work,
              <svg
                viewBox="0 0 680 28"
                fill="none"
                className="absolute -bottom-1 left-0 w-full h-5 overflow-visible pointer-events-none -z-10"
              >
                <path
                  id="heading-underline"
                  d="M 8,18 C 180,8 480,22 672,12"
                  stroke="#F0D7FF"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeDasharray="680"
                  strokeDashoffset={680 * (1 - underlineProgress)}
                />
              </svg>
            </span>
            <br />
            not how we think you should.
          </h2>
        </div>

        {/* Two-Column Sticky Scroll Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Sticky 4-Card Interactive Stack matching shot-07-7550.png */}
          <div className="lg:col-span-6 lg:sticky lg:top-[25vh]">
            <div
              ref={stickyCardRef}
              style={{
                transform: cardPop ? "scale(1.035)" : "scale(1)",
              }}
              className="w-full max-w-[440px] mx-auto h-[340px] rounded-[20px] bg-[#E4E4D0] p-6 sm:p-8 transition-transform duration-300 ease-out relative overflow-hidden flex flex-col justify-between"
            >
              {/* CARD 0: 100+ Languages matching shot-07-7550.png */}
              {activeIndex === 0 && (
                <div className="flex flex-col justify-between h-full items-center">
                  <div className="mt-4 bg-[#FFFFEB] rounded-full px-6 py-3.5 flex items-center gap-4 shadow-xs">
                    <span className="text-[15px] text-[#1A1A1A]/70 font-medium">
                      Language:{" "}
                      <strong className="text-[#1A1A1A] font-semibold ml-1">
                        {LANGUAGES_DEMO[selectedLang].lang}
                      </strong>
                    </span>
                    <span className="text-2xl leading-none">
                      {LANGUAGES_DEMO[selectedLang].flag}
                    </span>
                  </div>

                  {/* Curved SVG Multilingual Stream */}
                  <div className="w-full overflow-visible my-auto">
                    <svg viewBox="0 0 400 80" className="w-full h-20 overflow-visible">
                      <defs>
                        <path
                          id="lang-stream-curve"
                          d="M -30,65 C 120,25 270,25 430,65"
                        />
                      </defs>
                      <text fill="#1A1A1A" fontSize="14.5" fontWeight="500">
                        <textPath href="#lang-stream-curve" startOffset="0%">
                          {LANGUAGES_DEMO[selectedLang].text}
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  <div className="flex gap-1.5">
                    {LANGUAGES_DEMO.map((item, i) => (
                      <button
                        key={item.lang}
                        type="button"
                        onClick={() => setSelectedLang(i)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          selectedLang === i ? "w-6 bg-[#1A1A1A]" : "bg-[#1A1A1A]/25"
                        }`}
                        aria-label={item.lang}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* CARD 1: Flow Learns Your Vocabulary */}
              {activeIndex === 1 && (
                <div className="flex flex-col justify-between h-full">
                  <div className="flex flex-wrap gap-2">
                    {["Anthropic", "Kubernetes", "EBITDA", "Linear", "PostgreSQL"].map(
                      (word) => (
                        <span
                          key={word}
                          className="px-3 py-1.5 rounded-xl bg-[#FFFFEB] text-[13px] font-semibold text-[#1A1A1A]"
                        >
                          {word}
                        </span>
                      )
                    )}
                    {vocabAdded && (
                      <span className="px-3 py-1.5 rounded-xl bg-[#F0D7FF] border border-[#1A1A1A] text-[13px] font-bold text-[#1A1A1A] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        Wispr Flow
                      </span>
                    )}
                  </div>

                  <div className="bg-[#FFFFEB] rounded-2xl p-4 space-y-3 shadow-xs">
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">
                      Add new word or acronym
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-[#F5F2DF] rounded-xl px-3.5 py-2 text-[14px] font-semibold text-[#1A1A1A] min-h-[38px] flex items-center">
                        <span>{typedVocab}</span>
                        <span className="w-0.5 h-4 bg-[#1A1A1A] ml-0.5 animate-pulse" />
                      </div>
                      <button
                        type="button"
                        onClick={() => setVocabAdded(true)}
                        className="px-3.5 py-2 rounded-xl bg-[#034F46] text-[#FFFFEB] text-[13px] font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* CARD 2: Save Your Most Used Text */}
              {activeIndex === 2 && (
                <div className="flex flex-col justify-between h-full">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#034F46]">
                    Voice Snippets
                  </div>

                  <div className="my-auto bg-[#FFFFEB] rounded-2xl p-5 shadow-xs">
                    <p className="text-[15.5px] leading-[1.7] text-[#1A1A1A] font-medium">
                      If you go to{" "}
                      <span
                        onClick={() => setSnippetExpanded((prev) => !prev)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                          snippetExpanded
                            ? "bg-[#034F46] text-[#FFFFEB]"
                            : "bg-[#F0D7FF] text-[#1A1A1A]"
                        }`}
                      >
                        <Link2 className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {snippetExpanded
                            ? "https://www.linkedin.com/in/john-doe-9b0139134/"
                            : "my Linkedin"}
                        </span>
                      </span>{" "}
                      you&apos;ll see what we launched.
                    </p>
                  </div>

                  <div className="text-[12.5px] text-[#1A1A1A]/65">
                    Say &ldquo;my Linkedin&rdquo; → expands to full URL
                  </div>
                </div>
              )}

              {/* CARD 3: Make Flow Sound Like You */}
              {activeIndex === 3 && (
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#034F46]">
                      Style &amp; Tone
                    </span>
                    <Sparkles className="w-4 h-4 text-[#034F46]" />
                  </div>

                  <div className="my-auto bg-[#FFFFEB] rounded-2xl p-5 shadow-xs">
                    <p className="text-[15px] leading-[1.6] text-[#1A1A1A] font-medium">
                      {TONE_SAMPLES[selectedTone]}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 bg-[#FFFFEB]/70 p-1 rounded-xl">
                    {(["Formal", "Casual", "Very casual"] as const).map((tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setSelectedTone(tone)}
                        className={`py-1.5 px-2.5 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                          selectedTone === tone
                            ? "bg-[#1A1A1A] text-[#FFFFEB]"
                            : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Scrolling Feature Text Blocks (Dimming inactive to 0.3) */}
          <div className="lg:col-span-6 flex flex-col gap-32 md:gap-44 py-8 lg:py-20">
            {FEATURE_BLOCKS.map((block, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={block.title}
                  ref={(el) => {
                    blockRefs.current[idx] = el;
                  }}
                  style={{
                    opacity: isActive ? 1 : 0.28,
                  }}
                  className="transition-opacity duration-300 max-w-[460px]"
                >
                  <h3 className="font-garamond text-[36px] sm:text-[42px] leading-[1.08] tracking-[-0.015em] text-[#1A1A1A] mb-3.5">
                    {block.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#1A1A1A]/80">
                    {block.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Privacy & Enterprise Security Card matching shot-09-9150.png */}
        <div className="mt-28 md:mt-36 rounded-[28px] bg-[#E4E4D0] p-8 sm:p-12 md:p-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-4">
            <h3 className="font-garamond text-[42px] sm:text-[48px] leading-[1.02] text-[#1A1A1A]">
              Your voice
              <br />
              <span className="italic font-normal">stays yours.</span>
            </h3>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[15px] leading-[1.6] text-[#1A1A1A]/80 mb-5">
              Your data is never sold. You choose whether data is used to help improve Flow. SOC 2 Type II, HIPAA and ISO 27001 certified.
            </p>
            <a
              href="#security"
              className="inline-flex items-center gap-1 text-[14.5px] font-semibold text-[#1A1A1A] hover:opacity-75 transition-opacity"
            >
              <span>Learn more</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <img
              src="/assets/badges-v4.png"
              alt="HIPAA, SOC 2 Type II, ISO 27001 Certified"
              className="h-28 sm:h-32 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
