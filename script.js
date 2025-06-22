// Getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// Handle input to enable/disable add button
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value.trim();
  addBtn.classList.toggle("active", userEnteredValue.length > 0);
};

// Show tasks on page load
document.addEventListener("DOMContentLoaded", showTasks);

// Add task on button click
addBtn.onclick = () => {
  let userEnteredValue = inputBox.value.trim();
  if (!userEnteredValue) return;
  let listArray = JSON.parse(localStorage.getItem("New Todo")) || [];
  listArray.push(userEnteredValue);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
  addBtn.classList.remove("active");
};

// Render tasks
function showTasks() {
  let listArray = JSON.parse(localStorage.getItem("New Todo")) || [];
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  deleteAllBtn.classList.toggle("active", listArray.length > 0);

  todoList.innerHTML = listArray
    .map(
      (task, idx) =>
        `<li>${escapeHTML(task)}<span class="icon" onclick="deleteTask(${idx})" aria-label="Delete task"><i class="fas fa-trash"></i></span></li>`
    )
    .join("");
  inputBox.value = "";
}

// Escape HTML to prevent XSS
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return (
      {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[m] || m
    );
  });
}

// Delete single task
function deleteTask(index) {
  let listArray = JSON.parse(localStorage.getItem("New Todo")) || [];
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

// Delete all tasks
deleteAllBtn.onclick = () => {
  localStorage.removeItem("New Todo");
  showTasks();
};
