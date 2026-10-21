import Link from "next/link";
import { moreWork, type WorkCard } from "@/content/site";
import { ExternalLink } from "../ui";
import { sectionShell } from "./styles";

const cardBase =
  "flex items-center gap-4 rounded-[18px] border border-line bg-tile p-3.5 text-ink transition-colors";

function CardBody({ card }: { card: WorkCard }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="grid size-24 shrink-0 place-items-center rounded-xl bg-inset text-[11px] text-ink-4"
      >
        [ {card.thumbLabel} ]
      </div>
      <div className="min-w-0">
        <p className="text-[17px] font-semibold">{card.title}</p>
        <p className="mt-1 text-sm leading-[1.45] text-ink-3">{card.blurb}</p>
      </div>
    </>
  );
}

export function MoreWork() {
  return (
    <section aria-labelledby="more-title" className={sectionShell}>
      <h2 id="more-title" className="text-[clamp(28px,3.4vw,40px)] font-bold tracking-[-0.03em]">
        More work
      </h2>
      <ul className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3">
        {moreWork.map((card) => (
          <li key={card.title}>
            {card.href ? (
              <ExternalLink
                href={card.href}
                className={`${cardBase} hover:border-[#4a4b52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
              >
                <CardBody card={card} />
              </ExternalLink>
            ) : (
              <div className={cardBase}>
                <CardBody card={card} />
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link
        href="/archive"
        className="mt-3 flex min-h-14 items-center justify-between gap-4 rounded-[14px] border border-line px-4 text-[15px] text-ink transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span>
          Archive <span className="text-ink-3">· earlier learning projects</span>
        </span>
        <span aria-hidden="true" className="text-accent">
          →
        </span>
      </Link>
    </section>
  );
}
