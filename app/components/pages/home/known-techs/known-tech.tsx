import { CMSIcon } from "@/app/components/cms-icon"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"

type KnownTechProps = {
    tech: IKnownTech
}

export const KnownTech = ({ tech }: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), "pt-BR").replace("há ", "")
    return (
        <div className="p-4 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-yellow-400 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <div className="flex items-center max-h-[1em] max-w-[1em]">
                    <CMSIcon icon={tech.iconSvg} />
                </div>
            </div>
            <span className="w">{relativeTime} de experiência</span>
        </div>
    )
}