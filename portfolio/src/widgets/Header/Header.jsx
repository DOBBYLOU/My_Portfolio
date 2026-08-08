import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../../constants/Navigation";
import MenuIcon from "../../assets/Icons/menu-icon.png";
import ContactsIcon from "../../assets/Icons/contacts-icon.png";
import ContactModal from "../../components/ContactModal/ContactModal";
import Styles from "./Header.module.css";

function Header({ isHidden }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenContact = () => setIsContactModalOpen(true);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div
      className={`container ${Styles.header} ${isHidden ? Styles.noVisible : ""}`}
    >
      <div className={Styles.allLogo}>
        <div className={Styles.logo} translate="no">
          <div className={Styles.name}>Alexander</div>
          <div className={Styles.lastName}>Andriianov</div>
        </div>
        <div className={Styles.profession}>Front-End Developer</div>
      </div>

      <nav className={`${Styles.nav} ${isMenuOpen ? Styles.isMenuOpen : ""}`}>
        {Navigation.map((nav) => (
          <NavLink
            key={nav.to}
            to={nav.to}
            className={({ isActive }) => (isActive ? Styles.active : "")}
          >
            {nav.value}
          </NavLink>
        ))}
      </nav>
      <div>
        <button className={Styles.contBtn} onClick={handleOpenContact}>
          <p>contacts</p>
          <img src={ContactsIcon} alt="Cont" />
        </button>
      </div>
      <div className={Styles.openMenu}>
        <button className={Styles.navBtn} onClick={handleToggleMenu}>
          <img src={MenuIcon} alt="menu" />
        </button>
      </div>

      <ContactModal
        active={isContactModalOpen}
        setActive={setIsContactModalOpen}
      />
    </div>
  );
}

export default Header;
