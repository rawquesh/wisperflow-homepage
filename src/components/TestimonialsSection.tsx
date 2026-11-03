"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDynamicCorners } from "@/hooks/useDynamicCorners";

const DEG_TO_RAD = Math.PI / 180;

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  useDynamicCorners(sectionRef, { maxDesktop: 80, maxMobile: 40 });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    let smoothP = 0;

    const update = () => {
      rafId = null;
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const rawP = Math.max(0, Math.min(1, -rect.top / scrollable));

      smoothP += (rawP - smoothP) * 0.18;
      if (Math.abs(rawP - smoothP) < 0.0005) {
        smoothP = rawP;
      } else {
        rafId = requestAnimationFrame(update);
      }
      setScrollProgress(smoothP);
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

  const scrollToCard = (idx: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const absTop = window.scrollY + rect.top;
    const scrollable = Math.max(1, rect.height - window.innerHeight);
    const targetP = idx / 6;
    window.scrollTo({
      top: absTop + targetP * scrollable,
      behavior: "smooth",
    });
  };

  // 3D Cylindrical Orbit Math from testiv2 script
  const perspPx = 1450;
  const orbitPx = 360;
  const cardSpacing = 540;
  const totalCards = 7;
  const totalSpan = (totalCards - 1) * cardSpacing;
  const head = scrollProgress * totalSpan;
  const activeIdx = Math.round(scrollProgress * (totalCards - 1));

  const getCardStyle = (idx: number): React.CSSProperties => {
    const offset = idx * cardSpacing;
    const u = offset - head;
    const norm = Math.max(-1.35, Math.min(1.35, u / 740));
    const rot = norm * -48;
    const sx = u * 0.94;
    const f =
      perspPx / (perspPx + orbitPx * (1 - Math.cos(rot * DEG_TO_RAD)));
    const compensatedX = sx / f;
    const zIndex = 100 - Math.round(Math.abs(u) * 0.1);
    const opacity = Math.max(0, Math.min(1, 1.35 - Math.abs(norm)));

    return {
      left: "50%",
      top: "53%",
      transformOrigin: `50% 50% -${orbitPx}px`,
      transform: `translate3d(-50%, -50%, 0) translateX(${compensatedX.toFixed(
        1
      )}px) rotateX(${rot.toFixed(2)}deg)`,
      zIndex,
      opacity,
    };
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[420vh] bg-[#1A1A1A] text-[#FFFFEB] select-none"
    >
      <div
        style={{ perspective: `${perspPx}px` }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 md:py-16 px-4 sm:px-8"
      >
        {/* Top Section Header matching shot-09-9150.png & shot-10-9800.png */}
        <div className="relative z-30 text-center max-w-[760px] mx-auto pt-4">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-bold text-[#FFFFEB]/80 mb-3">
            EARLY ACCESS, REAL RESULTS
          </p>
          <h2 className="font-garamond text-[44px] sm:text-[58px] md:text-[68px] leading-[0.98] tracking-[-0.02em] text-[#FFFFEB]">
            From the first
            <br />
            <span className="italic font-normal">people to use it.</span>
          </h2>
        </div>

        {/* 3D Cylindrical Orbit Card Deck */}
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="relative flex-1 w-full flex items-center justify-center"
        >
          {/* CARD 0: Steven Bartlett Case Study (shot-10-9800.png) */}
          <article
            style={getCardStyle(0)}
            className="absolute w-[360px] sm:w-[640px] h-[410px] rounded-[28px] bg-[#F0D7FF] text-[#1A1A1A] p-4 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] grid grid-cols-1 sm:grid-cols-12 gap-5 will-change-transform"
          >
            <div className="sm:col-span-6 flex flex-col justify-between p-2">
              <div>
                <div className="font-extrabold text-[22px] tracking-tight uppercase leading-none text-[#1A1A1A]">
                  STEVEN BARTLETT
                </div>
                <div className="text-[13px] text-[#1A1A1A]/65 mt-1 mb-5">
                  Host of Diary of a CEO
                </div>
                <p className="font-garamond text-[22px] sm:text-[24px] leading-[1.18] text-[#1A1A1A]">
                  &ldquo;The thought I have becomes my explanation. The gap between my thought and my delivery of my idea collapses.&rdquo;
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#1A1A1A]">
                Read case study <ChevronRight className="w-4 h-4" />
              </span>
            </div>

            <div className="hidden sm:block sm:col-span-6 relative rounded-[20px] overflow-hidden h-full">
              <img
                src="/assets/steven.webp"
                alt="Steven Bartlett"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 inset-x-4 grid grid-cols-2 gap-2 text-[#FFFFEB]">
                <div>
                  <div className="font-garamond text-[36px] leading-none">
                    90%
                  </div>
                  <div className="text-[11px] opacity-80 mt-1 leading-tight">
                    faster message output
                  </div>
                </div>
                <div>
                  <div className="font-garamond text-[36px] leading-none">
                    2
                  </div>
                  <div className="text-[11px] opacity-80 mt-1 leading-tight">
                    extra productive hours/day
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* CARD 1: SlashGear Press Quote (shot-11-11200.png) */}
          <article
            style={getCardStyle(1)}
            className="absolute w-[340px] sm:w-[370px] h-[360px] rounded-[28px] bg-[#FFFFEB] text-[#1A1A1A] p-7 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] flex flex-col justify-between will-change-transform"
          >
            <p className="font-garamond text-[21px] sm:text-[23px] leading-[1.24] text-[#1A1A1A]">
              &ldquo;If you find it tiring to type long emails, or just need something quick to note down an idea in the heat of the moment — but typing it all feels like a drag — this app is a Godsend for you.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4">
              <img
                src="/assets/slash-gear.png"
                alt="SlashGear"
                className="h-9 w-auto object-contain"
              />
              <span className="text-[14px] font-semibold text-[#1A1A1A]">
                Slash Gear
              </span>
            </div>
          </article>

          {/* CARD 2: Alex Lieberman (shot-11-11200.png) */}
          <article
            style={getCardStyle(2)}
            className="absolute w-[340px] sm:w-[370px] h-[420px] rounded-[28px] overflow-hidden bg-[#1A1A1A] text-[#1A1A1A] shadow-[0_24px_60px_rgba(0,0,0,0.45)] flex flex-col justify-end p-3.5 will-change-transform"
          >
            <img
              src="/assets/alex.webp"
              alt="Alex Lieberman"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 bg-[#FFAA45] rounded-[20px] p-5 flex flex-col justify-between min-h-[210px]">
              <p className="font-garamond text-[22px] leading-[1.2] text-[#1A1A1A]">
                &ldquo;Wispr Flow is a top 3 favorite AI tool for me. I literally do not use my fingers to type anymore.&rdquo;
              </p>
              <div className="pt-3">
                <div className="font-bold text-[14px] text-[#1A1A1A]">
                  Alex Lieberman
                </div>
                <div className="text-[12.5px] text-[#1A1A1A]/75">
                  Co-founder of Morning Brew
                </div>
              </div>
            </div>
          </article>

          {/* CARD 3: Elena Verna (shot-11-11200.png) */}
          <article
            style={getCardStyle(3)}
            className="absolute w-[350px] sm:w-[490px] h-[340px] rounded-[28px] bg-[#25D396] text-[#1A1A1A] p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] grid grid-cols-12 gap-4 will-change-transform"
          >
            <div className="col-span-5 rounded-[20px] overflow-hidden h-full">
              <img
                src="/assets/elena.webp"
                alt="Elena Verna"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-7 flex flex-col justify-between p-3">
              <p className="font-garamond text-[21px] sm:text-[23px] leading-[1.22] text-[#1A1A1A]">
                &ldquo;I feel like I have no time to type anymore. So I just talk to my phone and my laptop all the time.&rdquo;
              </p>
              <div>
                <div className="font-bold text-[14px] text-[#1A1A1A]">
                  Elena Verna
                </div>
                <div className="text-[12.5px] text-[#1A1A1A]/70">
                  Head of Growth at Lovable
                </div>
              </div>
            </div>
          </article>

          {/* CARD 4: Dave Gilboa (replica-cta-footer.png) */}
          <article
            style={getCardStyle(4)}
            className="absolute w-[350px] sm:w-[490px] h-[340px] rounded-[28px] bg-[#D8C8F0] text-[#1A1A1A] p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.45)] grid grid-cols-12 gap-4 will-change-transform"
          >
            <div className="col-span-5 rounded-[20px] overflow-hidden h-full">
              <img
                src="/assets/dave-gilboa.webp"
                alt="Dave Gilboa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-7 flex flex-col justify-between p-3">
              <p className="font-garamond text-[21px] sm:text-[23px] leading-[1.22] text-[#1A1A1A]">
                &ldquo;Flow makes dictating messages and summaries that are actually useful effortless.&rdquo;
              </p>
              <div>
                <div className="font-bold text-[14px] text-[#1A1A1A]">
                  Dave Gilboa
                </div>
                <div className="text-[12.5px] text-[#1A1A1A]/70">
                  CEO of Warby Parker
                </div>
              </div>
            </div>
          </article>

          {/* CARD 5: Clay Case Study */}
          <article
            style={getCardStyle(5)}
            className="absolute w-[350px] sm:w-[540px] h-[370px] rounded-[28px] bg-[#E4E4D0] text-[#1A1A1A] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] grid grid-cols-12 gap-5 will-change-transform"
          >
            <div className="col-span-6 flex flex-col justify-between p-3">
              <img
                src="/assets/clay-dark.png"
                alt="Clay"
                className="h-7 w-auto object-contain self-start"
              />
              <p className="font-garamond text-[23px] leading-[1.2] text-[#1A1A1A]">
                &ldquo;Why Clay rolled out Wispr Flow across their entire GTM &amp; engineering org.&rdquo;
              </p>
              <span className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#1A1A1A]">
                Read case study <ChevronRight className="w-4 h-4" />
              </span>
            </div>
            <div className="col-span-6 relative rounded-[20px] overflow-hidden h-full">
              <img
                src="/assets/clay-bg.webp"
                alt="Clay Case Study"
                className="w-full h-full object-cover"
              />
            </div>
          </article>

          {/* CARD 6: Fast Company Press Quote */}
          <article
            style={getCardStyle(6)}
            className="absolute w-[340px] sm:w-[370px] h-[360px] rounded-[28px] bg-[#FFFFEB] text-[#1A1A1A] p-7 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] flex flex-col justify-between will-change-transform"
          >
            <p className="font-garamond text-[22px] sm:text-[24px] leading-[1.24] text-[#1A1A1A]">
              &ldquo;Wispr Flow turns messy spoken thoughts into clean, ready-to-send writing in every application.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4">
              <img
                src="/assets/fast-company.png"
                alt="Fast Company"
                className="h-7 w-auto object-contain"
              />
            </div>
          </article>
        </div>

        {/* Bottom Navigation Arrows + Progress Dots matching replica-cta-footer.png */}
        <div className="relative z-30 flex items-center justify-center gap-4 pb-2">
          <button
            type="button"
            onClick={() => scrollToCard(Math.max(0, activeIdx - 1))}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-[#FFFFEB]/25 flex items-center justify-center text-[#FFFFEB]/80 hover:border-[#FFFFEB] hover:text-[#FFFFEB] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalCards }).map((_, idx) => {
              const isCurrent = activeIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isCurrent ? "w-6 bg-[#F0D7FF]" : "w-2 bg-[#FFFFEB]/25"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToCard(Math.min(totalCards - 1, activeIdx + 1))}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-[#FFFFEB]/25 flex items-center justify-center text-[#FFFFEB]/80 hover:border-[#FFFFEB] hover:text-[#FFFFEB] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
