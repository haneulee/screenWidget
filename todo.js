const toDoForm = document.querySelector(".js-doDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO = "todoList";

function paintToDo(text) {
  const listEl = document.createElement("li"),
    spanEl = document.createElement("span"),
    delButton = document.createElement("button");

  delButton.innerText = " ❌";
  spanEl.innerText = toDoInput.value;

  listEl.appendChild(spanEl);
  listEl.appendChild(delButton);

  toDoList.appendChild(listEl);
}

function handleSubmit(event) {
  event.preventDefault();
  const inputVal = toDoInput.value;
  paintToDo(inputVal);
  toDoInput.value = "";
}

function loadToDo() {
  const currentToDo = localStorage.getItem(TODO);
  if (currentToDo !== null) {
    // paintToDo();
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
