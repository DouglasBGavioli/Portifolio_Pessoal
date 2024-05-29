import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
    label: string
    href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link href={href} className={cn(
            "text-gray-400 hover:text-yellow-400 transition-all flex items-center gap-2 font-medium font-mono group",
            isActive && "text-gray-50"
        )}
        >
            <span className="text-yellow-400 group-hover:rotate-180 transition-all ease-in-out duration-500">#</span>
            {label}
        </Link>
    )
}