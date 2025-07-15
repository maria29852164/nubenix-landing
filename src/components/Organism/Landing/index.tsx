import {type FC} from "react";
import {useNavbarContent} from "../../../hooks/useNavbarContent.tsx";
import {Navbar} from "../../Molecules/Navbar";
import {useIsMobile} from "../../../hooks/useIsMobile.tsx";
import {NavbarMobile} from "../../Molecules/NavbarMobile";

export const Landing: FC = () => {
    const {navbarItems} = useNavbarContent()
    const  {isMobile}= useIsMobile()

    return (
        <div>
            {isMobile ? <NavbarMobile links={navbarItems}/> : <Navbar links={navbarItems}/>}
        </div>
    )
}