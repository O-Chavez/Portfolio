import { glance, hero, site } from "@/content/site";
import { buttonStyles } from "../ui";

export function Hero() {
  return (
    <section
      id="top"
      className="animate-rise mx-auto max-w-[1120px] px-5 pt-[clamp(48px,8vw,96px)] pb-[clamp(32px,5vw,56px)] text-center"
    >
      <p className="mb-3.5 text-base font-semibold text-accent">{site.title}</p>
      <h1 className="mx-auto max-w-[900px] text-[clamp(38px,6.4vw,80px)] leading-[1.04] font-bold tracking-[-0.025em] sm:tracking-[-0.04em]">
        {hero.headline}
        <span className="text-ink-4">{hero.headlineMuted}</span>
      </h1>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="#work" className={buttonStyles.primary}>
          See the work
        </a>
      </div>
      <ul className="mx-auto mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-3">
        <li>
          <span className="font-medium text-ink">{glance.years}</span> in production
        </li>
        <li>
          {glance.currentRole} · <span className="font-medium text-ink">{glance.currentCompany}</span>
        </li>
        <li>
          {site.location} · {site.timezone}
        </li>
        <li className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-online" />
          {glance.availability}
        </li>
      </ul>
    </section>
  );
}
