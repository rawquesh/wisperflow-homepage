"use client";

import React from "react";

const CLIENT_LOGOS = [
  { name: "Microsoft", src: "/assets/microsoft-lumen.svg" },
  { name: "Amazon", src: "/assets/amazon-lumen.svg" },
  { name: "Notion", src: "/assets/notion-lumen.svg" },
  { name: "Klarna", src: "/assets/klarna-lumen.svg" },
  { name: "Groupon", src: "/assets/groupon-lumen.svg" },
  { name: "Vercel", src: "/assets/vercel-lumen.svg" },
  { name: "Mercury", src: "/assets/mercury-lumen.svg" },
];

const SPEED_STREAM =
  "I'm getting started with the project. How would you like to set up the file? I can create a new one from scratch, or pull in something you're already working with. What sounds good? Cool, give me a sec... Alright, got the structure ready. Want to walk me through what you're building, or start with a template? Up to you, I'll follow your lead.   •   " +
  "I'm getting started with the project. How would you like to set up the file? I can create a new one from scratch, or pull in something you're already working with. What sounds good? Cool, give me a sec... Alright, got the structure ready.";

export function LogoMarqueeAndSpeed() {
  return (
    <div className="relative z-10">
      {/* Dark "USED BY PROFESSIONALS AT" Logo Marquee Section */}
      <section className="bg-[#1A1A1A] text-[#FFFFEB] rounded-t-[48px] md:rounded-t-[80px] pt-16 pb-36 overflow-hidden">
        <div className="text-center mb-10">
          <p className="text-[11.5px] tracking-[0.14em] uppercase text-[#FFFFEB]/80 font-semibold">
            USED BY PROFESSIONALS AT
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 md:gap-24 px-8">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map(
              (logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 md:h-8 w-auto object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Deep Forest Green "4x faster than typing" Section */}
      <section className="bg-[#034F46] text-[#FFFFEB] rounded-t-[48px] md:rounded-t-[80px] rounded-b-[48px] md:rounded-b-[80px] -mt-20 pt-20 pb-20 md:pt-24 md:pb-28 px-4 sm:px-8 relative z-20">
        <div className="max-w-[1140px] mx-auto">
          {/* Heading & Subtitle */}
          <div className="text-center max-w-[680px] mx-auto mb-14">
            <h2 className="font-garamond text-[56px] sm:text-[76px] md:text-[96px] leading-[0.95] tracking-[-0.03em] font-normal text-[#FFFFEB] mb-5">
              4x faster <em className="italic font-normal">than typing</em>
            </h2>
            <p className="text-[16.5px] md:text-[18px] leading-[1.45] text-[#FFFFEB]/90 max-w-[520px] mx-auto">
              Voice that finally works is here. Flow lets you create, code,
              message, and write at the speed of thought, 4x faster than your
              keyboard.
            </p>
          </div>

          {/* Side-by-Side Comparison Cards: Keyboard (45 wpm) vs Flow (220 wpm) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch min-h-[430px] md:min-h-[480px]">
            {/* Left Card: Keyboard 45 wpm */}
            <div className="lg:col-span-4 rounded-[28px] border border-[#FFFFEB]/20 bg-[#034F46] p-8 flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              <div className="text-center pt-2">
                <div className="text-[14.5px] font-medium text-[#FFFFEB]/90 mb-1">
                  Keyboard
                </div>
                <div className="font-garamond text-[40px] md:text-[46px] leading-none text-[#FFFFEB]">
                  45 wpm
                </div>
              </div>

              {/* Slow Horizontal Text Stream */}
              <div className="my-auto py-12 overflow-hidden relative">
                <div className="whitespace-nowrap text-[16px] text-[#FFFFEB]/45 font-normal animate-[marquee-left_65s_linear_infinite]">
                  {SPEED_STREAM}
                </div>
              </div>

              <div className="h-8" />
            </div>

            {/* Right Card: Flow 220 wpm */}
            <div className="lg:col-span-8 rounded-[28px] relative overflow-hidden min-h-[380px] md:min-h-[480px] flex flex-col justify-between p-8 border border-[#FFFFEB]/10">
              {/* Motion-blurred runner background */}
              <img
                src="/assets/flow-card-1.webp"
                alt="Flow 220 wpm visual"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

              {/* Top Label */}
              <div className="relative z-10 text-center pt-2">
                <div className="text-[14.5px] font-medium text-[#FFFFEB] mb-1">
                  Flow
                </div>
                <div className="font-garamond text-[40px] md:text-[46px] leading-none text-[#FFFFEB]">
                  220 wpm
                </div>
              </div>

              {/* Curved Animated Text Stream */}
              <div className="relative z-10 my-auto w-full h-44 flex items-center justify-center">
                <svg
                  viewBox="0 0 800 180"
                  fill="none"
                  className="w-full h-full overflow-visible"
                >
                  <path
                    id="flow-speed-arc"
                    d="M -60 150 Q 400 20 860 150"
                    fill="none"
                    stroke="none"
                  />
                  <text
                    fill="#FFFFEB"
                    fontSize="18"
                    fontWeight="600"
                    fontFamily="var(--font-figtree), sans-serif"
                  >
                    <textPath href="#flow-speed-arc" startOffset="0%">
                      {SPEED_STREAM}
                      <animate
                        attributeName="startOffset"
                        from="-90%"
                        to="0%"
                        dur="14s"
                        repeatCount="indefinite"
                      />
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Bottom Live Voice Waveform Pill */}
              <div className="relative z-10 flex justify-center pb-2">
                <div className="bg-[#1A1A1A]/90 border-2 border-[#FFFFEB]/85 rounded-full px-5 py-2.5 flex items-center gap-1.5 shadow-xl">
                  {[0.5, 0.85, 1, 0.7, 0.95, 0.6, 1, 0.8, 0.55, 0.9, 0.65].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="w-[3px] bg-[#FFFFEB] rounded-full animate-wave-bar"
                        style={{
                          height: `${Math.round(h * 18)}px`,
                          animationDelay: `${i * 0.09}s`,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

