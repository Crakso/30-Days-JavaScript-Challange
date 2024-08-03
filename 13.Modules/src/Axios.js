// Task 7

import axios from "axios";

async function usingAxios() {
  const res = await axios("https://dummyjson.com/test");
  //   console.log(res);
  return res;
}

export default usingAxios;
