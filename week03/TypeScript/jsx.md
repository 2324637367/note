+ JSX
+  JSX是一种嵌入式的类似XML的语法。 它可以被转换成合法的JavaScript，尽管转换的语义是依据不同的实现而定的。 JSX因React框架而流行，但也存在其它的实现。 TypeScript支持内嵌，类型检查以及将JSX直接编译为JavaScript。
   + 想要使用JSX必须做两件事：
   + 给文件一个.tsx扩展名
   + 启用jsx选项
+ TypeScript的三种JSX模式：preserve,react,react-native 这些模式只能在代码生成阶段起作用 - 类型检查并不受影响。 在preserve模式下生成代码中会保留JSX以供后续的转换操作使用（比如：Babel）。 另外，输出文件会带有.jsx扩展名。 react模式会生成React.createElement，在使用前不需要再进行转换操作了，输出文件的扩展名为.js。 react-native相当于preserve，它也保留了所有的JSX，但是输出文件的扩展名是.js。
+ preserve
+ react
+ react-native
+ as 操作符
`var foo = bar as foo;`
+ 类型检查
 + TypeScript使用与React相同的规范 来区别它们。 固有元素总是以一个小写字母开头，基于值的元素总是以一个大写字母开头。
 + 
   ~~~
      declare namespace JSX{
          interface IntrinsicElements{
              foo:any
          }
      }
      <foo/>;//正确
   ~~~
+ 基于值的元素
   + 基于值的元素会简单的在它所在的作用域里按标识符查找
   ~~~
      import MyComponent from "./myCompoment"
      <MyCompoment>
   ~~~