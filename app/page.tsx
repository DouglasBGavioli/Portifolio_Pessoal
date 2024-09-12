import { Certificates } from "./components/pages/home/certificates";
import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

export const metadata = {
  title: 'Home | Portfólio Douglas Gavioli',
};

const getPageData = async (): Promise<HomePageData> => {
  const queryPageData = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction { raw }
        technologies { name }
        profilePicture { url }
        socials { url iconSvg }
        knownTechs { iconSvg name startDate }
        highlightProjects {
          slug
          thumbnail { url }
          title
          shortDescription
          technologies { name }
        }
      }
      workExperiences {
        companyLogo { url }
        role
        companyName
        companyUrl
        startDate
        endDate
        description { raw }
        technologies { name }
      }
      certificates {
        title
        onlineCredential
        thumbnail {
          url
        }
      }
    }
  `;
  return fetchHygraphQuery(queryPageData);
};

export default async function Home() {
  const { page: pageData, workExperiences, certificates } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} certificates={certificates} workExperience={workExperiences} />
      <KnowTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <Certificates certificate={certificates} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
