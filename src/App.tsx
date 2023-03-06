import React, { useState } from "react";
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
        <h1 className="text-2xl font-bold p-10">Language Translation</h1>
        <div className="mb-10">
          {Object.keys(lngs).map((lng: any) => (
            <button
             
              className=" px-5 py-1 space-x-2 mx-1 uppercase font-semibold tracking-wide border border-slate-700 rounded-lg"
              type="submit"
              key={lng}
              onClick={(() =>i18n.changeLanguage(lng))}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lng}
            </button>
          ))}
        </div>
        <h3 className="text-xl font-medium py-3">{t("learn")}</h3>
        {/* <span>Browser language: {lngs}</span> */}
        <p>{t("new.key", "translation will be added soon")}</p>
      </div>
    </>
  );
}

export default App;
