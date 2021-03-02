<h1> Babel 转码器 § </h1>

+ Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。
+ npm install --save-dev @babel/core
+ Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。
+ 
# 最新转码规则
$ npm install --save-dev @babel/preset-env

# react 转码规则
$ npm install --save-dev @babel/preset-react
+ 然后，将这些规则加入.babelrc。
+ 
~~~
      {
    "presets": [
      "@babel/env",
      "@babel/preset-react"
    ],
    "plugins": []
  }
~~~  
+ 命令行转码
+ Babel 提供命令行工具@babel/cli，用于命令行转码。
+ 安装命令如下
+ $ npm install --save-dev @babel/cli
+ 基本用法如下
 + $ npx babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ npx babel example.js --out-file compiled.js
# 或者
$ npx babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ npx babel src --out-dir lib
# 或者
$ npx babel src -d lib

# -s 参数生成source map文件
$ npx babel src -d lib -s

#### @babel/node模块的babel-node命令，提供一个支持 ES6 的 REPL 环境。它支持 Node 的 REPL 环境的所有功能，而且可以直接运行 ES6 代码。
$ npm install --save-dev @babel/node
然后，执行babel-node就进入 REPL 环境。
   ~~~
    $ npx babel-node
    > (x => x * 2)(1)
    2
   ~~~
babel-node命令可以直接运行 ES6 脚本。将上面的代码放入脚本文件es6.js，然后直接运行  
    ~~~
    # es6.js 的代码
    # console.log((x => x * 2)(1));
    $ npx babel-node es6.js
    2
    ~~~   
 ### @babel/register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用 Babel 进行转码    
  npm install --save-dev @babel/register
 使用时，必须首先加载@babel/register
### ~~~
    index.js
    require('@babel/register');
    require('./es6.js');
