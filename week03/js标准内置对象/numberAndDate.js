var a=new Number('123')
var b= Number('123')
console.log(a instanceof Number)//true
console.log(b instanceof Number)//false

var obj={
   num1: Number.EPSILON,
   num2: Number.MAX_SAFE_INTEGER,
   num3: Number.MAX_VALUE,
   num4: Number.MIN_SAFE_INTEGER,
   num5: Number.MIN_VALUE,
   num6: Number.NaN,
   num7: Number.NEGATIVE_INFINITY,
   num8: Number.POSITIVE_INFINITY,
   num9: Number.prototype

}

console.log(Object.values(obj)) 
// BigInt 是一个内置对象，它提供了一种方法来表示更大 的整数。这原本是Javascript中可以用表示的最大数字。 可以表示任意大的整数。253 - 1NumberBigInt
// 可以用在一个完整数字面量后面加n 的方式定义一个BigInt 

const  bigin=1223454n
console.log(typeof bigin) //bigint
//运算除无符号右移以外都支持
// console.log(bigin>>>1n)//BigInts have no unsigned right shift, use >> instead
console.log(bigin>>2n)//305863n
//bigInt只支持同类型运算

var d= new Date()
// d.getDay
// d.getFullYear

console.log(Object.entries(obj)) //s数组转对象
console.log(Object.fromEntries(Object.entries(obj)))//对象转数组
