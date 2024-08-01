/*
    Activity 1: Basic Error Handling with Try-Catch.
*/

//Task 1

// const a = 20;

// try {
//   a = 24;
//   console.log(a);
// } catch (error) {
//   console.log(error.message);
// }

//Task 2

// function division(a, b) {
//   try {
//     if (b == 0) {
//       throw "denominator is zero";
//     }
//     const result = a / b;
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

// console.log(division(10, 0));

/*
    Activity 2: Finally Block.
*/

//Task 3

// function tryCatchFinallyExecution(a, b) {
//   try {
//     console.log("before the error.");
//     if (a < b) {
//       throw new Error("first value is smaller then second value.");
//     }
//     return a / b;
//   } catch (error) {
//     console.log("after the error");
//     return error;
//   } finally {
//     return "finally block executed.";
//   }
// }

// console.log(tryCatchFinallyExecution(122, 20));

/*
    Activity 3 : Custom Error Objects.
*/

//Task 4

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "my Custom Error";
  }
}

// function customError() {
//   try {
//     throw new CustomError("Something went Wrong!");
//   } catch (error) {
//     console.log(error.name, ":", error.message);
//   }
// }

// customError();

//Task 5

// function userValidation(username, password) {
//   try {
//     if (!username && !password) {
//       throw new CustomError("No username and Password.");
//     }
//     return { username, password };
//   } catch (error) {
//     return error;
//   }
// }

// console.log(userValidation("", ""));

/*
    Activity 4 : Error Handling in Promises.
*/

//Task 6

// new Promise((resolve, reject) => {
//   let a = Math.round(Math.random() * 10);
//   console.log(a);
//   if (a < 5) {
//     // throw new CustomError("Entered Value is smaller then 10.");
//     reject(`Error: Entered Value ${a} is smaller then 10.`);
//   }
//   resolve(a);
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Task 7

// const promise = new Promise((resolve, reject) => {
//   const randomValue = Math.round(Math.random());
//   console.log(randomValue);
//   if (randomValue) {
//     console.log("error");
//     reject(new Error("Something went wrong!"));
//   } else {
//     console.log("no error");
//     resolve("Everything is fine.");
//   }
// });

// async function handlingErrorswithAsync() {
//   try {
//     promise
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   } catch (error) {
//     console.log(error);
//   }
//   return promise;
// }

// handlingErrorswithAsync();

/*
    Activity 5 : Graceful Error Handling in Fetch.
*/

//Task 8

// fetch("https://github.om/hello")
//   .then((res) => {
//     if (!res) {
//       Throw new Error("Invalid URL!");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// Task 9

async function TryCatchFetchURL() {
  try {
    const result = await fetch("https://gittyhub.in/hello");
    if (!result) {
      throw new Error("Invalid URL.");
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

TryCatchFetchURL();