+ 需要注意的是，@babel/register只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。    
    + Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

    举例来说，ES6 在Array对象上新增了Array.from方法。Babel 就不会转码这个方法。如果想让这个方法运行，可以使用core-js和regenerator-runtime(后者提供generator函数的转码)，为当前环境提供一个垫片。
    + npm install --save-dev core-js regenerator-runtime
   然后，在脚本头部，加入如下两行代码。
   + import 'core-js';
    import 'regenerator-runtime/runtime';
    // 或者
    require('core-js');
    require('regenerator-runtime/runtime);  
   + Babel 默认不转码的 API 非常多，详细清单可以查看babel-plugin-transform-runtime模块的definitions.js文件。 
   + Babel 也可以用于浏览器环境，使用@babel/standalone模块提供的浏览器版本，将其插入网页。
   + <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
    // Your ES6 code
    </script>
   +  
   + Let 块级作用域
   +  不存在变量提升
   + 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
   + let不允许在相同作用域内，重复声明同一个变量。 
   + const 
     +  const声明一个只读的常量。一旦声明，常量的值就不能改变。
     + const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
     + const的作用域与let命令相同：只在声明所在的块级作用域内有效。
     + const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
     + const声明的常量，也与let一样不可重复声明。
     + const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动上面代码中，常量foo储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性
     + 如果真的想将对象冻结，应该使用Object.freeze方法。
     + ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法
     + 全局环境中，this会返回顶层对象。但是，Node.js 模块中this返回的是当前模块，ES6 模块中this返回的是undefined。
    2. 数组的解构赋值
      + ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
      + let [a, b, c] = [1, 2, 3];
    3. 模板字符串
        + String.fromCodePoint() 
           + ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。在作用上，正好与下面的codePointAt()方法相反。
        + String.raw()
          + ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法
        + 实例方法：codePointAt()
          + JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符
        + 实例方法：normalize()
          + ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化
        + 实例方法：includes(), startsWith(), endsWith()
          + includes()：返回布尔值，表示是否找到了参数字符串。
          +  startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
          +  endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
        + 实例方法：repeat()
          + repeat方法返回一个新字符串，表示将原字符串重复n次。
        + 实例方法：padStart()，padEnd()
          + ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
        + 实例方法：trimStart()，trimEnd()
          + ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致，trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。
        + 实例方法：matchAll()
          + matchAll()方法返回一个正则表达式在当前字符串的所有匹配，详见《正则的扩展》的一章。
        + 实例方法：replaceAll()
          + 历史上，字符串的实例方法replace()只能替换第一个匹配。
          + 正则表达式毕竟不是那么方便和直观，ES2021 引入了replaceAll()方法，可以一次性替换所有匹配。
 ## 正则的扩展

  +  ES6 出现之前，字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()。
        + String.prototype.match 调用 RegExp.prototype[Symbol.match]
        +  String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
        + String.prototype.search 调用 RegExp.prototype[Symbol.search]
        + String.prototype.split 调用 RegExp.prototype[Symbol.split]
  + ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码
## 对象扩展
   + 属性名和值相同可简写
   + 方法‘function’可简写
   + 属性复制器和读取器
   + 属性遍历
     + Object.assign()和Array.concat() assign对象合并，会改变原对象，且同名属性会以最新的为准，concat倾向于拼接，不会改变原数。
     + concat() 方法创建出来的新数组，会继承参与拼接数组原型对象上的属性和方法，但是原数组本身的属性和方法并不会被继承。
     + 而 Object.assgin() 方法操作的源对象，会继承参与合并对象“本身”和其“原型对象”上的属性和方法
     + Object.keys(obj)
     + Object.getOwnPropertyNames(obj)
       + Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
     + Object.getOwnPropertySymbols(obj)
       +  Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
     + Reflect.ownKeys(obj)
       + Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
    + super指向原型对象proto
   + 箭头函数
     + （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
      
     + （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
      
     + （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
      
     + （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
            上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的 
   + 尾调用优化
     + 什么是尾调用
       + 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
       + 尾调用不一定出现在函数尾部，只要是最后一步操作即可。
       + 做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。比如上面的例子，阶乘函数 factorial 需要用到一个中间变量total，那就把这个中间变量改写成函数的参数。这样做的缺点就是不太直观，第一眼很难看出来，为什么计算5的阶乘，需要传入两个参数5和1？
       + 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。
   + ES2017 允许函数的最后一个参数有尾逗号（trailing comma）。
   + Set和Map
     + Set本身是一个构造函数
       + ~~~
            const s= new Set()
            arr.forEach(x=>s.add(x));
            --------------------------
            for(item of arr){
              s.add(item)
            }
            ------------------------
            s=new Set(arr)
            [...s]
         ~~~
     + Set属性
       + Set.property.constructor
       + Set.property.length
     + Set方法
        + Set.property.add(value) 
        + Set.property.delete(value) 
        + Set.property.has(value) 
        + Set.property.clear(value) 
        + array.from(Set实例)//转为数组
        + Set.property.keys()              
        + Set.property.values()              
        + Set.property.entries()              
        + Set.property.forEach() 
     + WeakSet
      + 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
      + 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。  
      + WeakSet 没有size属性，没有办法遍历它的成员。
  + Map
    + JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
     + m=new Map();
     + Map.property.set(value)                 
     + Map.property.get(value)                 
     + Map.property.delete(value)                 
     + Map.property.has(value)                 
     + Map.property.clear(value)     
     + 遍历与set相同
     + 转数组
       + [...m]
       + Array.from(m)
      + 数组转map
        + new Map(arr)
      + 对象转map
        + new Map(Object.entries(obj)) 
      + Map转Json
        JSON.stringfy([...m])
      + JSON转map
        + new Map( JSON.parse(jsonstr))                  
        + 
   + Proxy
     + Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
     + var proxy = new Proxy(target, handler);
     + var object={proxy: new Proxy(target,handler)};
     + 一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作
      ~~~
         var proxy = new Proxy({}, {
          get: function(target, propKey) {
            return 35;
          }
        });

        let obj = Object.create(proxy);
        obj.time // 35
      ~~~
     +  
   + Reflect

 + 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从eflect对 象上可以拿到语言内部的方法。
 +  修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。
 +  让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
 +  Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是+  说，不 管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
 +  Reflect对象一共有 13 个静态方法。
    +  Reflect.apply(target, thisArg, args)
    +  Reflect.construct(target, args)
    +  Reflect.get(target, name, receiver)
    +  Reflect.set(target, name, value, receiver)
    +  Reflect.defineProperty(target, name, desc)
    +  Reflect.deleteProperty(target, name)
    +  Reflect.has(target, name)
    +  Reflect.ownKeys(target)
    +  Reflect.isExtensible(target)
    +  Reflect.preventExtensions(target)
    +  Reflect.getOwnPropertyDescriptor(target, name)
    +  Reflect.getPrototypeOf(target)
    +  Reflect.setPrototypeOf(target, prototype) 
 + Reflect.get(target, name, receiver)
    + Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
    + 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver
    + 如果第一个参数不是对象，Reflect.get方法会报错。
 + Reflect.set(target, name, value, receiver)
    + Reflect.set方法设置target对象的name属性等于value。
    + 如果name属性设置了赋值函数，则赋值函数的this绑定receiver。
    + 注意，如果 Proxy对象和 Reflect对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，那么Reflect.set会触发Proxy.defineProperty拦截。
    + Reflect.has(myObject, 'foo')
    + Reflect.deleteProperty方法等同于`delete obj[name]`
    + `const instance = Reflect.construct(Greeting, ['张三']);`
    + Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)
    + reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是，如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，而Reflect.getPrototypeOf会报错。
    + Reflect.setPrototypeOf方法用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。
      + 如果第一个参数不是对象，Object.setPrototypeOf会返回第一个参数本身，而Reflect.setPrototypeOf会报错
      + 如果第一个参数是undefined或null，Object.setPrototypeOf和Reflect.setPrototypeOf都会报错。
 + Promise     
   + 有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
   + ~~~
      const prom = new promise(function(resolved,reject){
        if(){
            resolve(value)
        }else{
            reject(value)
        }
      })
     ~~~
   + Promise.prototype.catch() 
   + Promise.prototype.finally()
   + promise
      + .then(result => {···})
      + .catch(error => {···})
      + .finally(() => {···});
   + Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
     + promises是包含 6 个 Promise 实例的数组，只有这 6 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。
   + Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
      + const p = Promise.race([p1, p2, p3]);
      + 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
  + Promise.allSettled()
    + Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入
  +  ES2021 引入了Promise.any()方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。
  +  有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。
     + const jsPromise = Promise.resolve($.ajax('/whatever.json'));
     
  +  (async(=>f())();)
  + 上面代码中，第二行是一个立即执行的匿名函数，会立即执行里面的async函数，因此如果f是同步的，就会得到同步的结果；如果f是异步的，就可以用then指定下一步，就像下面的写法。
  + ~~~
        const f = () => console.log('now');
        Promise.try(f);
        console.log('next');
    ~~~
   +  由于Promise.try为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。这样有许多好处，其中一点就是可以更好地管理异常。
      + ~~~
         Promise.try(() => database.users.get({id: userId}))
        .then(...)
        .catch(...)
        ~~~
   + Iterator（遍历器）的概念 
   +  Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
   +  形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
      ~~~
           function* helloWorldGenerator() {
              yield 'hello';
              yield 'world';
              return 'ending';
            }
            var hw = helloWorldGenerator();
       ~~~     
   +  由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
   +  由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
   + 协程
     + 协程（coroutine）是一种程序运行的方式，可以理解成“协作的线程”或“协作的函数”。协程既可以用单线程实现，也可以用多线程实现。前者是一种特殊的子例程，后者是一种特殊的线程。
     + 多个线程（单线程情况下，即多个函数）可以并行执行，但是只有一个线程（或函数）处于正在运行的状态，其他线程（或函数）都处于暂停态（suspended），线程（或函数）之间可以交换执行权。也就是说，一个线程（或函数）执行到一半，可以暂停执行，将执行权交给另一个线程（或函数），等到稍后收回执行权的时候，再恢复执行。这种可以并行执行、交换执行权的线程（或函数），就称为协程
     +  从实现上看，在内存中，子例程只使用一个栈（stack），而协程是同时存在多个栈，但只有一个栈是在运行状态，也就是说，协程是以多占用内存为代价，实现多任务的并行。
     + co 模块是著名程序员 TJ Holowaychuk 于 2013 年 6 月发布的一个小工具，用于 Generator 函数的自动执行。
       + var gen = function* () {
        ~~~
        var f1 = yield readFile('/etc/fstab');
        var f2 = yield readFile('/etc/shells');
        console.log(f1.toString());
        console.log(f2.toString());
       };
        ~~~
      + co(gen).then(function (){
          console.log('Generator 函数执行完成');
        });   
      +  一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
      + 
       ~~~
          async function getStockPriceByName(name) {
          const symbol = await getStockSymbol(name);
          const stockPrice = await getStockPrice(symbol);
          return stockPrice;
        }

        getStockPriceByName('goog').then(function (result) {
          console.log(result);
        });    
        ~~~
      + 类
       + super
         + Es6要求子结构必须执行一次super否则会报错
         + 注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。
         + 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
         + 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
         + 
        + 动态作用域｜59而动态作用域并不关心函数和作用域是如何声明以及在何处声明的，只关心它们从何处调用。换句话说，作用域链是基于调用栈的，而不是代码中的作用域嵌套。
          + 因为当foo()无法找到a的变量引用时，会顺着调用栈在调用foo()的地方查找a，而不是在嵌套的词法作用域链中向上查找。由于foo()是在bar()中调用的，引擎会检查bar()的作用域，并在其中找到值为3的变量a。
+     