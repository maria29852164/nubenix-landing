import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useCardServiceInfo = () => {
    const { t } = useTranslation();

    const cardsInfo = useMemo(() => ({
        sectionOne: {
            data:[
                {
                    title: t("cardCloudTitle"),
                    description: t("cardCloudDescription"),
                    image : {
                        src: '/images/cloud-hosting-server-icon.png'
                    }
                },
                {
                    title: t("cardMigrationTitle"),
                    description: t("cardMigrationDescription"),
                    image:{
                        src: '/images/server-cloud-icon.png'
                    }
                },
                {
                    title: t("cardDevopsTitle"),
                    description: t("cardDevopsDescription"),
                    image:{
                        src: '/images/headphone-headset-icon.png'
                    }
                },


            ],
            imageSection: {
                image:{
                    src: '/images/database-server-icon.png'
                }
            }
        },

        sectionTwo:{
            data:[{
                title: t("cardDevSecOpsTitle"),
                description: t("cardDevSecOpsDescription"),
                image:{
                    src: '/images/process-icon.png'
                }
            },
                {
                    title: t("cardSupportServiceTitle"),
                    description: t("cardSupportServiceDescription"),
                    image:{
                        src: '/images/web-service-icon.png'
                    }
                },
                {
                    title: t("cardContractTitle"),
                    description: t("cardContractDescription"),
                    image:{
                        src: '/images/internet-browsing-icon.png'
                    }
                },
            ],
            imageSection: {
                image:{
                    src: '/images/crane-icon.png'
                }
            }
        },
        sectionThree:{
            data:[
                {
                    title: t("cardFinOpsTitle"),
                    description: t("cardFinOpsDescription"),
                    image:{
                        src: '/images/repairing-icon.png'
                    }
                },
                {
                    title: t("cardReviewCloudTitle"),
                    description: t("cardReviewCloudDescription"),
                    image:{
                        src: '/images/website-layout-icon.png'
                    }
                },
                {
                    title: t("cardSoCaaSTitle"),
                    description: t("cardSoCaaSDescription"),
                    image:{
                        src: '/images/male-services-support-icon.png'
                    }
                }
            ],
            imageSection: {
                image:{
                    src: '/images/rest-api-icon.png'
                }
            }
        },

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
         cardsInfo,
        experienceCards,
        experienceSection: {
            title: t("sectionExperienceTitle"),
            description: t("sectionExperienceDescription")
        }
    };
};