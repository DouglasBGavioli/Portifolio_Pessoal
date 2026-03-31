import { ProjectDeails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";
import { cache } from "react";

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDatails = cache(async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
    `
  return fetchHygraphQuery(
    query
  )
})

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDatails(slug)

  return (
    <>
      <ProjectDeails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateMetadata({
  params: { slug }
}: ProjectProps): Promise<Metadata> {
  try {
    const data = await getProjectDatails(slug)
    const project = data.project

    return {
      title: project.title,
      description: project.description.text,
      openGraph: {
        images: [
          {
            url: project.thumbnail.url,
            width: 1200,
            height: 630
          }
        ]
      }
    }
  } catch (error) {
    console.error(`Nao foi possivel gerar a metadata do projeto "${slug}":`, error)

    return {
      title: slug,
      description: "Detalhes do projeto",
    }
  }
}
