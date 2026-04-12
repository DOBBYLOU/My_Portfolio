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

function HoneyAbout() {
    return (
        <div className={`${Styles.aboutText}`}>
            <h4>My first project</h4>
            <p>This is my first project. Although it is still in an early stage and not fully responsive, it allowed me to gain valuable experience. I spent approximately two months working on it, and upon completion, despite the numerous mistakes it contains, I developed a strong understanding of the importance of proper code naming, effective styling practices, and maintaining high standards as a developer.</p>

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

function VelocityAbout() {
    return (
        <div className={`${Styles.aboutText}`}>
            <h4>Structure + Js</h4>
            <p> This website was developed after I studied the BEM (Block–Element–Modifier) methodology, which significantly improved my approach to structuring styles and markup. The codebase became cleaner and more maintainable, existing bugs were resolved, and JavaScript logic was successfully implemented.
                Through this project, I moved beyond simply understanding how websites are built to writing code that is clear and maintainable for other developers. It was also during this project that I began working with version control using Git and GitHub for the first time.</p>
        </div >
    )
}

function PortfolioText() {
    return (
        <div className={Styles.about}>
            React + Git
        </div>
    )
}

function PortfolioAbout() {
    return (
        <div className={`${Styles.aboutText}`}>
            <h4>React + Git</h4>
            <p> This is my portfolio website (the one you are currently viewing). Although I have worked with React before, this is the first React site I can showcase for various reasons some of my other projects are lost, and for others, I no longer have access. This site includes routing functionality and is managed using GitHub.
            </p>
        </div >
    )
}

function Portfolio() {
    return (
        <div className={`${Styles.portfolio}`}>
            <Header Page={"Portfolio"} />
            <div className={`container ${Styles.cards}`}>
                <SiteCard Screen={"/Imgs/Screens/honey-screen.png"} Demo={"https://dobbylou.github.io/Honey_Site/"} Git={"https://github.com/DOBBYLOU/Honey_Site.git"} Name={<HoneyText />} About={<HoneyAbout />} />
                <SiteCard Screen={"/Imgs/Screens/velocity-screen.png"} Demo={"https://dobbylou.github.io/Velocity/"} Git={"https://github.com/DOBBYLOU/Velocity.git"} Name={<VelocityText />} About={<VelocityAbout />} />
                <SiteCard Screen={"/Imgs/Screens/portfolio-screen.png"} Demo={"https://my-portfolio-qqas.vercel.app/"} Git={"https://github.com/DOBBYLOU/My_Portfolio.git"} Name={<PortfolioText />} About={<PortfolioAbout />} />
            </div>
        </div>
    )
}

export default Portfolio