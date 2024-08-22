import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'
type RichTechProps = ComponentProps<typeof CMSRichText>
export const RichText = ({ ...props }: RichTechProps) => {
    return (
        <CMSRichText
            {...props}
            renderers={{
                bold: ({ children }) => (
                    <b className='text-gray-50 font-medium'>{children}</b>
                ),
                ul: ({ children }) => (
                    <ul className='list-disc list-inside pl-2 flex flex-col gap-1'>
                        {children}
                    </ul>
                ),
                a: ({ children, ...props }) => (
                    < a
                        {...props}
                        className='hover:text-yellow-400 transition-colors underline'
                    >
                        {children}
                    </a>
                )
            }}
        />
    )
}