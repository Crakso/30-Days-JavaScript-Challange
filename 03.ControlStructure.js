/* 
    Activity 1 : if-else statements.
*/

function checkingValue(value) {
  if (value < 0) return console.log("Negative");
  if (value > 0) return console.log("Positive");
  else return console.log("Zero");
}
// const value = 20;
// checkingValue(value);

function Voter(age) {
  if (age >= 18) {
    return console.log("Eligible to vote");
  } else return console.log("Not eligible to vote!");
}

// const age = 15;
// Voter(age);

/* 
    Activity 2 : Nested if-else statements.
*/

function largestNumber(a, b, c) {
  if (a <= b) {
    if (b <= c) {
      return console.log(c + " is the largest number.");
    } else return console.log(b + " is the largest number.");
  } else {
    if (a >= c) {
      return console.log(a + " is the largest number.");
    } else return console.log(c + " is the largest number.");
  }
}

// largestNumber(-121, -18, -12);

/* 
    Activity 3 : Switch Cases.
*/

function Week(value) {
  switch (value) {
    case 1:
      console.log("Monday");
      break;

    case 2:
      console.log("Tuesday");
      break;

    case 3:
      console.log("Wednesday");
      break;

    case 4:
      console.log("Thursday");
      break;

    case 5:
      console.log("Friday");
      break;

    case 6:
      console.log("Saturday");
      break;

    case 7:
      console.log("Sunday");
      break;

    default:
      break;
  }
}

// Week(7);

function Grades(value) {
  switch (true) {
    case value <= 100 && value > 85:
      console.log("A");
      break;

    case value <= 85 && value > 70:
      console.log("B");
      break;

    case value <= 70 && value > 60:
      console.log("C");
      break;

    case value <= 60 && value > 50:
      console.log("D");
      break;

    case value <= 50 && value > 35:
      console.log("E");
      break;

    case value <= 35:
      console.log("F");
      break;

    default:
      console.log("Enter Valid Numbers");
      break;
  }
}

// Grades(54);

/* 
    Activity 4 : Conditional (Ternary) Operator.
*/

function evenOddCheck(number) {
  number % 2 == 0 ? console.log("even") : console.log("odd");
}

// evenOddCheck(154);

/* 
    Activity 5 : Combining Conditions. leap year.  
*/

// if(year%4==0 && year%100!=0) leap year
// if(year%100==0 && year%400 == 0) leap year

function LeapYear(year) {
  if (year % 4 == 0 && year % 100 != 0) return console.log("Leap Year.");
  else if (year % 100 == 0 && year % 400 == 0) return console.log("Leap Year.");
  else console.log("Not a leap year!");
}

// LeapYear(2025);
