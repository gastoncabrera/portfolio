export default function Card({ proyects }) {
  let algo = { proyects };
  console.log(algo);
  return (
    <>
      <div className={algo.id === 1 ? " prueba" : "card__container"}>
        <div className="card__containerImage">
          <img
            src={proyects.img}
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
          <div className="card__linksContainer">
            <a href={proyects.demoLink} className="card__link demo">
              Demo
            </a>
            <a
              href={`https://github.com/gastoncabrera/${proyects.repoLikn}`}
              className="card__link code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
