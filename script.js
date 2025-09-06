import { allBoardQuestionsSortedArr } from "./sortData.js";

const filteredQuestionsArr = [...allBoardQuestionsSortedArr];
displayData(filteredQuestionsArr);
// Form control
const filterControlForm = document.querySelector(".filter-control-form");

filterControlForm.addEventListener("change", () => {
  const formData = new FormData(filterControlForm);

  // Form data to object
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  const { board, type, year } = data;
  handleFilter(board, year, type);

  displayData(filteredQuestionsArr);
});

// It filters the data depending on user provided form data
function handleFilter(board, year, type) {
  const boardName = board.split("-").join(" ");
  const yearName = year.split("-").join(" ");
  const typeName = type.split("-").join(" ");
  // before inserting empty the array
  filteredQuestionsArr.splice(0, filteredQuestionsArr.length);

  allBoardQuestionsSortedArr.forEach((dataArr) => {
    const filteredData = dataArr.filter((data) => {
      // if board === "all" it will not filter the data
      // instead return the all board data
      // If board === "Dhaka Board"
      // it will return only dhaka board data
      const matchBoard = board === "all" || data.board === boardName;
      const matchYear = year === "all" || data.year === yearName;
      const matchType = type === "all" || data.question_type === typeName;

      return matchBoard && matchYear && matchType;
    });

    if (filteredData.length > 0) {
      filteredQuestionsArr.push(filteredData);
    }
  });
}

function displayData(dataArr) {
  const separatePartAorBArr = [];
  dataArr.forEach((data) => {
    const a = separatePartAorB(data, "a");
    const b = separatePartAorB(data, "b");
    separatePartAorBArr.push([a, b]);
  });
  createQuestion(separatePartAorBArr);
}

function createQuestion(questionDataArr) {
  const questionContainer = document.querySelector(".question-container");
  questionContainer.textContent = ""; // If there is any previous question, clean it

  questionDataArr.forEach((data) => {
    let boardName = data[0][0].board || data[1][0].board;
    let yearName = data[0][0].year || data[1][0].year;

    let partNameA = "";
    let partNameB = "";
    if (data[0].length > 0) {
      partNameA = data[0][0].partName;
    }
    if (data[1].length > 0) {
      partNameB = data[1][0].partName;
    }

    const questionEl = createElements("div", ["question"], null);

    createQuestinTitle(boardName, yearName, questionEl);
    createPart(partNameA, questionEl);

    if (data[0].length > 0) {
      data[0].forEach((data) => {
        // Question No. 1
        if (data.question_no === "1") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
        // Question No. 2
        if (data.question_no === "2") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const questionClues = data.clues;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            questionClues,
            question,
            questionEl
          );
        }
        // Question No. 3
        if (data.question_no === "3") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
        // Question No. 4
        if (data.question_no === "4") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
        // Question No. 5
        if (data.question_no === "5") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
        // Question No. 6
        if (data.question_no === "6") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
        // Question No. 7
        if (data.question_no === "7") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
        // Question No. 8
        if (data.question_no === "8") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const questionClues = data.clues;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            questionClues,
            question,
            questionEl
          );
        }
        // Question No. 9
        if (data.question_no === "9") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            question,
            questionEl
          );
        }
      });
    }

    createPart(partNameB, questionEl);
    if (data[1].length > 0) {
      data[1].forEach((data) => {
        // Question No. 10
        if (data.question_no === "10") {
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            null,
            questionEl
          );
        }
        // Question No. 11
        if (data.question_no === "11") {
          console.log(data);
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            null,
            questionEl
          );
        }
        // Question No. 12
        if (data.question_no === "12") {
          console.log(data);
          const questionNo = data.question_no;
          const questionTitle = data.question_title;
          const questionMark = data.mark;
          const question = data.question;
          createWithoutClueTypeQuestion(
            questionNo,
            questionTitle,
            questionMark,
            null,
            null,
            questionEl
          );
        }
      });
    }
    questionContainer.append(questionEl);
  });
}

