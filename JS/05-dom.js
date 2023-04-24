const btnAdd = document.querySelector("button[data-add]");
const btnClean = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector("[data-output] span");

let total = 0;

console.log(btnAdd.textContent);
console.log(valueInput);

btnAdd.addEventListener("click", function () {
  console.log("click Add");
  console.log(valueInput.value);
  console.log(typeof valueInput.value);
  console.log(typeof Number(valueInput.value));
  console.log(Number(valueInput.value));

  const value = Number(valueInput.value);

  total += value;

  outputEl.textContent = total;

  console.log("total", total);

  valueInput.value = 0;

  console.log("--------------------------------------");
});

btnClean.addEventListener("click", function () {
  total = 0;
  outputEl.textContent = total;
  console.log("total", total);
});

console.log("mango".indexOf("go"));
