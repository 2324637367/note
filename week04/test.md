1. 简述JavaScript编译原理。
 + javaScript 是单线程机制，所以编译的事件会一条一条执行，所有事件都会先入栈，依次执行，但是有些事件例入setTimeout执行会很长，导致cpu空闲其他事件执行不下去，所以出现了异步，先执行同步事件，讲异步事件入队保存，同步事件执行完再执行异步事件，异步事件分为宏任务和微任务，一个宏任务由很多微任务组成，先入队的宏任务先执行完内部的微任务，再执行后面的宏任务。
 2. JavaScript有哪几种数据类型？
  + 基本数据类型有：undefine ,String,Number,null,boolean,Symble(es6新增)
  + 引用数据类型：Object,Array,Function
 3. JavaScript值类型和引用类型的区别在哪里？
  + 值类型保存在栈中，值传递传递的是栈里的值，引用类型存在堆中，存在栈中的时指向堆得地址,引用传递传递的是存在栈中的指向堆的地址。
 4.  JavaScript在严格模式下有什么不同？
   + javaScript在严格模式下的不同有
     + 禁止声明重复的全局变量
     + 禁止给函数传参的参数名相同
     + 禁止同一对象下的属性名相同
     + 禁止删除已声明的变量（即禁止使用 delete +变量名）
     + 引起静默失败（给不可写的属性赋值等）会抛异常
     + 禁止删除不可删除的属性
     + 禁止使用 with
     + eval 不会再给上层函数传递变量
     + 阻止eval 和arguments产生一些奇怪的行为
     + 给函数传参 的this不会再强制转换为对象

 5.  如何定义立即执行函数（自调用函数）？他有什么特点？
     ~~~
        (function fuc(){
        ...
     })()    //最后一行小括号'()'可以放在')'外面也可以放在里面
     ~~~
     特点：自动执行无需调用
 6. 下列代码会输出什么？
    ~~~
        // liList为获取的一组dom元素
        for(var i = 0; i < 6; i++){
        liList[i].onclick = function(){
            console.log(i);
        }
        }
         //依次点击该组dom元素，会在控制台输入其对应下标：0,1,2,3,4,5
    ~~~ 
   
 7.  代码编写（js）：获取页面中类名为box的一个元素，增加点击事件，为它添加名为left的类。
   + ~~~
     var box=document.getElementByClassName('box')
     box.@click=function(){
         box.addClassName('left')
     }
     /*---------------------------------------*/
     或者
     box.addEventListener('click',function(){
         box.addClassName('left')

     })
        ~~~ 
  8. 简述队列和堆栈的区别，现有一个数组如下，为数组中添加一个数字6，分别为队列和堆栈分别进行入列/出列、入栈\出栈操作，经过上述操作后的数组内的值会变为什么？
   +  队列
      先进先出，
      地址是从低到高
   + 堆栈
     先进后出，
     地址是从高到底   
   ~~~
        var arr = [1,2,3,4,5];
        // 入列、出列后：
        arr.unshift() //  [6,1,2,3,4,5]
        arr.shift()  //  [1,2,3,4,5]  
        // 入栈、出栈后
        arr.push() //  [1,2,3,4,5,6]
        arr.pop()  //   [1,2,3,4,5]
   ~~~
   9. 代码编写（js）：定义一个函数，该函数可以将下列数组按照升序排列
      ~~~
        var arr = [13,42,3,8,12,33];
        
          for(let i = 0;i<arr.length;i++){
              for(let j = 0; j<arr.length-i; j++){
                  if(arr[j]>arr[j+1])
                  {
                      let temp= arr[j]
                      arr[j]=arr[j+1]
                      arr[j+1]=temp
                  }
              }
          }
        ~~~  
  10.   代码编写（js）：编写一个循环，生成13到25之间的随机数，直到该随机数的值为19，再跳出循环   
      ~~~
        let res=null;
        while(res!=19){
         res= Math.random()*(25-13)+13
        }
        console,log(res)
      ~~~   
  11. 代码编写（js）：找出下列数组中不能为2整除的数字
     ~~~
      var arr = [13,42,3,8,12,33];
      arr.forEach((item,index)=>{
         if(item%2!=0){
             console.log(item)
         }

      })  
    ~~~    
 12.  下列代码会输出什么？
    ~~~
        1. var a = 12;
            function fn() {
                console.log(a);
                var a = 45;
                console.log(a);
            }
            fn() //12,45
        --------------------------------------------------
        2.  function fn() {
        console.log(11);
        function fn1() {
            console.log(22);
        }
        fn1();
        }
      fn();  //11,22
        ---------------------------------------------------
        var x=10;
        function fn() {
            console.log(x)
        }
        function show(f){
            var x=20;
            f();
        }
        show(fn) //20
