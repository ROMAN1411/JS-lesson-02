/** Напиши скрипт обробки покупки в магазині
 *
 * Баланс користувача зберігається у змінній balance
 * Сумма покупки зберігається у змінній payment
 *
 * Перед перевіркою вивести повідомлення
 * "Загальна вартість замовлення [число] кредитів. Перевіряємо кількість доступних
 * засобів на рахунку"
 *
 * - Якщо сума покупки не перевищує баланс:
 *      - Вирахувати з балансу сумму покупки;
 *      - Вивести повідомлення "На рахунку залишилось [число] кредитів"
 *
 * - Якщо сумма покупки перевищує баланс:
 *      - Вивести повідомлення "На рахунку недостатньо коштів для проведення операції!"
 *
 * - По завершенню вивести повідомлення "Операція завершена"
 *
 */

let balance = 10000;
const payment = 2000;

console.log(
  `Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних засобів на рахунку`
);

if (balance >= payment) {
  console.log("ok");
  balance -= payment;
  console.log("Все добре, знімаємо кошти... Дякуємо за покупку!");
  console.log(`На рахунку залишилось ${balance} кредитів`);
} else {
  console.log("На рахунку недостатньо коштів для проведення операції!");
}

console.log("Операція завершена");
