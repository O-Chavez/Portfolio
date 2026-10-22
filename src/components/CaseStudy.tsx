import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { buttonStyles } from "./ui";

// Building blocks shared by the /work case study pages.

export const caseShell = "mx-auto max-w-[1120px] px-5";
export const caseLede = "mt-4 max-w-[760px] text-lg leading-[1.65] text-ink-2";
export const caseCard = "rounded-[20px] border border-line bg-tile";
export const caseEyebrow = "font-mono text-xs text-ink-4";

/** Numbered section with a mono eyebrow in the project's accent color. */
export function CaseSection({
  id,
  number,
  label,
  title,
  accent,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  /** Text color class for the eyebrow, e.g. "text-kv-eyebrow". */
  accent: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="pt-[clamp(72px,9vw,112px)]">
      <p className={`font-mono text-[13px] ${accent}`}>
        {number} · {label}
      </p>
      <h2
        id={id}
        className="mt-3 max-w-[760px] text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-[-0.03em]"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export function Screenshot({
  src,
  alt,
  caption,
  sizes = "(min-width: 1120px) 1080px, 100vw",
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-line bg-inset">
        <Image src={src} alt={alt} sizes={sizes} className="h-auto w-full" />
      </div>
      {caption && <figcaption className="mt-3 text-sm text-ink-4">{caption}</figcaption>}
    </figure>
  );
}

export function ContactCard() {
  return (
    <div className="rounded-3xl border border-line bg-tile p-8">
      <p className="text-[28px] font-bold tracking-[-0.03em]">Building something like this?</p>
      <p className="mt-1.5 text-[15px] text-ink-3">
        I’m open to senior roles and select freelance projects.
      </p>
      <a href={`mailto:${site.email}`} className={`${buttonStyles.primary} mt-[18px]`}>
        Email me
      </a>
    </div>
  );
}

/** Closing row: a link to the next case study beside the contact card. */
export function NextUp({ next }: { next: ReactNode }) {
  return (
    <section aria-label="What's next" className="py-[clamp(80px,10vw,128px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-3">
        {next}
        <ContactCard />
      </div>
    </section>
  );
}
