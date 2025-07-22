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
    return (
        <div className={"flex items-center justify-between py-10"}>
        <div className={'pl-10'}>
            <img className={'h-20'} src={'/images/logo_main.png'}/>

        </div>
        <div>
            <ul className={"flex flex-row list-none"}>
                {links.length > 0 && links.map((link, key)=><Link key={key} {...link} />)}

            </ul>
        </div>
        <div className={'flex items-center pr-10'}>

            <LanguageSwitcher/>

        </div>


    </div>)

}