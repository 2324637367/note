var a=Symbol('a')
var obj={}
Object.defineProperty(obj,a,{
    value:15
})
console.log(obj[a] )//[ Symbol(a) ]
//给对象添加Symble属性名
var c=Symbol('sdasd')
obj[c]="Symble元素！"
var d=Symbol('sdasd')
obj[d]="Symble元素！"
// Symbol 值作为对象属性名时，不能用点运算符。
console.log(obj)// { [Symbol(sdasd)]: 'Symble元素！' }
// Symbol遍历
// 可以遍历所有类型的键名，包括常规的键名和Symbol键名
e=Reflect.ownKeys(obj) 
f=Object.getOwnPropertySymbols(obj)
e=Symbol.for('foo')
f=Symbol.for('foo')
obj[e]=f
console.log(obj)
// 实例;模式的Singleton
const pro=new Promise(function(resolve,reject){
    if(1){
        resolve()
    }
    else{
        reject()
    }
})
pro.then(function(value){},function (err) {

  })
// seTimeout的第三个参数，是第一个参数（函数）的参数。
// promise函数一创建就会执行
// .then被放到队列
// Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
const pros=new Promise(function (resolve,reject) {
    throw new Error('error')
  })
  pros.then(function(resolve){
      console.log(resolve)

  }).catch(function(err){
      console.log('捕获的异常'+err)
  }) 
  pros.then(null,function(err){
      console.log(err+"null捕获的异常")
  })
 //  Error: errornull捕获的异常
 // 捕获的异常Error: error
 // 解构赋值
 var g=[a,b,c,[d,[e]]]=[1,2,3,[4,[5]]]
 console.log(a,b,c,d,e) // 1 2 3 4 5
 console.log(g)
 var c=new Set(g)
 c.add(6)
 console.log(c)
 console.log( c.has(6))
// weakSet
var obj6={
    age:16,
    age:16
}
var ws=new WeakSet()
ws.add(c={a:16})
console.log(ws.add(obj6)) 
var j=ws.has(c) 
var k=ws.delete(obj6)
var l=ws.has(obj6)
console.log(j,k,l)
// true true false
// 弱引用，垃圾回收机制不考虑weakSet对该对象的引用，计数为0直接清理 //add delete has
const map=new WeakMap()
var oh={}
map.set(oh,16)
console.log(map.get(oh))// get set has delete
var str='abcdefdasd'
var a=str.substr(2,2)
var b=str.substring(1,2)
var c=str.split("").reverse().join('&')
console.log(c)
d= str.split('').splice(1,6)
 console.log(d)