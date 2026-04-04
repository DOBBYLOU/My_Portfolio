import Styles from "./ModalWindow.module.css"

function ModalWindow({ active, setActive, children }) {
    return (
        <div className={active ? `${Styles.back} ${Styles.active}` : `${Styles.back}`} onClick={() => setActive(false)} >
            <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>{children}</div>
        </div >
    )
}

export default ModalWindow