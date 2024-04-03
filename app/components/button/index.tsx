import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={cn('flex bg-yellow-500 py-3 px-4 rounded-lg text-white items-center justify-center gap-2 hover:bg-yellow-600 transition-all disabled:opacity-50 cursor-pointer', className)} {...props}>
            {children}
        </button>
    )
}