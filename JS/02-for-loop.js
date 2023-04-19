/** Цикл for */

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log("End");

console.log("----------------------------");

/** Pre-increment & Post-incremeni
 *
 * a++
 * ++a
 *
 * DO NOT USE!!!
 */

/** Напиши скрипт, який рахує загальну суму зарплат працівників.
 *
 * Кількість працівників зберігається у змінній employees.
 * Зарплата кожного працівника, це рандомне число від 500 до 5000.
 * Записати сумму в змінну totalSalary і вивести у консоль.
 */

// Зробити змінні
const employees = 10;
let totalSalary = 0;

const minSalary = 500;
const maxSalary = 5000;

// Перебрати робітників у циклі

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`Зарплата працівника номер ${i} - ${salary}`);
  totalSalary += salary;
}

console.log(`Зaгфльна сума зарплат працівників - ${totalSalary}`);
// Згенерувати рандомну ЗП

// Добавити до тоталу
// Лог
console.log("----------------------------");

/** Напиши скрипт, який підрахує сумму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 *
 */

// оголошення змінних

const min = 6;
const max = 21;
let total = 0;
// Фор від мін до мах з кроком у 1
// Перевіряємо залишок від ділення
// Пишемо сумму

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);
//   if (i % 2 === 0) {
//     console.log(`Парне: `, i);
//     total += i;
//   }
// }

console.log("Загальна сума -", total);

console.log("----------------------------");

for (let i = min; i <= max; i += 1) {
  //   console.log(i);
  if (i % 2 !== 0) {
    console.log(`Непарне: `, i);
    continue;
  }

  console.log(`Парне: `, i);
  total += i;
}

console.log("Загальна сума -", total);

console.log("----------------------------");
