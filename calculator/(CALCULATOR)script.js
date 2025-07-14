let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let currentInput = "";
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const value = this.getAttribute("data-value");

    if (this.id === "clear") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (this.id === "equal") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resetNext = true;
      } catch (e) {
        display.textContent = "Error";
        currentInput = "";
      }
      return;
    }

    if (resetNext) {
      currentInput = "";
      resetNext = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
