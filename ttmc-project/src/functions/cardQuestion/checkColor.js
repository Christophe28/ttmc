import { typeQuestions } from "../../config/config";

export const checkColor = (typeQuestions, data) => {
  const checkGoodColor = typeQuestions.filter(
    (elem) => elem.type.toLowerCase() === data.main_theme.toLowerCase()
  );

  if (checkGoodColor.length > 0) {
    return `10px solid ${checkGoodColor[0].color}`;
  } else {
    return "10px solid #90d4fb";
  }
};
