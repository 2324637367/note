// 泛型
function arrS<T>(num:T):T{
   return num
   
}
arrS<number>(15)
console.log(typeof arrS<number>(15))
// 泛型约束 函数内处理参数的某一属性，确保传入的参数有该属性
interface Lengthwise{
    length:number
}
function foos<T extends Lengthwise>(arg:T){
      console.log(arg.length);
      return arg
}
let objs={
   length:16,
   title:'num'
}
foos(objs)

// 泛型中使用类型参数
function getProperty(obj:any, key:any ) {
    return obj[key];
}

let x1 = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x1, "a"); // okay
getProperty(x1, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 泛型类

class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

