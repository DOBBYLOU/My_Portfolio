import Styles from "./Card.module.css"

function Card({ src, children }) {


    return (
        <div className={`${Styles.card}`}>
            <img src={src} alt="Icon" />
            {children && <div>{children}</div>}

        </div>)

}

export default Card