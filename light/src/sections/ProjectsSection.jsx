import { PinnedShowcase } from "@/components/scroll/PinnedShowcase";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, sectionMeta } from "@/data/content";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <PinnedShowcase
        heading={
          <div className="mx-auto mb-10 w-full max-w-6xl px-4 sm:px-8">
            <SectionHeading index={sectionMeta.projects.index} title={sectionMeta.projects.title} />
            <p className="-mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              {sectionMeta.projects.desc}
            </p>
          </div>
        }
      >
        {projects.map((project) => (
          <div key={project.title} className="flex w-[20rem] shrink-0 sm:w-[21.25rem]">
            <ProjectCard project={project} />
          </div>
        ))}
      </PinnedShowcase>
    </section>
  );
}
