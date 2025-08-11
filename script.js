const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  textSpan.addEventListener("click", () => {
    textSpan.parentElement.classList.toggle("completed");
  });
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(textSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}
