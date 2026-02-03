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

let tasks = 5;
if (tasks === 0) {
  console.log("Список пуст");
} else if (tasks <= 3) {
  console.log("Немного задач");
} else {
  console.log("Много задач");
}

if (title === "") {
  console.log("Заголовок пустой");
} else {
  console.log("Заголовок:" + title);
}

let  = 2;

if (tasks === 0) {
  console.log("Список пуст, можно отдыхать");
} else if (tasks > 0 && tasks <= 3) {
  console.log("Есть задачи для выполнения");
} else if (tasks > 3) {
  console.log("Список задач переполнен");
}

//урок 3

function summa(a, b) {
  return a + b;
}

console.log(summma(2, 3))
console.log(summma(8, 34))

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

console.log(taskSummary(8, 3))