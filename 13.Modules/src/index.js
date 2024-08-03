/*
  Activity 4: Using Third-Party Modules.
*/

import usingLodash from "./lodash.js";
console.log(usingLodash());

import usingAxios from "./Axios.js";

usingAxios().then((res) => console.log(res));
