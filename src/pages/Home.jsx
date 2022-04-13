import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";
import DropdownMenu from "../components/DropdownMenu";

import "../sass/pages/home.scss";
function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Header setMenu={setMenu} menu={menu} />
      <DropdownMenu menu={menu} setMenu={setMenu} />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
