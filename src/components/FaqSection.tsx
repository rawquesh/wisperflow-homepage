"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Will Flow work in my messages, notes, email, or AI tools?",
    answer:
      "Yes. Flow types wherever your cursor is, so it works in every app on your computer with no setup or integrations. Gmail, Slack, iMessage, Notion, your terminal, your code editor, and AI tools like ChatGPT, Claude, and Cursor. If you can type there, you can Flow there.",
  },
  {
    question: "How is Flow different from Siri or Google voice typing?",
    answer:
      "Built-in voice typing transcribes every 'um', 'uh', false start, and punctuation mistake literally. Wispr Flow uses context-aware AI to edit as you speak—removing filler words, handling mid-sentence corrections, and formatting your text cleanly.",
  },
  {
    question: "Does Flow work in other languages?",
    answer:
      "Yes! Flow supports over 100 languages and automatically detects whichever language you speak—even if you switch languages mid-sentence.",
  },
  {
    question: "Does it work if I have an accent?",
    answer:
      "Absolutely. Flow's speech models are trained to understand diverse accents, dialects, and natural speaking cadences with high accuracy.",
  },
  {
    question: "What if I talk fast, speak quietly, or work somewhere noisy?",
    answer:
      "Flow is built for real-world environments. You can whisper in a shared office, speak at 220+ words per minute, or dictate with background café noise and Flow will isolate your voice.",
  },
  {
    question: "Is my voice data private and secure?",
    answer:
      "Your data is never sold. With Privacy Mode enabled, zero audio or transcripts are stored or used to train models. Wispr Flow is SOC 2 Type II, HIPAA, and ISO 27001 certified.",
  },
];

export function FaqSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-36 bg-[#FFFFEB] text-[#1A1A1A]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-8">
        {/* Heading matching shot-12-14250.png */}
        <div className="text-center max-w-[700px] mx-auto mb-14 md:mb-16">
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-[#1A1A1A]/70 mb-3">
            FAQS
          </p>
          <h2 className="font-garamond text-[48px] sm:text-[62px] md:text-[72px] leading-[1.0] tracking-[-0.02em] text-[#1A1A1A]">
            Good <span className="italic font-normal">questions.</span>
          </h2>
        </div>

        {/* Two-Pane Interactive Conversational FAQ matching shot-12-14250.png */}
        <div className="bg-[#E4E4D0] rounded-[32px] p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Pane: Deep Teal (#034F46) Question Selector List */}
          <div className="lg:col-span-6 bg-[#034F46] text-[#FFFFEB] rounded-[24px] p-6 sm:p-8 flex flex-col">
            <h3 className="font-garamond text-[24px] text-[#FFFFEB] mb-5">
              Questions
            </h3>

            <div className="flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-2">
              {FAQ_ITEMS.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#1B635B] text-[#FFFFEB] font-semibold"
                        : "bg-transparent text-[#FFFFEB]/85 hover:bg-[#1B635B]/50 font-medium"
                    }`}
                  >
                    <span className="text-[15px] leading-snug block">
                      {item.question}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Pane: Answer Bubble + Wispr Icon matching shot-12-14250.png */}
          <div className="lg:col-span-6 p-4 sm:p-6 flex flex-col justify-between min-h-[420px]">
            <div>
              <h3 className="font-garamond text-[24px] text-[#1A1A1A] mb-6">
                Answer
              </h3>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Right-aligned repeated question prompt */}
                  <div className="ml-auto max-w-[82%] text-right text-[14.5px] leading-snug text-[#1A1A1A]/65 font-medium">
                    {FAQ_ITEMS[selectedIndex].question}
                  </div>

                  {/* Cream Answer Bubble */}
                  <div className="bg-[#F6F5EC] rounded-2xl p-6 shadow-xs">
                    <p className="text-[15.5px] leading-[1.6] text-[#1A1A1A]/90">
                      {FAQ_ITEMS[selectedIndex].answer}
                    </p>
                  </div>

                  {/* Wispr Flow Circular Logo Below Bubble */}
                  <div className="pt-1">
                    <img
                      src="/assets/faq-wispr-logo.svg"
                      alt="Wispr Flow"
                      className="w-8 h-8"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
