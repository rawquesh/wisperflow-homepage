"use client";

import React, { useState } from "react";
import { ChevronRight, Plus, Check } from "lucide-react";

const LANGUAGES = [
  {
    name: "Deutsch",
    flag: "🇩🇪",
    stream:
      "Wie möchten Sie die Datei einrichten? Hier sind ein paar Optionen für Sie.   •   Estoy empezando con el proyecto. Aquí van algunas opciones.   •   I’m getting started with the project. Here are a few options.",
  },
  {
    name: "Español",
    flag: "🇪🇸",
    stream:
      "Estoy empezando con el proyecto. Aquí van algunas opciones.   •   प्रोजेक्ट पर काम शुरू हो गया। आप इसे कैसे सेट करना चाहेंगे?   •   Wie möchten Sie die Datei einrichten?",
  },
  {
    name: "हिन्दी",
    flag: "🇮🇳",
    stream:
      "प्रोजेक्ट पर काम शुरू हो गया। आप इसे कैसे सेट करना चाहेंगे? यहाँ कुछ विकल्प हैं।   •   I’m getting started with the project. Here are a few options.",
  },
];

const TONES = [
  {
    id: "formal",
    label: "Formal",
    text: "Hey, are you free for lunch tomorrow? Let’s do 12 if that works for you.",
  },
  {
    id: "casual",
    label: "Casual",
    text: "Hey are you free for lunch tomorrow? Let’s do 12 if that works for you",
  },
  {
    id: "very-casual",
    label: "Very casual",
    text: "hey are you free for lunch tomorrow? let’s do 12 if that works for you",
  },
];

