// assign operators to variables to capture text in DOM through functions
let firstOperand = '';
let secondOperand = '';
let currentOperand = null;
let shouldResetDisply = false;

// pull elements from the DOM, store them in variables
const numbers = document.querySelectorAll('.number');
const decimal = document.querySelector('.decimal');
const allClear = document.querySelector('.all-clear');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const negative = document.querySelector('.negative');
const currentDisplay = document.querySelector('.current');
const historyDisplay = document.querySelector('.history');
// Operators:
const addition = document.querySelector('.add');
const subtraction = document.querySelector('.subtract');
const multiplication = document.querySelector('.multiply');
const division = document.querySelector('.divide');
const equals = document.querySelector('.equals');

// add event listeners for each button and assign to variables
  // numbers (listen for click or keydown to corresponding textcontent and use the text content of the element)
numbers.forEach(number => {
  number.addEventListener('click', () => {
    typeNumber(number);
  });
})

equals.addEventListener('click', operate);
equals.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    operate;
  }
})

window.addEventListener('keydown', e => {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let valueEntered = e.key;

  let match = numbers.find(number => {
    if (Number(valueEntered) === number) {
      return true;
    }
  })

  if (match != null) {
    typeNumber(match);
  }
});
  // operators (listen for click or keydown for specific operator on keypad, different variables for each operator)
  // a part of each event listener should be to append the text content of the button to the display div

// // add typed or clicked number to display div
function typeNumber(number) { 
  if (currentDisplay.innerHTML == '') { 
    currentDisplay.innerHTML = `${Number(number)}`;
  } else {
    currentDisplay.innerHTML = `${(Number(currentDisplay.innerText) * 10) + Number(number)}`;
  }
}

// Addition function
  // (for each function below) create if statement that checks if there is already text in the display and use that as num1 if operator button pressed again before user types or presses another button.
const add = (a, b) => {
  return a + b;
}

// Multiply function
const multiply = (a, b) => {
  return a * b;
}

// Divide function
const divide = (a, b) => {
  if (b === 0) {
    return null;
  } else return a / b;
}

// Subtract funtion
const subtract = (a, b) => {
  return a - b;
}

// keyboard handler
function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return '×'
  if (keyboardOperator === '-') return '−'
  if (keyboardOperator === '+') return '+'
}

// operate function, run all operators
function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator == '+') {
    add(num1, num2);
  } else if (operator == '−') {
    subtract(num1, num2);
  } else if (operator == '×') {
    multiply(num1, num2);
  } else if (operator == '÷') {
    divide(num1, num2);
  } else {
    return null;
  }
}

// Display logic
  // print last-pressed button as history (need new div?)