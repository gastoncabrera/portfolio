const skills = [
  {
    id: 1,
    skill: "REACT",
    img: "react.png",
  },
  {
    id: 2,
    skill: "SASS",
    img: "sass.png",
  },
  {
    id: 3,
    skill: "VUE",
    img: "vue.png",
  },

  {
    id: 4,
    skill: "JAVASCRIPT",
    img: "js.png",
  },
  {
    id: 5,
    skill: "HTML",
    img: "html.png",
  },
  {
    id: 6,
    skill: "CSS",
    img: "css3.png",
  },
  {
    id: 7,
    skill: "GIT",
    img: "git.png",
  },
  {
    id: 8,
    skill: "BOOTSTRAP",
    img: "bootstrap.png",
  },
  {
    id: 9,
    skill: "NUXT",
    img: "nuxt.png",
  },
  {
    id: 10,
    skill: "NEXT",
    img: "nextjs.png",
  },
];

const proyects = [
  {
    id: 1,
    title: "Enjin Clone",
    img: "copiaEnjin.png",
    description: "Es una copia de la pagina para crear tus NFT.",
    skills: [1, 2],
    demoLink: "https://gastoncabrera.github.io/enjinClone/",
    repoLikn: "enjinClone",
  },
  {
    id: 2,
    title: "Flow",
    img: "flow.png",
    description:
      "Es un clone de la pagina de Flow la cual se ven todos los proyectos blockchain en el cual estan participando.",
    skills: [3, 9, 2],
    demoLink: "https://gastoncabrera.github.io/flow/",
    repoLikn: "flow",
  },
  {
    id: 3,
    title: "Rick and Morty API",
    img: "RickAndMorty.png",
    description:
      "Es una pagina el la cual esta toda la informacion de los personajes de rick and morty, obtenidas de una API.",
    skills: [1, 4],
    repoLikn: "rickandmorty",
    demoLink: "https://gastoncabrera.github.io/rickandmorty/",
  },
  {
    id: 4,
    title: "BatataBit",
    img: "Batatabit.png",
    description:
      "Es una pagina en la cual puedes conocer los precios de las distintas criptomonedas.",
    skills: [4, 5, 6],
    demoLink: "https://gastoncabrera.github.io/batatabit/",
    repoLikn: "batatabit",
  },
  {
    id: 5,
    title: "Google Clone",
    img: "GoogleClone.png",
    description:
      "Es un clone del buscador mas usado del mundo, una copia de su diseño original.",
    skills: [4, 5, 6],
    demoLink: "https://gastoncabrera.github.io/google-clone/",
    repoLikn: "googleclone",
  },
  {
    id: 6,
    title: "Aplicación de Gastos",
    img: "misGastos.png",
    description:
      "Es una aplicacion de gastos la cual toda la informacion se sube en el local Storage.",
    skills: [8, 4, 5, 6],
    demoLink: "https://gastoncabrera.github.io/aplicaciondegastos/",
    repoLikn: "aplicaciondegastos",
  },
  {
    id: 7,
    title: "Lista de contactos",
    img: "tareas.png",
    description:
      "Es una pagina la cual podes guardar tu lista de contactos,la informacion se sube en el local Storage.",
    skills: [1, 2],
    demoLink: "https://gastoncabrera.github.io/listadecontactos/",
    repoLikn: "listadecontactos",
  },
  {
    id: 8,
    title: "Lista de tareas",
    img: "todo-list.png",
    description:
      "Es una pagina la cual podes anotar todas tus tareas a realizar y marcarlas al completarlas.",
    skills: [1, 2],
    demoLink: "https://gastoncabrera.github.io/todolist/#/",
    repoLikn: "todolist",
  },
  {
    id: 9,
    title: "Landing de Maquillaje",
    img: "PrisMKP.PNG",
    description: "Landing Page para un negocio de maquillajes.",
    skills: [2, 10],
    demoLink: "https://prissmkp-gastoncabrera.vercel.app/",
    repoLikn: "prissmkp",
  },
  {
    id: 10,
    title: "Somos 404",
    img: "Somos404.PNG",
    description: "Empresa de marketing digital y desarrollo web.",
    skills: [2, 10],
    demoLink: "https://www.somos404.com/",
    repoLikn: "null",
  },
];
const allProyects = proyects.map((proyectItem) => {
  const _skills = skills.filter((skillItem) => proyectItem.skills.includes(skillItem.id));
  return {
    ...proyectItem,
    skill: _skills,
  };
});
export { proyects, skills, allProyects };
