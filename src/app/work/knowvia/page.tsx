import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import knowviaAccount from "@/assets/projects/knowvia-account.jpg";
import knowviaCustomize from "@/assets/projects/knowvia-customize.jpg";
import knowviaDomains from "@/assets/projects/knowvia-domains.jpg";
import knowviaLeadDetail from "@/assets/projects/knowvia-lead-detail.jpg";
import knowviaLeads from "@/assets/projects/knowvia-leads.jpg";
import knowviaSite from "@/assets/projects/knowvia-site.jpg";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BrowserFrame, ExternalLink, FactList, buttonStyles, linkStyles } from "@/components/ui";
import {
  architecture,
  decisions,
  glance,
  liveDemoNote,
  lookingBack,
  problem,
  product,
  steps,
} from "@/content/knowvia-case-study";
import { fishing, knowvia, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Knowvia Chat case study",
  description: knowvia.summary,
};

const shell = "mx-auto max-w-[1120px] px-5";
const sectionHeading =
  "mt-3 max-w-[760px] text-[clamp(30px,4vw,44px)] leading-[1.1] font-bold tracking-[-0.03em]";
const lede = "mt-4 max-w-[760px] text-lg leading-[1.65] text-ink-2";
const card = "rounded-[20px] border border-line bg-tile";
const eyebrow = "font-mono text-xs text-ink-4";

