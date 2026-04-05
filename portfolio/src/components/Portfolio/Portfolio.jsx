import Header from "../Header/Header"
import SiteCard from "../SiteCard/SiteCard"
import Styles from "./Portfolio.module.css"

function HoneyText() {
    return (
        <div className={Styles.about}>
            My first project
        </div>
    )
}

function VelocityText() {
    return (
        <div className={Styles.about}>
            Structure + Js
        </div>
    )
}

function Portfolio() {
    return (
        <div className={`${Styles.portfolio}`}>
            <Header Page={"Portfolio"} />
            <div className={`${Styles.cards} container`}>
                <SiteCard Screen={"/Imgs/Screens/honey-screen.png"} Demo={"https://dobbylou.github.io/Honey_Site/"} Git={"https://github.com/DOBBYLOU/Honey_Site.git"} about={<HoneyText />} />
                <SiteCard Screen={"/Imgs/Screens/velocity-screen.png"} Demo={"https://dobbylou.github.io/Velocity/"} Git={"https://github.com/DOBBYLOU/Velocity.git"} about={<VelocityText />} />
            </div>
        </div>
    )
}

export default Portfolio