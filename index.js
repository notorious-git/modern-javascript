/* global moment */

console.log("Hello from JavaScript!");
var datetime = moment()
  .startOf("day")
  .fromNow();
console.log(datetime);
