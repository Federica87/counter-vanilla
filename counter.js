let counter = 0;

function handleCounter(operator) {
  const counterElement = document.querySelector("#counter-value");

  switch (operator) {
    case "increase":
      counter += 1;
      break;
    case "decrease":
      if (counter > 0) {
        counter -= 1;
      } else counter;
      break;
    case "reset":
      counter = 0;
      break;
    default:
      return counter;
  }
  counterElement.innerText = `${counter}`;
}
