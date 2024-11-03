import Distance from "../Distance/Distance"
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Map.css"



function Map() {
  const { t } = useTranslation();


  return (
    <div className="map w-full flex justify-center items-center p-5">
      <div className="sm:w-3/5 p-3 flex flex-col items-center map-text">
        <div className="w-full">
          <h1 className={`text-center font-bold text-2xl map-card-title`} >{t("home.map.title")}</h1>
          <p className="map-paragraph">
            {t("home.map.text")}
          </p>
        </div>

        <iframe className="google-map self-center" src="https://www.google.com/maps/d/embed?mid=1EFpHE1ajS5SzBVF7kchNoBaQjFUCqec&ehbc=2E312F&output=embed" ></iframe>

      </div>
      <Distance />
    </div>
  )
}

export default Map