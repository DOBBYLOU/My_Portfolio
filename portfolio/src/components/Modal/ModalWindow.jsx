import Styles from "./ModalWindow.module.css"

function ModalWindow({ active, setActive, autoWidth, children }) {
    return (
        <div className={`${Styles.back} ${active ? Styles.active : ""}`} onClick={() => setActive(false)} >
            <div className={`${Styles.modal} ${autoWidth ? Styles.autoWidth : ""}`} onClick={(e) => e.stopPropagation()}>{children}</div>
        </div >
    )
}

export default ModalWindow