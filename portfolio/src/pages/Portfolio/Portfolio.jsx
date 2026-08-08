import Header from "../../widgets/Header/Header";
import SiteCard from "../../components/SiteCard/SiteCard";
import projects from "../../constants/Projects";
import Styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <div className={Styles.portfolio}>
      <Header />
      <div className={`container ${Styles.cards}`}>
        {projects.map((project) => {
          return (
            // Fixed {} to project
            <SiteCard key={project.id} project={project} />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
