const input = document.querySelector(".form-add__input");
const addButton = document.querySelector(".form-add__button");
const container = document.querySelector(".tasks");

const searchInput = document.querySelector(".toolbar__search");
const footer = document.querySelector(".footer-controls");
const sortSelect = document.querySelector(".toolbar__sort");
const tabButtons = document.querySelectorAll(".tabs__item");
const clearBtn = document.querySelector(".button--clear");

// let localTasks = localStorage.getItem('tasks')
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


let sortOrder = "new" // old az za
let currentFilter = "all"

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addTask();
});


sortSelect.addEventListener("change", () => {
sortOrder = sortSelect.value.includes("новые") ? "new" : "old"; 
renderAll()
});

function renderAll()
// container.innerHTML = "
document. querySelectorAll(".task").forEach((t) => t.remove());
const sortedTasks = [tasks].sort((a, b) => {
if (sort0rder === "new") return b.id - a.id;
return a.id - b.id;
});
sortedTasks.forEach((task) => {
const card = renderTask(task);
footer.before(card);
});

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const text = input.value.trim();
  if (text === "") return;

    const newTask = {
    id: Date.now(),
    text: text,
    done: false,
    date: formattedDate(new Date()),
    }
tasks.push(newTask);

input.value = "";

renderAll()
})

searchInput.addEventListener("input", renderAll)

tabButtons.forEach(btn => {

  btn.addEventListener('click', () => {
  tabButtons.forEach(b => b.classList.remove("tabs_item--active"));
  btn.classList.add("tabs___item--active")
  if (btn.textContent === "Акт") currentFilter = "active";
  else if (btn.textContent === "Зав") currentFilter = "done"; 
  else currentFilter = "all";
  });
});

sortSelect.addEventListener("change", () => {
//const val = sortSelect.value
//if (val.includes('новые')) sort0rder = 'new';
//else if (val.includes('старыe')) sortOrder = 'old';
//else if (val.includes('A-Z')) sort0rder = 'az';
//else if (val.includes('Z-A')) sort0rder = 'za'; 
renderAll();
});

function addTask() {
const text = input.value.trim(); 
if (text == "" || text.length < 3) {
  input.classList.add("input--error");
  return;
  }
  input.classList.remove("input--error")
}

function renderTask(task) {
  const item = document.createElement("div");
  item.classList.add("task");

  const content = document.createElement("div");
  content.classList.add("task__content");
  task.append(content);

  const title = document.createElement("div");
  title.classList.add("task__title");
  title.textContent = taskData.text; 

  const meta = document.createElement("div");
  meta.classList.add("task__meta");
  meta.textContent = taskData.date;

  content.append(title, meta);

  const actions = document.createElement("div");
  actions.classList.add("task__actions");
  task.append(actions);

  const editBtn = document.createElement("button");
  editBtn.classList.add("task__action", "task__action--edit");
  editBtn.textContent = "Редактировать"; 
  actions.append(editBtn);

  console.log(task);
  return task;
}
  editBtn.innerHTML = `
<svg
class="task__icon"
viewBox="0 0 24 24"
width="14"
height="14"
fill="none"
stroke="#6f64a3"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
>

<path d="M12 20h9" />
<path
 d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
/>
`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("task__action", "task__action--delete");
  deleteBtn.innerHTML = `
<svg
              class="task__icon"
              viewBox="0 0 24 24"
              width="14 "
              height="14"
              fill="none"
              stroke="#cb6e6e"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>`;
  deleteBtn.addEventListener("click", () => {
});
      const index = tasks.indexOf(task);
      tasks.splice(index, 1);

      item.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target.closes(".task__action")) return;
        task.done = !task.done;
        saveTasks();
        renderAll();
      });

      return item;
      // container.append(item);
      // });
    ;

  actions.append(editBtn, deleteBtn);
  item.append(content, actions);

  if (task.done) {
    item.classList.add("task--done");
  }

  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    filtered = filtered.filter((task) => { 
    task.text.toLowerCase().includes(query)
})
  }

function renderAll() {
// container.innerHTML = "";
document.querySelectorAll(".task").forEach((t) => t.remove())

  let filtered = tasks.filter((task) => {
  if (currentFilter === "active") return !task.done;
  if (currentFilter === "done") return task.done;

  return true;
})

const sortedTasks = [...tasks].sort((a, b) => {
  if (sortOrder === "new") return b.id - a.id;
  if (sortOrder === "old") return a.id - b.id;
  if (sortOrder === "az") return a.text > b.text ? 1 : -1;
  if (sortOrder === "za") return a.text < b.text ? 1 : -1;
});
sortedTasks.forEach((task) => {
  const card = renderTask(task);
  footer.before(card);
});
}

  actions.append(editBtn, deleteBtn);
  task.append(content, actions);
  meta.textContent = taskData.date;

  container.append(item);

  container.append(item);


// const task1 = renderTask({
//     text: "Погулять с собакой",
//     date: "Сегодня 17:00",
// });
// const task2 = renderTask({
//     text: "Прочитать книгу",
//     date: "Завтра 17:00",
// });

// container.append(task1, task2)


function renderAll() {
  //container.innerHTML = "";
  //tasks.forEach((task) => {
  const item = document.createElement("div");
  item.classList.add("task");

  const content = document.createElement("div");
  content.classList.add("task__content");

  const title = document.createElement("div");
  title.classList.add("task__title");
  title.textContent = taskData.text;

  const meta = document.createElement("div");
  meta.classList.add("task__meta");
  meta.textContent = taskData.date;
  content.append(title, meta);
}

const task = [
  {
    text: "Прочитать книгу",
    date: "Сегодня 17:00",
    done: true,
  },
  {
    text: "Погулять с собакой",
    date: "Сегодня 17:00",
    done: true,
  },
];

function renderAll() {
  // container.innerHTML = "";
  document.querySelectorAll(".task").forEach((t) => t.remove());
  tasks.forEach((task) => {
    const card = renderTask(task);
    footer.before(card);
  });
}
// <div class="task">
// <div class="task__title">Купить молоко</div>
//
// <button class="task__action task__action--delete">
// <svg class="icon"></svg>
// </button>
// </div>

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

functionformattedDate(date) {
const day = date.getDate().toString().padStart(2, "0");
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const year = date.getFullYear();
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");

return `${day}.${month}.${year}, ${hours}:${minutes}`
}

function updateCounters() {
  const total = tasks.length;
  const active  = tasks.filter(t => !t.done).length;
  const done = tasks.filter(t => t.done).length;

  clearBtn.disabled = tasks.every(t => !t.done);

  const counters = document.querySelector(".footer-controls__counters")
  if (counters) {
    counters.innerHTML = `
    <span> Всего: ${total} </span>
    <span> Активных: ${active} </span>
    <span> Выполенных: ${done} </span>
    `;
  }
}

renderAll();

tasks.indexOf(task)

