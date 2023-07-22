let numbs = document.querySelectorAll(".operator-nmb");
let opreators = document.querySelectorAll(".operator");
let reset = document.querySelector(".reset");
let display = document.querySelector(".display-result");
let numOne = "";
let numTwo = "";

numbs.forEach((elementNumber) => {
  elementNumber.addEventListener("click", () => {
    let activeOperator = document.querySelector(".active");
    if (!activeOperator) {
      numOne = numOne + elementNumber.textContent;
      display.innerHTML = numOne;
    }
    if (numOne && activeOperator) {
      numTwo = numTwo + elementNumber.textContent;
      display.innerHTML = numTwo;
    }
    console.log(numOne, numTwo);
  });
});

opreators.forEach((elementOperator) => {
  elementOperator.addEventListener("click", () => {
    let activeBtn = document.querySelector(".active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
    elementOperator.classList.add("active");
    console.log(elementOperator.textContent);
  });
});

reset.addEventListener("click", () => {
  let activeBtn = document.querySelector(".active");
  display.innerHTML = "0";
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }
});

function result() {
  let activeOperator = document.querySelector(".active");
  const typeOperator = activeOperator.textContent;
  if (activeOperator && numOne && numTwo) {
    switch (typeOperator) {
      case "+":
        display.innerHTML = Number(numOne) + Number(numTwo);
        activeOperator.classList.remove("active");
        break;
      case "-":
        display.innerHTML = Number(numOne) - Number(numTwo);
        activeOperator.classList.remove("active");
        break;
      case "*":
        display.innerHTML = Number(numOne) * Number(numTwo);
        activeOperator.classList.remove("active");
        break;
      case "/":
        display.innerHTML = Number(numOne) / Number(numTwo);
        activeOperator.classList.remove("active");
        break;
    }
  }
}
