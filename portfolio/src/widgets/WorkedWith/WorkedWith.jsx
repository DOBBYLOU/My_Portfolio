import Card from "../../components/Card/Card";
import technologies from "../../constants/Stack";
import Styles from "./WorkedWith.module.css";

function WorkedWith() {
  return (
    <div className={`container ${Styles.workedWith} `}>
      <h4>Worked with:</h4>
      <div className={Styles.cards} translate="no">
        {technologies.map(({ value, icon }) => (
          <Card key={value} src={icon}>
            {value}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WorkedWith;
