import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";

import "../sass/pages/home.scss";
function Home() {
  const [positionproyect, setPositionproyect] = useState(false);
  const [positioncontact, setPositioncontact] = useState(false);
  const [positionskill, setPositionskill] = useState(false);
  const [positionInit, setPositionInit] = useState(true);
  useEffect(() => {
    const showPositionInit = () => {
      if (window.scrollY < 350) {
        setPositionInit(true);
        setPositionskill(false);
        setPositionproyect(false);
        setPositioncontact(false);
      }
      if (window.scrollY >= 350 && window.scrollY < 800) {
        setPositionInit(false);
        setPositionskill(true);
        setPositionproyect(false);
        setPositioncontact(false);
      }
      if (window.scrollY >= 800 && window.scrollY < 1650) {
        setPositionInit(false);
        setPositionskill(false);
        setPositionproyect(true);
        setPositioncontact(false);
      }
      if (window.scrollY >= 1650) {
        setPositionInit(false);
        setPositionskill(false);
        setPositionproyect(false);
        setPositioncontact(true);
      }
    };
    window.addEventListener("scroll", showPositionInit);
  }, []);
  return (
    <>
      <Header
        positionproyect={positionproyect}
        positioncontact={positioncontact}
        positionskill={positionskill}
        positionInit={positionInit}
      />
      <Hero />
      <Main positionskill={positionskill} />
      <Footer />
    </>
  );
}

export default Home;
