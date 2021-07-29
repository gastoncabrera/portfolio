import Card from "./Card";
import { allProyects, skills } from "../const";
export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <h1 className="main__title">Habilidades</h1>
          <div className="main__containerSkills">
            {skills.map((item) => (
              <img
                key={item.id}
                src={item.img}
                alt={item.skill}
                className="main__skills"
                title={item.skill}
              />
            ))}
          </div>
        </div>
        <div className="main__proyects">
          <h1 className="main__titleProyects">Proyectos</h1>
          <div className="card">
            {allProyects.map((proyect) => (
              <Card proyects={proyect} key={proyect.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
