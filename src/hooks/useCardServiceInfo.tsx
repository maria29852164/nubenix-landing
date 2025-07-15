import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useCardServiceInfo = () => {
    const { t } = useTranslation();

    const cardsInfo = useMemo(() => ({
        sectionOne: [
            {
                title: t("cardCloudTitle"),
                description: t("cardCloudDescription"),
                image : {
                    src: '/image/cloud-hosting-server-icon.png'
                }
            },
            {
                title: t("cardMigrationTitle"),
                description: t("cardMigrationDescription"),
                image:{
                    src: '/image/server-cloud-icon.png'
                }
            },
            {
                title: t("cardDevopsTitle"),
                description: t("cardDevopsDescription"),
                image:{
                    src: '/image/headphone-headset-icon.png'
                }
            },


        ],
        sectionTwo:[{
            title: t("cardDevSecOpsTitle"),
                description: t("cardDevSecOpsDescription"),
            image:{
                src: '/image/process-icon.png'
            }
            },
            {
                title: t("cardSupportServiceTitle"),
                description: t("cardSupportServiceDescription"),
                image:{
                    src: '/image/web-service-icon.png'
                }
            },
            {
                title: t("cardContractTitle"),
                description: t("cardContractDescription"),
                image:{
                    src: '/image/internet-browsing-icon.png'
                }
            },
           ],
        sectionThree:[
            {
                title: t("cardFinOpsTitle"),
                description: t("cardFinOpsDescription"),
                image:{
                    src: '/image/repairing-icon.png'
                }
            },
            {
                title: t("cardReviewCloudTitle"),
                description: t("cardReviewCloudDescription"),
                image:{
                    src: '/image/website-layout-icon.png'
                }
            },
            {
                title: t("cardSoCaaSTitle"),
                description: t("cardSoCaaSDescription"),
                image:{
                    src: '/image/male-services-support-icon.png'
                }
            }
        ]
    }), [t]);

    const experienceCards = useMemo(() => ([
        {
            title: t("cardServicesOneTitle"),
            description: t("cardServiceOneDescription")
        },
        {
            title: t("cardServiceTwoTitle"),
            description: t("cardServiceTwoDescription")
        },
        {
            title: t("cardServiceThreeTitle"),
            description: t("cardServiceThreeDescription")
        }
    ]), [t]);

    return {
        serviceCards: cardsInfo,
        experienceCards,
        experienceSection: {
            title: t("sectionExperienceTitle"),
            description: t("sectionExperienceDescription")
        }
    };
};