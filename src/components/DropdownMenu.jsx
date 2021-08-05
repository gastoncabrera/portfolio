export default function DropdownMenu({ dropDawn }) {
  const active = dropDawn;
  function Close() {
    document.getElementById("menu").classList.toggle("menuDropDawn__disabled");
  }
  return (
    <>
      <div
        id="menu"
        className={active ? "menuDropDawn" : "menuDropDawn__disabled"}
      >
        <nav className="menuDropDawn__container">
          <ul className="menuDropDawn__list">
            <li className="menuDropDawn__item" onClick={Close}>
              <a href="/" className="menuDropDawn__link">
                Inicio
              </a>
            </li>
            <li className="menuDropDawn__item" onClick={Close}>
              <a href="#skills" className="menuDropDawn__link">
                Habilidades
              </a>
            </li>
            <li className="menuDropDawn__item" onClick={Close}>
              <a href="#proyects" className="menuDropDawn__link">
                Proyectos
              </a>
            </li>
            <li className="menuDropDawn__item" onClick={Close}>
              <a href="#contact" className="menuDropDawn__link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
