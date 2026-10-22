import Link from "next/link";
import { moreWork, type WorkCard } from "@/content/site";
import { ExternalLink } from "../ui";
import { sectionShell } from "./styles";

const cardBase =
  "flex items-center gap-4 rounded-[18px] border border-line bg-tile p-3.5 text-ink transition-colors";

// Each card gets a tinted tile and a line icon for its kind of project.
const icons: Record<WorkCard["icon"], { tile: string; paths: string[] }> = {
  // 3D art store
  cube: {
    tile: "bg-[#2a2119] text-[#f0b37e]",
    paths: ["M12 2.5 20.5 7v10L12 21.5 3.5 17V7z", "M3.5 7 12 11.5 20.5 7", "M12 11.5v10"],
  },
  // Favorite places
  pin: {
    tile: "bg-[#142824] text-[#6fd6c0]",
    paths: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 12.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4z"],
  },
  // Progress charts
  chart: {
    tile: "bg-[#16213a] text-[#7ab0ff]",
    paths: ["M4 20h16", "M7 17v-6", "M12 17V5", "M17 17V9"],
  },
};

function CardBody({ card }: { card: WorkCard }) {
  const icon = icons[card.icon];
  return (
    <>
      <div
        aria-hidden="true"
        className={`grid size-24 shrink-0 place-items-center rounded-xl ${icon.tile}`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon.paths.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
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
