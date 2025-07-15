import type {ImgHTMLAttributes} from "react";

export type ImageHtmlProps = ImgHTMLAttributes<HTMLImageElement>
export type CustomImageProps = ImageHtmlProps & {

}

export const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...rest }) => {
    return (
        <img   src={src} {...rest}></img>
    )
}