import { site } from "@/content/site";
import { ExternalLink, linkStyles } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-[13px] text-ink-3">
        <span>
          © {site.copyrightYear} {site.name} · {site.location}
        </span>
        <span>
          Built with Next.js ·{" "}
          <ExternalLink href={site.sourceRepo} className={linkStyles}>
            View source ↗
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
}
