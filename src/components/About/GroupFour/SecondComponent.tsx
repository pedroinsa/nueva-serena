import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Slider from "react-slick";
import * as AOS from "aos"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import "./SecondComponent.css"

interface props {
    array: string[]
    place: string
}
interface objectProps {
    object: props
}
export default function SecondComponent({ object }: objectProps) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, //  menor a 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // menor a 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // menor a 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const { t } = useTranslation()
    useEffect(() => {
        AOS.init();
        console.log(window.innerWidth + ' x ' + window.innerHeight);
    }, [])
    return (
        <div className="second-component w-full flex justify-center">
            <div className="second-component-card sm:w-4/5 items-center" data-aos="fade-down" data-aos-offset="40" data-aos-duration="1000">
                <div className="flex flex-col h-full items-center slider-parent">
                    <h1 className="font-bold text-xl slider-title" >{object.place === "Bedroom" ?
                        t("about.bedrooms.title") : t("about.living.title")}</h1>
                    <div className="slider-container" >
                        <Slider {...settings} className="slider-tick" >
                            {object.array.map((elem) => <div key={elem}> <img src={elem} className=" border-white border-4" /> </div>)}

                        </Slider>
                    </div>
                    <p className="text-white slider-text md:hidden">{object.place === "Bedroom" ? t("about.bedrooms.text-sm") : t("about.living.text-sm")} </p>
                    <div className="text-white slider-text hidden md:flex md:justify-evenly">
                        <p className="md:w-3/5 lg:w-2/5 slider-text-md p-4 rounded-2xl">{object.place === "Bedroom" ? t("about.bedrooms.text-lg-one") : t("about.living.text-lg-one")}</p>
                        <p className="md:w-3/5 lg:w-2/5 slider-text-md p-4 rounded-2xl">{object.place === "Bedroom" ? t("about.bedrooms.text-lg-two") : t("about.living.text-lg-two")}</p>
                        <p className="md:hidden lg:block lg:w-2/5 slider-text-md p-4 rounded-2xl"> {object.place === "Bedroom" ? t("about.bedrooms.text-lg-three") : t("about.living.text-lg-three")}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
