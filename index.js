var buttons = document.getElementsByClassName("btn");
var display = document.getElementById("display");
var operand1 = null;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "AC") {
      display.innerText = "";
      operand1 = null;
      operand2 == null;
      operator = null;
    } else if (
      value == "." ||
      value == "7" ||
      value == "8" ||
      value == "9" ||
      value == "4" ||
      value == "5" ||
      value == "6" ||
      value == "1" ||
      value == "2" ||
      value == "3" ||
      value == "0"
    ) {
      if (operand1 == null) {
        operand1 = value;
        display.innerText = value;
      } else {
        if (operator == null) {
          display.innerText = operand1 + value;
          operand1 = operand1 + value;
        } else {
          if (operand2 == null) {
            display.innerText = display.innerText + value;
            operand2 = value;
          } else {
            display.innerText = display.innerText + value;
            operand2 = operand2 + value;
          }
        }
      }
    } else if (value == "=") {
      var ans = eval(operand1 + operator + operand2);
      display.innerText = ans;
      operand1 = null;
      operand2 = null;
      operator = null;
    } else if (value == "+" || value == "-" || value == "*" || value == "/") {
      operator = value;
      display.innerText = display.innerText + value;
    } else {
      display.innerText = "%";
    }
  });
}
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     btns[i].style.backgroundColor = "red";
//   });
// }

// Object.keys(obj);
// Object.getOwnPropertyNames(obj);
