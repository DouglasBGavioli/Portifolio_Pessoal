"use client"

import { Button } from "@/app/components/button"
import { CMSIcon } from "@/app/components/cms-icon"
import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { HomePageInfo } from "@/app/types/page-info"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'

type HomeSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {

    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    console.log(homeInfo.profilePicture.url);

    return (
        <section className="w-full  lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-yellow-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Douglas Gavioli</h2>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech, i) => (
                            <TechBadge name={tech.name} key={i} />
                        ))}
                    </div>

                    <div className="flex items-center mt-6 lg:mt-10 sm:item-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="shadow-button w-max" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center min-h-20 max-h-60 gap-3 transition-all xlg:flex-col xlg:fixed xlg:right-20 xlg:top-1/2 xlg:transform xlg:-translate-y-1/2 xlg:gap-4 xlg: p-8 xlg:rounded-lg  xlg:bg-gray-600/20 xlg:aspect-auto xlg:text-4xl">
                            {homeInfo.socials.map((contact, index) => (
                                <a
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-yellow-400 transition-colors"
                                >
                                    <CMSIcon icon={contact.iconSvg} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <Image className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full  object-cover" width={420} height={404} src={homeInfo.profilePicture.url} alt="Imagem de perfil do Douglas Gavioli" />
            </div>
        </section>
    )
}