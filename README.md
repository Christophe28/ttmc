# TTMC

TTMC est un projet de groupe réalisé dans le cadre de la fin de formation à Technocité.

## Description

TTMC est un jeu de plateau ressemblant au trivial poursuite à quelques détails près.
Nous avons utilisé comme technologies React pour la globalité du projet ainsi que Canvas pour le plateau.
Comme le projet était surtout à viser certaines compétances lors d'un délai nous n'avons pas eu le temps de corriger quelque détails tel que le responsive ainsi que quelques corrections pour quelques fonctionnalitées. Cependant nous avons atteins les objectifs fixé et le programme est plutôt fonctionnel.
Pour la fin de ce projet nous avions pour condition d'utiliser une API, cependant nous n'avions pas d'API pour le jeu en question. Nous avons donc décidé de créer notre database et de faire une requête vers un serveur local pour récupérer la database.


## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir [Node.js](https://nodejs.org) installé.
3. Assurez-vous d'avoir [nodemon](https://www.npmjs.com/package/nodemon) instalé.
3. Ouvrez deux fenêtre de terminal et accédez au répertoire du projet.
4. Dans le premier terminal naviguez dans le dossier [server] et exécutez la commande `nodemon server.js`
5. Dans le deuxième terminal naviguez dans le dossier [ttmc] et exécutez la commande `npm i`pour installer les dépendances.
6. Dans le deuxième terminal, dans le dossier [ttmc], exécutez la commande `npm run dev`pour démarrer l'application.

## Structure du Projet

projet
├── server
├── front
│   ├── public
│   └── src
│       ├── components
│       │   └── cards
│       ├── config
│       ├── functions
│       ├── style
│       ├── App.jsx
│       └── main.jsx
├── .gitignore
├── index.html
└── package.json

## Fonctionnalités

- **Fonctionnalité 1 :** Dans un premier temps les joueurs devront s'enregistrer et choisir un pion les représentants.
- **Fonctionnalité 2 :** Les joueurs auront le choix de miser le nombre de réponses auquels ils peuvent répondre.
- **Fonctionnalité 3 :** Les joueurs devront répondre au biais d'input texte ou d'input radio la bonne réponse.
- **Fonctionnalité 4 :** Lorsque le joueur répond correctement à toutes les questions, le pion avance en conséquence.

## Captures d'écran

![Ecran d'accueil](./mdPicture/step_1.png)
![Enregistrement](./mdPicture/step_2.png)
![Paris](./mdPicture/step_4.png)
![question](./mdPicture/step_5.png)

## Auteurs

- Célestine - Responsable U.I / U.X. Designer
- Christophe Buffe (www.linkedin.com/in/christophe-buffe) - lead dev
- Sandrine - front-end
- Veasna - front-end