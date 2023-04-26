export const canvasWidth = 960;
export const canvasHeight = 720;
export const squareSize = 120;
export const radius = squareSize / 20;

export const usersPositions = [ 
  {
    x: 0, 
    y: 0,
    xMax: 840,
    yMax: 600,
    xStart: 0,
    yStart: 0,
    xLast: 0,
    yLast: 120
  },
  {
    x: 0,
    y: 90,
    xMax: 840,
    yMax: 690,
    xStart: 0,
    yStart: 90,
    xLast: 0,
    yLast: 90 + 120
  },
  {
    x: 90,
    y: 0,
    xMax: 930,
    yMax: 600,
    xStart: 90,
    yStart: 0,
    xLast: 90,
    yLast: 120
  },
  {
    x: 90,
    y:90,
    xMax: 930,
    yMax: 690,
    xStart: 90,
    yStart: 90,
    xLast: 90,
    yLast: 90 + 120
  }
];

export const typeQuestions = [
  {
    id: 1,
    type: "Improbable",
    color: "#5b2465"
  },
  {
    id: 2,
    type: "Mature",
    color: "#4d88b9",
  },
  {
    id: 3,
    type: "Scolaire",
    color: "#a3be31"
  },
  {
    id: 4,
    type: "Plaisir",
    color: "#dc9318"
  }
];

export const lastQuestion = {
  id: 1, 
  type: "hésite pas à gagner"
}

export const howQuestionsCanAnswer = Array.apply(null, { length: 10 }).map((_, i) => i + 1);
