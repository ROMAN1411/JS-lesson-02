/** Example - 01
 * Базові математичні оператори
 *
 * Виведи на екран загальну кількість яблук і винограду.
 * Різницю яблук і винограду
 */

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);

const diff = apples - grapes;
console.log(diff);

console.log("------------------------");

/** Example - 02
 * Комбіновані оператори
 * Заміни вираз перевизначення комбінованим оператором +=
 */

let students = 100;
// students = students + 50;
students += 50;
console.log(students);

console.log("------------------------");

/** Example - 03
 * Приоритет операторів
 * Розбери пріоритет операторів в інструкції присвоєння значення змінної result
 */

const result = 108 + 223 - 2 * 5;
console.log(result);

console.log("------------------------");

/** Example - 04
 * Напиши скрипт який виводить в консоль округлення вверх/вниз і т.д. значення змінних
 *
 * Використовуй методи Math.floor(), Math.ceil(), Math.round().
 * Перевір, що буде виведено у консолью
 */

const value = 27.5;

console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));
console.log(Math.round(27, 4));

console.log("------------------------");

/** Example - 05
 * Шаблонні рядки
 * Склади фразу за допомогою шаблонних рядків 'A has B boots in stock',
 * де А, В - це змінні, вставлені в рядок
 */

const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenseBots = 50;
const message = `${companyName} has ${repairBots + defenseBots} boots in stock`;

console.log(message);

console.log("------------------------");

/** Example - 6
 *  Методи рядків і чейнінг
 *
 * Написати скрипт, який розрахує індекс маси тіла людини.
 * Для цього необхідно розділити вагу в кг на квадрат висоти людини в метрах
 * Вага і зріст - weight i height, у вигляді рядків
 * Нецілі числа можуть бути задані в виді "24.7" та "24,7", тобто, в якості розділювача дробової частини може бути використана кома
 * Індекс маси тіла необхідно округлити до однієї цифри після коми
 */

let weight = "88,3";
let height = "1.75";

const str = weight.replace(",", ".");

// console.log(parseFloat(str));
// console.log(parseFloat(height));

const bmi = parseFloat(str / height ** 2).toFixed(1);

console.log(Number(bmi));

console.log("------------------------");

/** Example - 6
 * Значення за замовчуванням та оператор нульового злиття
 *
 *Відрефактори код таким чином, щоб у змінну value присвоїлося значення змінної inc
 *В протилежному випадку повинно присвоюватися значення defaultValue
 * Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined,
 * Використовуй оператор ?? (nullish coalescing operator)
 */

const incomingValue = null;
const defaultValue = 10;
const value1 = incomingValue ?? defaultValue;
console.log(value1);

console.log("------------------------");

/** Example - 6
 * Напиши скрипт, який переведе значення totalMinutes в рядок у форматі 00:00
 */

const totalMinutes = 70;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

console.log(`${hours} : ${minutes}`);
