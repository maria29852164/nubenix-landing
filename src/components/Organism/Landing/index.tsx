import type {FC} from "react";
import {useNavbarContent} from "../../../hooks/useNavbarContent.tsx";
import {Navbar} from "../../Molecules/Navbar";

export const Landing: FC = () => {
    const {navbarItems} = useNavbarContent()
    return (
        <div>
            <Navbar links={navbarItems}/>
        </div>
    )
}