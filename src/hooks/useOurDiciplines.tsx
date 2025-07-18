import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export const useOurDiciplines = () => {
    const {t} = useTranslation()

    const disciplines = useMemo(() => {
        return [
            {
                title: t("sections.containerization.title"),
                description: t("sections.containerization.description"),
                image: {
                    src: "/images/docker-icon.png"
                }
            },
            {
                title: t("sections.cloudNative.title"),
                description: t("sections.cloudNative.description"),
                image: {
                    src: "/images/cloud-hosting-server-icon.png"
                }
            },
            {
                title: t("sections.supportServices.title"),
                description: t("sections.supportServices.description"),
                image: {
                    src: "/images/tools-icon.png"
                }
            },
            {
                title: t("sections.devOps.title"),
                description: t("sections.devOps.description"),
                image: {
                    src: "/images/productivity-expert-icon.png"
                }
            },
            {
                title: t("sections.professionalServices.title"),
                description: t("sections.professionalServices.description"),
                image: {
                    src: "/images/career-icon.png"
                }
            }
        ];
    }, [t]);
    const infoTitle = useMemo(()=>({
        title: t("titleOurDisciplines")
    }),[t])
    return {
        disciplines,
        infoTitle
    }
}