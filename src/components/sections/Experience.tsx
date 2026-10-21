import { experience, site } from "@/content/site";
import { Reveal } from "../Reveal";
import { ExternalLink, linkStyles } from "../ui";
import { sectionHeading, sectionShell } from "./styles";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className={sectionShell}>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="experience-title" className={sectionHeading}>
          Experience
        </h2>
        <ExternalLink href={site.resumeUrl} className={`${linkStyles} text-base`}>
          Full résumé (PDF) ↗
        </ExternalLink>
      </div>
      <ol className="mt-9 border-b border-rule">
        {experience.map((role) => (
          <Reveal
            as="li"
            key={role.dates}
            className="flex flex-wrap gap-x-10 gap-y-2 border-t border-rule py-7"
          >
            <p className="flex-[0_0_200px] pt-1 font-mono text-[13px] text-ink-3">{role.dates}</p>
            <div className="min-w-0 flex-[1_1_520px]">
              <h3 className="text-xl font-semibold">
                {role.title} <span className="font-normal text-ink-3">· {role.company}</span>
              </h3>
              <p className="mt-2 max-w-[680px] text-base leading-[1.55] text-ink-2">{role.summary}</p>
              <p className="mt-2.5 font-mono text-xs text-ink-3">{role.stack.join(" · ")}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
