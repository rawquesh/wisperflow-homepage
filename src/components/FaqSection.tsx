"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answerHtml: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Will Flow work in my messages, notes, email, or AI tools?",
    answerHtml:
      "<p>Yes. Flow types wherever your cursor is, so it works in every app on your computer with no setup or integrations. Gmail, Slack, iMessage, Notion, your terminal, your code editor, and AI tools like ChatGPT, Claude, and Cursor. If you can type there, you can Flow there.</p>",
  },
  {
    question: "How is Flow different from Siri or Google voice typing?",
    answerHtml:
      '<p>Built-in dictation transcribes what you say, word for word, including every "um," false start, and mid-sentence correction. Then you spend time cleaning it up. Flow uses the most advanced voice technology available to turn what you say into what you meant to write.</p><p class="mt-3">What that looks like in practice:</p><ul class="list-disc pl-5 mt-2 space-y-1.5"><li><strong>Catches your corrections.</strong> Say "let\'s meet at 5... actually 6pm" and built-in dictation writes all of it. Flow gives you "Let\'s meet at 6pm."</li><li><strong>Formats as you speak.</strong> Numbered lists, paragraphs, structured emails. Built-in dictation gives you a wall of text; Flow gives you something ready to send.</li><li><strong>Gets uncommon names and terms right.</strong> Flow uses your personal dictionary and context to nail names, acronyms, and jargon, and it gets more accurate the more you use it.</li><li><strong>Works everywhere.</strong> Siri only works on Apple devices. Google voice typing has improved its cleanup, but the best version is limited to the Google ecosystem and the newest devices. Flow is one tool with the same accuracy and personalization in every app, on every device.</li></ul><p class="mt-3">See the full comparison, with side-by-side examples, on our <a href="https://wisprflow.ai/why-flow" class="underline font-medium">Why Flow</a> page.</p>',
  },
  {
    question: "Does Flow work in other languages?",
    answerHtml:
      '<p>Yes, Flow supports 100+ languages.</p><p class="mt-3">For the best accuracy, select the specific language you\'re speaking at that moment rather than relying on auto-detect. If you switch between languages during the day, the language picker lives right in the Flow bar, so changing is one click away. See <a href="https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages" class="underline font-medium">using Flow with multiple languages</a> for how to set it up.</p>',
  },
  {
    question: "Does it work if I have an accent?",
    answerHtml:
      '<p>Yes. Flow is built to handle a wide range of accents and speaking styles. One tip that makes a real difference: select only the language you\'re speaking right now, and deselect the others.</p><p class="mt-3">If you speak English with a French accent, having both English and French selected can confuse Flow about which language it\'s hearing.</p><p class="mt-3">Selecting just English while you\'re speaking English gives you noticeably better accuracy, and when you switch to French, changing languages is one click in the Flow bar. See <a href="https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages" class="underline font-medium">using Flow with multiple languages</a> for more information.</p>',
  },
  {
    question: "What if I talk fast, speak quietly, or work somewhere noisy?",
    answerHtml:
      '<p>Flow keeps up with fast talkers and can handle speech as quiet as a whisper. The main thing that matters is your microphone setup: your built-in mic works great, and the closer the mic is to your mouth, the quieter you can speak.</p><p class="mt-3">We recommend against AirPods and other Bluetooth earbuds for dictation, since they compress audio and can miss the start of what you say. See our <a href="https://wisprflow.ai/microphones" class="underline font-medium">microphone guide</a> for the full rundown.</p>',
  },
  {
    question: "Do I need a special microphone or extra hardware?",
    answerHtml:
      '<p>No. Your built-in microphone is all you need. If you want to dictate very quietly or in loud environments, a mic closer to your mouth helps, and our <a href="https://wisprflow.ai/microphones" class="underline font-medium">microphone guide</a> covers the best options.</p><p class="mt-3">One note: AirPods and Bluetooth earbuds are the one setup we\'d avoid, since they tend to hurt accuracy.</p>',
  },
  {
    question: "Is my voice data private?",
    answerHtml:
      '<p>We never sell your data. You can manage data-sharing preferences in Settings &gt; Data and Privacy. See <a href="https://wisprflow.ai/data-controls" class="underline font-medium">Data Controls</a> for details.</p><p class="mt-3">Flow is independently certified to the world\'s top security standards: SOC 2 Type II, ISO 27001, and HIPAA compliance. For more information, visit our <a href="https://wisprflow.ai/privacy" class="underline font-medium">Privacy page.</a></p>',
  },
  {
    question: "Is Flow free?",
    answerHtml:
      '<p>Yes. Flow\'s is free, with no trial countdown or credit card required, for 2,000 words per week.</p><p class="mt-3">If you want unlimited dictation, upgrade to Flow Pro. For more information, visit our <a href="https://wisprflow.ai/pricing" class="underline font-medium">Pricing page.</a></p>',
  },
  {
    question: "Can my whole team use it?",
    answerHtml:
      '<p>Yes, and there are two ways to do it.</p><p class="mt-3"><strong>Flow Pro for Teams</strong> gives everyone unlimited dictation under one plan, with centralized billing and an admin portal to manage seats.</p><p class="mt-3"><strong>Flow Enterprise</strong> adds the things larger organizations need: enforced SSO, admin-controlled data retention and privacy policies, audit logs, and bulk pricing.</p><p class="mt-3">Most teams start with Pro for Teams and move to Enterprise as they grow. Learn more on our <a href="https://wisprflow.ai/business" class="underline font-medium">Business page</a>, or see the <a href="https://docs.wisprflow.ai/articles/2458545840-faqs-for-flow-pro-team-and-flow-enterprise-plans" class="underline font-medium">full plan comparison</a> in our Help Center.</p>',
  },
  {
    question: "Does Wispr Flow have an AI Notetaker for meetings?",
    answerHtml:
      '<p>Yes. Wispr Notetaker is Wispr Flow\'s AI Notetaker and meeting assistant. It records meetings on your Mac or Windows computer, then gives you a transcript with speakers named, a summary organized by topic, and next steps. It works on Zoom, Google Meet, Microsoft Teams, Slack huddles, and in-person meetings. Learn more on the <a href="https://wisprflow.ai/notetaker" class="underline font-medium">Notetaker page</a>.</p>',
  },
  {
    question: "Are Dictation and Notetaker included in the same plan?",
    answerHtml:
      '<p>Yes. One Wispr Flow subscription includes both Flow dictation and Notetaker, and both are available on the free plan. Upgrade to Flow Pro for unlimited use. See the <a href="https://wisprflow.ai/pricing" class="underline font-medium">Pricing page</a> for plan details.</p>',
  },
];

