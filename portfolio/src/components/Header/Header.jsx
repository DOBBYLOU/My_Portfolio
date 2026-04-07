import { useState } from "react"
import ModalWindow from "../Modal/ModalWindow"
import Styles from "./Header.module.css"
import { Link } from "react-router-dom"




function Header({ Page, NoVisible }) {
    const [showH, setShowH] = useState(false)


    return (
        <div className={`${Styles.header} ${NoVisible ? Styles.noVisible : ""} container`}>
            <div className={Styles.logo} translate="no">
                <div className={Styles.name}>Alexander</div>
                <div className={Styles.lastName}>Andrijanov</div>
            </div>
            <nav className={`${Styles.navH}`}>
                <Link to="/" className={Page === "Main" ? Styles.active : ""}>Main</Link>
                <Link to="/portfolio" className={Page === "Portfolio" ? Styles.active : ""}>Portfolio</Link>
                <Link to="/services" className={Page === "Services" ? Styles.active : ""}>Services</Link>
            </nav>
            <div className={Styles.btns}>
                <button className={Styles.contBtn} onClick={() => setShowH(true)} >contacts</button>
                <div className={Styles.switch}>
                </div>
            </div>

            <ModalWindow active={showH} setActive={setShowH}>
                <h2>You can contact me here:</h2>
                <h4>Telegram: <a href="https://t.me/Sed_zedry07">@Sed_zedry07</a></h4>
                <h4>Instagram: <a href="https://www.instagram.com/andrianov.sn/?__d=1%E6%91%A9%E4%B9%90%E4%B9%90%E7%A4%BE%E5%B7%A5%E5%BA%93%E7%B2%BE%E5%87%86%E5%AE%9A%E4%BD%8D%E6%89%BE%E4%BA%BA%2C%E8%BF%90%E8%90%A5%E6%9C%80%E4%B9%85%E7%9A%84%E7%BD%91%E5%9D%80%E7%8C%8E%E9%AD%94%E7%A4%BE%E5%B7%A5%E5%BA%93%E2%9C%94%EF%B8%8Fxxyy.click">Andrianov.Sn</a></h4>
                <h4 className={Styles.copy}>Phone number(Ukr): +38(096 909 97 12)</h4>
                <h4 className={Styles.copy}>Gmail: Gn8282557@gmail.com</h4>
            </ModalWindow>


        </div >
    )



}

export default Header