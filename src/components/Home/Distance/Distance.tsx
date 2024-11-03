import { useTranslation } from "react-i18next"
import "./Distance.css"

export default function Distance() {
    const { t } = useTranslation()

    const array = [{ distance: "0.9 km", text: "Playa Serena" }, { distance: "13 km", text: "Centro Civico" },
    { distance: "27 km", text: t("home.distance.airport") }, { distance: "1.9 km", text: "Playa Puerto Moreno" }, { distance: "2.3 km", text: "Playa del Viento" },
    { distance: "9.6 km", text: "Playa Lago Gutierrez" }, { distance: "13 km", text: "Cerro Catedral" }, { distance: "11 km", text: "Colonia Suiza" }]
    return (
        <div className="flex flex-col items-center border-2 justify-center distance-box ">
            <h1 className="w-full text-center border-2 text-xl">{t("home.distance.title")}</h1>
            <div className="distance-group">
                {array.map((item) =>
                    <div className="border-2 flex flex-col items-center" key={item.text}>
                        <span className="km">{item.distance}</span>
                        <p className="text-lg">{item.text}</p>
                    </div>)}
            </div>
        </div>
    )
}
