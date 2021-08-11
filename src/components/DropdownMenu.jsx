import { useRef, useEffect } from "react";
export default function DropdownMenu({ dropDawn, menuDropDawn }) {
  const active = dropDawn;
  const childrenModifyMenu = menuDropDawn;

  return (
    <>
      <div className={active ? "menuDropDawn" : "menuDropDawn__disabled"}>
        <nav className="menuDropDawn__container">
          <ul className="menuDropDawn__list">
            <li className="menuDropDawn__item">
              <a
                href="#"
                className="menuDropDawn__link"
                onClick={childrenModifyMenu}
              >
                Inicio
              </a>
            </li>
            <li className="menuDropDawn__item">
              <a
                href="#skill"
                className="menuDropDawn__link"
                onClick={childrenModifyMenu}
              >
                Habilidades
              </a>
            </li>
            <li className="menuDropDawn__item">
              <a
                href="#proyect"
                className="menuDropDawn__link"
                onClick={childrenModifyMenu}
              >
                Proyectos
              </a>
            </li>
            <li className="menuDropDawn__item">
              <a
                href="#contact"
                className="menuDropDawn__link"
                onClick={childrenModifyMenu}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
