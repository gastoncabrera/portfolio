import { useSprings, animated } from "react-spring";
import Card from "./Card";
import { allProyects, skills } from "../const";

export default function Main() {
  const appearAnimations = useSprings(
    skills.length,
    skills.map((item, index, arrayItSelf) => {
      return {
        from: {
          transform: `translateX(${index % 2 ? 400 : -400}%)`,
        },
        transform: "translateX(0)",
        config: { frequency: 2 },
      };
    })
  );
  return (
    <>
      <div className="main">
        <div className="main__container">
          <h1 className="main__title" id="skill">
            Habilidades
          </h1>
          <div className="main__containerSkills">
            {skills.map((item, index) => (
              <animated.div style={appearAnimations[index]} key={item.id}>
                <img
                  src={item.img}
                  alt={item.skill}
                  className="main__skills"
                  title={item.skill}
                />
              </animated.div>
            ))}
          </div>
        </div>
        <div className="main__proyects">
          <h1 className="main__titleProyects" id="proyect">
            Proyectos
          </h1>
          <div className="card">
            {allProyects.map((proyect) => (
              // <Fade left >
              // </Fade>
              <Card proyects={proyect} key={proyect.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
