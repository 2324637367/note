## 第三周考题
  1. 下面的空格处应该填入什么才能使下面代码最后一行的等式成立？
      ~~~
      const obj = {a: 'hello'};
        const {_______} = obj;//b:obj.a
        b === obj.a // true;
      ~~~
  2. 请把下面函数转化为ES5的写法
     ~~~
      const fn = a => () => console.log(a);
      --------------------------------------
       const fn=function(a){
           function(){
               console.log(a);
           }
       }
      ~~~  
  3. 下面的空格处应该填入什么控制台会输出 Welcome Allen!
       ~~~
        function getWelcome(username) {
            return `___`;//"Welcome"+${username}
        }
        console.log(getWelcome('Allen'));
       ~~~  

   4. 定义两个类，分别为Student和Person

        + Person类
            + 构造函数中对name和age进行初始化
            +  如果一个Person实例中name为Allen，age为22，那么类内方法introduce可以输出My name is Allen,I'm 22.
        + Student类
            + 继承Person类
        + 要求：
            + 创建Student对象，使控制台输出My name is Allen, I'm 22    
       ~~~
         class Person{
             let name
             let value
             constractor(name,value){
                 this.name=name;
                 this.value=value;
                 console.log("My name is"+name",I'm"+value+".")
             }

         }
        class Student extends Person{
                 let score=100
                 constractor{
                     super()
                 }
        }

         let student=new Student('Allen',22)
       ~~~     
   5. 接着上题， 使得 student 实例 拥有 getScore 方法，可以返回 student 的score
     +  student.getScore=function(){
         return  this.score
     }
   6. 下面代码是否有错？如果有错，应该如何修改？
     ~~~
        const age1 = '15', age2 = '50';
        age1 = parseInt(age1);//
        age2 = parseFloat(age2);
        const totalAge = age1 + age2;
        console.log(totalAge);
        //const 定义的变量必须唯一,且不可更改，二，三行更改了age1,age2的值 改法：将该行的age1,age2,重新定义个变量名,或者将第一行的const改为var
     ~~~      
   7. 举个简单的Promise的例子。
     ~~~
          var pro=new Promise(function(reslove,reject){
          if(1){
              reslove() 
          }else{
             reject() 
          }

      })
      pro.then(function(){
          console.log("异步执行")
      }).catch(function(e){
          console.log("捕获异常"+e)
      })
      //.catch(function())===.then(null,function())
     
     ~~~
   8. const, let, var之间的区别是什么？
      + var 定义的变量存在变量提升,没有块级作用域，只有局部和全局作用域,定义函数存在函数提升，函数提升优先于变量提升，变量名可以不唯一，后面的覆盖前面的(不一定)
      + let 存在块级作用域，没有变量提升，变量名唯一 
      + const 存在块级作用域，没有变量提升，变量名唯一 且定义的变量不可更改，函数数组等对象存储地址不可更改，值可改
   9. 举个简单的asnyc/await的例子
      async function foo(){
            setTimeout(function(){
              console.log("举个栗子")
            },200)
      }    
      await foo()
  10. 下面代码是否有错？若有错误，如何修改?
      ~~~
             function foo({x, y = 5}) {
                console.log(x, y);
            }
            
            foo()
            // foo函数传入一个对象，有两个属性x,y,y默认值为5 调用时没传
            //修改 foo({a=15,b=20}) ,console.log(x,y)里的”,“无法识别，删掉或者进行字符串拼接
      ~~~
  11. ES6怎么获取函数的多余参数？举一个例子吧
     + ~~~
         function foo(a,b,...arg){

            consle.log("arg 必需放最后面！")
         }
         let a=[6,7,8,9,9,9,9]
            foo(1,2,a)
       ~~~   
   12.  如何使用Set给数组去重？
       ~~~
            var arr=[1,2,2,2,2,3]
            var c=new Set(arr)
            var newarr=[...c]
       ~~~
1.  为什么要使用Typescript
    答： Typescript 是更严谨的javascript,由于javaScript 语法风格松散，写出来的代码奇怪，风格不统一，函数，接口传参的类型 不能预定义等等缺点，TypeScript就应运而生了
2.  如何在Typescript中创建变量？
    let/const 变量名:数据类型=变量值    
