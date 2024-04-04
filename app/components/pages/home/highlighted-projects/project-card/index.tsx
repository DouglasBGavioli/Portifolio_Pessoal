import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src={"/images/image-moch.png"}
                    alt="Thumbnail do projeto"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt="Icon"
                        src="/images/icons/project-title-icon.svg"
                    />
                    LoremIpsum
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum est deleniti, sed ipsam aspernatur doloribus soluta ut ducimus numquam reprehenderit omnis asperiores, sunt eligendi laudantium quae nulla? Alias consectetur assumenda incidunt a aperiam libero dolores quam. Quam adipisci laboriosam eum.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>

                <Link href={"/projects/loremIpsum"}>
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}