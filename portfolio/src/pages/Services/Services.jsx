import Header from "../../widgets/Header/Header";
import Hero from "../../components/Hero/Hero";
import useScroll from "../../hooks/useScroll";

import Styles from "./Services.module.css";

function Services() {
  const scrollY = useScroll();
  const backTriggerLine = 800;
  const headerTriggerLine = 300;

  return (
    <div
      className={`${Styles.services} 
    ${scrollY > backTriggerLine ? Styles.scroll : ""}`}
    >
      <Header isHidden={scrollY > headerTriggerLine} />
      <Hero />
    </div>
  );
}

export default Services;
