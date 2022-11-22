import Fade from "react-reveal/Fade";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Card({ proyects }) {

  return (
    <>
      <Fade>
        <div className="card__container">
          <div className="card__containerImage">
            {
              !proyects ?
                <Skeleton className="card__image" borderRadius='0.25rem' baseColor="#b0b0b0" highlightColor="#444" />
                :
                <img
                  src={`https://floating-spire-53343.herokuapp.com/proyect/proyect-image/${proyects.image}`}
                  alt={proyects.title}
                  loading="lazy"
                  className="card__image"
                />
            }

          </div>
          <div className="card__containerInfo">
            <h4 className="card__title">{proyects.title || <Skeleton baseColor="#b0b0b0" highlightColor="#444" />}</h4>
            <div className="card__skillsContainer">
              {proyects.skill.map((item) => (
                <p key={item._id} className="card__skills">
                  {item.skill}
                </p>
              ))}
            </div>
            <p className="card__description">{proyects.description || <Skeleton baseColor="#b0b0b0" highlightColor="#444" /> }</p>
          </div>
          <div className="card__linksContainer">
            <a
              href={proyects.demolink}
              target="_blank"
              rel="noreferrer"
              className="card__link demo"
            >
              Proyecto
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
                Codigo
              </a>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
}
