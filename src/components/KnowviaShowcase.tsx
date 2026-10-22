"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// When each beat of the demo appears; FINAL shows everything.
// 1 greeting · 2 question · 3 typing · 4 answer · 5 visitor shares email · 6 owner gets the lead
const STEP_TIMES_MS = [500, 1400, 2200, 3500, 4600, 5700];
const FINAL = STEP_TIMES_MS.length;

// Colors match the live Knowvia widget (Tailwind slate + blue).
const bubble = "demo-step animate-pop max-w-[85%] px-3 py-[9px]";
const incoming = `${bubble} self-start rounded-[14px_14px_14px_4px] bg-[#334155] text-[#f1f5f9]`;
const outgoing = `${bubble} self-end rounded-[14px_14px_4px_14px] bg-[#3b82f6] text-white`;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * The Knowvia story in one loop: a visitor chats in the widget (right) and the business owner
 * gets a scored lead on their dashboard (`dashboard`, left). Plays once when scrolled into view.
 */
export function KnowviaShowcase({ dashboard }: { dashboard: ReactNode }) {
  // Server render shows the finished state; CSS hides the steps until playback starts (globals.css),
  // so no-JS and reduced-motion visitors still see everything.
  const [step, setStep] = useState(FINAL);
  const [played, setPlayed] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    setPlayed(true);
    if (prefersReducedMotion()) {
      setStep(FINAL);
      return;
    }
    setStep(0);
    timers.current = STEP_TIMES_MS.map((ms, i) => setTimeout(() => setStep(i + 1), ms));
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [play]);

  return (
    <div
      ref={rootRef}
      className="chat-demo relative mt-[clamp(32px,5vw,56px)] flex items-end justify-center gap-4 max-sm:flex-col max-sm:items-stretch"
      data-played={played ? "" : undefined}
    >
      {dashboard}

      {/* Owner's side: overlays the dashboard on larger screens, sits above the widget on phones */}
      <div className="max-sm:min-h-[88px] sm:absolute sm:top-14 sm:left-6 sm:w-[300px]">
        {step >= 6 && <LeadToast />}
      </div>

      <div className="flex h-[360px] w-full min-w-[260px] flex-col overflow-hidden rounded-t-[18px] border border-b-0 border-[#334155] bg-[#1e293b] text-[#f1f5f9] shadow-[0_-12px_48px_rgba(0,0,0,0.5)] sm:w-[300px] sm:shrink-0">
        <div className="flex items-center justify-between bg-[#0f172a] px-4 py-2.5">
          <span className="text-[13px] font-semibold">
            Know<span className="font-normal italic">via</span> Chat
          </span>
          <button
            type="button"
            onClick={play}
            aria-label="Replay example conversation"
            className="min-h-8 min-w-11 cursor-pointer rounded-full bg-white/10 px-2.5 text-xs font-medium text-[#cbd5e1] hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]"
          >
            Replay
          </button>
        </div>
        <div
          className="flex flex-1 flex-col justify-end gap-2.5 overflow-hidden p-3.5 text-[13px] leading-[1.4]"
          aria-label="Example Knowvia conversation"
        >
          {step >= 1 && (
            <p className={incoming}>Hi! I answer from this site&apos;s docs. What can I help you find?</p>
          )}
          {step >= 2 && <p className={outgoing}>Which plan fits a growing SaaS team?</p>}
          {step === 3 && (
            <div
              className="demo-step flex gap-1 self-start rounded-[14px_14px_14px_4px] bg-[#334155] px-3.5 py-[11px]"
              aria-label="Assistant is typing"
            >
              {[0, 150, 300].map((delay) => (
                <span
                  key={delay}
                  className="typing-dot size-1.5 rounded-full bg-[#94a3b8]"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </div>
          )}
          {step >= 4 && (
            <p className={incoming}>Growth is built for that. Want me to send you the details?</p>
          )}
          {step >= 5 && <p className={outgoing}>Yes please! sam@example.com</p>}
        </div>
        <div aria-hidden="true" className="flex items-center gap-2 bg-[#0f172a] px-3 py-2.5">
          <span className="flex h-8 flex-1 items-center rounded-full bg-[#334155] px-3 text-xs text-[#94a3b8]">
            Type a message…
          </span>
          <span className="flex h-8 items-center rounded-full bg-[#3b82f6] px-3 text-xs font-medium text-white">
            Send
          </span>
        </div>
      </div>
    </div>
  );
}

/** What the business owner sees when the conversation turns into a lead. */
function LeadToast() {
  return (
    <div className="demo-step animate-pop rounded-2xl border border-[#334155] bg-[#1e293b]/95 p-3.5 text-[#f1f5f9] shadow-[0_16px_48px_rgba(0,0,0,0.55)] backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[13px] font-semibold">New lead captured</p>
        <span className="rounded-full bg-[#f59e0b]/15 px-2 py-0.5 text-[11px] font-semibold text-[#fbbf24]">
          Warm
        </span>
      </div>
      <p className="mt-1.5 text-xs leading-normal text-[#cbd5e1]">
        Sam runs a growing SaaS team and asked for Growth plan details.
      </p>
      <p className="mt-2 font-mono text-[11px] text-[#94a3b8]">AI summary emailed to you</p>
    </div>
  );
}
