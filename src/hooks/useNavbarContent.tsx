import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import type {LinkProps} from "../components/Molecules/Navbar";

export const useNavbarContent = () => {
    const {t} = useTranslation();
    const navbarItems = useMemo(():Array<LinkProps> => ([
        {
            title: t("menuHome"),
            link:"#",
        },
        {
            title: t("menuServices"),
            link: t("menuServicesLink"),
        },
        {
            title: t("menuAbout"),
            link: "#",
        },
        {
            title: t("menuContactUs"),
            link: "#",
        },
    ]),[])
    return {
        navbarItems,

    }
}