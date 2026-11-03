"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "steven",
    type: "landscape-case-study",
    bgClass: "bg-[#EBDCFF] text-[#1A1A1A]",
    logo: "/assets/sb-logo.svg",
    role: "Host of Diary of a CEO",
    quote:
      "“The thought I have becomes my explanation. The gap between my thought and my delivery of my idea collapses.”",
    image: "/assets/steven.webp",
    stats: [
      { value: "90%", label: "faster message\noutput" },
      { value: "2", label: "extra productive\nhours/day" },
    ],
  },
  {
    id: "slash-gear",
    type: "square-quote",
    bgClass: "bg-[#FFFFEB] text-[#1A1A1A]",
    author: "Slash Gear",
    authorLogo: "/assets/slash-gear.png",
    quote:
      "“If you find it tiring to write long emails, or just need something quick to note down an idea in the heat of the moment — but typing it all feels like a drag — this app is a Godsend for you.”",
  },
  {
    id: "alex",
    type: "portrait-overlay",
    bgImage: "/assets/alex.webp",
    overlayBgClass: "bg-[#FFB547] text-[#1A1A1A]",
    author: "Alex Lieberman",
    role: "Co-founder of Morning Brew",
    quote:
      "“Wispr Flow is a top 3 favorite AI tool for me. I literally do not use my fingers to type anymore.”",
  },
  {
    id: "elena",
    type: "landscape-person",
    bgClass: "bg-[#32D583] text-[#1A1A1A]",
    author: "Elena Verna",
    role: "Head of Growth at Lovable",
    image: "/assets/elena.webp",
    quote:
      "“I feel like I have no time to type anymore. So I just talk to my phone and my laptop all the time.”",
  },
  {
    id: "fast-company",
    type: "square-quote",
    bgClass: "bg-[#E4E4D0] text-[#1A1A1A]",
    author: "Fast Company",
    authorLogo: "/assets/fast-company.png",
    quote:
      "“Wispr Flow just gets it right. It is consistently so much better than the standard voice input, it'll blow your mind.”",
  },
  {
    id: "clay",
    type: "landscape-case-study",
    bgClass: "bg-[#FFFFEB] text-[#1A1A1A]",
    logo: "/assets/clay-dark.png",
    role: "",
    quote:
      "“Wispr Flow is a top 3 favorite AI tool for me. I literally do not use my fingers to type anymore.”",
    image: "/assets/clay-bg.webp",
    stats: [
      { value: "20%", label: "more customer calls\nper day" },
      { value: "$3.08m", label: "estimated cost savings\nper year" },
    ],
  },
  {
    id: "dave",
    type: "landscape-person",
    bgClass: "bg-[#EBDCFF] text-[#1A1A1A]",
    author: "Dave Gilboa",
    role: "CEO of Warby Parker",
    image: "/assets/dave-gilboa.webp",
    quote:
      "“Wispr Flow's dictation has always felt like magic. With Notetaker, that magic has gone multiplayer with no extra setup, perfectly formatted notes, and summaries that are actually useful.”",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () =>
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  const nextCard = () =>
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-[#1A1A1A] text-[#FFFFEB] rounded-t-[48px] md:rounded-t-[80px] py-24 md:py-32 px-4 sm:px-8 overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-[680px] mx-auto mb-16 md:mb-20">
          <div className="text-[11.5px] tracking-[0.14em] uppercase text-[#FFFFEB]/80 font-semibold mb-4">
            EARLY ACCESS, REAL RESULTS
          </div>
          <h2 className="font-garamond text-[52px] sm:text-[64px] md:text-[75px] leading-[1.0] tracking-[-0.03em] font-normal text-[#FFFFEB]">
            From the first
            <br />
            <em className="italic font-normal">people to use it.</em>
          </h2>
        </div>

        {/* 3D Orbiting Deck Showcase */}
        <div className="relative min-h-[480px] flex items-center justify-center perspective-[1400px]">
          {TESTIMONIALS.map((card, index) => {
            let offset = index - activeIndex;
            if (offset > TESTIMONIALS.length / 2) offset -= TESTIMONIALS.length;
            if (offset < -TESTIMONIALS.length / 2) offset += TESTIMONIALS.length;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            const translateX = offset * 520;
            const translateY = Math.abs(offset) * 55;
            const rotateX = offset * -14;
            const rotateZ = offset * 4;
            const scale = isCenter ? 1 : 0.86;
            const opacity = isCenter ? 1 : 0.65;

            return (
              <div
                key={card.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`,
                  opacity,
                  zIndex: isCenter ? 30 : 10,
                }}
                className="transition-all duration-500 ease-out cursor-pointer absolute"
              >
                {/* Landscape Case Study Card (Steven Bartlett / Clay) */}
                {card.type === "landscape-case-study" && (
                  <div
                    className={`w-[340px] sm:w-[680px] md:w-[740px] min-h-[420px] rounded-[32px] p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 shadow-2xl ${card.bgClass}`}
                  >
                    <div className="md:col-span-7 flex flex-col justify-between pr-2">
                      <div>
                        <div className="mb-6">
                          {card.logo && (
                            <img
                              src={card.logo}
                              alt="Logo"
                              className="h-7 w-auto mb-1.5"
                            />
                          )}
                          {card.role && (
                            <div className="text-[13.5px] font-medium text-[#1A1A1A]/70">
                              {card.role}
                            </div>
                          )}
                        </div>
                        <p className="font-garamond text-[26px] md:text-[31px] leading-[1.15] tracking-[-0.02em] text-[#1A1A1A]">
                          {card.quote}
                        </p>
                      </div>

                      <div className="pt-6">
                        <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1A1A1A]">
                          <span>Read case study</span>
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5 relative rounded-[24px] overflow-hidden min-h-[260px] md:min-h-[360px] flex flex-col justify-end p-5">
                      <img
                        src={card.image}
                        alt={card.role || "Case study"}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="relative z-10 grid grid-cols-2 gap-3 text-[#FFFFEB]">
                        {card.stats?.map((st) => (
                          <div key={st.value}>
                            <div className="font-garamond text-[36px] leading-none mb-1">
                              {st.value}
                            </div>
                            <div className="text-[11.5px] leading-tight text-[#FFFFEB]/85 whitespace-pre-line">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Square Quote Card (Slash Gear / Fast Company) */}
                {card.type === "square-quote" && (
                  <div
                    className={`w-[340px] sm:w-[420px] min-h-[400px] rounded-[32px] p-8 flex flex-col justify-between shadow-2xl ${card.bgClass}`}
                  >
                    <p className="font-garamond text-[26px] md:text-[29px] leading-[1.18] tracking-[-0.02em]">
                      {card.quote}
                    </p>
                    <div className="flex items-center gap-3 pt-6">
                      {card.authorLogo && (
                        <img
                          src={card.authorLogo}
                          alt={card.author}
                          className="w-10 h-10 rounded-full object-contain"
                        />
                      )}
                      <span className="text-[15px] font-medium">
                        {card.author}
                      </span>
                    </div>
                  </div>
                )}

                {/* Portrait Overlay Card (Alex Lieberman) */}
                {card.type === "portrait-overlay" && (
                  <div className="w-[340px] sm:w-[410px] min-h-[430px] rounded-[32px] relative overflow-hidden p-4 flex flex-col justify-end shadow-2xl">
                    <img
                      src={card.bgImage}
                      alt={card.author}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className={`relative z-10 rounded-[24px] p-6 ${card.overlayBgClass}`}
                    >
                      <p className="font-garamond text-[25px] leading-[1.15] tracking-[-0.02em] mb-5">
                        {card.quote}
                      </p>
                      <div className="text-[14.5px] font-medium">
                        {card.author}
                      </div>
                      <div className="text-[12.5px] opacity-65">
                        {card.role}
                      </div>
                    </div>
                  </div>
                )}

                {/* Landscape Person Card (Elena Verna / Dave Gilboa) */}
                {card.type === "landscape-person" && (
                  <div
                    className={`w-[340px] sm:w-[640px] min-h-[390px] rounded-[32px] p-6 md:p-8 grid grid-cols-1 sm:grid-cols-12 gap-6 shadow-2xl ${card.bgClass}`}
                  >
                    <div className="sm:col-span-5 rounded-[22px] overflow-hidden relative min-h-[240px]">
                      <img
                        src={card.image}
                        alt={card.author}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-7 flex flex-col justify-between py-2">
                      <p className="font-garamond text-[26px] md:text-[30px] leading-[1.16] tracking-[-0.02em]">
                        {card.quote}
                      </p>
                      <div className="pt-6">
                        <div className="text-[15px] font-medium">
                          {card.author}
                        </div>
                        <div className="text-[13px] opacity-65">
                          {card.role}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Deck Controls & Dots */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevCard}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#FFFFEB]/25 flex items-center justify-center text-[#FFFFEB] hover:bg-[#FFFFEB]/10 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx
                    ? "w-7 bg-[#EBDCFF]"
                    : "w-2 bg-[#FFFFEB]/30 hover:bg-[#FFFFEB]/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextCard}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#FFFFEB]/25 flex items-center justify-center text-[#FFFFEB] hover:bg-[#FFFFEB]/10 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

