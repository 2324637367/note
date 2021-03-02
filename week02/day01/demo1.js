"use strict"
var obj = {}
Object.defineProperty(obj,"x",{value:52,writeable:false})
// obj.x=12 
//Cannot assign to read only property 'x' of object '#<Object>'
console.log(obj.x)
var obj1={get x(){
    return 12
} 
}
// obj1.x=15;
//  Cannot set property x of #<Object> which has only a getter
console.log(obj1.x)
// var  a = 0010
// console.log(a)
// Octal literals are not allowed in strict mode.
"use strict";
// var f = function() { return arguments.callee; };
// f(); // TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them