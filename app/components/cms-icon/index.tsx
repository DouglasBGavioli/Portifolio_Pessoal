type CMSIconProps = {
    icon: string
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
    return (
        <svg className="max-h-[1em] max-w-[1em] overflow-hidden"
            dangerouslySetInnerHTML={{
                __html: icon
            }}
        />
    )
}
