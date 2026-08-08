import WorkedWith from "../../widgets/WorkedWith/WorkedWith";
import MyPerson from "../../widgets/MyPerson/MyPerson";
import Header from "../../widgets/Header/Header";

import Styles from "./Home.module.css";

function Home() {
  return (
    <div className={Styles.main}>
      <Header />
      <MyPerson />
      <WorkedWith />
    </div>
  );
}

export default Home;
