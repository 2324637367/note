function idMaker(){
    var index=0;         
        return{
            next:function(){
                return {value:index++,done:false}
            }    
    }
}
var i=idMaker()
console.log(i.next().value)
console.log(i.next().value)
console.log(i.next().value)