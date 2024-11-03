import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import kitchen from "../../../assets/about/cocina.jpg"
import bathroom from "../../../assets/about/bano.jpg"
import * as AOS from "aos"
import "aos/dist/aos.css"
import "./FirstComponent.css"
function FirstComponent() {
    const { t } = useTranslation()
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="first-component flex justify-center w-full">
            <div className="first-component-card sm:w-4/5 items-center justify-center" data-aos="fade-down" data-aos-offset="40" data-aos-duration="1000">
                <h1 className="font-bold text-xl mb-8 text-blue-500" >{t("about.kitchenAndBathroom.title")}</h1>
                <div className="first-component-images">

                    <div className="flex div-images flex-col items-center">
                        <img src={kitchen} alt="" />
                        <div className="graph left-p rounded-xl">
                            <p className="define-text">
                                {t("about.kitchenAndBathroom.kitchen")}
                            </p>
                        </div>
                    </div>
                    <div className="flex div-images flex-col items-center">
                        <img src={bathroom} alt="" />
                        <div className="graph right-p rounded-xl ">
                            <p className="define-text">{t("about.kitchenAndBathroom.bath")}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FirstComponent