interface Lableled{
    lable:string
}
 function testlable(value:Lableled){
     console.log(value)
 }
 testlable({lable:'sss'})
//  只读属性
interface readOnly{

}
// 额外的属性检查的三种方法
interface tes1{
    value?:string,
    value1?:string
}
function demo(nu1:tes1){
    console.log(nu1)
}
//1. 使用断言
demo({value1:'str',val:'strs'}as tes1)//{ value1: 'str', val: 'strs' }
// 2.最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。
interface test2{
    value1?:string;
    value2?:string;
    [prps:string]:any//任意数量任意值类型的属性
}
function demo2(value:test2){
    console.log(value);
    
}
demo2({value1:'123',name:456,value:789})// { value1: '123', name: 456, value: 789 }
// 3. 将这个对象赋值给一个另一个变量
let para={color:'red',num:15,age:22}
let mydemo=demo2(para)//失败
//函数类型
interface fun{
    (k1:string,k2:string):string
}
var c:fun=function(k1,k2){
    return` ${k1} ${k2}`
}
console.log(c('k1','k2'));// k1 k2
// 可索引的类型
interface strings{
    [index:number]:string;
}
let newarray:strings=["bob","mokey",'mac']
//两种索引字符串和数字可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引
//返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
interface numnberDic{
    [index:number]:string,
    length:number
  
}
// let kl:numnberDic={['asd'],}
// 类类型接口实现
interface clockInter{
    cur:Date;
    nowdata():any
}
class k6 implements clockInter{
      cur:Date;
        nowdata(){
            let date= new Date() 
        return date.getDate()
        }
        constructor(name){
            console.log(`${name} 你好 ！今天是${this.nowdata()}号 `)

        }
}
var d=new k6('嘻嘻嘻')
// 类静态部分与实例部分的区别
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour,minute)
}
class DigitalClock implements ClockInterface{
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
let digital = createClock(DigitalClock, 12, 17);
// 继承接口
interface h1{
    width:number,
    height:number
}
interface h2 extends h1{
    tall:number
}
function h3(value:h2){
    console.log(value) 
}
h3({tall:20,width:21,height:22})// { tall: 20, width: 21, height: 22 }
// 混合类型
// 一个对象可以同时做为函数和对象使用，并带有额外的属性。
console.log('______________________________')
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let s = getCounter();
s(10);
s.reset();
s.interval = 5.0;
console.log(s)
// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现
class control{
    // private state?:any;
    // protected status=200
    public a:string
}
interface Selceted extends  control{
    name:string,
    number:number
}
function k5(value:Selceted){
    return value
}
console.log( k5({a:'123',name:'das',number:15}));

