import * as AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { MdOutlineSmokeFree } from "react-icons/md";
import { FaWifi, FaParking, FaUmbrellaBeach } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Landing.css"
import image2 from "../../../assets/portada.jpg"

export default function Landing() {
    useEffect(() => {
        AOS.init();
    }, [])
    const { t } = useTranslation()
    return (
        <div className="flex w-full justify-center home-back top-home home-heigth">
            <div className="flex contain sm:flex-row rounded-lg mb-5 landing-card md:w-4/5 lg:w-3/5 items-center"
                data-aos={window.innerWidth <= 639 ? 'fade-right' : 'fade-up'} data-aos-offset="00" data-aos-duration="1000"  >
                <div className="flex flex-col">
                    <h1 className="font-bold text-center text-3xl">Nueva Serena</h1>
                    <p className="mt-4">{t("home.landing.text")} </p>
                    <h2 className="mt-5 text-xl text-center ">{t("home.landing.amenities")}</h2>
                    <div className="contenedor mt-3"  >
                        <div className="cuadrado sm:ml-2 flex flex-col items-center text-center justify-center">
                            <h1>{t("home.landing.square.smoke-free")}</h1>
                            <div>
                                <MdOutlineSmokeFree />
                            </div>
                        </div>
                        <div className="cuadrado flex flex-col items-center text-center justify-center">
                            <h1>Wifi</h1>
                            <div>
                                <FaWifi />
                            </div>
                        </div>
                        <div className="cuadrado text-center flex flex-col items-center justify-center">
                            <h1>{t("home.landing.square.parking")}</h1>
                            <div>
                                <FaParking />
                            </div>
                        </div>
                        <div className="cuadrado text-center flex flex-col items-center justify-center">
                            <h1>{t("home.landing.square.beach")}</h1>
                            <div>
                                <FaUmbrellaBeach />
                            </div>

                        </div>
                    </div>
                </div>
                <img className="sm:w-3/6 sm:h-3/4 sm:rounded-full image-snow-rounded" src={image2} alt="" />

            </div>
        </div>
    )
}