export function FeaturesSection() {
  const [langIndex, setLangIndex] = useState(0);
  const [snippetExpanded, setSnippetExpanded] = useState(false);
  const [activeTone, setActiveTone] = useState("formal");
  const [vocabWords, setVocabWords] = useState(["Sarah", "Aditya", "Dillon"]);
  const [showAddModal, setShowAddModal] = useState(false);

  const currentLang = LANGUAGES[langIndex];
  const currentToneObj =
    TONES.find((t) => t.id === activeTone) || TONES[0];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Heading with Lavender SVG Underline */}
        <div className="text-center max-w-[780px] mx-auto mb-20 md:mb-28">
          <div className="text-[11.5px] tracking-[0.14em] uppercase text-[#1A1A1A]/70 font-semibold mb-4">
            WISPR MAKES IT EASY
          </div>

          <h2 className="font-garamond text-[48px] sm:text-[64px] md:text-[75px] leading-[1.0] tracking-[-0.03em] font-normal text-[#1A1A1A]">
            Built around <em className="italic font-normal">how</em>{" "}
            <span className="relative inline-block">
              <em className="italic font-normal relative z-10">you work,</em>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -2 177 16"
                fill="none"
                className="w-full h-auto absolute -bottom-2 left-0 z-0"
              >
                <path
                  d="M4 11C24.635 9.39752 45.2851 9.62595 65.8873 6.98258C92.4285 3.57722 146.28 1.14356 173 10.9999"
                  stroke="#F0D7FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            not how we think you should.
          </h2>
        </div>

        {/* 4 Interactive Feature Pairs */}
        <div className="flex flex-col gap-20 md:gap-28">
          {/* 1. 100+ Languages */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="md:col-span-5">
              <div
                onClick={() =>
                  setLangIndex((prev) => (prev + 1) % LANGUAGES.length)
                }
                title="Click to switch language"
                className="bg-[#E4E4D0] rounded-[20px] h-[250px] p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer group"
              >
                {/* Language Pill */}
                <div className="mx-auto mt-4 bg-[#FFFFEB] rounded-full px-5 py-2.5 inline-flex items-center gap-3 shadow-sm border border-[#1A1A1A]/5 group-hover:scale-[1.02] transition-transform">
                  <span className="text-[14px] text-[#1A1A1A]/70">
                    Language:{" "}
                    <strong className="font-medium text-[#1A1A1A]">
                      {currentLang.name}
                    </strong>
                  </span>
                  <span className="text-xl leading-none">
                    {currentLang.flag}
                  </span>
                </div>

                {/* Curved Multilingual Wave */}
                <div className="w-full h-24 relative">
                  <svg
                    viewBox="0 0 420 90"
                    fill="none"
                    className="w-full h-full overflow-visible"
                  >
                    <path
                      id="lang-wave-path"
                      d="M -30 70 Q 190 15 450 70"
                      fill="none"
                      stroke="none"
                    />
                    <text
                      fill="#1A1A1A"
                      fontSize="13.5"
                      fontWeight="500"
                      fontFamily="var(--font-figtree), sans-serif"
                    >
                      <textPath href="#lang-wave-path" startOffset="0%">
                        {currentLang.stream}
                        <animate
                          attributeName="startOffset"
                          from="-60%"
                          to="0%"
                          dur="14s"
                          repeatCount="indefinite"
                        />
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-6">
              <h3 className="font-garamond text-[38px] md:text-[48px] leading-[1.08] font-normal text-[#1A1A1A] mb-3.5">
                100+ Languages
              </h3>
              <p className="text-[16px] md:text-[17px] leading-[1.55] text-[#1A1A1A]/80 max-w-[460px]">
                Flow automatically detects and transcribes the language
                you&apos;re speaking, so you can switch between languages
                naturally.
              </p>
            </div>
          </div>

          {/* 2. Flow learns your vocabulary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="md:col-span-5">
              <div className="bg-[#E4E4D0] rounded-[20px] h-[250px] p-6 flex flex-col items-center justify-center relative overflow-hidden">
                {!showAddModal ? (
                  <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-[300px]">
                    {vocabWords.map((word) => (
                      <span
                        key={word}
                        className="bg-[#FFFFEB] text-[#1A1A1A] px-4 py-2 rounded-xl text-[14.5px] font-medium shadow-xs border border-[#1A1A1A]/5 inline-flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-[#034F46]" />
                        {word}
                      </span>
                    ))}
                    <button
                      type="button"
                      onClick={() => setShowAddModal(true)}
                      className="bg-[#034F46] text-[#FFFFEB] px-4 py-2 rounded-xl text-[14px] font-medium inline-flex items-center gap-1.5 hover:bg-[#034F46]/90 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add a new word
                    </button>
                  </div>
                ) : (
                  <div className="bg-[#FFFFEB] rounded-2xl p-4 w-full max-w-[290px] shadow-md border border-[#1A1A1A]/10 text-[13px]">
                    <div className="font-semibold text-[#1A1A1A] mb-2">
                      Add to vocabulary
                    </div>
                    <div className="flex flex-col gap-1.5 mb-3 text-[#1A1A1A]/75">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="accent-[#034F46]"
                        />
                        Correct a misspelling (Cheyene)
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="accent-[#034F46]"
                        />
                        Share with team
                      </label>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                        className="px-3 py-1 rounded-lg text-[#1A1A1A]/60 hover:bg-[#E4E4D0]/50 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!vocabWords.includes("Cheyene")) {
                            setVocabWords([...vocabWords, "Cheyene"]);
                          }
                          setShowAddModal(false);
                        }}
                        className="px-3 py-1 rounded-lg bg-[#034F46] text-[#FFFFEB] font-medium cursor-pointer"
                      >
                        Add word
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-7 md:pl-6">
              <h3 className="font-garamond text-[38px] md:text-[48px] leading-[1.08] font-normal text-[#1A1A1A] mb-3.5">
                Flow learns your vocabulary
              </h3>
              <p className="text-[16px] md:text-[17px] leading-[1.55] text-[#1A1A1A]/80 max-w-[460px]">
                Flow learns your unique words and names automatically, or lets
                you add them yourself. From client names to company jargon, it
                gets the details right.
              </p>
            </div>
          </div>

          {/* 3. Save your most used text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="md:col-span-5">
              <div
                onClick={() => setSnippetExpanded((prev) => !prev)}
                onMouseEnter={() => setSnippetExpanded(true)}
                onMouseLeave={() => setSnippetExpanded(false)}
                className="bg-[#E4E4D0] rounded-[20px] h-[250px] p-6 flex items-center justify-center relative overflow-hidden cursor-pointer"
              >
                <div className="text-[15px] text-[#1A1A1A]/85 flex flex-wrap items-center justify-center gap-2 text-center">
                  <span>If you go to</span>
                  <span className="bg-[#FFFFEB] text-[#1A1A1A] font-semibold px-3.5 py-2 rounded-xl shadow-xs border border-[#1A1A1A]/10 transition-all duration-300">
                    {snippetExpanded
                      ? "https://www.linkedin.com/in/john-doe-9b0139134/"
                      : "“my Linkedin”"}
                  </span>
                  <span>you’ll see what</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-6">
              <h3 className="font-garamond text-[38px] md:text-[48px] leading-[1.08] font-normal text-[#1A1A1A] mb-3.5">
                Save your most used text
              </h3>
              <p className="text-[16px] md:text-[17px] leading-[1.55] text-[#1A1A1A]/80 max-w-[460px]">
                Create snippets for the things you type all the time, like
                emails, links, addresses, and bios. Speak the shortcut, and Flow
                expands it instantly.
              </p>
            </div>
          </div>

          {/* 4. Make Flow sound like you */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="md:col-span-5">
              <div className="bg-[#E4E4D0] rounded-[20px] h-[250px] p-6 flex flex-col justify-between">
                {/* Tone Switcher Tabs */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  {TONES.map((tone) => (
                    <button
                      key={tone.id}
                      type="button"
                      onClick={() => setActiveTone(tone.id)}
                      className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                        activeTone === tone.id
                          ? "bg-[#034F46] text-[#FFFFEB] shadow-xs"
                          : "bg-[#FFFFEB]/70 text-[#1A1A1A]/75 hover:bg-[#FFFFEB]"
                      }`}
                    >
                      {tone.label}
                    </button>
                  ))}
                </div>

                {/* Output Preview Card */}
                <div className="bg-[#FFFFEB] rounded-2xl p-4 shadow-xs border border-[#1A1A1A]/5 my-auto">
                  <p className="text-[14.5px] leading-[1.5] text-[#1A1A1A]">
                    {currentToneObj.text}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:pl-6">
              <h3 className="font-garamond text-[38px] md:text-[48px] leading-[1.08] font-normal text-[#1A1A1A] mb-3.5">
                Make Flow sound like you
              </h3>
              <p className="text-[16px] md:text-[17px] leading-[1.55] text-[#1A1A1A]/80 max-w-[460px]">
                Flow adapts to how you write in different apps. Set a different
                style for messages, work chats, emails, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy & Security Banner ("Your voice stays yours.") */}
        <div
          id="privacy"
          className="mt-28 md:mt-36 bg-[#E4E4D0] rounded-[28px] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-4">
            <h2 className="font-garamond text-[42px] md:text-[48px] leading-[0.95] tracking-[-0.03em] font-normal text-[#1A1A1A]">
              Your voice
              <br />
              <em className="italic font-normal">stays yours.</em>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[14.5px] leading-[1.55] text-[#1A1A1A]/80 mb-5">
              Your data is never sold. You choose whether data is used to help
              improve Flow. SOC 2 Type II, HIPAA and ISO 27001 certified.
            </p>
            <a
              href="#trust"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#1A1A1A] hover:opacity-75 transition-opacity"
            >
              <span>Learn more</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <img
              src="/assets/badges-v4.png"
              alt="HIPAA, SOC 2 Type II, ISO 27001 Certified"
              className="h-24 md:h-28 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

