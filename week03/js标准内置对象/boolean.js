// 如果需要，作为第一个参数传递的值将转换为布尔值。如果省略或值0， ，-0，null，false，NaN，undefined或空字符串（""），该对象具有的初始值false。所有其他值，包括任何对象，空副本（[]）或字符串"false"，都会创建一个初始变量true的对象
var x=new Boolean(false)
if(x){
    console.log(x)
}//[Boolean: false]
//其值不是undefined或null的任何对象（包括其变量false的布尔对象）在传递给条件语句时都将计算为true。例如，以下if语句中的条件评估为true：
if(0){
    console.log('0')
}
// var x = !!(expression);
// var x = Boolean(expression);     // 推荐
// var x = !!(expression);          // 推荐
// var x = new Boolean(expression); // 不太好
// 符号 是一种基本数据类型（primary data type）。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。
//它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露双重的符号注册，并且包含内部建对象类，但作为构造函数来说它并不完整，因为它不支持语法：“ new Symbol()”
var obj2 = {
    [Symbol.toPrimitive](hint) {
      if (hint == "number") {
        return 10;
      }
      if (hint == "string") {
        return "hello";
      }
      return true;
    }
  };
  console.log(+obj2)
  console.log(''+obj2)
  console.log(`${obj2}`)
  