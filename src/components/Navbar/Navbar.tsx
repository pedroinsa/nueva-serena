import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import serena from '../../assets/serena2.png'
import es from "../../assets/navbar/es.png"
import en from "../../assets/navbar/uk.png"
import "./Navbar.css"


export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { t, i18n } = useTranslation()
    function languageSelect() {
        if (i18n.language === "es") {
            i18n.changeLanguage("en")
            localStorage.setItem("lang", "en")
        } else if (i18n.language === "en") {
            i18n.changeLanguage("es")
            localStorage.setItem("lang", "es")
        }
        console.log(localStorage.length)
        console.log(localStorage.key(1))
    }

    const content = <>
        <div>
            <ul className='flex flex-col h-5/6 w-full md:hidden justify-between'>

                <Link to="/">{t("navbar.home")}</Link>
                <Link to="/about">{t("navbar.about")}</Link>
                <Link to="/contact">{t("navbar.contact")}</Link>
                <div className='flex'>
                    <img className='languages-img' src={es} alt="es" />
                    <label className="switch mt-1">
                        <input type="checkbox" onChange={languageSelect} checked={i18n.language === "en" ? true : false} />
                        <span className="slider round"></span>
                    </label>
                    <img className='languages-img' src={en} alt="en" />
                </div>
            </ul>
        </div>
    </>
    return (
        <nav className='flex justify-evenly nav'>
            <img className='img-home' src={serena} alt="" />
            <div className='flex w-4/6 justify-evenly items-center hidden md:flex lg:flex'>
                <NavLink className={({ isActive }) => `${isActive ? "active-link" : ""} option-nav `} to="/">{t("navbar.home")}</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "active-link" : ""} option-nav `} to="/about">{t("navbar.about")}</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "active-link" : ""} option-nav `} to="/contact">{t("navbar.contact")}</NavLink>
                <div className='flex'>
                    <img className='languages-img' src={es} alt="es" />
                    <label className="switch mt-1">
                        <input type="checkbox" onChange={languageSelect} checked={i18n.language === "en" ? true : false} />
                        <span className="slider round"></span>
                    </label>
                    <img className='languages-img' src={en} alt="en" />
                </div>
            </div>
            {isOpen && content}

            <div className='pt-5 md:hidden' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

        </nav>
    )
}
