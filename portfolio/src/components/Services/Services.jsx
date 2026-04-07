import { useEffect, useState } from "react";
import Header from "../Header/Header"
import Hero from "../Hero/Hero"

import Styles from "./Services.module.css"

function Services() {
    const [Scroll, setScroll] = useState(0);

    const handleScroll = () => setScroll(window.scrollY);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log(Scroll);
    return (
        <div className={`${Styles.services} ${Scroll > 800 ? Styles.scroll : ""}`}>
            <Header Page={"Services"} NoVisible={Scroll > 300 ? true : false} />
            <Hero />
        </div>
    )
}

export default Services