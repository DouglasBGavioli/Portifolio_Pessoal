import Link from "next/link"
import { IoMdHeart } from "react-icons/io"

export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
                Made with
                <IoMdHeart size={13} className="text-yellow-400" />
                by
                <strong className="font-medium hover:text-yellow-500 transition-all ">
                    <Link href={"https://www.linkedin.com/in/douglasbgavioli/"} target="_blank">
                        Douglas Gavioli
                    </Link>
                </strong>
            </span>
        </footer>
    )
}