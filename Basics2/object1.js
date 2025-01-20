//singleton :- when we make objects from any constructor

//object literals

//this symbol is important for interviews symbol ko object ki key tarah use karo
const my_sym = Symbol("key1")



const js_user = {
    name : "Adnan",
    "full_name" : "Adnan Hasan",
     //my_sym : "my key", // if we do like this this will not be treated as symbol rather as string
    //proper syntax 
    [my_sym] : "my key",
    age : 18,
    location : "Jhansi",
    email : "Adnan@gmail.com",
    active_days : ["Monday","tue","Thur","Sat"],
};

//very important that there are two ways to create the objects we often use obj.property but sometime we prefer this method obj["email"]

//like full_name we can never extract it by this method obj.property that why we have to use to use the other syntax js_user["full_name"]

console.log(js_user.name)
console.log(js_user["full_name"])
//console.log(typeof js_user.my_sym)
console.log(js_user[my_sym])

//how we can change values
js_user.email = "@gmail.com"
console.log(js_user)

//to prevent the state of objects from changing we can also freeze the function

//Object.freeze(js_user)
js_user.email = "Adnan" // this will not throw an error but the value of email will also not change


//adding a new function directly inside the object

js_user.greeting = function(){
    console.log("Hello js User")
}
console.log(js_user.greeting())
//console.log(js_user.greeting) output = undefined
//this is pointer to the current object

js_user.greet = function(){
    console.log(`Hello ${this.name}`)
}
console.log(js_user.greet())