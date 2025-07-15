import {useTranslation} from "react-i18next";
import {useCallback} from "react";

export const LanguageSwitcher = () => {
    const { i18n} = useTranslation()
    const changeLanguage = useCallback((lng: string) => {
       i18n.changeLanguage(lng)
        console.log(lng)
   },[i18n])
    return (
        <div className="language-switcher">
            <button className={'text-bold text-lg'} onClick={() => changeLanguage('en')}>🇬🇧 EN</button>
            <button  className={'text-bold text-lg'} onClick={() => changeLanguage('es')}>🇪🇸 ES</button>
        </div>
    )
}