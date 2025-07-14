import './App.css'
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "./components/Atoms/LanguageSwitcher";

function App() {
    const { t } = useTranslation()

  return (
    <>
        <LanguageSwitcher/>
      <h1>{t('Welcome to React')}</h1>
    </>
  )
}

export default App
