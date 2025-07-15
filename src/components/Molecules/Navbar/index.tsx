import type {FC} from "react";
import {Link} from "../../Atoms/Link";
import {LanguageSwitcher} from "../../Atoms/LanguageSwitcher";
import {useTranslation} from "react-i18next";

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
            <img className={'h-14'} src={'/images/logo.png'}/>

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