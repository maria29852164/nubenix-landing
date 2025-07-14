import {useTranslation} from "react-i18next";
import {useCallback} from "react";

export const LanguageSwitcher = () => {
    const { i18n} = useTranslation()
    const changeLanguage = useCallback((lng: string) => {
       i18n.changeLanguage(lng)
   },[])
    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>🇬🇧 EN</button>
            <button onClick={() => changeLanguage('es')}>🇪🇸 ES</button>
            <button onClick={() => changeLanguage('fr')}>🇫🇷 FR</button>
        </div>
    )
}