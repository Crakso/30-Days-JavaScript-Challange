/*
    Activity 1 : Understanding Promises.
*/

//Task 1

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
// console.log("Promise 1");
//     resolve();
//   }, 2000);
// });

// promise1.then(() => {
//   console.log("Promise1 is resolved successfully");
// });

//Task 2

// const promise2 = new Promise(function (resolve, reject) {
//   let error = true;
//   if (!error) {
//     resolve({ username: "akki" });
//   }
//   reject("Error: Something Went Wrong!");
// });

// promise2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

/*
    Activity 2 : Chaining Promises.
*/

//Task 3

// new Promise(function (resolve, reject) {
//   resolve({ username: "Akki", password: "123" });
// })
//   .then((data) => {
//     console.log(data);
//     return data.username;
//   })
//   .then((username) => {
//     console.log(username);
//   });

/*
    Activity 3 : Using Async/Await.
*/

//Task 4

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise resolved.");
//   }, 4000);
// });

// async function AsyncAwait() {
//   const result = await promise4;
//   console.log(result);
// }

// AsyncAwait();

// Task 5

// const promise5 = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve({ username: "akki" });
//   }
//   reject("Error: Something Went Wrong!");
// });

// async function tryCatch() {
//   try {
//     const result = await promise5;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// tryCatch();

/*
    Activity 4 : Fetching Data from an API
*/

//Task 6

// fetch("https://dogapi.dog/api/v2/facts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((res) => {
//     const data = res.data;
//     console.log(...data);
//   })
//   .catch((err) => console.log(err));

// Task 7

// async function AsyncAwaitfetchAPI() {
//   try {
//     const res = await fetch("https://dogapi.dog/api/v2/facts");
//     const result = await res.json();
//     console.log(result.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// AsyncAwaitfetchAPI();

/*
    Activity 5 : Concurrent Promises
*/

//Task 8

// const promise1 = Promise.resolve(54);
// const promise2 = 6453;
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Resolved Successfully.");
//   }, 4000);
// });

// const promise6 = Promise.all([promise1, promise2, promise3]);

// promise6
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

//Task 9

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P1 Resolved Successfully.");
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P2 Resolved Successfully.");
  }, 300);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("P3 Resolved Successfully.");
  }, 4000);
});

Promise.race([p1, p2, p3]).then((res) => console.log(res));
