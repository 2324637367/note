var c=new Function('num','hei', 'console.log(num+hei)')
console.log(c(1,2))//3
c.caller
function add(num,num1){
    c(num,num1)
    console.log(c.dis)
}
add(15,46)
