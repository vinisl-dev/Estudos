// conversor de base de decimal para binario usando estrutra de dado stack - pilha
class Stack {
  constructor(){
    this.count = 0;
    this.items={}
  }
  push(element){
    this.items[this.count] = element;
    this.count++
  }
  size(){
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    this.count --;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.count-1];
  }
  toString(){

    if(isEmpty()) return ''
  
  let objString = `${this.items[0]}`
    for(let i = 1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}}`
    }
    return objString;
  }

}

function baseConverter(decNumber, base){
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPRQSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString =''
  if(!(base >= 2 && base <=36)) return '';

while (number > 0) {
  rem = Math.floor(number % base);
  remStack.push(rem);
  number = Math.floor(number / base);
}
while (!remStack.isEmpty()){
  baseString += digits[remStack.pop()];
}
return baseString;
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 4))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))
console.log(baseConverter(100345, 35))





