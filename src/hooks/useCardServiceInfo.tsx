import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useCardServiceInfo = () => {
    const { t } = useTranslation();

    const cardsInfo = useMemo(() => ({
        sectionOne: [
            {
                title: t("cardCloudTitle"),
                description: t("cardCloudDescription")
            },
            {
                title: t("cardMigrationTitle"),
                description: t("cardMigrationDescription")
            },
            {
                title: t("cardDevopsTitle"),
                description: t("cardDevopsDescription")
            },


        ],
        sectionTwo:[{
            title: t("cardDevSecOpsTitle"),
                description: t("cardDevSecOpsDescription")
            },
            {
                title: t("cardSupportServiceTitle"),
                description: t("cardSupportServiceDescription")
            },
            {
                title: t("cardContractTitle"),
                description: t("cardContractDescription")
            },
           ],
        sectionThree:[
            {
                title: t("cardFinOpsTitle"),
                description: t("cardFinOpsDescription")
            },
            {
                title: t("cardReviewCloudTitle"),
                description: t("cardReviewCloudDescription")
            },
            {
                title: t("cardSoCaaSTitle"),
                description: t("cardSoCaaSDescription")
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