import type {ImgHTMLAttributes} from "react";

export type ImageHtmlProps = ImgHTMLAttributes<HTMLImageElement>
export type ImageProps = ImageHtmlProps & {

}

export const CustomImage: React.FC<ImageProps> = ({ src, alt, ...rest }: ImageProps) => {
    return (
        <img   src={src} {...rest}></img>
    )
}