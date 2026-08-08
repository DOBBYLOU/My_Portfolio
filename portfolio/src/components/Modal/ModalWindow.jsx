import Styles from "./ModalWindow.module.css";

function ModalWindow({ isOpen, setIsOpen, children }) {
  const handleClose = () => setIsOpen(false);

  return (
    <div
      className={`${Styles.back} ${isOpen ? Styles.active : ""}`}
      onClick={handleClose}
    >
      <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
