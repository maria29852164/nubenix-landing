import type {FC} from "react";
import {Link} from "../../Atoms/Link";
import {LanguageSwitcher} from "../../Atoms/LanguageSwitcher";

export interface LinkProps{
    title: string;
    link: string;
}
export interface NavbarProps {
    links: Array<LinkProps>
}
export const Navbar:FC<NavbarProps> = ({links})=>{
    return (<div className={"flex"}>
        <div>
            <LanguageSwitcher/>

        </div>
        <div className={"flex flex-row"}>
            {links.length > 0 && links.map((link, key)=><Link key={key} {...link} />)}

        </div>

    </div>)

}