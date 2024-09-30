type CMSIconProps = {
    icon: string
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
    return (
        <div
            className="max-h-[1em] max-w-[1em] overflow-hidden"
            dangerouslySetInnerHTML={{
                __html: icon
            }}
        />
    )
}