function createQuestinTitle(boardName, yearName, parentEl) {
  const questionDetailsEl = createElements("div", ["question-details"], null);

  const boardNameEl = createElements(
    "h2",
    ["board-name"],
    `${boardName} ${yearName}`
  );
  const subjectNameEl = createElements(
    "p",
    ["subject-name"],
    "English Second Paper"
  );

  questionDetailsEl.append(boardNameEl, subjectNameEl);
  parentEl.append(questionDetailsEl);

  //  questionDetailsEl;
}

function createPart(partText, parentEl) {
  const div = createElements("div", ["part"], null);
  const p = createElements("p", null, partText);

  div.append(p);
  parentEl.append(div);
}

function createWithoutClueTypeQuestion(
  questionNo,
  questionTitle,
  questionMark,
  questionClues,
  question,
  parentEl
) {
  const questionItemEl = createElements("div", ["question-items"], null);
  // Question title container
  const questionTitleContainerEl = createElements(
    "div",
    ["question-title-container"],
    null
  );

  const questionNoEl = createElements("div", ["question-no"], `${questionNo}.`);
  const questionTitleEl = createElements(
    "div",
    ["question-title"],
    questionTitle
  );
  const questionMarkEl = createElements("div", ["mark"], questionMark);

  questionTitleContainerEl.append(
    questionNoEl,
    questionTitleEl,
    questionMarkEl
  );
  // Question body container
  const questionBodyContainerEl = createElements(
    "div",
    ["question-body-container"],
    null
  );

  const blankEl = createElements("div", ["blank"], null);
  // Question body
  const questionBodyEl = createElements("div", ["question-body"], null);
  // Question Clues
  let questionCluesEl;

  if (questionClues !== null) {
    questionCluesEl = createElements("div", ["question-clues"], null);
    createQuestionClues(questionClues, questionCluesEl);
  }
  // Question body details
  const questionBodyDetailsEl = createElements(
    "div",
    ["question-body-details"],
    null
  );

  if (question !== null) {
    question.forEach((data) => {
      const p = createElements("p", null, data);
      questionBodyDetailsEl.append(p);
    });
    questionItemEl.append(questionTitleContainerEl, questionBodyContainerEl);
  } else {
    questionItemEl.append(questionTitleContainerEl);
  }
  // question.forEach((data) => {
  //   const p = createElements("p", null, data);
  //   questionBodyDetailsEl.append(p);
  // });

  // questionItemEl.append(questionTitleContainerEl, questionBodyContainerEl);

  if (questionClues !== null) {
    questionBodyEl.append(questionCluesEl, questionBodyDetailsEl);
  }
  questionBodyEl.append(questionBodyDetailsEl);
  questionBodyContainerEl.append(blankEl, questionBodyEl);

  parentEl.append(questionItemEl);
}

// This creates question clues depending on arrays
function createQuestionClues(clueArr, parentEl) {
  console.log(clueArr);
  if (clueArr > 1) {
    const table = createElements("table", null, null);
    // First Table Row
    const trOne = createElements("tr", null, null);

    // Table data in First Row
    const firstFiveClues = clueArr.splice(0, 5); // Takes first 5 clues and deletes them
    firstFiveClues.forEach((clue) => {
      const td = createElements("td", null, clue);
      trOne.append(td);
    });

    // Second Table row
    const trTwo = createElements("tr", null, null);

    // Table data in Second Row
    clueArr.forEach((clue) => {
      const td = createElements("td", null, clue);
      trTwo.append(td);
    });

    table.append(trOne, trTwo);
    parentEl.append(table);
  } else {
    const replaceFirstSlash = clueArr[0].replaceAll("/", "<u>");
    const replaceSecondSlash = replaceFirstSlash.replaceAll("|", "</u>");
    const p = createElements("p", null, null);
    p.innerHTML = replaceSecondSlash;
    parentEl.append(p);
  }
}

function createElements(element, elClassArr, elTextContent) {
  const createEl = document.createElement(element);
  if (elClassArr !== null) {
    elClassArr.forEach((classes) => {
      createEl.classList.add(classes);
    });
  }
  if (elTextContent !== null) {
    createEl.textContent = elTextContent;
  }
  return createEl;
}

// This separetes part a or b
function separatePartAorB(array, partName) {
  let partFiltered;
  partFiltered = array.filter((data) => {
    const partArr = data.part === partName;
    return partArr;
  });
  return partFiltered;
}
