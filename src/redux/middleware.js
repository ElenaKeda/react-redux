import { showWarningMessage } from "./actions";
import { CREATE_POST } from "./types";

const forbiddenWords = ["12345", "qwerty", "wow"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        const warningPost = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );

        if (warningPost?.length) {
          return dispatch(showWarningMessage("Prohibited slang is used"));
        }
      }
      return next(action);
    };
  };
};
