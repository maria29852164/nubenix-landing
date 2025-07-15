import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export const useFooterInfo = () => {
    const {t} = useTranslation();
    const footerInfo = useMemo(() => (
        {
            footerTitleOne: t("footerTitleOne"),
            footerTitleTwo: t("footerTitleTwo"),
            footerTitleThree: t("footerTitleThree"),
            footerTitleFour: t("footerTitleFour"),
            footerTitleFive: t("footerTitleFive"),
            footerTitleSix: t("footerTitleSix"),
            sendButton: t("send")
        }
    ),[t])
    return {footerInfo}
}