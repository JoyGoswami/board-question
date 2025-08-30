const selectQuestionForm = document.querySelector(".select-question-type");

selectQuestionForm.addEventListener("change", (e) => {
  console.log(e.target.value);
  //   document.querySelector(".add-question-container").style.display = "block";
  addForm(e.target.value);
});

function addForm(value) {
  if (value === "with-clues") {
    document.querySelector(".with-clues").style.display = "block";
  } else if (value === "without-clues") {
    document.querySelector(".without-clues").style.display = "block";

    // do not display others
    document.querySelector(".with-clues").style.display = "none";
    document.querySelector(".changing-sentence").style.display = "none";
    document.querySelector(".matching-table").style.display = "none";
  } else if (value === "matching-table") {
    document.querySelector(".matching-table").style.display = "block";

    // do not display others
    document.querySelector(".with-clues").style.display = "none";
    document.querySelector(".without-clues").style.display = "none";
    document.querySelector(".changing-sentence").style.display = "none";
  } else if (value === "changing-sentence") {
    document.querySelector(".changing-sentence").style.display = "block";

    // // do not display others
    document.querySelector(".with-clues").style.display = "none";
    document.querySelector(".without-clues").style.display = "none";
    document.querySelector(".matching-table").style.display = "none";
  }
}
// textarea height grows with content
const textareas = document.querySelectorAll(".resize-textarea");

textareas.forEach((textarea) => {
  textarea.addEventListener("input", () => {
    const textareaHeightCurrent = textarea.scrollHeight;
    if (textareaHeightCurrent < 200) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
      textarea.style.overflowY = "hidden";
    } else {
      textarea.style.height = "200px";
      textarea.style.overflowY = "auto";
    }
  });
});

// add more button functionality
const addMoreBtns = document.querySelectorAll(".add-more-btn");
const firstBoxInputCont = document.querySelector(".first-box-input-cont");
const secondBoxInputCont = document.querySelector(".second-box-input-cont");
const thirdBoxInputCont = document.querySelector(".third-box-input-cont");

addMoreBtns.forEach((addMoreBtn) => {
  addMoreBtn.addEventListener("click", (e) => {
    const firstBoxInputs = document.querySelectorAll(
      `.line-${e.target.classList[1]}`
    );
    const inputCont = document.createElement("div");
    inputCont.classList.add("input-cont");

    const label = document.createElement("label");
    label.htmlFor = `box-${e.target.classList[1]}-line-${
      firstBoxInputs.length + 1
    }`;
    label.textContent = "Enter Line";

    const input = document.createElement("input");
    input.classList.add("form-input-style");
    input.classList.add(`line-${e.target.classList[1]}`);
    input.type = "text";
    input.name = `box-${e.target.classList[1]}-line-${
      firstBoxInputs.length + 1
    }`;
    input.id = `box-${e.target.classList[1]}-line-${firstBoxInputs.length + 1}`;

    inputCont.append(label, input);
    if (e.target.classList[1] === "one") {
      firstBoxInputCont.append(inputCont);
    } else if (e.target.classList[1] === "two") {
      secondBoxInputCont.append(inputCont);
    } else {
      thirdBoxInputCont.append(inputCont);
    }
  });
});

// add more btn sentences
const addMoreBtnSentences = document.querySelector(".add-more-btn-sentence");
const questionCont = document.querySelector(".question-cont");
const questionNo = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
];
addMoreBtnSentences.addEventListener("click", (e) => {
  console.log(e.target.classList);
  const inputBoxCount = document.querySelectorAll(".sentence-count").length;
  console.log(inputBoxCount);

  const inputCont = document.createElement("div");
  inputCont.classList.add("input-cont");

  const label = document.createElement("label");
  label.htmlFor = questionNo[inputBoxCount];
  label.textContent = `Question ${questionNo[inputBoxCount]}:`;

  const input = document.createElement("input");
  input.type = "text";
  input.name = questionNo[inputBoxCount];
  input.id = questionNo[inputBoxCount];
  input.classList.add("form-input-style");
  input.classList.add("sentence-count");

  inputCont.append(label, input);

  questionCont.append(inputCont);
});
