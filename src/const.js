const skills = [
  {
    id: 1,
    skill: "REACT",
    img: "https://i.ibb.co/99k4F1y/React-1-removebg-preview-1.png",
  },
  {
    id: 2,
    skill: "SASS",
    img: "https://i.ibb.co/vX3MTZJ/Sass-removebg-preview-1.png",
  },
  {
    id: 3,
    skill: "BOOTSTRAP",
    img: "https://i.ibb.co/cJVWXn5/Bootstrap-4-3-1.png",
  },
  {
    id: 4,
    skill: "JAVASCRIPT",
    img: "https://i.ibb.co/5jhzDym/computer-icons-logo-brand-javascript-javaserver-pages-free-892749-1.png",
  },
  {
    id: 5,
    skill: "HTML",
    img: "https://i.ibb.co/S7d4htJ/Html-1.png",
  },
  {
    id: 6,
    skill: "CSS",
    img: "https://i.ibb.co/2PY5rth/Pngwing-com-1.png",
  },
  {
    id: 7,
    skill: "GIT",
    img: "https://i.ibb.co/B3tJPXS/pngegg-2-1.png",
  },
];

const proyects = [
  {
    id: 1,
    title: "Enjin Clone",
    img: "https://i.ibb.co/xJQc7X5/Copia-Enjin.png",
    description: "Es una copia de la pagina para crear tus NFT.",
    skills: [1, 2],
    demoLink: "https://gastoncabrera.github.io/enjinClone/",
    repoLikn: "enjinClone",
  },
  {
    id: 2,
    title: "Rick and Morty API",
    img: "https://i.ibb.co/DLsf3hG/Rick-And-Morty.png",
    description:
      "Es una pagina el la cual esta toda la informacion de los personajes de rick and morty, obtenidas de una API.",
    skills: [1, 4],
    repoLikn: "rickandmorty",
    demoLink: "https://gastoncabrera.github.io/rickandmorty/",
  },
  {
    id: 3,
    title: "BatataBit",
    img: "https://i.ibb.co/QYZrbjV/Batatabit.png",
    description:
      "Es una pagina en la cual puedes conocer los precios de las distintas criptomonedas.",
    skills: [4, 5, 6],
    demoLink: "https://gastoncabrera.github.io/batatabit/",
    repoLikn: "batatabit",
  },
  {
    id: 4,
    title: "Google Clone",
    img: "https://i.ibb.co/dWpmsPz/Google-Clone.png",
    description:
      "Es un clone del buscador mas usado del mundo, una copia de su diseño original.",
    skills: [4, 5, 6],
    demoLink: "https://gastoncabrera.github.io/google-clone/",
    repoLikn: "googleclone",
  },
  {
    id: 5,
    title: "Aplicación de Gastos",
    img: "https://i.ibb.co/SPYv21y/Mis-Gastos.png",
    description:
      "Es una aplicacion de gastos la cual toda la informacion se sube en el local Storage.",
    skills: [3, 4, 5, 6],
    demoLink: "https://gastoncabrera.github.io/aplicaciondegastos/",
    repoLikn: "aplicaciondegastos",
  },
  {
    id: 6,
    title: "Lista de contactos",
    img: "https://i.ibb.co/Q8Cntks/listadecontatos.png",
    description:
      "Es una pagina la cual podes guardar tu lista de contactos,la informacion se sube en el local Storage.",
    skills: [1, 2],
    demoLink: "https://gastoncabrera.github.io/listadecontactos/",
    repoLikn: "listadecontactos",
  },
  {
    id: 7,
    title: "Lista de tareas",
    img: "https://i.ibb.co/0Qk9x60/todo-list.png",
    description:
      "Es una pagina la cual podes anotar todas tus tareas a realizar y marcarlas al completarlas.",
    skills: [1, 2],
    demoLink: "https://gastoncabrera.github.io/todolist/#/",
    repoLikn: "todolist",
  },
];
const allProyects = proyects.map((proyectItem) => {
  const _skills = skills.filter((skillItem) =>
    proyectItem.skills.includes(skillItem.id)
  );
  return {
    ...proyectItem,
    skill: _skills,
  };
});
export { proyects, skills, allProyects };
