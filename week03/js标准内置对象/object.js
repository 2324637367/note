console.log(Object.prototype.constructor) // [Function: Object]
console.log(Object.prototype._proto_) // undefined
console.log(Object.prototype._noSuchMethod_) // undefined
Object.prototype.name='Object对象'
console.log(Object.prototype.hasOwnProperty('name'))// true 返回一个布尔值 ，表示某个对象是否含有指定的属性，而且此属性非原型链继承的。
console.log(Object.prototype)// [Object: null prototype] { name: 'Object对象' }
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
p={
    name:'mingming',
    age:15,
    
}
p.watch=function () {
   
    if(p.name!='xiaoming'){
        console.log(  'name变成了  '+ this.name)
    }
}
p.name='xiaodong'
p.watch();
Object.defineProperty(p,'age',{
    writable:false,
    value:16
})
console.log(p.age)
console.log(Object.isExtensible(p)) //检测是否可扩展 true
Object.preventExtensions(p)//禁止扩展
console.log(Object.isExtensible(p)) //检测是否可扩展 false
// Object.freeze(p)//冻结对象是指不可更改和删除属性，不可添加
Object.seal(p)// 防止其他代码删除对象的属性。，可更改
p.height='180'//undefined
console.log(p.height)
delete p.age//无效
console.log(p.age)// 16
console.log(Object.values(p)
)

 console.log(Object.is(15,15))// true