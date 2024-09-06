'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'


type TechBadgeProps = ComponentProps<typeof motion.span> & {
    name: string;
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
    return (
        <motion.span className="text-yellow-400 bg-yellow-400/20 text-sm py-1 px-3 rounded-lg" {...props}>
            {name}
        </motion.span>
    )
}