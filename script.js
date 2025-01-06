let inp = document.getElementById("inp");
let taskList = document.getElementById("taskList");
let task = [];

inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inp.value.trim() !== "") {
    task.unshift(inp.value.trim());
    inp.value = "";
  }
  updateTask();
}

function updateTask() {
  taskList.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    taskList.innerHTML += `<li class="bg-white w-[100%] h-[5rem] flex justify-between items-center border text-[1.5em] text-[#9BA3AF] pl-[1rem]">${task[i]}<i class="fa-solid fa-trash w-[20%] h-full flex justify-center items-center text-red-600 cursor-pointer border-l-2" onclick="removeTask(${i})"></i></li>`;
  }
}

function removeTask(index) {
  task.splice(index, 1);
  updateTask();
}
