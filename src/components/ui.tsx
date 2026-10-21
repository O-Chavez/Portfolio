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

export function Fact({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "lake";
}) {
  const colors =
    tone === "lake"
      ? "border-[#3b5566] text-lake-ink"
      : "border-rule text-ink-2";
  return (
    <span
      className={`whitespace-nowrap rounded-full border px-[11px] py-[5px] font-mono text-xs ${colors}`}
    >
      {children}
    </span>
  );
}

export function FactList({
  facts,
  tone,
}: {
  facts: readonly string[];
  tone?: "default" | "lake";
}) {
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

export function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 1.5v11l9-5.5z" fill="currentColor" />
    </svg>
  );
}
