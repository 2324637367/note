let g1=function* (){
    try{
        yield;
    }
   catch(e){
    console.log('内部',e)
   }
   

};
let i1=g1();
i1.next();
 try{
    i1.throw('a')
    i1.throw('b')
 }catch(e){
     console.log('外部',e)
 }
 