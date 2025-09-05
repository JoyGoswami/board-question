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
  console.log(dataArr);
}

// This separetes part a or b
function separatePartAorB(array, partName) {
  console.log("partname", partName);
  let partFiltered;
  array.forEach((dataArr) => {
    partFiltered = dataArr.filter((data) => {
      console.log("data", data.part);
      const partArr = data.part === partName;
      return partArr;
    });
  });
  return partFiltered;
}
