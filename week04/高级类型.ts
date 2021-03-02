// 交叉类型
function extend<T,U>(first:T,second:U):T&U{
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}
// 联合类型
function foo2(num1:number,num2:number ):void|string{
  let res:string='a string centence'
  if(res.length==num1+num2)return res   
}
// 类型保护和区分类型
function isNumber(x:any):x is string{
    return typeof x==="number"
}
console.log(isNumber(6))
let strs:string='sadsadsa'
// console.log(strs.split('').join(','))
// 去除null
function foo3(num3:number|null):number{
        return num3 || 500
}
// 类型断言手动去除null和undefined
function foo4 (a:string):string{
    return a!+'asd'
}
console.log(foo4(null))
function outer(num1:number){
    function inner(num2:number){
        console.log(num1+num2)
    }
    inner(6)
}
outer(6)
// 类型别名
type Tree<T>={
  value:T,
  left:Tree<T>
  right:Tree<T>
}
//类成员的修饰符
class a1{
public a:string;//默认，自由访问
static b:string//存在类的本身的属性，而不是类的实例对象上
protected c:string;//可以能在派生类李方文
private e:string // 只能在声明的类访问
readonly f:number//类的属性成员 或者函数的参数
}
console.log(a1.b='str')
let k=new a1()
console.log(k.a)
//抽象类
abstract class animals{
    abstract makenoise():void;//抽象方法
    move=(num:number)=>
       { console.log(`move ${num} step!`)}
    

}
let as=`true`
console.log(~~as)
// 类型保护
function testtype(num:any):num is number{
     return typeof num==='number'
}
 console.log(testtype(12));
  //------------------------------
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;//类型别名不能被继承和执行
declare function interfaced(arg: Interface): Interface;
//类型别名
//字符串字面量类型
type Easing='easy-in'|'easy-out'|'easy-in-out';
class TIele{
    animate(dx:number,dy:number,easing:Easing){
        if(easing==='easy-in'){
            return {dx,dy,easing}
        }
    }

}
var element=new TIele()
element.animate(1,2,'easy-in')
// 数字字面量类型
type num=1|2|3
//可辨识度联合
// 你可以合并单例类型，联合类型，类型保护和类型别名来创建一个叫做 可辨识联合的高级模式，它也称做 标签联合或 代数数据类型。 可辨识联合在函数式编程很有用处。 一些语言会自动地为你辨识联合；而TypeScript则基于已有的JavaScript模式。 它具有3个要素：
//三要素 具有普通的单例类型属性— 可辨识的特征。
    // 一个类型别名包含了那些类型的联合— 联合。
    // 此属性上的类型保护。
 interface  dog{
     food:'gutou',
     name:string,
     hobby:string
 }   
 interface cat{
     food:'fish',
     name:string
 }
 interface mouse{
     food:'anything',
     name:string
 }

 type family=dog|cat|mouse
 function mouseAndCat(value:family){
       switch(value.food){
           case 'gutou': return value.hobby;break
           case 'fish':return value.name;break
           case 'anything': return value.name;break
        //    default:
        //        return 'they are family'
       }
 }
 var dog= mouseAndCat({food:<'gutou'> '骨头' ,name:'jack',hobby:'sleep'})
 var cat= mouseAndCat({food:<'fish'> '骨头' ,name:'tom'})
 console.log(dog,cat)
 // 多态的this类型
 // 多态的 this类型表示的是某个包含类或接口的 子类型。 这被称做 F-bounded多态性。 它能很容易的表现连贯接口间的继承，比如。 在计算器的例子里，在每个操作之后都返回 this类型：
 // 索引类型
 // 使用索引类型，编译器就能够检查使用了动态属性名的代码。 例如，一个常见的JavaScript模式是从对象中选取属性的子集。
 interface suoyin{
     name:string,
     age:num
 }
let suoyin:keyof suoyin;
suoyin=<'name'>'123'
console.log(typeof suoyin)//string
//映射类型
type Nullable<T>={[p in keyof T]:T[p]|null}
let sym1=Symbol();
let sym2=Symbol('key');//
console.log(typeof sym2)//symbol
console.log( Symbol.hasInstance  );