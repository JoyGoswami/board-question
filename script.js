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

  // if (board === "all") {
  //   if (year === "all") {
  //     if (type === "all") {
  //       allBoardQuestionsSortedArr.forEach((sortedQuestions) => {
  //         const filtered = sortedQuestions.filter((question) => {
  //           return question;
  //         });
  //         filteredQuestionsArr.push(filtered);
  //         console.log(filteredQuestionsArr);
  //       });
  //       displayData(filteredQuestionsArr);
  //       console.log("all board, all year, all type");
  //     } else {
  //       console.log("all board, all year, specific type");
  //     }
  //   } else {
  //     if (type === "all") {
  //       console.log("all board, specific year, all type");
  //     } else {
  //       console.log("all board, specific year, specific type");
  //     }
  //   }
  // } else {
  //   if (year === "all") {
  //     if (type === "all") {
  //       console.log("specific board, all year, all type");
  //     } else {
  //       console.log("specific board, all year, specific type");
  //     }
  //   } else {
  //     if (type === "all") {
  //       console.log("specific board, specific year, all type");
  //     } else {
  //       console.log("specific board, specific year, specific type");
  //     }
  //   }
  // }
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
  console.log(dataArr);
  dataArr.forEach((data) => {
    const a = separatePartAorB(data, "a");
    const b = separatePartAorB(data, "b");
    separatePartAorBArr.push([a, b]);
  });
  createQuestion(separatePartAorBArr);
}

function createQuestion(questionDataArr) {
  const questionContainer = document.querySelector(".question-container");

  console.log(questionDataArr);
  questionDataArr.forEach((data) => {
    console.log(data);
    let boardName = data[0][0].board || data[1][0].board;
    let yearName = data[0][0].year || data[1][0].year;
    let partName = data[0][0].partName || data[1][0].partName;
    console.log(partName);

    const questionEl = createElements("div", ["question"], null);

    createQuestinTitle(boardName, yearName, questionEl);

    if (data[0].length > 0) {
      data[0].forEach((data) => {
        console.log(data);
      });
    }
    if (data[1].length > 0) {
      data[1].forEach((data) => {
        console.log(data);
      });
    }
    console.log(data);
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
  // array.forEach((dataArr) => {
  //   partFiltered = dataArr.filter((data) => {
  //     console.log("data", data.part);
  //     const partArr = data.part === partName;
  //     return partArr;
  //   });
  // });
  partFiltered = array.filter((data) => {
    const partArr = data.part === partName;
    return partArr;
  });
  return partFiltered;
}
