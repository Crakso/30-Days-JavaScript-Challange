/*
    Activity 1: Array , Creation and Access
*/

// Task 1

const Array = [1, 2, 3, 4, 5];

// console.log(Array);

//Task 2

const firstElement = Array[0];
const LastElement = Array[4];

// console.table([firstElement, LastElement]);

/*
    Activity 2 : Array Methods (Basic)
*/

//Task 3

Array.push(20);
// console.log(Array);

//Task 4

Array.pop();
// console.log(Array);

//Task 5

Array.shift();
// console.log(Array);

//Task 6

Array.unshift(25);
// console.log(Array);

/*
    Activity 3 : Array Methods (Intermediate)
*/

//Task 7

const newArr = [];
Array.map((element) => {
  newArr.push(element * 2);
});
// console.log(newArr);

//Task 8

const newArrs = Array.filter((e) => e % 2 === 0);
// console.log(newArrs);

//Task 9

const newValue = Array.reduce((acc, currVal) => acc + currVal, 0);

// console.log(newValue);
// console.log(Array);

/*
    Activity 4 : Array Iteration
*/

//Task 10

for (let i = 0; i < Array.length; i++) {
  //   console.log(Array[i]);
}

//Task 11

Array.forEach((element) => {
  //   console.log(element);
});

/*
    Activity 5 : Multi-Dimensional Arrays
*/

//Task 12

const mul_Array = [
  [4, 5, 6, 48, 18],
  [1, 6, 7, 6, 9],
  [4, 28, 6, 8, 10],
];

// for (let i = 0; i < mul_Array.length; i++) {
//   for (let j = 0; j < mul_Array[i].length; j++) {
//     console.log(mul_Array[i][j]);
//   }
// }
// console.log(mul_Array);

//Task 13

function FindElementFromArray(Target) {
  for (let i = 0; i < mul_Array.length; i++) {
    for (let j = 0; j < mul_Array[i].length; j++) {
      if (Target === mul_Array[i][j]) {
        return { i, j, value: mul_Array[i][j] };
      }
    }
  }
}

console.log(FindElementFromArray(8));
