import Styles from "./MyPerson.module.css"

function MyPerson() {
    return (
        <div className={`${Styles.myPerson} container`}>
            <div className={`${Styles.about}`}>
                <h1>Andrianov Sasha</h1>
                <p>Hi, I'm a react.js developer from Ukraine. You are on my portfolio site. Here you can learn about how I started my journey, what I have now and how to contact me.</p>
                <p>I work with modern technologies, constantly improve my skills and follow new trends in development. It is important for me not to just write code, but to create products that solve real problems and benefit users.</p>

            </div>
            <div className={`${Styles.myPhoto}`}>
                <img src="Imgs/photo_5359394229748176775_y.png"></img>
            </div>
        </div>
    )
}

export default MyPerson