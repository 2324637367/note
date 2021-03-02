+ 定义函数
  + ~~~
     function myfun(){

    }
    const myfun=function(){

    }
+ eval() 函数会将传入的字符串当做 JavaScript 代码进行执行(存在安全隐患不推荐使用)
+ 函数作用域
  + 在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量
+ 递归
    + 函数调用自身的方法
    + ~~~ 
        var foo = function bar() {
        // statements go here
        };
      bar()
       arguments.callee() （译者注：ES5禁止在严格模式下使用此属性）
      foo()
    + 将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用堆栈。事实上，递归函数就使用了堆栈：函数堆栈。
 + 嵌套函数和闭包
    +  你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。
    既然嵌套函数是一个闭包，就意味着一个嵌套函数可以”继承“容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。  
 + 命名冲突
   + 当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。
    + ~~~ 
       function outside() {
        var x = 5;
        function inside(x) {
            return x * 2;
        }
        return inside;
        }

        outside()(10); // returns 20 instead of 10
   +   命名冲突发生在return x上，inside的参数x和outside变量x发生了冲突。这里的作用链域是{inside, outside, 全局对象}。因此inside的x具有最高优先权，返回了20（inside的x）而不是10（outside的x）。 
+ 闭包
    +  闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。
    但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了的安全性。
    此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式何一个外部函数作用域访问时，一个闭包就产生了
 +  ~~~
    var createPet = function(name) {
    var sex;

    return {
        setName: function(newName) {
        name = newName;
        },

        getName: function() {
        return name;
        },

        getSex: function() {
        return sex;
        },

        setSex: function(newSex) {
        if(typeof newSex == "string"
            && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
            sex = newSex;
        }
        }
    }
    }

    var pet = createPet("Vivie");
    pet.getName();                  // Vivie

    pet.setName("Oliver");
    pet.setSex("male");
    pet.getSex();                   // male
    pet.getName();                  // Oliver  
+  使用 arguments 对象
  +  函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内，你可以按如下方式找出传入的参数
+ 函数参数默认值为undefine
  + 剩余参数 ：不确定的参数表示为数组 
  +  箭头函数 
     + 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
     + 如果是该函数是一个构造函数，this指针指向一个新的对象
在严格模式下的函数调用下，this指向undefined
如果是该函数是一个对象的方法，则它的this指针指向这个对象
等等
     +  箭头函数不能用作构造器，和 new
     + 箭头函数没有prototype属性。
     +  yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作函数生成器。
        + 生成器函数 函数前加* 执行到 `yield`暂停，调用next继续执行      
        + ~~~ 
            function* foo(index) {
            while (index < 2) {
                yield index;
                index++;
            }
            }

            const iterator = foo(0);

            console.log(iterator.next().value);
            // expected output: 0

            console.log(iterator.next().value);
            // expected output: 1
     + 函数体  箭头函数可以有一个“简写体”或常见的“块体”。
    在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的return语句。 
    +  返回对象字面量
       + ~~~ 
          var func = () => ({foo: 1});   
    + 换行 箭头函数在参数和箭头之间不能换行。
    + 解析顺序： 虽然箭头函数中的箭头不是运算符，但箭头函数具有与常规函数不同的特殊运算符优先级解析规则。
    + 箭头函数也可以使用条件（三元）运算符
    + 箭头函数也可以使用闭包：
    +  箭头函数递归        
