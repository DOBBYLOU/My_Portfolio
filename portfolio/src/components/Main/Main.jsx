import WorkedWith from "../WorkedWith/WorkedWith";
import MyPerson from "../MyPerson/MyPerson"
import Header from "../Header/Header"

import Styles from "./Main.module.css"

function Main() {
    return (
        <div className={`${Styles.main}`}>
            <Header Page={"Main"} />
            <MyPerson />
            <WorkedWith />
        </div>
    );
}

export default Main;