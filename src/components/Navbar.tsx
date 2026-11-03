"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface NavbarProps {
  activeProduct: "dictation" | "notetaker";
  setActiveProduct: (product: "dictation" | "notetaker") => void;
}

export function Navbar({ activeProduct, setActiveProduct }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <>
      {/* Top Announcement Banner */}
      <div className="w-full bg-[#034F46] text-[#FFFFEB] text-[13.5px] leading-snug py-2.5 px-4 flex items-center justify-center gap-3 z-50 relative">
        <span className="font-medium tracking-[-0.01em]">
          Wispr Flow Notetaker is now available on Windows and Mac.
        </span>
        <a
          href="#notetaker"
          onClick={(e) => {
            e.preventDefault();
            setActiveProduct("notetaker");
          }}
          className="inline-flex items-center gap-1 font-semibold underline decoration-[#FFFFEB]/40 underline-offset-4 hover:decoration-[#FFFFEB] transition-colors"
        >
          <span>Try for free</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Sticky Floating Pill Navbar */}
      <header className="sticky top-4 z-50 px-4 pt-3 pb-1 pointer-events-none">
        <div className="max-w-[920px] mx-auto bg-[#FFFFEB]/95 backdrop-blur-md border border-[#DCDCC6] rounded-[14px] px-3.5 py-2 flex items-center justify-between shadow-[0_4px_24px_rgba(26,26,26,0.04)] pointer-events-auto">
          {/* Left: Logo + Dictation/Notetaker Switcher */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center pl-1.5 py-1">
              <img
                src="/assets/flow-logo-black.svg"
                alt="Flow Logo"
                className="h-[22px] w-auto"
              />
            </a>

            <div className="bg-[#E6E6D4] p-1 rounded-full flex items-center text-[13.5px] font-medium">
              <button
                type="button"
                onClick={() => setActiveProduct("dictation")}
                className={`px-3.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  activeProduct === "dictation"
                    ? "bg-[#FFFFEB] text-[#1A1A1A] shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-medium"
                    : "text-[#1A1A1A]/75 hover:text-[#1A1A1A]"
                }`}
              >
                Dictation
              </button>
              <button
                type="button"
                onClick={() => setActiveProduct("notetaker")}
                className={`px-3.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  activeProduct === "notetaker"
                    ? "bg-[#FFFFEB] text-[#1A1A1A] shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-medium"
                    : "text-[#1A1A1A]/75 hover:text-[#1A1A1A]"
                }`}
              >
                Notetaker
              </button>
            </div>
          </div>

          {/* Right: Links + Windows CTA Button */}
          <nav className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-5 text-[14.5px] text-[#1A1A1A]/85 font-normal">
              <div
                className="relative"
                onMouseEnter={() => setOpenMenu("business")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a
                  href="#business"
                  className="hover:text-[#1A1A1A] transition-colors py-1 inline-flex items-center gap-1"
                >
                  Business
                </a>
                {openMenu === "business" && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-[#FFFFEB] border border-[#DCDCC6] rounded-xl p-2 shadow-xl flex flex-col gap-1 text-[13.5px]">
                      <a
                        href="#teams"
                        className="px-3 py-2 rounded-lg hover:bg-[#E6E6D4]/60 transition-colors"
                      >
                        <div className="font-medium text-[#1A1A1A]">
                          Flow for Teams
                        </div>
                        <div className="text-xs text-[#1A1A1A]/60">
                          Centralized billing & shared dictionary
                        </div>
                      </a>
                      <a
                        href="#enterprise"
                        className="px-3 py-2 rounded-lg hover:bg-[#E6E6D4]/60 transition-colors"
                      >
                        <div className="font-medium text-[#1A1A1A]">
                          Enterprise
                        </div>
                        <div className="text-xs text-[#1A1A1A]/60">
                          SOC 2 Type II, HIPAA, SSO & zero data retention
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#pricing"
                className="hover:text-[#1A1A1A] transition-colors py-1"
              >
                Pricing
              </a>
              <a
                href="#lab"
                className="hover:text-[#1A1A1A] transition-colors py-1 inline-flex items-center gap-0.5"
              >
                Lab
              </a>
            </div>

            <a
              href="#download"
              className="bg-[#EBDCFF] hover:bg-[#E2CEFF] active:scale-[0.99] text-[#1A1A1A] border-[1.5px] border-[#1A1A1A] rounded-[9px] px-4 py-2 text-[14px] font-medium inline-flex items-center gap-2.5 transition-all duration-150 shadow-[0_1px_0_rgba(26,26,26,0.1)]"
            >
              <img
                src="/assets/windows.svg"
                alt="Windows"
                className="w-3.5 h-3.5"
              />
              <span>Get started on Windows</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

