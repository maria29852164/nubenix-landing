import type {FC, HTMLAttributes} from "react";

export type TextHTMLProps = HTMLAttributes<HTMLHeadingElement>;
export type CustomTextProps = TextHTMLProps & {
    value:string
}
export const CustomText:FC<CustomTextProps> = ({value, ...rest})=>{
    return (
        <h2  {...rest}>{value}</h2>
    )

}