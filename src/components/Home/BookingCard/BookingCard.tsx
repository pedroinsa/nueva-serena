import { TbBrandBooking } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./BookingCard.css"
import { useTranslation } from "react-i18next";

function BookingCard() {
    const { t } = useTranslation()
    
    return (
        <div className="flex w-full bg-blue-300 justify-center py-5 booking">
            <div className="flex booking-container items-center ">
                <div className=" flex flex-col justify-center items-center sm:p-6 md:p-5 mr-3 booking-card ">
                    <h1 className="font-bold sm:text-xl">{t("home.booking.title")}</h1>
                    <p>{t("home.booking.text")}</p>
                    <button className="mt-1 sm:mt-4 sm:w-2/5 mb-2 booking-button" >
                        <Link className="flex justify-center" to="https://www.booking.com/hotel/ar/cabana-km13.es.html?label=Spanish_Argentina_ES_AR_20153587225-6h15TH8LvM25bNckrW9zZwS217247257083%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Adsa-162435869305%3Alp1000104%3Ali%3Adec%3Adm&sid=c4d7a2b3e05daf2b6e0753bb0c535296&aid=318615&ucfs=1&arphpl=1" target={"_blank"}>
                            {t("home.booking.button")}
                            <span className="text-2xl">
                                <TbBrandBooking />
                            </span>
                        </Link>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BookingCard 