// console.log('Hi');

//Global Variables
let decimal = document.querySelector('.decimal');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let operator = '';
let previousValue = '';
let currentValue = '';
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');

//Event Listeners
numbers.forEach((number) =>
  number.addEventListener('click', function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

operators.forEach((op) =>
  op.addEventListener('click', function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + ' ' + operator;
    currentScreen.textContent = currentValue;
  })
);

clear.addEventListener('click', function () {
  previousValue = '';
  currentValue = '';
  operator = '';
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

equal.addEventListener('click', function () {
  calculate();
  previousScreen.textContent = '';
  if (previousValue.length <= 8) {
    currentScreen.textContent = previousValue;
  } else {
    currentScreen.textContent = previousValue.slice(0, 8) + '...';
  }
});

decimal.addEventListener('click', function () {
  addDecimal();
});

//Functions
function handleNumber(num) {
  if (currentValue.length <= 8) {
    currentValue += num;
  }
}

function handleOperator(op) {
  console.log(op);
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === '+') {
    previousValue += currentValue;
  } else if (operator === '-') {
    previousValue -= currentValue;
  } else if (operator === 'x') {
    previousValue *= currentValue;
  } else if (operator === '/') {
    previousValue /= currentValue;
  }

  previousValue = roundNumber(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
  console.log(previousValue);
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimal() {
  if (!currentValue.includes('.')) {
    currentValue += '.';
  }
}
