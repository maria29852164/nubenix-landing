import {type FC, useCallback, useState} from "react";
import type {NavbarProps} from "../Navbar";
import {Link} from "../../Atoms/Link";

export const NavbarMobile:FC<NavbarProps> = ({links})=>{
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const toggleMenu = useCallback(()=>{
        setIsOpen(!isOpen)
    },[isOpen])
    return (
        <div className={'relative'}>
            <div className={'flex items-center'}>
                <div className={'px-10 py-3'}>
                    <button  onClick={toggleMenu} className="w-8 h-8  flex flex-col justify-around">
                       <img src={'/images/three-horizontal-lines-icon.png'}/>
                    </button>
                </div>

                <ul className={`${isOpen ? '' : 'hidden'} w-full flex flex-row list-none absolute z-20 top-full left-0 bg-white  py-2 px-4`}>
                    {links.length > 0 && links.map((link, key)=><Link key={key} {...link} />)}

                </ul>
            </div>
        </div>
    )
}