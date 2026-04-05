import Styles from "./SiteCard.module.css"

function SiteCard({ Screen, Demo, Git, about }) {
    return (
        <div className={Styles.siteCard}>
            <div className={Styles.screen}>
                <img src={Screen} />
            </div>
            <div className={Styles.text}>
                <div className={Styles.about}>
                    {about}
                </div>
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