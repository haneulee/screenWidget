const toDoForm = document.querySelector(".js-doDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO = "todoList";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target,
    list = btn.parentElement;

  toDoList.removeChild(list);

  const cleanToDo = toDos.filter(function(todo) {
    return todo.id !== parseInt(list.id);
  });

  toDos = cleanToDo;
  saveToDos();
}

function paintToDo(text) {
  const listEl = document.createElement("li"),
    spanEl = document.createElement("span"),
    delButton = document.createElement("button"),
    newId = toDos.length + 1;

  delButton.innerText = "❌";
  delButton.addEventListener("click", deleteToDo);
  spanEl.innerText = text;

  listEl.appendChild(delButton);
  listEl.appendChild(spanEl);
  listEl.id = newId;

  const toDoObj = {
    text: text,
    id: newId
  };

  toDoList.appendChild(listEl);
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const inputVal = toDoInput.value;
  paintToDo(inputVal);
  toDoInput.value = "";
}

function loadToDo() {
  const currentToDo = JSON.parse(localStorage.getItem(TODO));

  if (currentToDo !== null) {
    currentToDo.forEach(function(todo) {
      paintToDo(todo.text);
    });
  }
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