export default function FaqSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentFaq = FAQ_ITEMS[selectedIndex];

  return (
    <section className="section_nt-faqs bg-[#FFFFEB] text-[#1A1A1A] py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[920px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-[12px] md:text-[13px] tracking-[0.18em] uppercase font-medium text-[#1A1A1A]/65 mb-3">
            FAQS
          </div>
          <h2 className="font-garamond text-[48px] sm:text-[64px] md:text-[75px] leading-[1.04] tracking-[-0.03em] text-[#1A1A1A]">
            Good <em className="italic font-normal">questions.</em>
          </h2>
        </div>

        {/* Two-pane interactive container matching shot-12-14250.png */}
        <div className="bg-[#E4E4D0] rounded-[32px] p-3 md:p-4 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 shadow-sm">
          {/* Left Pane: Dark Teal Questions List */}
          <div className="md:col-span-6 bg-[#034F46] text-[#FFFFEB] rounded-[24px] p-6 md:p-8 flex flex-col h-[480px] md:h-[520px]">
            <h3 className="font-garamond text-[22px] text-[#FFFFEB] mb-5 pb-1">
              Questions
            </h3>
            <div className="faq-scroll flex-1 overflow-y-auto pr-2 space-y-2">
              {FAQ_ITEMS.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.question}
                    onClick={() => setSelectedIndex(idx)}
                    className={`w-full text-left px-4 py-4 rounded-[12px] text-[14px] md:text-[15px] font-medium leading-[1.4] transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#1B665D] text-[#FFFFEB] shadow-xs"
                        : "bg-transparent text-[#FFFFEB]/85 hover:bg-[#1B665D]/40 hover:text-[#FFFFEB]"
                    }`}
                  >
                    {item.question}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Pane: Answer Conversation View */}
          <div className="md:col-span-6 p-5 md:p-8 flex flex-col justify-between h-auto md:h-[520px] overflow-y-auto">
            <div>
              <h3 className="font-garamond text-[22px] text-[#1A1A1A] mb-6">
                Answer
              </h3>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Right-aligned muted question prompt */}
                  <div className="flex justify-end mb-5">
                    <p className="text-right text-[14px] text-[#1A1A1A]/60 max-w-[310px] leading-[1.45]">
                      {currentFaq.question}
                    </p>
                  </div>

                  {/* Left-aligned cream speech bubble */}
                  <div className="bg-[#F4F4E6] rounded-[18px] p-5 md:p-6 text-[14px] md:text-[15px] text-[#1A1A1A]/90 leading-[1.58] shadow-2xs">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: currentFaq.answerHtml,
                      }}
                    />
                  </div>

                  {/* Wispr Flow circular avatar badge */}
                  <div className="mt-3 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#034F46] flex items-center justify-center shadow-xs">
                      <img
                        src="/assets/faq-wispr-logo.svg"
                        alt="Wispr Flow"
                        className="w-4 h-4 object-contain"
                      />
                    </div>
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

