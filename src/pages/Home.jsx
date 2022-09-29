import { useState, Suspense, lazy } from "react";
import React  from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Main from "../components/Main";
import Footer from "../components/Footer";
import DropdownMenu from "../components/DropdownMenu";
import "../sass/pages/home.scss";

const Main = lazy(() => import("../components/Main"));

function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header setMenu={setMenu} menu={menu} />
      <DropdownMenu menu={menu} setMenu={setMenu} />
      <Hero />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Main />
			</Suspense>
      <Footer />
    </>
  );
}

export default Home;
