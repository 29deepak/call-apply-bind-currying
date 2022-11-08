// call method
var obj={num:2}
var addtothis=function(a){
  return this.num +a
}
console.log(addtothis.call(obj,3))

// apply method
var obj={num:2}
var addtothis=function(a,b,c){
  return this.num +a +b +c
}
let arr=[1,2,3]
console.log(addtothis.apply(obj,arr))

// bimd method
var obj={num:2}
var addtothis=function(a,b,c){
  return this.num +a +b +c
}
let arr1=[1,2,3]
var bound=addtothis.bind(obj)
console.log(bound(1,2,3))

//currying

let multiply=function(x,y){
  console.log(x * y)
}
let multiplybytwo=multiply.bind(this,2)
multiplybytwo(3)

