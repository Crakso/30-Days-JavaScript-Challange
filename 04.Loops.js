/*
    Activity 1: For Loop
*/

//Task 1
function Looping() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Looping();

//Task 2
function Table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + "*" + i + "=" + number * i);
  }
}

// Table(5);

/*
    Activity 2: While Loop
*/

//Task 3
function AdditionOfNumbersWithWhileLoop(a) {
  let count = 0;
  let sum = 0;
  while (count != a) {
    sum += count + 1;
    console.log(sum);
    count++;
  }
}

// AdditionOfNumbersWithWhileLoop(10);

//Task 4

function printNumberWithWhileLoop(a) {
  while (a > 0) {
    console.log(a--);
  }
}

// printNumberWithWhileLoop(10);

/*
    Activity 3: Do-While Loop
*/

//Task 5
function printNumberWithDoWhile(limit) {
  let value = 1;
  do {
    console.log(value++);
  } while (value <= limit);
}

// printNumberWithDoWhile(5);

//Task 6
function factorialOfANumber(number) {
  let ans = 1;
  do {
    ans *= number;
    number--;
  } while (number != 0);
  console.log(ans);
}

// factorialOfANumber(6);

/*
    Activity 4: Nested Loops
*/

//Task 7

function rightAngleTriangle(wh) {
  for (let i = 1; i <= wh; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// rightAngleTriangle(5);

/*
    Activity 5: Loop Control Statements
*/

//Task 8

function ContinueStatement() {
  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      console.log(`${i} is detected!`);
      continue;
    }
    console.log(i);
  }
}

// ContinueStatement()

//Task 9

function BreakStatement() {
  for (let i = 1; i <= 10; i++) {
    if (i == 7) {
      console.log(`${i} is detected!`);
      break;
    }
    console.log(i);
  }
}

BreakStatement();
