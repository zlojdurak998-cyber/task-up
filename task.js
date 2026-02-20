// ===== Урок: операторы и условия =====

let a = 5;
let b = 8;

let sum = a + b;
let difference = a - b;
console.log("Сумма: " + sum);
console.log("Разность: " + difference)

let title = "Задачи";

if (title === "") {
  console.log("Название задачи не указано");
} else {
  console.log("Задача:", title);
}

// let tasks = 5;
// if (tasks === 0) {
//   console.log("Список пуст");
// } else if (tasks <= 3) {
//   console.log("Немного задач");
// } else {
//   console.log("Много задач");
// }

if (title === "") {
  console.log("Заголовок пустой");
} else {
  console.log("Заголовок:" + title);
}

// let  = 2;

// if (tasks === 0) {
//   console.log("Список пуст, можно отдыхать");
// } else if (tasks > 0 && tasks <= 3) {
//   console.log("Есть задачи для выполнения");
// } else if (tasks > 3) {
//   console.log("Список задач переполнен");
// }

//урок 3

function summa(a, b) {
  return a + b;
}

console.log(summa(2, 3))
console.log(summa(8, 34))

function isTaskDone(status) {
  return status === "выполнена";
}

let result = isTaskDone("выполнена");
console.log(result);

function taskSummery(total, done) {
  let active = total - done;
  return (
    "Всего: " + total + " | Активных: " + active + " |Выполненных: " + done
  );
}

console.log(taskSummery(8, 3))

let cities = ["Москва", "Питер", "Казань"];

cities [2] = "Новосибирск";
console.log(cities);

let task = {
  id: 1,
  title: "Купить молоко",
  status: "активна"
}

console.log(task.title);
task.status = "выполнена";
console.log(task.status);

let tasks1 = [
  { id: 1, title: "Купить молоко", status: "активна"},
  { id: 2, title: "Позвонить врачу", status: "выполнена"},
  { id: 3, title: "Сделать уроки", status: "активна"},
]

console.log(tasks1[0].title);
console.log(tasks1[1].status);

let user = {
  name: "Иван",
  tasks: tasks1
}

console.log(user)

let tasks = [
    { id: 1, title: "Позвонить врачу", status: "активна"},
    { id: 2, title: "Позвонить врачу", status: "выполнена"},
    { id: 3, title: "Сходить в магазин", status: "активна"},
    { id: 4, title: "Прочитать книгу", status: "выполнена"},
    { id: 5, title: "Посмотреть фильм", status: "активна"},
    { id: 6, title: "Погулять с собакой", status: "выполнена"},
];


function filterByStatus(tasks, status) {
  return tasks.filter((task) => task.status === status);
}

console.log(filterByStatus(tasks, "Активна"));

function sortByTitle(tasks) {
  tasks.sort(function(a, b) {
    if (a.title > b.title) {
      return 1
    }
    return 0
  })
  return tasks
}

console.log(sortByTitle(tasks))

function searchByTitle(tasks, query) {
  let q = query.toLowerCase();
  return tasks.filter(task =>
    task.title.toLowerCase().indexOf(q) !== - 1
  )
}

console.log(searchByTitle(tasks, "Сд"))


for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].id + ": " + tasks[i].title)
}

for (let task of tasks) {
  console.log(task.id + ":" + task.title)
}

let i = 0;
let total = 0;
let active = 0;
let done = 0;

while (i < tasks.length) {
  total++;
  if (tasks[i].status === "выполнена") {
    done++;
  } else {
    active++
  }
  i++
}

console.log("Всего: " + total + " | Активных: " + active + " | Выполненных: "+ done)

for (let task of tasks) {
  if (task.status === "активна") {
    console.log("Активная задача: " + task.title)
  }
}

tasks.forEach(task => {
  console.log("#" + task.id + " " + task.title + " (" + task.status + ") ")
})

let searchTitle = "Купить шггмолоко";

let found = null;

for (let task of tasks) {
  if (task.title === searchTitle) {
    found = task;
    break;
  }
}

if (found) {
  console.log("Найдена задача: ", found)
} else {
  console.log("Задача не найдена")
}
