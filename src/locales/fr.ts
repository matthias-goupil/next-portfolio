const fr = {
  hello: "Salut",
  "hello.world": "Salut le monde !",
  welcome: "Bienvenue {name}!",
  "menu.home": "Accueil",
  "menu.about-me": "A propos de moi",
  "menu.skills": "Compétences",
  "menu.projects": "Projets",
  "menu.contact": "Contactez-moi",
};

export default fr;

export type frKeys = keyof typeof fr;
