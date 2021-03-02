var proxy = new Proxy({}, {
    get: function(target, propKey) {
      return 35;
    }
  });
  
  let obj = Object.create(proxy);


console.log(  obj.time+""+obj.name)//3535
function a(){
    
}
Object.defineProperty(obj,'name',{
    value:15,
    writable:false,
    enumerable:false,
})
obj.name=16
console.log(obj.name)
var objs={
    has()
}
var hander={
    defineProperty(target,key,descriptor){
        return false
    }
}
var target={}
var proxy=new Proxy(hander,target)
proxy.foo='bar'//未添加成功
console.log(proxy.foo)
