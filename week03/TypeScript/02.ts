class Greeter {
    greeting:string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet())

// 元组
let x:[string,number]
x=['strings',16]
console.log(x[0].substring(2))
console.log(x[1].toString())
console.log(typeof x[1].toString)
// 枚举
enum ainmal{Monkey,Cat,Dog}
let monkeys:ainmal=ainmal.Monkey
console.log(ainmal[2])
// Dog
//Any
let notsure:any=4
let arrs:any[]=['0','1',2,'stra']
console.log(typeof arrs)
//object
//void
let someValue:any='this is a string'
let num:number=(<string>someValue).length
console.log(num)
// 16
//接口
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
  }
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      // Error: Property 'clor' does not exist on type 'SquareConfig'
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({color: "black"});
  // 数组接口
interface arrinterface{
   readonly [index:number]:string;
    length:number;
}
let arrss:arrinterface=["Bob",'Alex']
// arrss[3]='sad' 只读属性

