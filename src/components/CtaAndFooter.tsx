"use client";

import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useDynamicCorners } from "@/hooks/useDynamicCorners";
import { WindowsIcon, WaveText } from "./Navbar";

export function CtaSection() {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  useDynamicCorners(ctaRef, { maxDesktop: 80, maxMobile: 40 });

  return (
    <section className="px-0 pt-6 pb-16 bg-[#FFFFEB]">
      <div
        ref={ctaRef}
        className="relative min-h-[580px] md:min-h-[720px] w-full overflow-hidden flex items-center justify-center text-center px-4 sm:px-8 py-24"
      >
        {/* Background Atmospheric Image */}
        <img
          src="/assets/cta-bg.jpg"
          alt="Start flowing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        {/* Editorial Content matching shot-13-15150.png */}
        <div className="relative z-10 max-w-[920px] mx-auto text-[#FFFFEB] flex flex-col items-center">
          <h2 className="font-garamond text-[54px] sm:text-[80px] md:text-[104px] leading-[0.94] tracking-[-0.025em] text-[#FFFFEB]">
            You have a way with
            <br />
            words. Now, <span className="italic font-normal">two.</span>
          </h2>

          <p className="mt-6 text-[16px] md:text-[18px] leading-[1.5] text-[#FFFFEB]/90 max-w-[520px]">
            Talk thoughts into writing with Flow and conversations into meeting notes with Notetaker. Both are in one app, free.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <a
              href="#download"
              className="group inline-flex items-center gap-2.5 bg-[#F0D7FF] hover:bg-[#E5C2FA] text-[#1A1A1A] font-semibold text-[15px] px-6 py-3.5 rounded-xl border border-[#1A1A1A] transition-all"
            >
              <WindowsIcon className="w-4 h-4" />
              <WaveText text="Get started on Windows" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#FFFFEB] text-[#1A1A1A] pt-10 pb-0 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-8">
        {/* Products Banner Row matching shot-14-16050.png */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Flow Dictation */}
            <a
              href="#dictation"
              className="group rounded-[24px] bg-[#E4E4D0] p-4 sm:p-5 flex items-center gap-6 hover:bg-[#DDDDC7] transition-colors"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#F0D7FF] flex items-center justify-center shrink-0">
                <img
                  src="/assets/flowbar.svg"
                  alt="Flowbar"
                  className="w-24 h-auto"
                />
              </div>
              <div className="flex-1">
                <div className="font-bold text-[17px] text-[#1A1A1A]">
                  Flow Dictation
                </div>
                <p className="text-[14px] leading-[1.5] text-[#1A1A1A]/70 mt-1.5 mb-3">
                  The voice-to-text AI that turns speech into clear, polished writing in every app.
                </p>
                <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#1A1A1A]">
                  Download free <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </a>

            {/* Card 2: Flow Notetaker */}
            <a
              href="#notetaker"
              className="group rounded-[24px] bg-[#E4E4D0] p-4 sm:p-5 flex items-center gap-6 hover:bg-[#DDDDC7] transition-colors"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#034F46] flex items-end justify-center overflow-hidden pt-4 px-3 shrink-0">
                <img
                  src="/assets/transcript-new.png"
                  alt="Flow Notetaker"
                  className="w-full h-auto object-cover rounded-t-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[17px] text-[#1A1A1A]">
                    Flow Notetaker
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFA946] text-[#1A1A1A]">
                    New
                  </span>
                </div>
                <p className="text-[14px] leading-[1.5] text-[#1A1A1A]/70 mt-1.5 mb-3">
                  AI meeting notes accurate enough to act on. Works in all meetings.
                </p>
                <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#1A1A1A]">
                  Download free <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Links matching shot-14-16050.png */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 text-[14px]">
          <div>
            <h4 className="font-semibold uppercase tracking-[0.12em] text-[12px] text-[#1A1A1A]/50 mb-4">
              GET STARTED
            </h4>
            <ul className="space-y-2.5 font-medium text-[#1A1A1A]/85">
              <li><a href="#pricing" className="hover:text-[#1A1A1A]">Pricing</a></li>
              <li><a href="#security" className="hover:text-[#1A1A1A]">Privacy &amp; Security</a></li>
              <li><a href="#demo" className="hover:text-[#1A1A1A]">Web demo</a></li>
              <li><a href="#compare" className="hover:text-[#1A1A1A]">Why Flow vs. Built-in Dictation</a></li>
              <li><a href="#mic" className="hover:text-[#1A1A1A]">Microphone guide</a></li>
              <li><a href="#merch" className="hover:text-[#1A1A1A]">Merch store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-[0.12em] text-[12px] text-[#1A1A1A]/50 mb-4">
              PROFESSIONALS
            </h4>
            <ul className="space-y-2.5 font-medium text-[#1A1A1A]/85">
              <li><a href="#leaders" className="hover:text-[#1A1A1A]">Leaders</a></li>
              <li><a href="#developers" className="hover:text-[#1A1A1A]">Developers</a></li>
              <li><a href="#marketers" className="hover:text-[#1A1A1A]">Marketers</a></li>
              <li><a href="#creators" className="hover:text-[#1A1A1A]">Creators</a></li>
              <li><a href="#support" className="hover:text-[#1A1A1A]">Customer Support</a></li>
              <li><a href="#students" className="hover:text-[#1A1A1A]">Students</a></li>
              <li><a href="#lawyers" className="hover:text-[#1A1A1A]">Lawyers</a></li>
              <li><a href="#accessibility" className="hover:text-[#1A1A1A]">Accessibility</a></li>
              <li><a href="#sales" className="hover:text-[#1A1A1A]">Sales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-[0.12em] text-[12px] text-[#1A1A1A]/50 mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2.5 font-medium text-[#1A1A1A]/85">
              <li><a href="#cases" className="hover:text-[#1A1A1A]">Case studies</a></li>
              <li><a href="#blog" className="hover:text-[#1A1A1A]">Blog</a></li>
              <li><a href="#notetaker-res" className="hover:text-[#1A1A1A]">Notetaker resources</a></li>
              <li><a href="#prompting" className="hover:text-[#1A1A1A]">AI prompting guide</a></li>
              <li><a href="#workflows" className="hover:text-[#1A1A1A]">Workflows</a></li>
              <li><a href="#gboard" className="hover:text-[#1A1A1A]">Flow vs Gboard voice typing</a></li>
              <li><a href="#apple" className="hover:text-[#1A1A1A]">Flow vs Apple Dictation</a></li>
              <li><a href="#whats-new" className="hover:text-[#1A1A1A]">What&apos;s new</a></li>
              <li><a href="#vibe" className="hover:text-[#1A1A1A]">Vibe coding</a></li>
              <li><a href="#bounty" className="hover:text-[#1A1A1A]">Bug bounty</a></li>
              <li><a href="#support-talk" className="hover:text-[#1A1A1A]">Talk to support</a></li>
              <li><a href="#sales-talk" className="hover:text-[#1A1A1A]">Talk to sales</a></li>
              <li><a href="#help" className="hover:text-[#1A1A1A]">Help center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-[0.12em] text-[12px] text-[#1A1A1A]/50 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 font-medium text-[#1A1A1A]/85">
              <li><a href="#about" className="hover:text-[#1A1A1A]">About</a></li>
              <li><a href="#careers" className="hover:text-[#1A1A1A]">Careers</a></li>
              <li><a href="#trust" className="hover:text-[#1A1A1A]">Trust Center</a></li>
              <li><a href="#affiliate" className="hover:text-[#1A1A1A]">Become an affiliate</a></li>
              <li><a href="#media" className="hover:text-[#1A1A1A]">Media Kit</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Edge-to-Edge Bottom Flow Logo matching shot-14-16050.png */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mt-14 -mb-6 select-none pointer-events-none">
        <img
          src="/assets/flow-logo-black.svg"
          alt="Wispr Flow"
          className="w-full h-auto block"
        />
      </div>
    </footer>
  );
}
