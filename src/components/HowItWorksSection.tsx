"use client";

import React, { useState } from "react";
import { Plus, Smile, Send, ChevronDown, Sparkles } from "lucide-react";

const STEPS = [
  {
    id: 0,
    navLabel: "Speak naturally",
    title: "Speak naturally",
    description:
      "Talk the way you naturally do — pause, think out loud, or change your mind mid-sentence. Flow keeps up with your train of thought.",
    bgImage: "/assets/flow-card-1.webp",
  },
  {
    id: 1,
    navLabel: "Edits as you speak",
    title: "Flow edits as you speak",
    description:
      "Text that reads like you wrote it, not like you spoke it. Flow automatically removes filler words, adds punctuation, and formats your writing.",
    bgImage: "/assets/flow-card-2.webp",
  },
  {
    id: 2,
    navLabel: "Use it anywhere",
    title: "Use it anywhere",
    description:
      "Flow works anywhere you can type, with no plugins required. Syncs seamlessly across Mac, Windows, iPhone, and Android.",
    bgImage: "/assets/flow-card-3.webp",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  const current = STEPS[activeStep];

  return (
    <section className="relative py-24 md:py-36 px-4 sm:px-8 overflow-hidden">
      {/* Subtle Decorative Curved Background Ribbon */}
      <svg
        viewBox="0 0 1440 700"
        fill="none"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-auto pointer-events-none opacity-65 z-0"
      >
        <path
          d="M -100 580 C 120 420, 260 660, 480 510 C 700 360, 920 550, 1140 280 C 1280 110, 1420 180, 1560 240"
          stroke="#F2F1DC"
          strokeWidth="44"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-[1180px] mx-auto relative z-10">
        {/* Top Heading */}
        <div className="text-center max-w-[740px] mx-auto mb-16 md:mb-20">
          <div className="text-[11.5px] tracking-[0.14em] uppercase text-[#1A1A1A]/70 font-semibold mb-4">
            HOW IT WORKS
          </div>
          <h2 className="font-garamond text-[44px] sm:text-[56px] md:text-[64px] leading-[0.96] tracking-[-0.03em] font-normal text-[#1A1A1A]">
            Speak at the speed you&nbsp;think,{" "}
            <em className="italic font-normal">
              in every app,
              <br />
              on every device.
            </em>
          </h2>
        </div>

        {/* 3-Column Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Rail: Step Selector with Coral Indicator */}
          <div className="lg:col-span-3 flex lg:flex-col gap-3 lg:gap-0 border-l-0 lg:border-l-[3px] border-[#E4E4D0] relative">
            {STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`text-left pl-5 py-3 relative transition-all cursor-pointer font-garamond text-[24px] md:text-[27px] leading-tight ${
                    isActive
                      ? "text-[#1A1A1A] font-normal"
                      : "text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70"
                  }`}
                >
                  {isActive && (
                    <span className="hidden lg:block absolute -left-[3px] top-1 bottom-1 w-[3.5px] bg-[#FF5C35] rounded-full" />
                  )}
                  {step.navLabel}
                </button>
              );
            })}
          </div>

          {/* Center Card: Interactive Visual Demo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[390px] h-[490px] rounded-[24px] relative overflow-hidden shadow-[0_24px_60px_rgba(26,26,26,0.16)] flex flex-col justify-between p-6">
              {/* Background Image */}
              <img
                src={current.bgImage}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />

              {/* Step 0: Speak naturally */}
              {activeStep === 0 && (
                <>
                  <div className="relative z-10 pt-4 text-[14.5px] leading-[1.55] font-medium text-[#FFFFEB]">
                    <p className="opacity-95">
                      “Hey so um can you actually wait can you tell the team
                      that the the launch is gonna slip I think to like Friday
                      the following Monday because we&apos;re still waiting on
                      uh legal to sign off on the new terms page and uh yeah
                      just let them know we&apos;ll have a real timeline by by
                      end of week sorry end of day Thursday”
                    </p>
                  </div>

                  <div className="relative z-10 bg-[#FFFFEB] rounded-2xl p-4 shadow-lg text-[#1A1A1A]">
                    <div className="text-[13px] text-[#1A1A1A]/45 mb-6">
                      Listening to your voice...
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]/10 text-[#1A1A1A]/50">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#E4E4D0] flex items-center justify-center text-[#1A1A1A]">
                          <Plus className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-semibold underline">
                          Aa
                        </span>
                        <Smile className="w-4 h-4" />
                        <span className="text-xs">•••</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5" />
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex justify-center">
                    <div className="bg-[#1A1A1A]/90 border border-[#FFFFEB]/70 rounded-full px-5 py-2 flex items-center gap-1.5">
                      {[0.4, 0.9, 0.6, 1, 0.75, 0.95, 0.5, 0.85, 0.6].map(
                        (v, i) => (
                          <span
                            key={i}
                            className="w-[2.5px] bg-[#FFFFEB] rounded-full animate-wave-bar"
                            style={{
                              height: `${Math.round(v * 15)}px`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Step 1: Edits as you speak (matches shot-05-4800.png) */}
              {activeStep === 1 && (
                <>
                  <div className="relative z-10 pt-2 text-[13.5px] leading-[1.55] font-semibold text-[#FFFFEB]">
                    <span className="text-[#FF7A59]">
                      Hey so um can you actually wait
                    </span>{" "}
                    <span>can you tell the team that</span>{" "}
                    <span className="text-[#E899DC]">the</span>{" "}
                    <span>launch is gonna slip I</span>{" "}
                    <span className="text-[#FFB547]">think to like</span>{" "}
                    <span>not</span>{" "}
                    <span className="text-[#FF7A59]">
                      Friday the following Monday
                    </span>{" "}
                    <span>because we&apos;re still waiting on</span>{" "}
                    <span className="text-[#FFB547]">uh</span>{" "}
                    <span>legal to sign off on</span>{" "}
                    <span className="text-[#E899DC]">the</span>{" "}
                    <span>new terms page and</span>{" "}
                    <span className="text-[#FFB547]">uh yeah</span>{" "}
                    <span>just let them know we&apos;ll have a real timeline</span>{" "}
                    <span className="text-[#E899DC]">by</span>{" "}
                    <span className="text-[#FF7A59]">
                      end of week sorry
                    </span>{" "}
                    <span>end of day Thursday</span>
                  </div>

                  {/* Message Composer Card */}
                  <div className="relative z-10 bg-[#FFFFEB] rounded-2xl p-4 shadow-lg text-[#1A1A1A]">
                    <div className="text-[13px] text-[#1A1A1A]/45 mb-7">
                      Message...
                    </div>
                    <div className="flex items-center justify-between pt-2 text-[#1A1A1A]/55">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#E4E4D0] flex items-center justify-center text-[#1A1A1A]">
                          <Plus className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-semibold underline">
                          Aa
                        </span>
                        <Smile className="w-4 h-4" />
                        <span className="text-xs">•••</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Send className="w-3.5 h-3.5" />
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom "Cleaning up ✦" Pill */}
                  <div className="relative z-10 flex justify-center">
                    <div className="bg-[#1A1A1A]/90 border border-[#EBDCFF]/60 rounded-full px-4 py-1.5 flex items-center gap-2 text-[12px] text-[#FFFFEB]/90 shadow-lg">
                      <span className="bg-gradient-to-r from-[#FF7A59] via-[#EBDCFF] to-[#FFFFEB] bg-clip-text text-transparent font-medium">
                        Cleaning up...
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-[#EBDCFF]" />
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Use it anywhere (matches shot-06-6000.png) */}
              {activeStep === 2 && (
                <>
                  {/* Top App Icon Indicator (Slack / Universal) */}
                  <div className="relative z-10 flex justify-center pt-1">
                    <div className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-[#FFFFEB] text-sm font-bold">
                      #
                    </div>
                  </div>

                  {/* Polished Message Ready to Send */}
                  <div className="relative z-10 bg-[#FFFFEB]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg text-[#1A1A1A]">
                    <p className="text-[13px] leading-[1.5] text-[#1A1A1A] font-medium mb-4">
                      Can you let the team know the launch is slipping to
                      Monday? We&apos;re still waiting on legal to sign off on
                      the new terms page. We&apos;ll have a firm timeline by end
                      of day Thursday.
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]/10 text-[#1A1A1A]/55">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#E4E4D0] flex items-center justify-center text-[#1A1A1A]">
                          <Plus className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-semibold underline">
                          Aa
                        </span>
                        <Smile className="w-4 h-4" />
                        <span className="text-xs">•••</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#034F46]">
                        <Send className="w-3.5 h-3.5" />
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Idle Flow Pill */}
                  <div className="relative z-10 flex justify-center">
                    <div className="bg-[#1A1A1A]/90 border border-[#FFFFEB]/75 rounded-full px-5 py-2 flex items-center gap-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <span
                          key={i}
                          className="w-1 h-1 rounded-full bg-[#FFFFEB]/80"
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Active Step Heading & Description */}
          <div className="lg:col-span-4">
            <h3 className="font-garamond text-[40px] md:text-[48px] leading-[1.08] font-normal text-[#1A1A1A] mb-4 transition-all">
              {current.title}
            </h3>
            <p className="text-[16px] md:text-[17px] leading-[1.55] text-[#1A1A1A]/65 max-w-[360px]">
              {current.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

