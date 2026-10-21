import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ExternalLink, FactList, buttonStyles, linkStyles } from "@/components/ui";
import { knowvia } from "@/content/site";

export const metadata: Metadata = {
  title: "Knowvia Chat",
  description: knowvia.summary,
};

// Interim page until the full case study is designed; links here from the homepage must not 404.
export default function KnowviaCaseStudy() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1120px] px-5 py-[clamp(56px,9vw,112px)]">
        <Link href="/#knowvia" className={`${linkStyles} text-[15px]`}>
          ← Back to selected work
        </Link>
        <div className="mt-8">
          <FactList facts={knowvia.facts} />
        </div>
        <h1 className="mt-5 text-[clamp(40px,6vw,72px)] leading-[1.04] font-bold tracking-[-0.04em]">
          {knowvia.title}
        </h1>
        <p className="mt-4 max-w-[640px] text-[clamp(18px,2vw,21px)] leading-normal text-ink-2">
          {knowvia.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ExternalLink href={knowvia.siteUrl} className={buttonStyles.light}>
            Visit knowviachat.com ↗
          </ExternalLink>
          <ExternalLink href={knowvia.sourceUrl} className={buttonStyles.ghost}>
            API source ↗
          </ExternalLink>
        </div>

        <section aria-labelledby="stack-title" className="mt-20">
          <h2 id="stack-title" className="text-2xl font-semibold tracking-[-0.02em]">
            Stack
          </h2>
          <dl className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-8 gap-y-8">
            {Object.entries(knowvia.stack).map(([layer, tools]) => (
              <div key={layer} className="border-t border-rule pt-5">
                <dt className="text-lg font-semibold">{layer}</dt>
                <dd className="mt-2 text-base leading-[1.55] text-ink-3">{tools.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-20 border-t border-rule pt-6 text-ink-3">
          The full case study (architecture, key decisions and results) is being written.
        </p>
      </main>
      <Footer />
    </>
  );
}
