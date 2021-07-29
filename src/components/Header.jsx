export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="logo">
            <div className="logo__container left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
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
                width="1rem"
                height="1rem"
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
            <ul>
              <li>
                <a href="/">inicio</a>
              </li>
              <li>
                <a href="/">habilidades</a>
              </li>
              <li>
                <a href="/">proyectos</a>
              </li>
              <li>
                <a href="/">contacto</a>
              </li>
            </ul>
          </nav>
          <div className="list__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              fill="white"
              className="list"
              viewBox="0 0 16 16"
            >
              <path
                fill="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}
