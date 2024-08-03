// Task 6

import _ from "lodash";

function usingLodash() {
  const _ = require("lodash");
  const arr = [2, 4, 5];
  const result = _.concat(arr, [3, 5, 8]);
  return result;
}

export default usingLodash;
