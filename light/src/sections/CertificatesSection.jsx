import { ExpandCards } from "@/components/ui/expand-cards";
import { SectionFX } from "@/components/scroll/SectionFX";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificates, sectionMeta } from "@/data/content";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <SectionHeading
            index={sectionMeta.certificates.index}
            align="center"
            title={sectionMeta.certificates.title}
            className="mb-4"
          />
          <p className="text-gray-500 dark:text-gray-400">
            {sectionMeta.certificates.desc}
          </p>
        </div>

        <SectionFX variant="clip-reveal">
          <ExpandCards certificates={certificates} />
        </SectionFX>
      </div>
    </section>
  );
}
