"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "section" | "li";
  delayMs?: number;
};

/**
 * Fades its content up the first time it scrolls into view.
 * The hidden state lives in CSS (globals.css) so no-JS and reduced-motion visitors always see content.
 */
export function Reveal({ as: Tag = "div", delayMs = 0, className = "", style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delayMs}ms`, ...style }}
      {...rest}
    />
  );
}
