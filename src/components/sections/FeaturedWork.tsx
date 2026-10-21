import Image from "next/image";
import Link from "next/link";
import knowviaLeads from "@/assets/projects/knowvia-leads.jpg";
import rokketmedSite from "@/assets/projects/rokketmed-site.jpg";
import { fishing, knowvia, rokketmed } from "@/content/site";
import { GameplayVideo } from "../GameplayVideo";
import { KnowviaShowcase } from "../KnowviaShowcase";
import { Reveal } from "../Reveal";
import { BrowserFrame, ExternalLink, FactList, PlayIcon, buttonStyles } from "../ui";

const tile = "overflow-hidden rounded-[28px] border";
const tileTitle = "font-bold leading-[1.05] tracking-[-0.035em]";

function KnowviaTile() {
  return (
    <Reveal
      as="article"
      id="knowvia"
      delayMs={100}
      aria-labelledby="knowvia-title"
      className={`${tile} tile-knowvia px-[clamp(20px,5vw,64px)] pt-[clamp(36px,5vw,64px)]`}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0 flex-[1_1_420px]">
          <FactList facts={knowvia.facts} tone="knowvia" />
          <h2 id="knowvia-title" className={`mt-[18px] text-[clamp(38px,5.4vw,64px)] ${tileTitle}`}>
            {knowvia.title}
          </h2>
          <p className="mt-3 max-w-[560px] text-[clamp(17px,2vw,21px)] leading-[1.45] text-[#d4d8f0]">
            {knowvia.summary}
          </p>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <Link href={knowvia.caseStudyHref} className={buttonStyles.light}>
            Read the case study
          </Link>
          <ExternalLink
            href={knowvia.siteUrl}
            className="rounded-sm px-1 py-1.5 text-sm text-[#93b4ff] hover:text-white hover:underline"
          >
            knowviachat.com ↗
          </ExternalLink>
        </div>
      </div>
      <KnowviaShowcase
        dashboard={
          <BrowserFrame className="h-[360px] min-w-0 flex-[1_1_560px] rounded-t-2xl border border-b-0 border-white/10 max-sm:hidden">
            <Image
              src={knowviaLeads}
              alt="Knowvia dashboard: lead totals and a table of leads scored by temperature"
              fill
              sizes="(min-width: 1240px) 760px, 60vw"
              className="object-cover object-top-left"
            />
          </BrowserFrame>
        }
      />
    </Reveal>
  );
}

function RokketMedTile() {
  return (
    <Reveal
      as="article"
      id="rokketmed"
      delayMs={150}
      aria-labelledby="rokketmed-title"
      className={`${tile} tile-rokketmed flex flex-wrap`}
    >
      <div className="flex min-w-0 flex-[1_1_400px] flex-col justify-center px-[clamp(20px,5vw,56px)] py-[clamp(36px,5vw,64px)]">
        <FactList facts={rokketmed.facts} tone="rokketmed" />
        <h2 id="rokketmed-title" className={`mt-[18px] text-[clamp(34px,4.4vw,52px)] ${tileTitle}`}>
          {rokketmed.title}
        </h2>
        <p className="mt-3 max-w-[460px] text-lg leading-normal text-[#d3dbe8]">{rokketmed.summary}</p>
        <p className="mt-4 font-mono text-xs text-[#a9b6cb]">{rokketmed.stack.join(" · ")}</p>
        <div className="mt-6">
          <ExternalLink href={rokketmed.siteUrl} className={buttonStyles.light}>
            Visit rokketmed.com ↗
          </ExternalLink>
        </div>
      </div>
      {/* Screenshot bleeds off the tile's right and bottom edges */}
      <div className="flex min-w-0 flex-[1_1_480px] items-end pt-[clamp(24px,4vw,56px)] pl-[clamp(20px,4vw,56px)]">
        <BrowserFrame
          theme="light"
          className="h-[clamp(260px,30vw,400px)] w-full rounded-tl-2xl border-t border-l border-white/15"
        >
          <Image
            src={rokketmedSite}
            alt="The rokketmed.com homepage"
            fill
            sizes="(min-width: 1240px) 600px, (min-width: 900px) 50vw, 95vw"
            className="object-cover object-left-top"
          />
        </BrowserFrame>
      </div>
    </Reveal>
  );
}

function FishingTile() {
  return (
    <Reveal
      as="article"
      id="fishing"
      delayMs={200}
      aria-labelledby="fishing-title"
      className="relative flex flex-col justify-end overflow-hidden rounded-[28px] border border-lake-line bg-lake sm:min-h-[clamp(460px,52vw,640px)]"
    >
      {/* Phones: video stacks above the text at 16:9. Larger screens: full-bleed with the text overlaid. */}
      <div className="relative aspect-video sm:absolute sm:inset-0 sm:aspect-auto">
        <GameplayVideo {...fishing.video} />
      </div>
      <div className="relative flex flex-wrap items-end justify-between gap-5 bg-[#08141c] px-[clamp(20px,5vw,56px)] py-[clamp(24px,4vw,40px)] sm:bg-[rgba(8,20,28,0.78)]">
        <div className="min-w-0 flex-[1_1_380px]">
          <FactList facts={fishing.facts} tone="lake" />
          <h2 id="fishing-title" className={`mt-4 text-[clamp(34px,4.4vw,52px)] ${tileTitle}`}>
            {fishing.title}
          </h2>
          <p className="mt-2.5 max-w-[520px] text-lg leading-normal text-lake-ink">{fishing.summary}</p>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <ExternalLink href={fishing.playUrl} className={buttonStyles.light}>
            <PlayIcon />
            Play now
          </ExternalLink>
          <ExternalLink
            href={fishing.sourceUrl}
            className="rounded-sm px-1 py-1.5 text-sm text-[#9cc8ff] hover:text-white hover:underline"
          >
            How it&apos;s built ↗
          </ExternalLink>
        </div>
      </div>
    </Reveal>
  );
}

export function FeaturedWork() {
  return (
    <section
      id="work"
      aria-label="Featured work"
      className="mx-auto flex max-w-[1240px] flex-col gap-3 px-3"
    >
      <KnowviaTile />
      <RokketMedTile />
      <FishingTile />
    </section>
  );
}
