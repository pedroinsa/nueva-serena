import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Error.css"




function Error() {
    const { t } = useTranslation();
    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <div className="error-component flex flex-col justify-center items-center">
                <h1 className="text-white font-serif mb-3 font-bold text-4xl text-center">
                   {t("error")}
                </h1>

                <Link className=" button-error text-white flex justify-center" to="/">
                    <button className="">
                        {t("navbar.home")}
                    </button>
                </Link>

            </div>
            <Footer />
        </div>
    )
}

export default Error