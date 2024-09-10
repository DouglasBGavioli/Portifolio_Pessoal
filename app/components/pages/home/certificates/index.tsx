'use client'

import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { Certificates as certificate } from "@/app/types/certificates"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Certifique-se de importar o CSS básico do Swiper
import 'swiper/css/navigation'; // Importa o CSS da navegação
import 'swiper/css/pagination'; // Importa o CSS da paginação
import { Navigation, Pagination } from 'swiper/modules'; // Importando os módulos corretamente
import Image from "next/image"
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";
import { useState } from "react";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

type CertificatesProps = {
    certificate: certificate[]
}

const array = [
    {
        img: '/images/image-moch.png'
    },
    {
        img: '/images/image-moch.png'
    },
    {
        img: '/images/image-moch.png'
    },
    {
        img: '/images/image-moch.png'
    }
]

export const Certificates = ({ certificate }: CertificatesProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (

        <section className="container flex flex-col py-16">
            <SectionTitle subtitle="aprendizado" title="Certificados" />
            <HorizontalDivider className="mb-16" />
            <motion.div
                className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-full h-[200px] sm:h-[350px] lg:w-[520px] lg:min-h-full"
                    initial={{ opacity: 0, y: 100, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="w-full h-[200px] sm:h-[350px] lg:w-[520px] lg:min-h-full"
                        onSlideChange={(swiper) => {
                            setCurrentIndex(swiper.realIndex);
                        }}
                    >
                        {certificate?.map((certficat, i) => (
                            <SwiperSlide key={i} >
                                <Image
                                    alt={`Project ${i}`}
                                    src={certficat.thumbnail?.url}
                                    width={520}
                                    height={350}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <div className="flex-1 lg:py-[18px]">
                    <motion.h3
                        className="flex items-center gap-3 font-medium text-lg text-gray-50"
                        {...fadeUpAnimation}
                        transition={{ duration: 0.7 }}
                    >
                        <Image
                            width={20}
                            height={20}
                            alt="Icon"
                            src="/images/icons/project-title-icon.svg"
                        />
                        {certificate[currentIndex].title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-400 my-6"
                        {...fadeUpAnimation}
                        transition={{ duration: 0.2, delay: 0.3 }}
                    >
                        {certificate[currentIndex] && certificate[currentIndex].onlineCredential && (
                            <Link className="inline-flex items-center gap-1.5 hover:text-yellow-400 transition-all" href={certificate[currentIndex]?.onlineCredential!} target="_blank" rel="noopener noreferrer">
                                Acesse o certificado
                                <HiArrowNarrowRight />
                            </Link>
                        )}

                    </motion.p>


                </div>
            </motion.div>
        </section >
    )
}


