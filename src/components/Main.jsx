import React from "react";
import Card from "./Card";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Main({ skill, proyects }) {

  return (
    <>
      <div className="main">
        <div className="main__container">
          <h1 className="main__title" id="skill">
            Habilidades
          </h1>
          {
            !skill ?
              <Skeleton className="main__skills skeleton" inline={true} borderRadius='1.25rem' width={50} baseColor="#b0b0b0" highlightColor="#444" count={11} />
              :
              <div className="main__containerSkills">
                {skill?.map((item, index) => (
                  <img
                    src={`https://floating-spire-53343.herokuapp.com/skill/skill-image/${item.image}`}
                    alt={item.skill}
                    className="main__skills"
                    loading="lazy"
                    title={item.skill}
                  />
                ))}
              </div>
          }
        </div>
        <div className="main__proyects">
          <h1 className="main__titleProyects" id="proyect">
            Proyectos
          </h1>
          <div className="card">
            {
              proyects?.map((proyect) => (
                <Card proyects={proyect} key={proyect._id} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
