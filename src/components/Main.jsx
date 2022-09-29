import { useSprings, animated } from "react-spring";
import Card from "./Card";
import React ,{ useEffect, useState} from "react";
import axios from "axios";

const baseURL = "https://floating-spire-53343.herokuapp.com/skill";
const URL = "https://floating-spire-53343.herokuapp.com/proyect";

export default function Main() {
  const [post, setPost] = useState(null);
  const [proyects, setProyects] = useState(null);

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

  const appearAnimations = ()=>{ 
    if(post) return
  // eslint-disable-next-line react-hooks/rules-of-hooks
  else useSprings(
    post.length,
    post.map((item, index, arrayItSelf) => {
      return {
        from: {
          transform: `translateX(${index % 2 ? 400 : -400}%)`,
        },
        transform: "translateX(0)",
        config: { frequency: 2 },
      };
    })
  );
  }

  return (
    <>
      <div className="main">
        <div className="main__container">
          <h1 className="main__title" id="skill">
            Habilidades
          </h1>
          <div className="main__containerSkills">
            {
               post?.map((item, index) => (
                <animated.div style={appearAnimations[index]} key={item._id}>
                  <img
                    // src={item.img}
                    src={`https://floating-spire-53343.herokuapp.com/skill/skill-image/${item.image}`} 
                    alt={item.skill}
                    className="main__skills"
                    loading="lazy"
                    title={item.skill}
                  />
               </animated.div>
              ))
            }
          </div>
        </div>
        <div className="main__proyects">
          <h1 className="main__titleProyects" id="proyect">
            Proyectos
          </h1>
          <div className="card">
            {proyects?.map((proyect) => (
              <Card proyects={proyect} key={proyect._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
