+ 遍历数组
  + ~~~
    fruits.forEach(function (item, index, array) {
     console.log(item, index);
    });
    ~~~
+ 数组增删
  +  arr.push arr.pop() arr.shift()  arr.unshift() arr.splice() (改变原数组)
  + arr.slice() (返回新数组，不改变原数组)
+ 参数
  + Array 构造器会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 arrayLength 参数）。注意，后面这种情况仅适用于用 Array 构造器创建数组，而不适用于用方括号创建的数组字面量。
  + 一个范围在 0 到 232-1 之间的整数，此时将返回一个 length 的值等于 arrayLength 的数组对象（言外之意就是该数组此时并没有包含任何实际的元素，不能理所当然地认为它包含 arrayLength 个值为 undefined 的元素）。如果传入的参数不是有效值，则会抛出 RangeError 异常。
 + 访问数组元素
   + JavaScript 数组的索引是从0开始的，第一个元素的索引为0，最后一个元素的索引等于该数组的长度减1。如果指定的索引是一个无效值，JavaScript 数组并不会报错，而是会返回 undefined
+ 正则匹配结果返回的数组
   + RegExp.exec() ,String.match(),String.replace()
+ 属性
   + Array.length Array 构造函数的 length 属性，其值为1（注意该属性为静态属性，不是数组实例的
   + get Array[@@species] 返回 Array 构造函数。
   + Array.prototype 通过数组的原型对象可以为所有数组对象添加属性
+ 方法
   + array.from()  从类数组对象或者可迭代对象中创建一个新的数组实例。
     
     
       ~~~console.log(Array.from('foo'));
      // expected output: Array ["f", "o", "o"]

      console.log(Array.from([1, 2, 3], x => x + x));
      // expected output: Array [2, 4, 6] 
   + array.isArray() 用来判断某个变量是否是一个数组对象。
   + array.of()  根据一组参数来创建新的数组实例，支持任意的参数数量和类型。