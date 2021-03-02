let goods = [
    {
        id: 0,
        type: '零食',
        name: '可乐',
        price: '5'
    },
    {
        id: 1,
        name: '薯片',
        type: '零食',
        price: '8'
    },
    {
        id: 2,
        name: '辣条',
        type: '零食',
        price: '7'
    },
    {
        id: 3,
        type: '水果',
        name: '榴莲',
        price: '20'
    }
]
// 01 
var r= goods.filter(function(cur){
    return cur.price>=7;
 })
//  console.log(r)

  // 02
//   function a(type,goods){
//      var res={};
//      var arr=[]
//      var count=0;
//      goods.forEach(function(item){     
//            if(item.type==type){
//               count++
//               arr.push(item.name)
//            }    
//      })
//      res.count=count
//      res.goods=arr
//      return res
//   } 
//  console.log(a('零食',goods))
// {

//     ​ count: 商品个数

//     ​ goods: [] 对应type的商品

//     }
  function types(type1,goods){
      var s=goods.filter(function(item){
          return  (item.type==type1)                     
      })
      return {count:s.length,goods:s}
  }
//   console.log( types('零食',goods))
 //03
 var c=0; 
for(var i=0;i<goods.length;i++){ 
    c+=Number(goods[i].price)
}
// console.log(c)

//04
// goods.forEach(function(item){
//     if(item.price>10){
//         item.cheap=true
//     }else{
//         item.cheap=false
//     }
// })
// console.log(goods)
let res= goods.some((item)=>item.price>10)
console.log(res)