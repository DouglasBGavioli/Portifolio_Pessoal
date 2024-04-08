import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="/images/icons/compass_uol_logo.png"
                        alt="Logo da empresa CompassUol"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"></div>
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="https://compass.uol/pt/home/" target="_blank" className="text-gray-500 hover:text-yellow-400 transition-colors">@ CompassUol</a>
                    <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
                    <span className="text-gray-500">out 2021 . 0 momento . (2 anos)</span>
                    <p className="text-gray-400">
                        Atuação no projeto de Ativação Promocional do cliente Livelo <br />
                        - Criação de Landing Pages de páginas institucionais, de parceiros, campanhas entre outras;
                        <br />
                        - Desenvolvimento de novos componentes;
                        <br />
                        - Criação de Audiências e Promoções dentro da plataforma da Oracle;
                    </p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React.js" />
                    <TechBadge name="React.js" />
                    <TechBadge name="React.js" />
                    <TechBadge name="React.js" />
                    <TechBadge name="React.js" />
                </div>
            </div>
        </div>
    )
}