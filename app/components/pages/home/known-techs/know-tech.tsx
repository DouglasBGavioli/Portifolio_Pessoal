import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

type KnowTechProps = {
    tech: {
        icon: ReactNode,
        name: string,
        startDate: string
    }
}
export const KnowTech = ({ tech }: KnowTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), "pt-BR").replace("há ", "")
    return (
        <div className="p-4 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-yellow-400 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <p className="text-2xl">{tech.icon}</p>
            </div>
            <span className="w">{relativeTime} de experiência</span>
        </div>
    )
}