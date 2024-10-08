import type { RichTextContent } from '@graphcms/rich-text-types'
import { KnownTech, Project } from './projects'
import { WorkExperience } from './work-experience'
import { Certificates } from './certificates'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
    text:string
  }
  technologies: KnownTech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTech[]
  highlightProjects: Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
  certificates: Certificates[]
}