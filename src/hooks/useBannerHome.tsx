import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export const useBannerHome = () => {
    const {t} = useTranslation();
     const bannerInfo = useMemo(()=>({
         titleOne: t("bannerTitleOne"),
         titleTwo: t("bannerTitleTwo"),
         description: t("bannerDescription")
     }),[t])
    return {
         bannerInfo,
    }
}