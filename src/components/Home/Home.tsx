import { useEffect } from "react";
import BookingCard from "./BookingCard/BookingCard"
import Landing from "./Landing/Landing";
import Map from "./Map/Map";



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.history.scrollRestoration = 'manual';
    }, []);


    return (
        <div className="flex flex-col items-center">
            <Landing />
            <Map />
            <BookingCard />
        </div>
    )
}

export default Home




{/* <iframe className="mt-5 mb-5" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d751.6382222691113!2d-71.4453619!3d-41.1006147!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1722367457865!5m2!1ses-419!2sar" width="600"
             height="450" 
             loading="lazy"></iframe> */}