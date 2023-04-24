const userInput = prompt("Enter car type");

// if (userInput === "bmw") {
//   console.log("Чому не Ауді 🏎️");
// } else if (userInput === "audi") {
//   console.log("Ви знаєте толк в машинах 🚔");
// } else if (userInput === "kia") {
//   console.log("Ви любите корею? 🦩");
// } else if (userInput === "ford") {
//   console.log("Мабуть Ви з Америки 🌎");
// } else {
//   console.log("Вводьте уважніше!!! 😠");
// }

switch (userInput.toLowerCase()) {
  case "bmw":
    console.log("Чому не Ауді 🏎️");
    break;

  case "audi":
    console.log("Ви знаєте толк в машинах 🚔");
    break;

  case "kia":
    console.log("Ви любите корею? 🦩");
    break;

  case "ford":
    console.log("Мабуть Ви з Америки 🌎");
    break;

  default:
    console.log("Вводьте уважніше!!! 😠");
    break;
}
