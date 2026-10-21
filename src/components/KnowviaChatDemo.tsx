"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Step at which each part of the conversation appears; FINAL shows everything.
const STEP_TIMES_MS = [500, 1400, 2200, 3500, 4300];
const FINAL = STEP_TIMES_MS.length;

// Colors match the live Knowvia widget (Tailwind slate + blue).
const bubble = "animate-pop max-w-[85%] px-3 py-[9px]";
const incoming = `${bubble} self-start rounded-[14px_14px_14px_4px] bg-[#334155] text-[#f1f5f9]`;
const outgoing = `${bubble} self-end rounded-[14px_14px_4px_14px] bg-[#3b82f6] text-white`;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** A replica of the Knowvia widget that plays a short conversation when scrolled into view. */
export function KnowviaChatDemo() {
  // Server render shows the finished conversation; CSS hides it until it plays (see globals.css),
  // so no-JS and reduced-motion visitors still see it without a flash for everyone else.
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
      { threshold: 0.5 },
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
      className="flex h-[360px] w-full min-w-[260px] flex-col overflow-hidden rounded-t-[18px] border border-b-0 border-[#334155] bg-[#1e293b] text-[#f1f5f9] shadow-[0_-12px_48px_rgba(0,0,0,0.5)] sm:w-[300px] sm:shrink-0"
    >
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
        className="chat-demo flex flex-1 flex-col gap-2.5 p-3.5 text-[13px] leading-[1.4]"
        data-played={played ? "" : undefined}
        aria-label="Example Knowvia conversation"
      >
        {step >= 1 && <p className={incoming}>Hi! I&apos;m trained on this site&apos;s docs. What can I help you find?</p>}
        {step >= 2 && <p className={outgoing}>Which plan fits a team of five?</p>}
        {step === 3 && (
          <div
            className="flex gap-1 self-start rounded-[14px_14px_14px_4px] bg-[#334155] px-3.5 py-[11px]"
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
          <p className={incoming}>
            Based on your docs, the Team plan is the best fit. Want me to send the details?
          </p>
        )}
        {step >= 5 && (
          <p className="animate-pop mt-auto self-center rounded-full bg-[#f59e0b]/15 px-3 py-[5px] text-xs font-semibold text-[#fbbf24]">
            Lead captured · Warm
          </p>
        )}
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
  );
}