3. 如何编译Typescript文件?
    直接编译： tsc-node 文件名   编译成js文件 tsc 文件名
4.  TS的接口是什么意思？参照TS来解释它们
    TS借口是预先定义好类型的变量或者方法，供引用该接口的函数继承implements
5. TypeScript是如何在函数中支持可选参数的？
   函数的参数名后加“?”
6. 下面代码会如何合并？
    ~~~
        interface Cloner {
            clone(animal: Animal): Animal;
        }

        interface Cloner {
            clone(animal: Sheep): Sheep;
        }

        interface Cloner {
            clone(animal: Dog): Dog;
            clone(animal: Cat): Cat;
        }
    --------------------------------------
    interface Cloner{
       clone(animal: Animal): Animal;
       clone(animal: Sheep): Sheep;
       clone(animal: Dog): Dog;
       clone(animal: Cat): Cat;
    }
    ~~~  
7.  readonly 和 const 有什么区别？
     readonly:只读不可更改
     const:存储在栈里的值不可更改，在栈里存储地址的引用类型的值可以改
8.  下面代码中，foo 的类型如何声明
    ~~~
        function fn(value: number): string {
            return String(value);
        }
        const foo = fn;
      // const foo:Object
    ~~~               
 9. 下面代码中，foo 的类型如何声明
    ~~~
       let foo = {};
        for (let i = 0; i< 100; i++) {
            foo[String(i)] = i;
        } 
        // let foo:Object
    ~~~   
  10. 高级类型有哪些？如何声明？
        Object   Data Function  Set  Map  any  Array 
        声明 ：使用new 关键字实例化 (any 除外) any使用 ":any"声明
   11. typescript的基础类型有哪些？
       undefined ,null, String , Symbol,Number,Boolean 
   12. Class中的成员有哪些修饰符？有什么区别
         ：数据类型     ?:可选属性    <>泛型，可以由用户传入 
   13. 为下面函数添加类型（使用箭头函数的形式）
      ~~~
         function addToZ(x, y) {
                return x + y ;
         }
       // addToz=(x:Number,y:Number):Number=>return x+y;
      ~~~ 

   14. 以下代码A的默认值是多少
    ~~~
       enum Enum {
            A
        }
        // 0 
    ~~~   
   15. 如何声明一个外部枚举
    ~~~
         enum Enum {
            A
        }
        var c:enum='B'
    ~~~ 

    16. 请将下列函数转换为箭头函数
        ~~~
          let getName = function (a) {
                return function () {
                    console.log(a)
                }
            }
            ---------------------------
            let getName=(a)=>()=>console.log(a)
        ~~~   
    17. 根据要求过滤下面的对象数组
        ~~~
            let goods = [
                {
                    id: 0,
                    type: '零食',
                    name: '可乐',
                    price: '5'
                },
                {
                    id: 1,
                    name: '薯片',
                    type: '零食',
                    price: '8'
                },
                {
                    id: 2,
                    name: '辣条',
                    type: '零食',
                    price: '7'
                },
                {
                    id: 3,
                    type: '水果',
                    name: '榴莲',
                    price: '20'
                }
            ]
        ~~~    
   1. 获取到所有价格不小于7元的商品
      goods.forEach(function(item){
         if(item.price>7){
             console.log(item.name)
         }
      })
   2. 编写函数，可以通过传入type对goods进行过滤，并返回下列格式的对象
     ~~~
        {

        ​ count: 商品个数

        ​ goods: [] 对应type的商品

        }
       function (type,goods){
          goods.forEach(function(item,index){
              var res={};
              var arr=[]
              var count=0;
                if(item.type==type){
                   count++
                   arr.push(item.name)
                }
                res.count=count
                res.goods=arr
                return res
          })
       } 
     ~~~ 
     3. 获取所有商品的价格总和
       ~~~
          goods.forEach(function(item,index){
              var totoalPrice=0;
              totalprice+=item.price
              if(index==goods.length){
                  return totalPrice
              }
          })
       ~~~
     4. 为每个对象添加属性：cheap，当privce>10时，cheap值为true，否则为false
       ~~~
           goods.forEach(function(item){
               if(item.price>10){
                   item.cheap=true
               }else{
                   item.cheap=false
               }
           })
       ~~~  

