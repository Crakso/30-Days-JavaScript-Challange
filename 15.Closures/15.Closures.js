/*
    Activity 1 : Understanding Closures.
*/

//Task 1

// function Outer() {
//   const name = "akki";
//   function Inner() {
//     console.log("Inner Function", name);
//     return name;
//   }
//   console.log("Outer Function", name);
//   return Inner;
// }

// const myfunc = Outer();
// console.log(myfunc());

//Task 2

// const Counter = (function () {
//   let counter = 0;

//   function changeValue(val) {
//     return (counter += val);
//   }
//   return {
//     increment() {
//       return changeValue(+1);
//     },
//     decrement() {
//       return changeValue(-1);
//     },
//     counterValue() {
//       return counter;
//     },
//   };
// })();

// console.log(Counter.increment());
// console.log(Counter.decrement());

// console.log(Counter.counterValue());

/*
    Activity 2 : Practical Closures.
*/

//Task 3

// const generateUniqueId = (function () {
//   let Id = 0;

//   function lastId() {
//     if (Id === 0) {
//       return Id;
//     }
//     return Id - 1;
//   }
//   function newId() {
//     Id += 1;
//     return Id;
//   }

//   return {
//     newUniqueId() {
//       return newId();
//     },
//     lastUniqueId() {
//       return lastId();
//     },
//   };
// })();

// console.log(generateUniqueId.lastUniqueId());
// console.log(generateUniqueId.newUniqueId());
// console.log(generateUniqueId.newUniqueId());
// console.log(generateUniqueId.lastUniqueId());

//Task 4

// const User = (function (username) {
//   return function greet() {
//     return `Hey ${username} nice to meet you.`;
//   };
// })();

// const greetingUser = User("akki");
// console.log(greetingUser);

/*
    Activity 3 : Closures in Loops.
*/

//Task 5

// const createArrayOfFunctions = (function () {
//   const arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(function () {
//       return i;
//     });
//   }
//   return arr;
// })();

// console.log(createArrayOfFunctions[0]());
// console.log(createArrayOfFunctions[1]());
// console.log(createArrayOfFunctions[2]());

/*
    Activity 4 : Module Pattern.
*/

//Task 6

// const Itemcollection = (function () {
//   let items = [];

//   return {
//     add(item) {
//       return items.push(item);
//     },
//     remove(Item) {
//       return (items = items.filter((item) => item !== Item));
//     },
//     listItem() {
//       return items;
//     },
//   };
// })();

// console.log(Itemcollection.add("allo"));
// console.log(Itemcollection.add("gobi"));
// console.log(Itemcollection.add("pyaz"));

// console.log(Itemcollection.remove("gobi"));

// console.log(Itemcollection.listItem());

/*
    Activity 5 : Memoization.
*/

//Task 7

// function memo() {
//   const cache = {};
//   function useMemo(x) {
//     if (cache[x]) return cache[x];

//     const squareRoot = x * x;
//     cache[x] = squareRoot;
//     return squareRoot;
//   }

//   return useMemo;
// }

// const memoizeSquareRoot = memo();
// console.log(memoizeSquareRoot(5));

//Task 8

function getMemoizes() {
  const cache = {};
  function DoHeavyCalculation(x) {
    if (cache[x]) return cache[x];

    // let startDate = Date.now();
    // let currentDate = startDate;

    // while (startDate + 5000 > currentDate) {
    //   currentDate = Date.now();
    // //   console.log("calculating..." + (startDate - currentDate));
    // }

    function Factorial() {
      let value = 1;
      let temp = 1;

      while (temp <= x) {
        value = value * temp;
        temp++;
      }
      return value;
    }

    const result = Factorial();

    cache[x] = result;

    return result;
  }
  return DoHeavyCalculation;
}

const doCalculation = getMemoizes();
console.log(doCalculation(5));
