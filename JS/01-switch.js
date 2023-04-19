/** Напиши скрипт вибору вартості готелю по кількості зірок.
 *
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Якщо в змінній "stars" щось, крім чисел 1-5, сиведи рядок
 * "Такої кількості зірок немає"
 */

// const stars = 6;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такої кількості зірок немає");
// }

// console.log(price);

console.log("------------------------------------");

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Такої кількості зірок немає");
// }

// console.log(price);

console.log("------------------------------------");

/**Напиши скрипт вибору вартолсті готелю за кількістю зірок
 *
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такої кількості зірок немає");
// }

// console.log(price);

// const stars = 4;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("Такої кількості зірок немає");
// }

// console.log(price);

console.log("------------------------------------");

/** Напиши скрипт вибору опції доставки товарую
 * Опція зберігається в перемінній option: 1 - сімовивіз, 2 - кур'єр, 3 - пошта.
 *
 * В змінну message записати повідомлення в залежності від опції.
 *
 * - "Ви можете забрати товар завтра з 12:00 в нашому офісі"
 * - "Кур'єр доставить замовлення завтра з 09:00 до 18:00"
 * - "Товар буде відправлено сьогодні"
 * - "Вам зателефонує менеджер"
 */

// Зробити змінну
const option = 2;
let message;

// Зробити  switch 1 2 3
// В кожному кейсі записати в Message рядок

switch (option) {
  case 1:
    message = "Ви можете забрати товар завтра з 12:00 в нашому офісі";
    break;

  case 2:
    message = "Кур'єр доставить замовлення завтра з 09:00 до 18:00";
    break;

  case 3:
    message = "Товар буде відправлено сьогодні";
    break;

  default:
    message = "Вам зателефонує менеджер";
}

// Зробити лог Message

console.log(message);
