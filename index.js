var moment = require("moment");
var numeral = require("numeral");
var math = require("mathjs");

console.log("Hello from JavaScript!");
var datetime = moment()
  .startOf("day")
  .fromNow();
console.log(datetime);

var myNumeral2 = numeral("1,000");
var value2 = myNumeral2.value();
console.log("the value is", value2);

console.log("YO!!!");

console.log(math.sqrt(-4));

var name = "Bob";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
