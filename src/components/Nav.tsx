"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ExternalLink } from "./ui";

const navLink =
  "rounded-sm text-ink-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-bg"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-5"
      >
        <Link href="/" className="flex items-center gap-2.5 rounded-sm text-ink">
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-lg bg-ink text-xs font-bold tracking-[0.02em] text-[#111113]"
          >
            {site.initials}
          </span>
          <span className="text-[15px] font-semibold">{site.name}</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/#work" className={navLink}>
            Work
          </Link>
          <Link href="/#experience" className={`${navLink} max-sm:hidden`}>
            Experience
          </Link>
          <ExternalLink href={site.resumeUrl} className={navLink}>
            Résumé
          </ExternalLink>
          <Link href="/#contact" className={`${navLink} max-sm:hidden`}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
