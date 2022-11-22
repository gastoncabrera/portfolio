import { Suspense, lazy } from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Footer from "../components/Footer";
// import DropdownMenu from "../components/DropdownMenu";
import "../sass/pages/home.scss";

const Main = lazy(() => import("../components/Main"));
const Header = lazy(() => import("../components/Header"));
const DropdownMenu = lazy(() => import("../components/DropdownMenu"));
const Hero = lazy(() => import("../components/Hero"));
const Footer = lazy(() => import("../components/Footer"));

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

  if (!skill || !proyects)
    return (
      <header id="header" style={{ height: "100vh" }}>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#011627",
            textAlign: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: "800",
          }}
        >
          Loading...
        </div>
      </header>
    );

  return (
    <>
      <Suspense
        fallback={
          <header id="header" style={{ height: "100vh" }}>
            <div
              style={{
                height: "100vh",
                backgroundColor: "#011627",
                textAlign: "center",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: "800",
              }}
            >
              Loading...
            </div>
          </header>
        }
      >
        <Header setMenu={setMenu} menu={menu} />
        <DropdownMenu menu={menu} setMenu={setMenu} />
        <Hero skill={skill} proyects={proyects} />
        <Main skill={skill} proyects={proyects} />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
