/*
  Activity 1: Creating an Exporting Modules.
*/

//Task 1

// import { addition } from "./13.Export.js";

// const p = document.createElement("p");
// p.appendChild(document.createTextNode(addition(12, 20)));
// document.body.appendChild(p);

//Task 2

// import { detail } from "./13.Export.js";

// const span = document.createElement("span");
// document.body.appendChild(
//   span.appendChild(document.createTextNode(detail.person.name))
// );

// console.log(detail.person);

/*
  Activity 2: Named and Default Exports.
*/

//Task 3

// import { Multiplication, Division } from "./13.Export.js";

// console.log(Multiplication(2, 4));
// console.log(Division(14, 2));

//Task 4

// import usingDefaultexport from "./13.Export.js";

// console.log(usingDefaultexport(21, 2));

/*
  Activity 3: Importing Entire Modules.
*/

//Task 5

// import * as allProperties from "./13.Export.js";

// console.log(allProperties.addition(22, 64));
// console.log(allProperties.Multiplication(2, 14));
// console.log(allProperties.name);
// console.log(allProperties.age);
// console.log(allProperties.state);
// console.log(allProperties.pi);
// console.log(allProperties.detail.person);
