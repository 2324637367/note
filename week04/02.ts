let arr :number[]=[1,2,6,5]
let list:Array<number>=[1,2,6]
interface bird{
    fly(),
    layEggs(num:string)
}
interface fish{
    swing(),
    layEggs(num:string)
}
function animal():bird|fish{
    
    return 
     
}
let ani=animal()
ani.layEggs('abc')