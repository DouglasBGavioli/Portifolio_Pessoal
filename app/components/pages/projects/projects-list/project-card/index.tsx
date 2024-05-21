import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-yellow-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    alt="Project thumbnail"
                    src={"/images/image-moch.png"}
                    width={380}
                    height={200}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                />
            </div>

            <div className="flex-1 flex flex-col p-7">
                <strong className="font-medium text-gray-50/90 group-hover:text-yellow-500 transition-all">Divisão Urutu Airsoft</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">O divisão urutu airsoft é um site criado para divulgar gerenciar e incentivar meu time de airsoft</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">React.js, Typescript, Sass, Firebase</span>
            </div>
        </div>
    )
}