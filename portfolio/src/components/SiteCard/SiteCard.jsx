import { useState } from "react";
import Styles from "./SiteCard.module.css";
import ModalWindow from "../Modal/ModalWindow";

function SiteCard({ project }) {
  const { name, desc, screen, demo, git } = project;

  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className={Styles.siteCard}>
      <div className={Styles.screen}>
        <img src={screen} alt="Screen" />
      </div>

      <div className={Styles.text}>
        <div className={Styles.about}>{name}</div>
        <button className={Styles.aboutBtn} onClick={() => setAboutOpen(true)}>
          About Project
        </button>

        <ModalWindow
          isOpen={aboutOpen}
          setIsOpen={setAboutOpen}
          autoWidth={true}
        >
          <div className={`${Styles.aboutText}`}>
            <h4>{name}</h4>

            <p>{desc}</p>
          </div>
        </ModalWindow>

        <div className={Styles.btns}>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${Styles.btn} ${Styles.demoBtn}`}
          >
            Open Demo
          </a>
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.btn}
          >
            Open Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
