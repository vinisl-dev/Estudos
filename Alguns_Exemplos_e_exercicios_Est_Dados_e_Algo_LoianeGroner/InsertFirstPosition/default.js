const { time, timeEnd } = require("console");
let numbers = [0,1,2,3,4,5,6,7,8,9]

console.log("default")
time()
numbers.unshift(-1)
timeEnd()