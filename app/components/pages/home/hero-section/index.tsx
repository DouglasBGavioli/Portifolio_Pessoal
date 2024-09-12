"use client"

import { Button } from "@/app/components/button"
import { CMSIcon } from "@/app/components/cms-icon"
import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { HomePageInfo } from "@/app/types/page-info"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from "@/app/lib/animations"
import { Certificates } from "@/app/types/certificates"
import { WorkExperience } from "@/app/types/work-experience"
import jsPDF from "jspdf"
import { format } from "date-fns"

type HomeSectionProps = {
    homeInfo: HomePageInfo
    certificates: Certificates[]
    workExperience: WorkExperience[]
}

export const HeroSection = ({ homeInfo, certificates, workExperience }: HomeSectionProps) => {

    const handleContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    const generateCurriculum = () => {
        let positionKnowTechs = 170;
        let positionWorkExp = 130;
        let positionCertificates = 220;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        // Fonte
        doc.setFont('helvetica');

        // TÍTULO E NOME
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text("DESENVOLVEDOR", 10, 20);
        doc.setFontSize(40);
        doc.text("DOUGLAS", 10, 35);
        doc.text("GAVIOLI", 10, 50);

        // Seção de Contato
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("CONTATO", 10, 70);
        doc.text("douglasbiassi.dev@gmail.com", 10, 80);
        doc.text("Santiago", 10, 90);
        doc.text("Rio Grande do Sul, Brasil", 10, 100);
        doc.text("55 99993-3697", 10, 110);
        doc.text(format(new Date(), 'dd/MM/yyyy'), 10, 120);
        doc.text("Brasileiro", 10, 130);
        doc.text("www.dbgdev.com.br", 10, 140);

        // Seção de Habilidades
        doc.setFont('helvetica', 'bold');
        doc.text("HABILIDADES", 10, 160);
        doc.setFont('helvetica', 'normal');
        {
            homeInfo.knownTechs.forEach((habilidade) => {
                doc.text(`- ${habilidade.name}`, 10, positionKnowTechs);
                positionKnowTechs += 10; // Incrementa a posição Y para a próxima linha
            });
        }

        // Seção de Línguas
        doc.setFont('helvetica', 'bold');
        doc.text("LÍNGUAS", 10, 250);
        doc.setFont('helvetica', 'normal');
        doc.text("- Espanhol | Básico", 10, 260);
        doc.text("- Inglês | Avançado", 10, 270);


        // Seção de Objetivo
        doc.setFont('helvetica', 'bold');
        doc.text("OBJETIVO", 90, 70);
        doc.setFont('helvetica', 'normal');
        doc.text(doc.splitTextToSize('Olá, meu nome é Douglas Biassi Gavioli, sou desenvolvedor front-end com mais de 3 anos de experiência e apaixonado por tecnologia. Meu objetivo é criar interfaces criativas, bonitas e funcionais, além de compartilhar e adquirir conhecimento. Estou sempre aberto a novas oportunidades, desafios e críticas.', 110), 90, 80);


        // Seção de Experiência
        doc.setFont('helvetica', 'bold');
        doc.text("CARGO ATUAL", 90, 120);
        doc.setFont('helvetica', 'normal');
        {
            let workExp = workExperience[0];

            // Empresa e Cargo
            doc.text(`@ ${workExp.companyName}`, 90, positionWorkExp);
            positionWorkExp += 10;
            doc.text(`${workExp.role}`, 90, positionWorkExp);

            // Datas e Duração
            positionWorkExp += 10;
            let duracao = `${workExp.startDate} • ${workExp.endDate || 'O momento'}`;
            doc.text(duracao, 90, positionWorkExp);


            // Competências
            positionWorkExp += 10;
            doc.text('Competências', 90, positionWorkExp);
            workExp.technologies.forEach((skill) => {
                positionWorkExp += 10;
                doc.text(skill.name, 90, positionWorkExp);
            });

            positionWorkExp += 20;
        };

        doc.setFont('helvetica', 'bold');
        doc.text("CERTIFICADOS", 90, 210);
        doc.setFont('helvetica', 'normal');
        {
            certificates.forEach((certificate) => {
                doc.text(`- ${certificate.title}`, 90, positionCertificates);
                positionCertificates += 10; // Incrementa a posição Y para a próxima linha
            });
        }

        // Linha de separação
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.line(10, 65, 200, 65); // Linha horizontal

        // Salvar o PDF
        doc.save("Curriculo_DouglasBGavioli.pdf");
    };


    return (
        <section className="w-full  lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
                <motion.div className="flex  flex-col w-full lg:max-w-[530px] gap-3"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-yellow-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Douglas Gavioli</h2>

                    <div className="text-gray-400 my-6 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {homeInfo.technologies.map((tech, i) => (
                            <TechBadge
                                name={tech.name}
                                {...techBadgeAnimation}
                                transition={{ duration: 0.2, delay: i * 0.1 }}
                                key={i} />
                        ))}
                    </div>

                    <div className="flex items-center mt-6 lg:mt-10 sm:item-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="shadow-button w-max" onClick={handleContact}>
                            Entre em contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center min-h-20 max-h-60 gap-3 transition-all xlg:hidden px-4 py-8">
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
                    <div className="flex items-center lg:mt-5 sm:item-center flex-col sm:flex-row">
                        <Button onClick={generateCurriculum} className="text-sm py-1 px-4 min-w-[186px]">
                            Gerar currículo
                        </Button>
                    </div>

                </motion.div>

                <div className="hidden text-gray-600 text-2xl items-center min-h-20 max-h-60 gap-3 transition-all xlg:flex xlg:flex-col xlg:fixed xlg:right-20 xlg:top-1/2 xlg:transform xlg:-translate-y-1/2 xlg:gap-4 xlg: p-8 xlg:rounded-lg  xlg:bg-gray-600/20 xlg:aspect-auto xlg:text-4xl">
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

                <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="origin-center"
                >
                    <Image className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full  object-cover" width={420} height={404} src={homeInfo.profilePicture.url} alt="Imagem de perfil do Douglas Gavioli" />
                </motion.div>
            </div>
        </section>
    )
}