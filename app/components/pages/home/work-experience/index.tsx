import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { TechBadge } from "@/app/components/tech-badge"
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience"

type WorkExperienceProps = {
    experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
    return (
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência Profissional" />
                <p className="text-gray-400 mt-6">
                    Desenvolvedor Front-end com boa experiência em projetos web, atualmente concentrando meus esforços no setor de e-commerce.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences?.map(experience => (
                    <ExperienceItem key={experience.startDate} experience={experience} />
                ))}
            </div>
        </section>
    )
}