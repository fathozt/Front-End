let divs = document.querySelectorAll(".divs");
let bigDisplay = document.querySelector(".big");
let smallDisplay = document.querySelector(".small");
let operandAC = document.querySelector(".AC");
let operand = document.querySelector(".operand");
let operandCalculate = document.querySelector(".calculate");
let finalOperand = "";
let operandCounter = 0;

function addition(x, y) {
  return parseFloat(x) - parseFloat(y).toFixed(2);
}
function subtract(x, y) {
  return parseFloat(x) - parseFloat(y).toFixed(2);
}
function division(x, y) {
  return parseFloat(x) / parseFloat(y).toFixed(2);
}
function multiple(x, y) {
  return (parseFloat(x) * parseFloat(y)).toFixed(2);
}

//     if (btn.className.includes("operand") && operandCounter < 1) {
//       smallDisplay.innerText += bigDisplay.innerText + btn.innerText;
//       bigDisplay.innerText = "";
//       operandCounter+2
//       return;
//     }
//     if(btn.className.includes('operand') && operandCounter == 0)
//     bigDisplay.innerText += btn.innerText;
//   };

divs.forEach((btn) => {
  btn.onclick = () => {
    if (btn.className.includes("operand")) {
      operandCounter++;
      if (operandCounter > 1) return;
      smallDisplay.innerText += bigDisplay.innerText + ' ' +  btn.innerText + '  ';
      bigDisplay.innerText = "";
    }
    bigDisplay.innerText += btn.innerText;
  };
});

function clear() {
  bigDisplay.innerText = "";
  smallDisplay.innerText = "";
  operandCounter = 0;
}

operandAC.addEventListener("click", () => {
  clear();
});

// operand.addEventListener("click", () => {
//   console.log("asdasdas");
//   smallDisplay.innerText = bigDisplay.innerText;
//   bigDisplay.innerText = "";
// });

operandCalculate.addEventListener("click", () => {});
