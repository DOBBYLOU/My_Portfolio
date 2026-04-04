import WorkedWith from "../WorkedWith/WorkedWith";
import MyPerson from "../MyPerson/MyPerson"
import Header from "../Header/Header"

function Main() {
    return (
        <div className="main">
            <Header Page={"Main"} />
            <MyPerson />
            <WorkedWith />
        </div>
    );
}

export default Main;