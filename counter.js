let counter = 0;
// const counterElement = document.querySelector("#counter-value");

// function increaseCounter() {
//   counter += 1;
//   counterElement.innerText = `${counter}`;
// }

// function decreaseCounter() {
//   counter -= 1;
//   counterElement.innerText = `${counter}`;
// }

// function resetCounter() {
//   counter = 0;
//   counterElement.innerText = `${counter}`;
// }

function handleCounter(operator) {
  const counterElement = document.querySelector("#counter-value");
  switch (operator) {
    case "increase":
      counter += 1;
      break;
    case "decrease":
      counter -= 1;
      break;
    case "reset":
      counter = 0;
      break;
    default:
      return counter;
  }
  counterElement.innerText = `${counter}`;
}
