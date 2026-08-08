import MyPhoto from "../../assets/Imgs/my-photo.png";
import Styles from "./MyPerson.module.css";

function MyPerson() {
  return (
    <div className={`${Styles.myPerson} container`}>
      <div className={Styles.about}>
        <h1>Alexander Andriianov</h1>
        <p>
          Hi, I'm a React Developer from Ukraine. You are on my portfolio site.
          Here you can learn about my journey, explore my projects, and find
          ways to get in touch with me.
        </p>
        <p>
          I enjoy building modern web applications with React, constantly
          improving my skills, and following the latest trends in frontend
          development. My goal is not just to write code, but to create products
          that solve real problems and provide value to users.
        </p>
      </div>
      <div className={Styles.myPhoto}>
        <img src={MyPhoto} alt="Alexander Andriianov"></img>
      </div>
    </div>
  );
}

export default MyPerson;
