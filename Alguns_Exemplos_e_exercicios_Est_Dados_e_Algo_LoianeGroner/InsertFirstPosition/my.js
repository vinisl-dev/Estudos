const { time, timeEnd } = require("console");
let numbers = [0,1,2,3,4,5,6,7,8,9]


Array.prototype.MyInsertFirstPosition = function(value) {

  auxArray = new Array(this.length+1)
  auxArray[0]= value
  for(i=1; i <= this.length; i++){
    auxArray[i]=this[i-1]
  }
}


console.log("my solution: ")
time()
numbers.MyInsertFirstPosition(-1)
timeEnd()
