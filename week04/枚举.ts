 enum direction{
    up=1,down,left,right
}
let directions=[direction.up,direction.down,direction.right]
console.log(directions)
function foo1(num:number,enums:direction01 ){
    console.log(`${num}  ${enums}`) 
}
//  foo1(15,direction.down)
// 字符串枚举
enum direction01{
    up='up',
    down='down',
    left='left',
    right='right'
}
// foo(16,direction01.down)
// 枚举结构
enum FileAccess{
    A='asda'.length,
    B=15+10,
    c=16<<2,
    d=12>>3

}
console.log(FileAccess[1])//反向映射
console.log(FileAccess['A']) //4
console.log(FileAccess.A) //4
console.log(FileAccess) // { '1': 'd', '4': 'A', '25': 'B', '64': 'c', A: 4, B: 25, c: 64, d: 1 } 
declare enum direction{
    a=1,
    b=1,
    C=1,
    Up
}
console.log(direction["a"])//undefined
console.log( [1,2,'abc',null,undefined])
