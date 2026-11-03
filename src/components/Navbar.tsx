"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export function WaveText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          style={{ transitionDelay: `${idx * 16}ms` }}
          className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-[2.5px]"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function WindowsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/windows.svg"
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

export function Navbar() {
  const [activeProduct, setActiveProduct] = useState<"dictation" | "notetaker">("dictation");
  const [businessOpen, setBusinessOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Banner */}
      <div className="w-full bg-[#034F46] text-[#FFFFEB] py-3 px-4 text-center text-[13.5px] md:text-[14px] font-medium flex items-center justify-center gap-3 z-50 relative">
        <span className="font-semibold">
          Wispr Flow Notetaker is now available on Windows and Mac.
        </span>
        <a
          href="#notetaker"
          className="inline-flex items-center gap-0.5 hover:opacity-80 transition-opacity font-semibold"
        >
          <span>Try for free</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* Sticky Floating Navigation Bar */}
      <header className="sticky top-4 z-50 px-4 md:px-8 pt-4 pointer-events-none">
        <nav
          aria-label="Global"
          className="max-w-[940px] mx-auto bg-[#FFFFEB]/95 backdrop-blur-md border border-[#1A1A1A]/15 rounded-2xl px-4 md:px-5 h-[62px] flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto"
        >
          {/* Left: Brand Logo + Product Switcher */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center shrink-0" aria-label="Wispr Flow Home">
              <img
                src="/assets/flow-logo-black.svg"
                alt="Wispr Flow"
                className="h-[24px] w-auto"
              />
            </a>

            <div className="hidden sm:flex items-center bg-[#E6E4D5] p-1 rounded-full text-[13.5px] font-medium">
              <button
                type="button"
                onClick={() => setActiveProduct("dictation")}
                className={`px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                  activeProduct === "dictation"
                    ? "bg-[#FFFFEB] text-[#1A1A1A] shadow-xs font-semibold"
                    : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                }`}
              >
                Dictation
              </button>
              <button
                type="button"
                onClick={() => setActiveProduct("notetaker")}
                className={`px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                  activeProduct === "notetaker"
                    ? "bg-[#FFFFEB] text-[#1A1A1A] shadow-xs font-semibold"
                    : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                }`}
              >
                Notetaker
              </button>
            </div>
          </div>

          {/* Right: Navigation Links + Primary CTA */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-[14.5px] font-medium text-[#1A1A1A]/80">
              <div
                className="relative"
                onMouseEnter={() => setBusinessOpen(true)}
                onMouseLeave={() => setBusinessOpen(false)}
              >
                <button
                  type="button"
                  className="group flex items-center gap-1 py-2 hover:text-[#1A1A1A] transition-colors cursor-pointer"
                >
                  <WaveText text="Business" />
                </button>

                {businessOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-[#FFFFEB] border border-[#1A1A1A]/15 rounded-2xl p-2 shadow-xl flex flex-col gap-1">
                      <a
                        href="#enterprise"
                        className="px-3.5 py-2.5 rounded-xl hover:bg-[#F5F2DF] transition-colors flex flex-col"
                      >
                        <span className="font-semibold text-[14px] text-[#1A1A1A]">
                          Enterprise
                        </span>
                        <span className="text-[12px] text-[#1A1A1A]/65">
                          SOC 2 Type II, SSO &amp; zero data retention
                        </span>
                      </a>
                      <a
                        href="#teams"
                        className="px-3.5 py-2.5 rounded-xl hover:bg-[#F5F2DF] transition-colors flex flex-col"
                      >
                        <span className="font-semibold text-[14px] text-[#1A1A1A]">
                          Teams
                        </span>
                        <span className="text-[12px] text-[#1A1A1A]/65">
                          Shared vocabulary &amp; centralized billing
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="#pricing" className="group py-2 hover:text-[#1A1A1A] transition-colors">
                <WaveText text="Pricing" />
              </a>
              <a href="#lab" className="group py-2 hover:text-[#1A1A1A] transition-colors">
                <WaveText text="Lab" />
              </a>
            </div>

            <a
              href="#download"
              className="group inline-flex items-center gap-2.5 bg-[#F0D7FF] hover:bg-[#E5C2FA] text-[#1A1A1A] font-semibold text-[14px] px-4 py-2.5 rounded-xl border border-[#1A1A1A] transition-all"
            >
              <WindowsIcon className="w-3.5 h-3.5" />
              <WaveText text="Get started on Windows" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
