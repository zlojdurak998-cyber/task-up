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

