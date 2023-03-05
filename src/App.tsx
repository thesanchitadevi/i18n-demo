import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  bn: { nativeName: "Bangla" },
};

function App(){
  const { t, i18n } = useTranslation();

  
  // useEffect(() => {
  //   const lng = navigator.language;
  //   i18n.changeLanguage(lng);
  // }, []);

  // const lng = navigator.language;

  return (
    <>
      <div className="App">
        <h1>Language</h1>
        <div>
          {Object.keys(lngs).map((lng:any) => (
            <button
              type="submit"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lng}
             
            </button>
          ))}
        </div>
        <h3>{t("learn")}</h3>
        {/* <span>Browser language: {lngs}</span> */}
      </div>
    </>
  );
}

export default App;
