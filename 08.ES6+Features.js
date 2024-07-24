/*
    Activity 1 : Template Literals.
*/

// Task 1

function templateString(name, age) {
  return `My name is ${name} and I'm ${age} years old.`;
}

// console.log(templateString("Neeraj", 24));

//Task 2

const string = `hello 
World`;

// console.log(string);

/*
    Activity 2 : Destructuring.
*/

//Task 3

function destructuringArray() {
  const arr = [1, 2, 3, 4, 5, 6];
  const [a, b, ...e] = arr;
  return [a, b];
}

// console.log(destructuringArray());

//Task 4

function objectDestructuring() {
  const obj = {
    title: "politics",
    author: "akki",
    year: 2020,
  };
  const { title, author } = obj;
  return { title, author };
}

// console.log(objectDestructuring());

/*
    Activity 3 : Rest and Spread Operators.
*/

//Task 5

function spreadOperator() {
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5, 6];
  return newArr;
}

// console.log(spreadOperator());

//Task 6

function restOperator(...arg) {
  //   console.log(arg);
  let sum = 0;
  for (const values of arg) {
    sum += values;
  }
  return sum;
}

// console.log(restOperator(20, 45, 20));

/*
    Activity 4 : Default Parameters.
*/

//Task 7

function productOfTwoNumber(a, b = 1) {
  return a * b;
}

// console.log(productOfTwoNumber(2, 2));
// console.log(productOfTwoNumber(2));

/*
    Activity 5 : Enhanced Object Literals.
*/

// Task 8

// var name = "akki";
// var age = 24;
// var greetings = function () {
//   console.log(`Hello this is ${this.name} and I am ${this.age} years old.`);
// };

// let newperson = { name: "lucky", age: 24, greetings };
// newperson.greetings();

function EnhancedObjectLiterals(name, age) {
  const person = {
    name,
    age,
    greetings() {
      return `Hello this is ${this.name} and I am ${this.age} years old.`;
    },
  };
  return person;
}

// console.log(EnhancedObjectLiterals("akki", 24));

// Task 9

console.log(EnhancedObjectLiterals("lucky", 26).greetings());
