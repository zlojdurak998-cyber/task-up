const comments = [
{ user: ' Alice ', text: ' Hello everyone! ' },
{ user: 'BOB', text: '<b>Nice post</b>' },
{user: '  ', text: 'I am invisible user' }, // пустой user - игнор
{ user: 'Charlie', text: '' }, // пустой текст - игнор
{ user: null, text: 'Hi!' }, // user невалидный - игнор
{user: 'dave', text: '<script>alert(1)</script>' }, // XSS попытка

{ user: 'Eve', text: ' Good job!'},
{ user: 'ALICE', text: 'Second comment' } // тот же пользователь в дрyгом pеrистре
];
function escapeHtml(str) {
return String(str)
replace(/&/g, "&apm")
replace(/</g, "&lt")
replace(/>/g, "&gt");
}
function formatComments(comments) {
const results = []
for (let comm of comments) {
const user = String(comm.user | | "").trim().toLowerCase()
}
}

function formatComments(comments) {
const results = [];
for (let comm of comments) {
const user = String(comm.user || "")
trim()
toLowerCase();
const text = String(comm.text || "")
trim()
toLowerCase();
if (!text || !user) continue;
const safeText = escapeHtml(text);
results.push(user + ": " + safeText);
}
return results;
}

// Исходная строка
const input = "JS, react, <script>, node ";

// 1. Разбить строку по запятым с учётом пробелов
// 2. Очистить и нормализовать: удалить лишние пробелы, привести к нижнему регистру
const items = input
  .split(/\s*,\s*/)                // разделитель: запятая с возможными пробелами вокруг
  .map(item => item.trim().toLowerCase()) // очистка и нормализация
  .filter(item => item !== "");    // удалить пустые элементы

// 3. Удалить дубликаты (сохраняя порядок первого вхождения)
const uniqueItems = [...new Set(items)];

// 4. Экранировать HTML-символы (особенно важно для <script>)
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const escapedItems = uniqueItems.map(escapeHtml);

// 5. Сгенерировать HTML (например, маркированный список)
const html = `<ul>\n${escapedItems.map(item => `  <li>${item}</li>`).join("\n")}\n</ul>`;

console.log(html);

console.log(formatComments(comments))