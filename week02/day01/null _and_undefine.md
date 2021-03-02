+ 相似性 
  + undefined和null在if语句中，都会被自动转为false，相等运算符甚至直接报告两者相等
+ undefine的诞生
  +  但是，JavaScript的设计者Brendan Eich，觉得这样做还不够，有两个原因。
首先，null像在Java里一样，被当成一个对象。但是，JavaScript的数据类型分成原始类型（primitive）和合成类型（complex）两大类，Brendan Eich觉得表示"无"的值最好不是对象。
其次，JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich觉得，如果null自动转为0，很不容易发现错误。
因此，Brendan Eich又设计了一个undefined。 
 + 目前用法 
   + null :表示"没有对象"，即该处不应该有值
     + （1） 作为函数的参数，表示该函数的参数不是对象。
     + （2） 作为对象原型链的终点。
   + undefine :表示"缺少值"，就是此处应该有一个值，但是还没有定义
     + （1）变量被声明了，但没有赋值时，就等于undefined。
     + （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
     + （3）对象没有赋值的属性，该属性的值为undefined。
     + （4）函数没有返回值时，默认返回undefined。  