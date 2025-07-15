import type {FC} from "react";
export type LinkProps = {
    title: string;
    link: string;
}
export const Link:FC<LinkProps> = ({link, title})=>{
    console.log(title)
    return (
        <li className={'p-2 '}>
            <a className={'text-lg font-semibold text-gray-900'} href={link}>{title}</a>
        </li>
    )
}