import Fade from "react-reveal/Fade";
import Img from "../assets/image/Batatabit.png";
const Image = require.context("../assets/image/", true);

export default function Card({ proyects }) {
  return (
    <>
      <Fade>
        <div className="card__container">
          <div className="card__containerImage">
            <img
              src={Image(`./${proyects.img}`)}
              alt={proyects.title}
              className="card__image"
            />
          </div>
          <div className="card__containerInfo">
            <h4 className="card__title">{proyects.title}</h4>
            <div className="card__skillsContainer">
              {proyects.skill.map((item) => (
                <p key={item.id} className="card__skills">
                  {item.skill}
                </p>
              ))}
            </div>
            <p className="card__description">{proyects.description}</p>
          </div>
          <div className="card__linksContainer">
            <a
              href={proyects.demoLink}
              target="_blank"
              rel="noreferrer"
              className="card__link demo"
            >
              Demo
            </a>
            {proyects.repoLikn === "null" ? (
              <></>
            ) : (
              <a
                href={`https://github.com/gastoncabrera/${proyects.repoLikn}`}
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
