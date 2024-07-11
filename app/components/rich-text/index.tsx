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
                )
            }}
        />
    )
}