import { stats } from "@/content/site";
import { Reveal } from "../Reveal";
import { sectionHeading, sectionShell } from "./styles";

export function Impact() {
  return (
    <section aria-labelledby="impact-title" className={sectionShell}>
      <h2 id="impact-title" className={`${sectionHeading} max-w-[760px] leading-[1.08]`}>
        Shipped inside real businesses.{" "}
        <span className="text-ink-4">Measured by what changed.</span>
      </h2>
      <ul className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-8 gap-y-10">
        {stats.map((stat, i) => (
          <Reveal as="li" key={stat.value} delayMs={i * 80} className="border-t border-rule pt-5">
            <p className="text-[clamp(40px,4.6vw,56px)] font-bold tracking-[-0.04em]">{stat.value}</p>
            <p className="mt-1.5 text-[15px] leading-normal text-ink-3">{stat.label}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
