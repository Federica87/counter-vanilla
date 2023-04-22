let counter = 0;
const counterElement = document.querySelector("#counter-value");

function increaseCounter() {
  counter += 1;
  counterElement.innerText = `${counter}`;
}

function decreaseCounter() {
  counter -= 1;
  counterElement.innerText = `${counter}`;
}
