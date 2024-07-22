/*
    Activity 1: Function Declaration. 
*/

//Task 1

function checkEvenOdd(num) {
  num % 2 == 0 ? console.log("Even") : console.log("Odd");
}

// checkEvenOdd("12222");

//Task 2

function squareRoot(num) {
  return num * num;
}

// const ans = squareRoot(25);
// console.log(ans);

/*
    Activity 2: Function Expression
*/

//Task 3

const maximumNumber = function (x, y) {
  x < y ? console.log(y) : console.log(x);
};

// maximumNumber(122, 15);

//Task 4

const concatenateStrings = function (x, y) {
  return x + y;
};

// console.log(concatenateStrings("Hello", " World"));
// const result = concatenateStrings("Hello", " World");
// console.log(result);

/*
    Activity 3 : Arrow Functions
*/

//Task 5

const Add = (a, b) => {
  return a + b;
};

// const result = Add(25, 22);
// console.log(result);

// console.log(Add(50, 415));

//Task 6

const CheckStringForSpecifChar = (string) => {
  //   return string.includes(char);
  const specificChar = "!@#$%^&*()-_=+|{};:/?.>";
  for (let i = 0; i < string.length; i++) {
    if (specificChar.includes(string.charAt(i))) return true;
  }
  return false;
};

// console.log(CheckStringForSpecifChar("Hello Guys Welcome To our Show @"));

/* 
    Activity 4 : Function , Parameters and Default Values
*/

//Task 7

const productOfNumber = function (a, b = 24) {
  return a * b;
};

// console.log(productOfNumber(2));

//Task 8
function GreetingMassage(name, age = 18) {
  return `Hello ${name}, Congratulations on Turning ${age}`;
}

// console.log(GreetingMassage("Sagar", 24));

/* 
    Activity 5 : Higher Order Functions
*/

//Task 9
const higherOrderFnc = (times, cb) => {
  for (let i = 0; i < times; i++) console.log(cb());
};

function GreetingToSomeOne() {
  return GreetingMassage("Nobita");
}

function GoodBye() {
  return "GoodBye Everyone!";
}

// higherOrderFnc(5, GreetingToSomeOne);
// higherOrderFnc(2, GoodBye);

//Task 10

function add(value) {
  return value + 10;
}

function mul(value) {
  return value * 2;
}

function takingTwoFunctions(fun1, fun2, value) {
  const result = fun1(value);
  return fun2(result);
}

console.log(takingTwoFunctions(add, mul, 12));
