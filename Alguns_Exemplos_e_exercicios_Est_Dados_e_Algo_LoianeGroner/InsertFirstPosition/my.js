 const { time, timeEnd } = require("console");

// isso ficou muito ruim porque conforme o tamanho do array aumenta ele fica mais lento 

let numbers = [0,1,2,3,4,5,6,7,8,9]


Array.prototype.MyInsertFirstPosition1 = function(value) {

  auxArray = new Array(this.length+1)
  auxArray[0]= value
  for(i=1; i <= this.length; i++){
    auxArray[i]=this[i-1]
  }
}


Array.prototype.MyInsertFirstPosition2 = function(value) {

  auxArray = new Array(this.length+1)
  auxArray=[value,...this]
  
}
// console.log("my solution: ")
// time()
// numbers.MyInsertFirstPosition2(-1)
// timeEnd()
// console.log(numbers)
// console.log(auxArray)

// minha intensão era aproveitar a imutabilidade para sobrescrever array antigo sem usar um laço

Array.prototype.MyInsertFirstPosition3 = function(value) {

  auxArray = new Array(this.length+1)
  auxArray[0]= value
  auxArray = this
  this.length=0
  this= auxArray

  }
  time()
  numbers.MyInsertFirstPosition3(-1)
  timeEnd()
  console.log(numbers)
