import type { ComponentProps, ReactNode } from "react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const buttonBase = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-[22px] text-base font-medium no-underline transition-colors ${focusRing}`;

export const buttonStyles = {
  primary: `${buttonBase} bg-button text-white hover:bg-button-hover`,
  light: `${buttonBase} bg-ink text-[#111113] hover:bg-white`,
  ghost: `${buttonBase} border border-[#48484e] text-ink hover:border-ink-4 hover:text-white`,
};

export const linkStyles = `text-accent hover:text-accent-hover hover:underline ${focusRing} rounded-sm`;

/** Opens off-site links in a new tab without leaking the opener. */
export function ExternalLink(props: ComponentProps<"a">) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

// Fact chips pick up each project's brand tint.
const factTones = {
  default: "border-rule text-ink-2",
  lake: "border-[#3b5566] text-lake-ink",
  knowvia: "border-[#3a4275] text-[#c7d2fe]",
  rokketmed: "border-[#f46524]/45 text-[#fbd5c0]",
};

export type FactTone = keyof typeof factTones;

export function Fact({ children, tone = "default" }: { children: ReactNode; tone?: FactTone }) {
  const colors = factTones[tone];
  return (
    <span
      className={`whitespace-nowrap rounded-full border px-[11px] py-[5px] font-mono text-xs ${colors}`}
    >
      {children}
    </span>
  );
}

export function FactList({ facts, tone }: { facts: readonly string[]; tone?: FactTone }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project facts">
      {facts.map((fact) => (
        <li key={fact}>
          <Fact tone={tone}>{fact}</Fact>
        </li>
      ))}
    </ul>
  );
}

/** Stand-in for a screenshot or video that hasn't been captured yet. */
export function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`grid place-items-center p-6 text-center text-sm text-ink-4 ${className}`}
    >
      [ {label} ]
    </div>
  );
}

/** Minimal browser chrome around a site screenshot. */
export function BrowserFrame({
  children,
  theme = "dark",
  className = "",
}: {
  children: ReactNode;
  theme?: "dark" | "light";
  className?: string;
}) {
  const bar =
    theme === "dark" ? "bg-[#0f172a] border-white/10" : "bg-[#eef1f5] border-black/10";
  const dot = theme === "dark" ? "bg-white/20" : "bg-black/15";
  return (
    <div className={`flex flex-col overflow-hidden shadow-[0_-12px_48px_rgba(0,0,0,0.4)] ${className}`}>
      <div aria-hidden="true" className={`flex h-8 shrink-0 items-center gap-1.5 border-b px-3.5 ${bar}`}>
        <span className={`size-2.5 rounded-full ${dot}`} />
        <span className={`size-2.5 rounded-full ${dot}`} />
        <span className={`size-2.5 rounded-full ${dot}`} />
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
    </svg>
  );
}
