import React,{useEffect, useState}  from "react";
import axios from "axios";
import { animated, useSpring } from "react-spring";
import Perfil from "../assets/perfinpng2.png";

const baseURL = "https://floating-spire-53343.herokuapp.com/skill";
const URL = "https://floating-spire-53343.herokuapp.com/proyect";

export default function Hero() {
  const [post, setPost] = useState(null);
  const [proyects, setProyects] = useState(null);
  const someSkills = ()=>{
    if(!post) return 
    else {
      let res = []
      const skill = post.find(element => element._id === '6334a070372f9a7c1e787ca4')
      const skill_one = post.find(element => element._id === '6334a084372f9a7c1e787dd2')
      const skill_two = post.find(element => element._id === '6334a08c372f9a7c1e787e3f')
      res.push(skill,skill_one,skill_two)
      return res
    }
  }

  const someSkillFloat = ()=>{
    if(!post) return 
    else {
      let res = []
      const skillfloat = post.find(element => element._id === '6334a070372f9a7c1e787ca4')
      const skillfloat_one = post.find(element => element._id === '6334a084372f9a7c1e787dd2')
      const skillfloat_two = post.find(element => element._id === '6334a08c372f9a7c1e787e3f')
      const skillfloat_three = post.find(element => element._id === '6334a043372f9a7c1e787a0b')
      res.push(skillfloat,skillfloat_one,skillfloat_two,skillfloat_three)
      return res
    }
  }

  const someProyects = ()=>{
    if(!proyects) return 
    else {
      let res = []
      const proyect = proyects.find(element => element._id === '6334e1c9daab3183fc34fd3c')
      const proyect_one = proyects.find(element => element._id === '6335ac70587416ae543ecb4b')
      res.push(proyect,proyect_one)
      return res
    }
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setProyects(response.data);
    });
  }, []);
  const styles = useSpring({
    from: { x: -500 },
    to: { x: 0 },
    config: { frequency: 3 },
  });
  const skillProyectAnimation = useSpring({
    from: { x: 500 },
    to: { x: 0 },
    config: { frequency: 3 },
  });
  const heroLinksAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { frequency: 4 },
  });


  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero__container">
          <div className="hero__containerRight">
            <div className="hero__descriptionContainer">
              <span className="hero__greeting">
                Hola mi nombre es
                <h1 className="hero__name">Gaston Cabrera</h1>
              </span>
              <p className="hero__workPosition">Soy Front-end developer</p>
            </div>
            <div className="hero__skillAndProyects">
              <h1 className="skill__title" id="skills">
                Algunas Habilidades
              </h1>
              <div className="skill__container">
                {someSkills()?.map((item) => (
                  <animated.div style={skillProyectAnimation} key={item._id}>
                    <img
                      src={`https://floating-spire-53343.herokuapp.com/skill/skill-image/${item.image}`} 
                      alt={item.skill}
                      className={`hero__skillRight ${item.skill}`}
                    />
                 </animated.div>
                ))}
              </div>
              <h1 className="hero__proyectsTitle" id="proyects">
                Algunos Proyectos
              </h1>
              <div className="hero__proyectsContainer">
                {someProyects()?.map(item =>
                  <a
                    href={item.demolink}
                    target="_blank"
                    rel="noreferrer"
                    key={item._id}
                  >
                    <animated.div style={skillProyectAnimation} className="hero__proyect">
                      <img
                        className="hero__proyectImage"
                        src={`https://floating-spire-53343.herokuapp.com/proyect/proyect-image/${item.image}`}
                        alt={item.title}
                      />
                    </animated.div>
                  </a>
                )
                }
              </div>
            </div>
          </div>
          <div className="hero__containerLeft">
            <animated.div style={styles} className="hero__imageContainer">
              <img
                src={Perfil}
                alt="foto de perfil de Gaston Cabrera"
                className="hero__image"
              />
              {someSkillFloat()?.map((skl) => (
                <div className="hero__containerSkill" key={skl._id}>
                  <img
                    src={`https://floating-spire-53343.herokuapp.com/skill/skill-image/${skl.image}`} 
                    alt={skl.skill}
                    className={`hero__skill ${skl.skill}`}
                  />
                </div>
              ))}
            </animated.div>
            <div className="hero__contactContainer">
              <nav className="hero__contact">
                <animated.ul style={heroLinksAnimation} className="hero__contactList">
                  <li className="hero__contactItem">
                    <a
                      href="mailto:cabreragastonivan31@gmail.com"
                      className="hero__contactLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        className="email"
                        fill="#f6f7f8"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>
                    </a>
                  </li>
                  <li className="hero__contactItem">
                    <a
                      href="https://github.com/gastoncabrera"
                      className="hero__contactLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        fill="#f6f7f8"
                        className="github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </li>
                  <li className="hero__contactItem">
                    <a
                      href="https://www.linkedin.com/in/gaston-cabrera-b39a17204/"
                      className="hero__contactLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        fill="#f6f7f8"
                        className="linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </li>
                </animated.ul>
              </nav>
            </div>
          </div>
        </div>
        <a
          href="https://www.canva.com/design/DAEcCloZWlw/tAFCOVR_J4mHqA6ssd7DtQ/view?utm_content=DAEcCloZWlw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
          rel="noreferrer"
        >
          <div className="curriculum" title="Curriculum">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="cvIcon"
              viewBox="0 0 16 16"
            >
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
            </svg>
          </div>
        </a>
      </section>
    </>
  );
}
