import 'reflect-metadata'
// 工厂函数
function f1(){
  console.log("f1")
  return function(target,propertyKey:string,descriptor:PropertyDescriptor){
      console.log("f1:call()");  
  }
}
function f2(){
    console.log("f2()");
    return function(target,propertyKey:string,descriptor:PropertyDescriptor){
        console.log("f2:call()");
    }
}
class C{
     @f1()
     @f2()
     method(){}
}
// f1
// f2()     
// f2:call()
// f1:call()
//同样的，在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
// 由上至下依次对装饰器表达式求值。
// 求值的结果会被当作函数，由下至上依次调用。
function sealed(target) {
  var tar=  new target('message')
   console.log(tar.greet())
}
function enumerable(value:boolean){
    return function (target:any,propertyKey:string,descriptor:PropertyDescriptor){
        descriptor.enumerable=value
    }
}
//类装饰器
@sealed
class Greeter{
    @format("Hello, %s")
    greeting:string
    constructor(@required message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
// 方法装饰器
var gre=new Greeter('str')
//属性装饰器
function format(formatString: string) {
const formatMetadataKey = Symbol("format");
    return Reflect.metadata(formatMetadataKey,formatString);
}
// 参数装饰器
// 
function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    const requiredMetadataKey = Symbol("required");
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
var obj={
    name:'ryan',
    age:21
}
var res= Object.getOwnPropertyNames(obj)
var res1= Reflect.ownKeys(obj)
console.log(res,res1)