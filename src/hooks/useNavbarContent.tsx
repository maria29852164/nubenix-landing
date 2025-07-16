import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import type {LinkProps} from "../components/Molecules/Navbar";

export const useNavbarContent = () => {
    const {t} = useTranslation();
    const navbarItems = useMemo(():Array<LinkProps> => ([
        {
            title: t("menuHome"),
            link:t("menuHomeLink"),
        },
        {
            title: t("menuServices"),
            link: t("menuServicesLink"),
        },
        {
            title: t("menuAbout"),
            link: t("menuAboutLink"),
        },
        {
            title: t("menuContactUs"),
            link: t("menuContactUsLink"),
        },
    ]),[t])
    return {
        navbarItems,

    }
}