let istrue:boolean=true //布尔
enum a{
    a=15,b,c
}//枚举
function foo():void{
    console.log('empty')
}//空
let b:any='any'
let c1:string='string'
let d:number=16
let e:null
let f:undefined
//元组
let g:[string,number,boolean]
// Object
let h=[1,2,3,"123"]
let j={
    a:15
}
function error():never{
    throw new Error('出错')
}// never类型必须包含一个永远无法到达的终点
let numbers=(<string>'sadas').length;
let numberss=('ansas' as string).length;
console.log(`${numbers} ${numberss}`);


