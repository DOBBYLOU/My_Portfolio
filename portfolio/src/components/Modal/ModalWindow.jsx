import Styles from "./ModalWindow.module.css"

function ModalWindow({ active, setActive, children }) {
    return (
        <div className={`${Styles.back} ${active ? Styles.active : ""}`} onClick={() => setActive(false)} >
            <div className={`${Styles.modal} `} onClick={(e) => e.stopPropagation()}>{children}</div>
        </div >
    )
}

export default ModalWindow