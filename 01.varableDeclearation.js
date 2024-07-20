var value = 2;
let string = "Hello";
const booleon = true;

/* var is mainly not used in today's code. programmer only prefer to use const and let because of 
block scope and functional scope. when a variable assign and used in multiple fields but have 
different values then var creates problem over there it change value everywhere cause of its scope.
*/

var arr = ["akki", "Hello"];
var obj = {};

console.log(typeof value, value);

console.log(typeof string, string);

string = "Nice to meet You";

console.log(typeof string, string);

console.log(typeof booleon, booleon);

booleon = false;

console.log(typeof booleon, booleon);

console.log(typeof arr, arr);

console.log(typeof obj, obj);
