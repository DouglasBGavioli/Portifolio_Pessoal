import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex itens-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Douglas Gavioli</h2>
                    <p className="text-gray-400 my-6 text-sm sm:text-base">
                        Olá, meu nome é Douglas Biassi Gavioli sou desenvolvedor front-end apaixonado por tecnologia. Com mais de 3 anos de experiência. Meu objetivo é criar interfaces criativas, bonitas e funcionais, além de compartilhar conhecimento e adquirir conhecimento também. Estou sempre aberto a novas oportunidades desafios e criticas.
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <TechBadge name="Sass" key={index} />
                        ))}
                    </div>
                    <div>contato</div>
                </div>

                <Image width={420} height={404} src={"/images/profile-pic.png"} alt="Imagem de perfil do Douglas Gavioli" />
            </div>
        </section>
    )
}