import React  from "react";

export default function Header({ setMenu, menu }) {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="logo">
          <div className="logo__container left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              className="angleBrackets left"
              viewBox="0 0 16 16"
            >
              <path
                fill="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <span className="logo__center">GC</span>
          <div className="logo__container right">
            <span className="logo__forwardSlash">/</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              className="angleBrackets right"
              viewBox="0 0 16 16"
            >
              <path
                fill="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#inicio" className={"navbar__link"}>
                Inicio
              </a>
            </li>
            <li className="navbar__item habilidades">
              <a href="#skill" className={"navbar__link"}>
                Habilidades
              </a>
            </li>
            <li className="navbar__item proyecto">
              <a href="#proyect" className={"navbar__link"}>
                Proyectos
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" className={"navbar__link"}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="list__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            fill="white"
            className="list"
            viewBox="0 0 16 16"
            onClick={() => setMenu(!menu)}
          >
            <path
              fill="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
