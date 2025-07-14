import './App.css'
import {useTranslation} from "react-i18next";

function App() {
    const { t } = useTranslation()

  return (
    <>
      <h1>{t('Welcome to React')}</h1>
    </>
  )
}

export default App
