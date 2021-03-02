~~~
var arr :number[]=[1,2,54,65,8]
var str :string='zifuchuan'
var istrue :boolean=false
var de:number=15
var ox:number=0o122
var oxs:number=0x122
var oxsx:number=0b100
~~~

+   // 元组
    `var a:[string,number]
    a=['str',16]`
    console.log(a)
    + // 枚举
    + // enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
    enum Color {Red, Green=2, Blue}
    let c: Color = Color.Green;
    + // any 类型
       + let notSure :any=4
        notSure='1231'
        notSure=false
    + // 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
    + void
      + 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
      + function warnUser(): void {
            console.log("This is my warning message");
        }
      + 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
      +  never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。 
      + 断言
        + ~~~let someValue: any = "this is a string";
            let strLength: number = (<string>someValue).length;
          ~~~
      + as
        + let someValue: any = "this is a string";
          let strLength: number = (someValue as string).length;    
  + 类
     +  private ：当成员被标记成 private时，它就不能在声明它的类的外部访问
      + 两个类的私有成员一个类包含一个私有成员，只有另一个类型中也存在这样一个私有成员，并且他们都来自同一处声明，我们才认为他们是类型兼容的
      + protected
       + 和private类似，不过protected 可以在派生类上访问
       +  可以给构造函数标记protected :意味着类不可以被实例化，但可以被继承
      + readonly修饰符       
        + 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
      + 存取器
       + 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。
      + 静态属性
        + 到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
      + 抽象类
        + 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
        ~~~
          abstract class Animal {
              abstract makeSound(): void;
              move(): void {
                  console.log('roaming the earch...');
              }
          }     
        ~~~
       + 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
      + 函数
        +  JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的： 
         ~~~
                 function buildName(firstName: string, lastName?: string)
         ~~~        
        +  可选参数必须跟在必须参数后面。 如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。
        + 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值
      + 剩余参数
        + 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组
      + this
       +    
      + 重载
        +  JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
      + 泛型
       ~~~
         let output = identity<string>("myString");  // type of output will be 'string'

         function identity<T>(arg: T): T {
            return arg;
        }

        let myIdentity: <U>(arg: U) => U = identity;
       ~~~
      + 枚举
       + enum Respomse{
         yes=0,
         no=1
       }
       +  function foo(obj:{x:number}){
           return obj.x;
       }
       + 反向映射
        + 除了创建一个以属性名做为对象成员的对象之外，数字枚举成员还具有了 反向映射，从枚举值到枚举名字。 例如，在下面的例子中
       +  const枚举
          大多数情况下，枚举是十分有效的方案。 然而在某些情况下需求很严格。 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。 常量枚举通过在枚举上使用 const修饰符来定义。 
       +  类型兼容性
         + 兼容则可以赋值 
         + 比较两个对象的成员类型，相同则兼容
       + 类型相同的话
         + 参数数量少赋多可以，少赋多不行
         + 返回值或对象属性则相反  
       + 枚举
         + 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容。不同枚举类型之间是不兼容的。比如，
       + 类
         + 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
       + 命名空间
         + 随着更多验证器的加入，我们需要一种手段来组织代码，以便于在记录它们类型的同时还不用担心与其它对象产生命名冲突。 因此，我们把验证器包裹到一个命名空间内，而不是把它们放在全局命名空间下
         + namespace     



+ TypeScript编译原理
  + TypeScript 编译器源文件位于 src/compiler 目录下
    + 它分为以下几个关键部分：
      + canner 扫描器（scanner.ts）
      + arser 解析器（parser.ts）
      + inder 绑定器（binder.ts）
      + hecker 检查器（checker.ts）
      + mitter 发射器（emitter.ts）
    + SourceCode（源码） ~~ 扫描器 ~~> Token 流
      Token 流 ~~ 解析器 ~~> AST（抽象语法树）
      AST ~~ 绑定器 ~~> Symbols（符号）
  + 接口
    + ~~~
          interface  f1{
          text?:string;
          title?:string;
        }   
        function(ss:f1):{text:string,title:string}{
            if(ss.text){
              console.log(ss.text)
            }
            if(ss.title){
              console.log(ss.title)
            }
        }
      ~~~
    + 类类型实现接口
      + interface f2{
        currentData:Date
      }   
      class DateNow  implements f2{
        currentDate:Date
         constructor(h:number,a：number){
           
         }
      }
     + 泛型
       + 添加了类型变量的函数叫做泛型
       + 在函数名后添加`<类型名> `
       + ~~~
         function foo<T>(para:T):T{
         return para
         }
         ~~~
      + 调用函数方法  foo<string>("stra")
        + foo('str')编译器自动推断类型 
    + 声明合并
      + 最简单的最常见的合并类型是接口合并，从根本上来说，合并的机制是吧双方的成员发到同一个同名的接口里
      ~~~
         interface Box{
           height:string,
           width:number
         }
         interface Box{
           widths:number
           widths1:number
         }
         let box:Box={height:'15',width,,,}
         

      ~~~
      + 命名空间与类和函数的和枚举类型的合并
  + JSX
    + JSX是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX因React框架而流行，但也存在其它的实现。 TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。
   + 装饰器
     + 随着TypeScript和ES6里引入了类，在一些场景下我们需要额外的特性来支持标注或修改类及其成员。 装饰器（Decorators）为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。 Javascript里的装饰器目前处在 建议征集的第二阶段，但在TypeScript里已做为一项实验性特性予以支持
      + 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。
     

