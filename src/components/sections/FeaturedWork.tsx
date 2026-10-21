import Link from "next/link";
import { fishing, knowvia, rokketmed } from "@/content/site";
import { GameplayVideo } from "../GameplayVideo";
import { KnowviaChatDemo } from "../KnowviaChatDemo";
import { Reveal } from "../Reveal";
import { ExternalLink, FactList, Placeholder, PlayIcon, buttonStyles, linkStyles } from "../ui";

const tile = "overflow-hidden rounded-[28px] border border-line bg-tile";
const tileTitle = "font-bold leading-[1.05] tracking-[-0.035em]";

function KnowviaTile() {
  return (
    <Reveal
      as="article"
      id="knowvia"
      delayMs={100}
      aria-labelledby="knowvia-title"
      className={`${tile} px-[clamp(20px,5vw,64px)] pt-[clamp(36px,5vw,64px)]`}
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0 flex-[1_1_420px]">
          <FactList facts={knowvia.facts} />
          <h2 id="knowvia-title" className={`mt-[18px] text-[clamp(38px,5.4vw,64px)] ${tileTitle}`}>
            {knowvia.title}
          </h2>
          <p className="mt-3 max-w-[560px] text-[clamp(17px,2vw,21px)] leading-[1.45] text-ink-2">
            {knowvia.summary}
          </p>
        </div>
        <div className="flex flex-col items-start gap-1.5">
          <Link href={knowvia.caseStudyHref} className={buttonStyles.light}>
            Read the case study
          </Link>
          <ExternalLink href={knowvia.siteUrl} className={`${linkStyles} px-1 py-1.5 text-sm`}>
            knowviachat.com ↗
          </ExternalLink>
        </div>
      </div>
      <div className="mt-[clamp(32px,5vw,56px)] flex items-end justify-center gap-4">
        <div className="flex h-[360px] min-w-0 flex-[1_1_560px] flex-col overflow-hidden rounded-t-2xl border border-b-0 border-line-inset bg-inset max-sm:hidden">
          <div aria-hidden="true" className="flex h-9 items-center gap-1.5 border-b border-line-inset px-3.5">
            <span className="size-2.5 rounded-full bg-[#3a3a3c]" />
            <span className="size-2.5 rounded-full bg-[#3a3a3c]" />
            <span className="size-2.5 rounded-full bg-[#3a3a3c]" />
          </div>
          <Placeholder
            label="Dashboard screenshot @2x — leads & chat analytics, runs off the bottom"
            className="flex-1"
          />
        </div>
        <KnowviaChatDemo />
      </div>
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
      className={`${tile} flex flex-wrap`}
    >
      <div className="flex min-w-0 flex-[1_1_400px] flex-col justify-center px-[clamp(20px,5vw,56px)] py-[clamp(36px,5vw,64px)]">
        <FactList facts={rokketmed.facts} />
        <h2 id="rokketmed-title" className={`mt-[18px] text-[clamp(34px,4.4vw,52px)] ${tileTitle}`}>
          {rokketmed.title}
        </h2>
        <p className="mt-3 max-w-[460px] text-lg leading-normal text-ink-2">{rokketmed.summary}</p>
        <p className="mt-4 font-mono text-xs text-ink-3">{rokketmed.stack.join(" · ")}</p>
        <div className="mt-6">
          <ExternalLink href={rokketmed.siteUrl} className={buttonStyles.light}>
            Visit rokketmed.com ↗
          </ExternalLink>
        </div>
      </div>
      <Placeholder
        label="rokketmed.com in a browser frame, angled or cropped"
        className="min-h-[360px] min-w-0 flex-[1_1_480px] border-line bg-inset sm:border-l"
      />
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
