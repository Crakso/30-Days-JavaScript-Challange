/*
  Activity 1: Creating an Exporting Modules.
*/

//Task 1

export function addition(a, b) {
  return a + b;
}

//Task 2

export const detail = {
  person: {
    name: "akki",
    age: 24,
    greetings() {
      alert("Hello! Nice to meet you");
    },
  },
};

/*
  Activity 2: Named and Default Exports.
*/

//Task 3

function Multiplication(a, b) {
  return a * b;
}
function Division(a, b) {
  return a / b;
}
export { Multiplication, Division };

//Task 4

export default function usingDefaultexport(a, b) {
  return a % b;
}

/*
  Activity 3: Importing Entire Modules.
*/

//Task 5

export const pi = 3.14;
export const name = "akki";
export const age = 24;
export const state = "Uttarakhand";
