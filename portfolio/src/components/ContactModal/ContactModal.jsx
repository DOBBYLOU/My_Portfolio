import ModalWindow from "../Modal/ModalWindow";
import Contacts from "../../constants/Contacts";
import Styles from "./ContactModal.module.css";

const ContactModal = ({ active, setActive }) => {
  return (
    <ModalWindow isOpen={active} setIsOpen={setActive}>
      <h2>You can contact me here:</h2>
      {Contacts.map((contact) => (
        <h4 key={contact.name} className={Styles.copy}>
          {contact.name}:{" "}
          {contact.href ? (
            <a href={contact.href}>{contact.value}</a>
          ) : (
            contact.value
          )}
        </h4>
      ))}
    </ModalWindow>
  );
};

export default ContactModal;
