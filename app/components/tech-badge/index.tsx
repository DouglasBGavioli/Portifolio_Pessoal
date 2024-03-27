type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
    return (
        <span className="text-yellow-400 bg-yellow-400/20 text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
    )
}