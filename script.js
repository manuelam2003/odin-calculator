function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const screen = document.querySelector("#screen");
const numButtons = Array.from(document.querySelectorAll(".numBtn"));
const opButtons = Array.from(document.querySelectorAll(".opBtn"));
const clearBtn = document.querySelector("#clear");
const loadBtn = document.querySelector("#load")

numButtons.forEach((item) => {
  item.addEventListener("click", () => {
    screen.innerHTML += `${item.innerHTML}`;
  });
});

opButtons.forEach((item) => {
  item.addEventListener("click", () => {
    screen.innerHTML += `${item.innerHTML}`;
  });
});
clearBtn.addEventListener("click", () => {
  screen.innerHTML = "";
});

loadBtn.onclick = () => console.log(screen.innerHTML)

