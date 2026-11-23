import { Timeline } from "@/components/ui/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionFX } from "@/components/scroll/SectionFX";
import { achievements, sectionMeta } from "@/data/content";

// Build timeline data — group by year
const timelineData = achievements.map((a) => ({
  title: a.year,
  content: (
    <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={a.image}
          alt={a.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${a.categoryColor}`}
        >
          {a.category}
        </span>
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
          {a.title}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{a.description}</p>
      </div>
    </div>
  ),
}));

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/60 dark:bg-gray-900/40"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <SectionHeading index={sectionMeta.achievements.index} title={sectionMeta.achievements.title} className="mb-4" />
          <SectionFX variant="fade-drop" exit={false}>
            <p className="text-gray-500 dark:text-gray-400">
              {sectionMeta.achievements.desc}
            </p>
          </SectionFX>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
