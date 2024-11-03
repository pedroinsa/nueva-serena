import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import image from "../../../assets/about/afuera.jpg"
import * as AOS from 'aos'
import "aos/dist/aos.css"
import "./Header.css"


export default function Header() {
    const { t } = useTranslation()

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="flex about-header justify-center items-center">
            <div className="flex sm:flex-row header-card items-center justify-center sm:w-3/5 sm:h-5/5 lg:h-3/5" data-aos="fade-up" data-aos-offset="00" data-aos-duration="1000">
                < div className="header-card-sub sm:w-2/5">
                    <h1 className="font-bold text-xl text-blue-500 text-center">{t("about.header.title")}</h1>
                    <p className="p-2">
                        {t("about.header.text")}
                    </p>

                </div>
                <img className='sm:w-2/5 header-image ml-1' src={image} alt="" />
            </div>
        </div>

    )
}
