import { boardQuestionsHSC } from "./data.js";

export const boardsNameArr = []; // contains board Names
export const boardsYearArr = []; // contains board Years
export const questionTypeArr = [];
const allBoardQuestionsUnSortedArr = [];
export const allBoardQuestionsSortedArr = [];

boardQuestionsHSC.forEach((boardQuestion) => {
  // it prevents same board name and year entry
  // and push only unique ones
  if (!boardsNameArr.includes(boardQuestion.board)) {
    boardsNameArr.push(boardQuestion.board);
  }
  if (!boardsYearArr.includes(boardQuestion.year)) {
    boardsYearArr.push(boardQuestion.year);
  }
  if (!questionTypeArr.includes(boardQuestion.question_type)) {
    questionTypeArr.push(boardQuestion.question_type);
  }
});

// It makes a whole question for all board and year
// depending on board and year by filtering
boardsNameArr.forEach((boardName) => {
  boardsYearArr.forEach((boardYear) => {
    let filteredQuestionArr = boardQuestionsHSC.filter((boardQuestions) => {
      return (
        boardQuestions.board === boardName && boardQuestions.year === boardYear
      );
    });

    if (filteredQuestionArr.length > 0) {
      allBoardQuestionsUnSortedArr.push(filteredQuestionArr);
    }
  });
});

// It sorts allBoardQuestionsUnSortedArr depending on question_no
allBoardQuestionsUnSortedArr.forEach((data) => {
  let sortedData = data.sort((a, b) => a.question_no - b.question_no);
  allBoardQuestionsSortedArr.push(sortedData);
});
