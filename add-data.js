const selectQuestionForm = document.querySelector(".select-question-type");

selectQuestionForm.addEventListener("change", (e) => {
  console.log(e.target.value);
  //   document.querySelector(".add-question-container").style.display = "block";
  addForm(e.target.value);
});

function addForm(value) {
  if (value === "with-clues") {
    document.querySelector(".with-clue").style.display = "block";
  } else if (value === "without-clues") {
    document.querySelector(".without-clue").style.display = "block";
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

    console.log(textarea.scrollHeight);
  });
});
