import { useState } from "react"
import Styles from "./SiteCard.module.css"
import ModalWindow from "../Modal/ModalWindow";


function SiteCard({ Screen, Demo, Git, Name, About }) {
    const [aboutOpen, setAboutOpen] = useState(false);

    const Open = () => {
        setAboutOpen(true);
    }



    return (
        <div className={Styles.siteCard}>
            <div className={Styles.screen}>
                <img src={Screen} alt="Screen" />
            </div>



            <div className={Styles.text}>
                <div className={Styles.about}>
                    {Name}
                </div>
                <button className={Styles.aboutBtn} onClick={() => Open()} >About Project</button>
                <ModalWindow active={aboutOpen} setActive={setAboutOpen} autoWidth={true}>
                    {About}

                </ModalWindow>

                <div className={Styles.btns}>
                    <a href={Demo} className={`${Styles.btn} ${Styles.demoBtn}`}>Open Demo</a>
                    <a href={Git} className={Styles.btn}>Open Code</a>
                    {/* <a href="https://dobbylou.github.io/Velocity/">Velocity-Site</a> */}
                </div>
            </div>

        </div>
    )
}

export default SiteCard