import Fade from "react-reveal/Fade";
import React  from "react";


export default function Card({ proyects }) {
  return (
    <>
      <Fade>
        <div className="card__container">
          <div className="card__containerImage">
            <img
              src={`https://floating-spire-53343.herokuapp.com/proyect/proyect-image/${proyects.image}`}
              alt={proyects.title}
              loading="lazy"
              className="card__image"
            />
          </div>
          <div className="card__containerInfo">
            <h4 className="card__title">{proyects.title}</h4>
            <div className="card__skillsContainer">
              {proyects.skill.map((item) => (
                <p key={item._id} className="card__skills">
                  {item.skill}
                </p>
              ))}
            </div>
            <p className="card__description">{proyects.description}</p>
          </div>
          <div className="card__linksContainer">
            <a
              href={proyects.demolink}
              target="_blank"
              rel="noreferrer"
              className="card__link demo"
            >
              Demo
            </a>
            {proyects.repolink === "null" ? (
              <></>
            ) : (
              <a
                href={`https://github.com/gastoncabrera/${proyects.repolink}`}
                target="_blank"
                rel="noreferrer"
                className="card__link code"
              >
                Code
              </a>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
}
