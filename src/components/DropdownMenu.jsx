export default function DropdownMenu({ menu, setMenu }) {
  // const active = dropDawn;
  // const childrenModifyMenu = menuDropDawn;

  return (
    <>
      <div className={menu ? "menuDropDawn" : "menuDropDawn__disabled"}>
        <nav className="menuDropDawn__container">
          <ul className="menuDropDawn__list">
            <li className="menuDropDawn__item">
              <a
                href="#inicio"
                className="menuDropDawn__link"
                onClick={() => setMenu(false)}
              >
                Inicio
              </a>
            </li>
            <li className="menuDropDawn__item">
              <a
                href="#skill"
                className="menuDropDawn__link"
                onClick={() => setMenu(false)}
              >
                Habilidades
              </a>
            </li>
            <li className="menuDropDawn__item">
              <a
                href="#proyect"
                className="menuDropDawn__link"
                onClick={() => setMenu(false)}
              >
                Proyectos
              </a>
            </li>
            <li className="menuDropDawn__item">
              <a
                href="#contact"
                className="menuDropDawn__link"
                onClick={() => setMenu(false)}
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
