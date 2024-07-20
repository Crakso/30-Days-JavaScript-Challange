function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function mul(a, b) {
  console.log(a * b);
}

function div(a, b) {
  console.log(a / b);
}

function reminder(a, b) {
  console.log(a % b);
}

/* 
    Activity 1 : Arithmatic Operators.
*/
// add(13, 40);
// sub(14, 12);
// mul(2, 4);
// div(12, 6);
// reminder(15, 4);

/*
    Activity 2 : Assignment Operators.
*/

// function add(a, b) {
//   console.log((a += b));
// }

// function sub(a, b) {
//   console.log((a -= b));
// }

/*
    Activity 3 : Comparision Operators.
*/

// function greater(a, b) {
//   console.log(a > b);
// }

// function smaller(a, b) {
//   console.log(a < b);
// }

// greater(5, 4);
// smaller(5, 4);

// console.log(5 <= 5);
/*
    when we compare a string with a number then compiler first convert string into number then compair it 
    if the string is empty then the value is assigned 0.
*/
// console.log(5 >= "15");
// console.log(15 == "15");
// console.log(15 === "15");

/*
    Activity 4 : Logical Operators.
*/

// console.log(true && false);
// console.log(false || true);
// console.log(!true);

/*
    Activity 5 : ternary Operators.
*/

function findNumber(a) {
  a >= 0 ? console.log("positive") : console.log("Negative");
}

findNumber(10);
