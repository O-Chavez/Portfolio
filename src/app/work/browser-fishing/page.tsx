import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import fishingDock from "@/assets/projects/fishing-dock.jpg";
import fishingFish from "@/assets/projects/fishing-fish.jpg";
import fishingNight from "@/assets/projects/fishing-night.jpg";
import fishingReel from "@/assets/projects/fishing-reel.jpg";
import fishingWardrobe from "@/assets/projects/fishing-wardrobe.jpg";
import {
  CaseSection,
  NextUp,
  Screenshot,
  caseCard,
  caseLede,
  caseShell,
} from "@/components/CaseStudy";
import { Footer } from "@/components/Footer";
import { GameplayVideo } from "@/components/GameplayVideo";
import { Nav } from "@/components/Nav";
import { ExternalLink, FactList, PlayIcon, buttonStyles, linkStyles } from "@/components/ui";
import { architecture, decisions, glance } from "@/content/fishing-case-study";
import { fishing, knowvia } from "@/content/site";

export const metadata: Metadata = {
  title: "Browser Fishing case study",
  description: fishing.summary,
};

function Section(props: Omit<ComponentProps<typeof CaseSection>, "accent">) {
  return <CaseSection accent="text-lake-eyebrow" {...props} />;
}

function Hero() {
  return (
    <section aria-labelledby="case-title" className="border-b border-lake-line bg-lake">
      <div className={`${caseShell} pt-[clamp(32px,5vw,56px)]`}>
        <Link href="/#fishing" className={`${linkStyles} text-[15px] text-lake-link`}>
          ← Back to selected work
        </Link>
        <div className="mt-8">
          <FactList facts={fishing.facts} tone="lake" />
        </div>
        <h1
          id="case-title"
          className="mt-[18px] text-[clamp(44px,7vw,88px)] leading-[1.02] font-bold tracking-[-0.04em]"
        >
          {fishing.title}
        </h1>
        <p className="mt-4 max-w-[720px] text-[clamp(19px,2.2vw,24px)] leading-[1.45] text-lake-ink">
          {fishing.summary}
        </p>

        <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-8 gap-y-6 border-t border-lake-line pt-6">
          {glance.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-mono text-xs text-lake-label uppercase">{label}</dt>
              <dd className="mt-1.5 text-base leading-normal">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <ExternalLink href={fishing.playUrl} className={buttonStyles.light}>
            <PlayIcon />
            Play now
          </ExternalLink>
          <ExternalLink href={fishing.sourceUrl} className={buttonStyles.ghost}>
            Source on GitHub ↗
          </ExternalLink>
        </div>

        {/* Gameplay runs off the bottom of the band */}
        <div className="relative mt-[clamp(40px,6vw,64px)] aspect-video overflow-hidden rounded-t-2xl border border-b-0 border-white/10 bg-[#08141c]">
          <GameplayVideo {...fishing.video} />
        </div>
      </div>
    </section>
  );
}

function ArchNode({ name, detail, accent = false }: { name: string; detail: string[]; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${accent ? "border-lake-eyebrow bg-[#0b2230]" : "border-lake-line bg-lake"}`}
    >
      <div className="text-[17px] font-semibold">{name}</div>
      <div className="mt-2 font-mono text-xs leading-[1.7] text-lake-label">
        {detail.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}

/** Connector between nodes: labelled arrow across on wide screens, down on narrow ones. */
function ArchLink({ label }: { label: string[] }) {
  return (
    <>
      <div className="hidden flex-col items-center gap-1 text-center font-mono text-[11px] text-ink-4 md:flex">
        <span>{label[0]}</span>
        <span aria-hidden="true" className="text-lg text-lake-eyebrow">
          ⇄
        </span>
        <span>{label[1]}</span>
      </div>
      <div className="flex justify-center py-2.5 font-mono text-[11px] text-ink-4 md:hidden">
        <span aria-hidden="true" className="mr-1.5 text-lake-eyebrow">
          ⇅
        </span>
        {label.join(" · ")}
      </div>
    </>
  );
}

function Architecture() {
  return (
    <Section id="arch-title" number="01" label="HOW IT’S BUILT" title={architecture.heading}>
      <p className={caseLede}>{architecture.intro}</p>
      <div className="mt-10 rounded-3xl border border-line bg-inset p-[clamp(20px,4vw,40px)]">
        <div
          role="group"
          aria-label="Architecture: the browser client talks to the game server, which saves to storage"
          className="grid grid-cols-1 items-center md:grid-cols-[minmax(0,1fr)_112px_minmax(0,1fr)_112px_minmax(0,1fr)]"
        >
          <ArchNode {...architecture.client} />
          <ArchLink label={architecture.clientLink} />
          <ArchNode {...architecture.server} accent />
          <ArchLink label={architecture.storageLink} />
          <ArchNode {...architecture.storage} />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-[14px] border border-dashed border-lake-eyebrow px-[18px] py-3.5">
          <span className="font-semibold">{architecture.shared.name}</span>
          <span className="font-mono text-xs text-lake-label">{architecture.shared.detail}</span>
        </div>
        <p className="mt-6 text-[15px] leading-[1.6] text-ink-3">{architecture.network}</p>
        <p className="mt-3 font-mono text-xs text-ink-4">SHIPS VIA · {architecture.shipping}</p>
      </div>
    </Section>
  );
}

function KeyDecisions() {
  return (
    <Section id="decisions-title" number="02" label="KEY DECISIONS" title="The calls that shaped it.">
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-3">
        {decisions.map((d) => (
          <article key={d.title} className={`${caseCard} p-7`}>
            <h3 className="text-xl font-semibold">{d.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-ink-2">{d.body}</p>
          </article>
        ))}
      </div>
      <Screenshot
        src={fishingFish}
        alt="One fish from each tier: Common Carp, Rainbow Trout, Golden Koi, Sapphire Dorado and Aurora Pike"
        caption="One fish from each tier, every one built from primitives in code."
        className="mt-6"
      />
    </Section>
  );
}

function GalleryShot({ src, alt, caption }: { src: StaticImageData; alt: string; caption: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line">
        <Image
          src={src}
          alt={alt}
          sizes="(min-width: 1120px) 540px, (min-width: 960px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-2.5 text-sm text-ink-4">{caption}</figcaption>
    </figure>
  );
}

function Gallery() {
  return (
    <Section id="game-title" number="03" label="THE GAME" title="One shared lake.">
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-x-3 gap-y-6">
        <GalleryShot
          src={fishingReel}
          alt="Reeling in a fish from the end of the pier: the rod is bent and the tension ring warns “Let go!”"
          caption="Every catch is a fight: reel in, ease off when the fish surges, and keep the line from snapping."
        />
        <GalleryShot
          src={fishingDock}
          alt="Two players in hats chatting on the end of the pier at sunset, one with a speech bubble above their head"
          caption="Other players walk the docks in real time, with chat bubbles over their heads."
        />
        <GalleryShot
          src={fishingNight}
          alt="The town square at night, lit by street lamps and string lights"
          caption="A day/night cycle brings out night-only fish and rare shiny variants."
        />
        <GalleryShot
          src={fishingWardrobe}
          alt="The wardrobe, with a player in a crown and cloak and the hats and shirts to choose from"
          caption="25 hats, shirts and pieces of jewellery, all earned in game."
        />
      </div>
    </Section>
  );
}

function NextProject() {
  return (
    <Link
      href={knowvia.caseStudyHref}
      className="tile-knowvia block rounded-3xl border p-8 text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <p className="font-mono text-xs text-kv-label">NEXT PROJECT</p>
      <p className="mt-2.5 text-[28px] font-bold tracking-[-0.03em]">{knowvia.title} →</p>
      <p className="mt-1.5 text-[15px] text-kv-ink">An AI product expert for SaaS teams.</p>
    </Link>
  );
}

export default function BrowserFishingCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className={caseShell}>
          <Architecture />
          <KeyDecisions />
          <Gallery />
          <NextUp next={<NextProject />} />
        </div>
      </main>
      <Footer />
    </>
  );
}
