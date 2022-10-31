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
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equals = document.querySelector('.equals');

// add event listeners for each button and assign to variables
  // numbers (listen for click or keydown to corresponding textcontent and use the text content of the element)
numbers.forEach(number => {
  number.addEventListener('click', typeNumber);
})

window.addEventListener('keypress', e => {
  let keycode = e.which || e.keyCode;
  let valueEntered = String.fromCharCode(keycode);
  console.log(valueEntered);
});
  // operators (listen for click or keydown for specific operator on keypad, different variables for each operator)
  // a part of each event listener should be to append the text content of the button to the display div

// add typed or clicked number to display div
function typeNumber(key) {
  currentDisplay.innerText = key.innerText;
}

// Addition function
  // (for each function below) create if statement that checks if there is already text in the display and use that as num1 if operator button pressed again before user types or presses another button.

// Multiply function

// Divide function

// Subtract funtion

// Display logic
  // print last-pressed button as history (need new div?)