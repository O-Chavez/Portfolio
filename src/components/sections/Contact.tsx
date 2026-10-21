import { site } from "@/content/site";
import { CopyEmailButton } from "../CopyEmailButton";
import { ExternalLink, buttonStyles, linkStyles } from "../ui";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="mx-auto max-w-[1120px] px-5 py-[clamp(104px,13vw,168px)] text-center"
    >
      <h2
        id="contact-title"
        className="text-[clamp(38px,5.6vw,68px)] leading-[1.04] font-bold tracking-[-0.04em]"
      >
        Have something to build?
      </h2>
      <p className="mx-auto mt-4 max-w-[520px] text-lg leading-normal text-ink-3">
        Open to senior and lead full-stack roles, and select freelance projects.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={`mailto:${site.email}`} className={buttonStyles.primary}>
          Email me
        </a>
        <CopyEmailButton email={site.email} />
      </div>
      <div className="mt-5 flex justify-center gap-6 text-[15px]">
        <ExternalLink href={site.linkedin} className={linkStyles}>
          LinkedIn ↗
        </ExternalLink>
        <ExternalLink href={site.github} className={linkStyles}>
          GitHub ↗
        </ExternalLink>
      </div>
    </section>
  );
}