function Section({
  id,
  number,
  label,
  title,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="pt-[clamp(72px,9vw,112px)]">
      <p className="font-mono text-[13px] text-kv-eyebrow">
        {number} · {label}
      </p>
      <h2 id={id} className={sectionHeading}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Screenshot({
  src,
  alt,
  caption,
  className = "",
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-line bg-inset">
        <Image
          src={src}
          alt={alt}
          sizes="(min-width: 1120px) 1080px, 100vw"
          className="h-auto w-full"
        />
      </div>
      {caption && <figcaption className="mt-3 text-sm text-ink-4">{caption}</figcaption>}
    </figure>
  );
}

function Hero() {
  return (
    <section aria-labelledby="case-title" className="tile-knowvia border-b">
      <div className={`${shell} pt-[clamp(32px,5vw,56px)]`}>
        <Link href="/#knowvia" className={`${linkStyles} text-[15px] text-kv-link`}>
          ← Back to selected work
        </Link>
        <div className="mt-8">
          <FactList facts={knowvia.facts} tone="knowvia" />
        </div>
        <h1
          id="case-title"
          className="mt-[18px] text-[clamp(44px,7vw,88px)] leading-[1.02] font-bold tracking-[-0.04em]"
        >
          {knowvia.title}
        </h1>
        <p className="mt-4 max-w-[720px] text-[clamp(19px,2.2vw,24px)] leading-[1.45] text-kv-ink">
          {knowvia.summary}
        </p>

        <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-x-8 gap-y-6 border-t border-kv-rule pt-6">
          {glance.map(({ label, value }) => (
            <div key={label}>
              <dt className="font-mono text-xs text-kv-label uppercase">{label}</dt>
              <dd className="mt-1.5 text-base leading-normal">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ExternalLink href={knowvia.siteUrl} className={buttonStyles.light}>
            Try it on knowviachat.com ↗
          </ExternalLink>
          <p className="max-w-[420px] text-sm leading-normal text-kv-label">{liveDemoNote}</p>
        </div>

        {/* Screenshot runs off the bottom of the band */}
        <BrowserFrame className="mt-[clamp(40px,6vw,64px)] h-[clamp(220px,38vw,520px)] rounded-t-2xl border border-b-0 border-white/10">
          <Image
            src={knowviaSite}
            alt="The knowviachat.com homepage"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1120px) 1080px, 100vw"
            className="object-cover object-top"
          />
        </BrowserFrame>
      </div>
    </section>
  );
}

function Problem() {
  const others = "p-6";
  return (
    <Section id="problem-title" number="01" label="THE PROBLEM" title={problem.heading}>
      <p className={`${lede} mt-5`}>{problem.intro}</p>
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-3">
        <div className={`${card} ${others}`}>
          <p className={eyebrow}>OTHERS</p>
          <h3 className="mt-2 text-[19px] font-semibold">{problem.others.supportOnly.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink-3">{problem.others.supportOnly.body}</p>
        </div>
        <div className="rounded-[20px] border border-kv-purple bg-kv-purple-bg p-6">
          <p className="font-mono text-xs text-kv-purple-ink">KNOWVIA</p>
          <h3 className="mt-2 text-[19px] font-semibold">{problem.knowvia.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-kv-ink">{problem.knowvia.body}</p>
        </div>
        <div className={`${card} ${others}`}>
          <p className={eyebrow}>OTHERS</p>
          <h3 className="mt-2 text-[19px] font-semibold">{problem.others.gated.title}</h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink-3">{problem.others.gated.body}</p>
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="how-title" number="02" label="HOW IT WORKS" title="Copy, paste, done.">
      <ol className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3">
        {steps.map((step, i) => (
          <li key={step.title} className={`${card} p-6`}>
            <div className="font-mono text-[13px] text-kv-eyebrow">{i + 1}</div>
            <h3 className="mt-2.5 text-[19px] font-semibold">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-[1.55] text-ink-3">{step.body}</p>
          </li>
        ))}
      </ol>
      <Screenshot
        src={knowviaCustomize}
        alt="Customize Chat page: a live chat preview beside theme options, including a URL field to auto-generate a theme"
        caption="Customize Chat: paste a URL to generate a theme from the site, check it in the live preview, then adjust anything by hand."
        className="mt-10"
      />
    </Section>
  );
}

function ArchNode({
  name,
  detail,
  accent = false,
}: {
  name: string;
  detail: string[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        accent ? "border-kv-purple bg-kv-purple-bg" : "border-kv-line bg-kv-node"
      }`}
    >
      <div className="text-[17px] font-semibold">{name}</div>
      <div
        className={`mt-2 font-mono text-xs leading-[1.7] ${accent ? "text-kv-purple-ink" : "text-kv-label"}`}
      >
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
        <span aria-hidden="true" className="text-lg text-kv-eyebrow">
          ⇄
        </span>
        <span>{label[1]}</span>
      </div>
      <div className="flex justify-center py-2.5 font-mono text-[11px] text-ink-4 md:hidden">
        <span aria-hidden="true" className="mr-1.5 text-kv-eyebrow">
          ⇅
        </span>
        {label.join(" · ")}
      </div>
    </>
  );
}

function Chips({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-xs text-ink-4">{label}</span>
      {items.map((item) => (
        <span
          key={item}
          className="whitespace-nowrap rounded-full border border-rule px-[11px] py-[5px] font-mono text-xs text-ink-2"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Architecture() {
  return (
    <Section id="arch-title" number="03" label="ARCHITECTURE" title="Four repos, one contract.">
      <p className={lede}>{architecture.intro}</p>
      <div className="mt-10 rounded-3xl border border-line bg-inset p-[clamp(20px,4vw,40px)]">
        <div
          role="group"
          aria-label="Architecture: the widget and the dashboard both talk to the API"
          className="grid grid-cols-1 items-center md:grid-cols-[minmax(0,1fr)_112px_minmax(0,1fr)_112px_minmax(0,1fr)]"
        >
          <ArchNode {...architecture.widget} />
          <ArchLink label={architecture.widgetLink} />
          <ArchNode {...architecture.api} accent />
          <ArchLink label={architecture.dashboardLink} />
          <ArchNode {...architecture.dashboard} />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-[14px] border border-dashed border-kv-purple px-[18px] py-3.5">
          <span className="font-semibold">{architecture.sharedTypes.name}</span>
          <span className="font-mono text-xs text-kv-purple-ink">{architecture.sharedTypes.detail}</span>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <Chips label="API ALSO TALKS TO" items={architecture.services} />
          <Chips label="SHIPS VIA" items={[architecture.shipping]} />
        </div>
      </div>
    </Section>
  );
}

function KeyDecisions() {
  return (
    <Section id="decisions-title" number="04" label="KEY DECISIONS" title="The calls that shaped it.">
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-3">
        {decisions.map((d) => (
          <article key={d.title} className={`${card} p-7`}>
            <h3 className="text-xl font-semibold">{d.title}</h3>
            <dl className="mt-4 grid gap-3 text-[15px] leading-[1.55]">
              {(
                [
                  ["PROBLEM", d.problem],
                  ["DECISION", d.decision],
                  ["WHY", d.why],
                ] as const
              ).map(([term, text]) => (
                <div key={term}>
                  <dt className={eyebrow}>{term}</dt>
                  <dd className="mt-1 text-ink-2">{text}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <Screenshot
        src={knowviaDomains}
        alt="Install page, step 1: Domain Security, with an allowed-domains list and a dev mode toggle for localhost and preview links"
        caption="Before handing over the script tag, the install page asks which domains the key may run on."
        className="mt-6"
      />
    </Section>
  );
}

function GalleryShot({ src, alt, caption }: { src: StaticImageData; alt: string; caption: string }) {
  return (
    <figure>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1120px) 540px, (min-width: 960px) 50vw, 100vw"
          className="object-cover object-top-left"
        />
      </div>
      <figcaption className="mt-2.5 text-sm text-ink-4">{caption}</figcaption>
    </figure>
  );
}

function Product() {
  return (
    <Section id="product-title" number="05" label="THE PRODUCT" title="Built for the owner, too.">
      <p className={lede}>{product.intro}</p>
      <figure className="mt-8">
        <div className="max-h-[640px] overflow-hidden rounded-2xl border border-line bg-inset">
          <Image
            src={knowviaLeadDetail}
            alt="Lead details view with contact info, an AI-written lead summary and a hot temperature"
            sizes="(min-width: 1120px) 1080px, 100vw"
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-sm text-ink-4">
          Every lead arrives with an AI-written summary of what the visitor wants, so the owner can
          act in seconds instead of reading a transcript.
        </figcaption>
      </figure>
      <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-3">
        <GalleryShot
          src={knowviaLeads}
          alt="Leads page with totals and a table of leads by status and temperature"
          caption="Leads, filterable by status and temperature."
        />
        <GalleryShot
          src={knowviaAccount}
          alt="Account overview with usage and quick links to analytics, chat customization, knowledge base and leads"
          caption="Account hub: analytics, chat customization, knowledge base and leads."
        />
      </div>
    </Section>
  );
}

function LookingBack() {
  const { rag, lesson } = lookingBack;
  const body = "mt-3 text-[15px] leading-[1.6] text-ink-2";
  return (
    <Section
      id="looking-back-title"
      number="06"
      label="LOOKING BACK"
      title="What was next, and what I’d change."
    >
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] gap-3">
        <article className={`${card} p-7`}>
          <p className={`${eyebrow} uppercase`}>{rag.eyebrow}</p>
          <h3 className="mt-2 text-xl font-semibold">{rag.title}</h3>
          <p className={body}>{rag.intro}</p>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-[15px] leading-[1.55] text-ink-2">
            {rag.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <article className={`${card} p-7`}>
          <p className={`${eyebrow} uppercase`}>{lesson.eyebrow}</p>
          <h3 className="mt-2 text-xl font-semibold">{lesson.title}</h3>
          {lesson.paragraphs.map((p) => (
            <p key={p} className={body}>
              {p}
            </p>
          ))}
        </article>
      </div>
    </Section>
  );
}

function NextUp() {
  return (
    <section aria-label="What's next" className="py-[clamp(80px,10vw,128px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-3">
        <Link
          href="/#fishing"
          className="block rounded-3xl border border-lake-line bg-lake p-8 text-ink transition-colors hover:border-[#2c5670] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <p className="font-mono text-xs text-[#9fc0d4]">NEXT PROJECT</p>
          <p className="mt-2.5 text-[28px] font-bold tracking-[-0.03em]">{fishing.title} →</p>
          <p className="mt-1.5 text-[15px] text-lake-ink">Real-time multiplayer 3D in the browser.</p>
        </Link>
        <div className="rounded-3xl border border-line bg-tile p-8">
          <p className="text-[28px] font-bold tracking-[-0.03em]">Building something like this?</p>
          <p className="mt-1.5 text-[15px] text-ink-3">
            I’m open to senior roles and select freelance projects.
          </p>
          <a href={`mailto:${site.email}`} className={`${buttonStyles.primary} mt-[18px]`}>
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}

export default function KnowviaCaseStudy() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className={shell}>
          <Problem />
          <HowItWorks />
          <Architecture />
          <KeyDecisions />
          <Product />
          <LookingBack />
          <NextUp />
        </div>
      </main>
      <Footer />
    </>
  );
}
