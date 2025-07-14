import type {FC} from "react";
export type LinkProps = {
    title: string;
    link: string;
}
export const Link:FC<LinkProps> = ({link, title})=>{
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    )
}