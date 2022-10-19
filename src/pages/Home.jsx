import { Suspense, lazy } from "react";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import Footer from "../components/Footer";
import DropdownMenu from "../components/DropdownMenu";
import "../sass/pages/home.scss";

const Main = lazy(() => import("../components/Main"));

const URLSkill = "https://floating-spire-53343.herokuapp.com/skill";
const URLProyects = "https://floating-spire-53343.herokuapp.com/proyect";
function Home() {
  const [skill, setSkill] = useState(null);
  const [proyects, setProyects] = useState(null);

  useEffect(() => {
    axios.get(URLSkill).then((response) => {
      setSkill(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(URLProyects).then((response) => {
      setProyects(response.data);
    });
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header setMenu={setMenu} menu={menu} />
      <DropdownMenu menu={menu} setMenu={setMenu} />
      <Hero skill={skill} proyects={proyects} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Main skill={skill} proyects={proyects} />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
