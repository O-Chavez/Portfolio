"use client";

import { useEffect, useRef } from "react";
import { Placeholder } from "./ui";

type Props = { mp4: string; webm: string; poster: string };

/** Muted gameplay loop that only loads and plays while on screen. Falls back to a placeholder until assets exist. */
export function GameplayVideo({ mp4, webm, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(mp4 || webm);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (!hasVideo) {
    return (
      <Placeholder
        label="Full-bleed gameplay loop · 6–8s · muted, plays in view"
        className="absolute inset-0 text-[#9fc0d4]"
      />
    );
  }

  return (
    <video
      ref={ref}
      className="absolute inset-0 size-full object-cover"
      muted
      loop
      playsInline
      preload="none"
      poster={poster || undefined}
      aria-label="Browser Fishing gameplay: casting and reeling in a fish"
    >
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
    </video>
  );
}
