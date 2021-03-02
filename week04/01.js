class Person{
constructor (name,age){
    this.name=name;
    this.age=age
}
 introduce() {
   
    console.log(`My name is ${this.name},I'm ${this.age}`)
}

}
class Student extends Person{
    
    constructor(name,age,score){
        super(name,age)
        this.score=score
    }
    getScore(){
       console.log(this.score)  
    }
}
let student=new Student('Allen',22,11)
student.introduce()
student.getScore()