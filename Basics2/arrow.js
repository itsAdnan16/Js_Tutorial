//"use strict";
const user = {
    username : "hitesh",
    price : 999 ,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to the website`) 
    }
} 

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this) //{}

// function abc(){
//     console.log(this)// global object when strict mode is not on
//     //undefined when strict mode is on 
// }
// function chai(){
//     let username = "Adnan" 
//     console.log(this.username)//output = undefined
// }
// abc()
// chai()

/******** Arrow Function *******/
const func = ()=>{
    let username = "Adnan"
    console.log(this)
}
func()

const add = (num1,num2) =>{
    return num1 + num2;
};

//Another syntax to write the arrow function

//imp point :- If we use curly braces then it is mandatory to write the return keyword

const addtwo = (num1,num2)=>(num1 + num2);

console.log(add(5,4))
console.log(addtwo(5,4))

const ex = (num1,num2) =>({name:"Adnan"})
 console.log(ex)
 