var arr :number[]=[1,2,54,65,8]
var str :string='zifuchuan'
var istrue :boolean=false
var de:number=15
var ox:number=0o122
var oxs:number=0x122
var oxsx:number=0b100
// 元组
var a:[string,number]
a=['str',16]
console.log(a)
// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {Red, Green=2, Blue}
let c: Color = Color.Green;
// any 类型
let notSure :any=4
notSure='1231'
notSure=false
// 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
