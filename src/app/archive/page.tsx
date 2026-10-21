import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ExternalLink, linkStyles } from "@/components/ui";
import { archive } from "@/content/site";

export const metadata: Metadata = {
  title: "Archive",
  description: "Earlier learning projects by Oscar Chavez.",
};

export default function ArchivePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1120px] px-5 py-[clamp(56px,9vw,112px)]">
        <Link href="/" className={`${linkStyles} text-[15px]`}>
          ← Back to selected work
        </Link>
        <h1 className="mt-6 text-[clamp(38px,5.6vw,68px)] leading-[1.04] font-bold tracking-[-0.04em]">
          Archive
        </h1>
        <p className="mt-4 max-w-[560px] text-lg leading-normal text-ink-3">
          Earlier projects from when I was learning the craft. Kept here for the record.
        </p>
        <ul className="mt-12 border-b border-rule">
          {archive.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2 border-t border-rule py-6"
            >
              <div className="min-w-0 flex-[1_1_420px]">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-1.5 text-base leading-normal text-ink-2">{item.blurb}</p>
                <p className="mt-2 font-mono text-xs text-ink-3">{item.stack.join(" · ")}</p>
              </div>
              {item.href && (
                <ExternalLink href={item.href} className={`${linkStyles} text-[15px]`}>
                  Source ↗
                </ExternalLink>
              )}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
