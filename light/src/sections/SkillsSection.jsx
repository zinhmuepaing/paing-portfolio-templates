import { PinnedShowcase } from "@/components/scroll/PinnedShowcase";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories, sectionMeta } from "@/data/content";

const SkillCard = ({ skill }) => (
  <div className="flex items-center gap-3 px-5 py-3 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/60 dark:border-gray-700/50 shadow-sm flex-shrink-0">
    {skill.icon ? (
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-7 h-7 flex-shrink-0"
        loading="lazy"
      />
    ) : (
      <div className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-500 flex-shrink-0">
        {skill.name.charAt(0)}
      </div>
    )}
    <span className="text-base font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

// Horizontal infinite-scroll marquee. Skills are duplicated so the
// translateX(-50%) loop is seamless.
const SkillMarquee = ({ skills, direction = "left" }) => (
  <div className="group relative overflow-hidden">
    <div
      className={`flex w-max gap-3 ${
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
      } group-hover:[animation-play-state:paused]`}
    >
      {[...skills, ...skills].map((skill, i) => (
        <SkillCard key={`${skill.name}-${i}`} skill={skill} />
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900/40 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900/40 to-transparent" />
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-50/60 dark:bg-gray-900/40">
      <PinnedShowcase
        gapClassName="gap-10 sm:gap-16"
        heading={
          <div className="mx-auto mb-10 w-full max-w-6xl px-4 sm:px-8">
            <SectionHeading index={sectionMeta.skills.index} title={sectionMeta.skills.title} />
            <p className="-mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              {sectionMeta.skills.desc}
            </p>
          </div>
        }
      >
        {skillCategories.map((category, catIdx) => (
          <div
            key={category.title}
            className="flex w-[88vw] max-w-3xl shrink-0 flex-col justify-center"
          >
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-mono text-sm tracking-[0.3em] text-gray-300 dark:text-gray-600">
                0{catIdx + 1}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                {category.title}
              </h3>
            </div>
            <SkillMarquee
              skills={category.skills}
              direction={catIdx % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </PinnedShowcase>
    </section>
  );
}
