import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
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
                    Sou desenvolvedor front-end, atualmente trabalhando com desenvolvimento de plataforma e-commerce e utilização de CMS, atuando diretamente com OCC, OSF e CS.
                </p>
                <p className="text-gray-400 mt-6"> Trabalho na Compass Uol a 4 anos, onde já participei do desenvolvimento de projetos como todo desenvolvimento do novo portal do Itaú Cultural e posteriormente do portal administrativo de informações do mesmo. Totalizando 7 meses de projeto. Após esse período passei a fazer parte do time Livelo, onde trabalho no projeto de ativação promocional e estou até o momento.</p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences?.map(experience => (
                    <ExperienceItem key={experience.startDate} experience={experience} />
                ))}
            </div>
        </section>
    )
}