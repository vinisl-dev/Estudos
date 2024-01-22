const { time, timeEnd } = require("console");


let numbers = [0,1,2,3,4,5,6,7,8,9]


Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i>= 0; i--){
    this [i] = this[i-1];
    }
    this[0] = value
}

// console.log("Loiane solution: ")
// time()
// numbers.insertFirstPosition(-1)
// timeEnd()


Array.prototype.MyInsertFirstPosition = function(value) {

  auxArray = new Array(this.length+1)
  auxArray[0]= value
  for(i=1; i <= this.length; i++){
    auxArray[i]=this[i-1]
  }
}
numbers = [0,1,2,3,4,5,6,7,8,9]

console.log("my solution: ")
// time()
// numbers.MyInsertFirstPosition(-1)
// timeEnd()

numbers = [0,1,2,3,4,5,6,7,8,9]
console.log("Js default solution: ")

time()
numbers.unshift(-1)
timeEnd()
// console.log(auxArray)

console.log(numbers)