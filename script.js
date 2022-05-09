function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

function clearScreen() {
  screen.innerHTML = "0";
}

function calculator2(input) {
  let opArr = [];
  let newInput = input;
  for (let i = 0; i < input.length; i++) {
    visor = input[i];
    if (opSymbols.includes(input[i])) {
      opArr.unshift(input[i]);
    }
    if (opArr.length == 2) {
      let operation = opArr.pop();
      [a, rest] = newInput.split(operation);
      b = rest.split(opArr[0])[0]; // unsure if to use opArr[0] since its length is 1
      newInput = operate(operation, a, b) + input.slice(i);
    }
  }
  if (opArr) {
    operation = opArr.pop();
    [a, b] = newInput.split(operation);
    newInput = operate(operation, a, b);
  }
  screen.innerHTML = Math.round((newInput + Number.EPSILON) * 100) / 100;
}

const opSymbols = ["+", "-", "*", "/"];
const screen = document.querySelector("#screen");
const numButtons = Array.from(document.querySelectorAll(".numBtn"));
const opButtons = Array.from(document.querySelectorAll(".opBtn"));
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector("#equal");

numButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (screen.innerHTML == "NaN" || screen.innerHTML == 0) {
      screen.innerHTML = `${item.innerHTML}`;
    } else {
      screen.innerHTML += `${item.innerHTML}`;
    }
  });
});

opButtons.forEach((item) => {
  item.addEventListener("click", () => {
    screen.innerHTML += `${item.innerHTML}`;
  });
});

clearBtn.onclick = () => clearScreen();

equalBtn.onclick = () => calculator2(screen.innerHTML);

// include function where it prompts equal after clicking operation if input already contains one

function calculator3(input) {}
