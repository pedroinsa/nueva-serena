import Header from "./Header/Header"
import FirstComponent from "./KitchenBathroom/FirstComponent"
import SecondComponent from "./GroupFour/SecondComponent"
import { useEffect } from "react"
import dorm1 from "../../assets/about/dormitorio1.jpg"
import dorm2 from "../../assets/about/dormitorio2.jpg"
import dorm3 from "../../assets/about/dormitorio3.jpg"
import dorm4 from "../../assets/about/dormitorio5.jpeg"
import liv1 from "../../assets/about/living1.jpg"
import liv2 from "../../assets/about/living2.jpg"
import liv3 from "../../assets/about/living3.jpg"
import liv4 from "../../assets/about/living5.jpeg"

import "./About.css"


function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const first = { array: [dorm1, dorm2, dorm3, dorm4], place: "Bedroom" }
    const second = { array: [liv1, liv2, liv3, liv4], place: "Living room" }
    return (
        <div className="flex flex-col items-center about about-top">
            <Header />
            <FirstComponent />
            <SecondComponent object={first} />
            <SecondComponent object={second} />

        </div>
    )
}

export default About