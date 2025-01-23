//const tinderUser = new Object()// declaring using a constructor
//this is singleton object

const tinderUser = {}//not singleton

tinderUser.name = "Abhay"
tinderUser.id = "123abc"
tinderUser.login = true
console.log(tinderUser)  

 //we can also create nested objects

const user = {
    email:"123@gmail.com",
    user_name : {
        first_name : "Adnan",
        last_name : "Hasan"
    },

};
console.log(user.user_name)
console.log(user.user_name.first_name)

//imp syntax agar value mile hai to hi karna iske liye question mark
console.log(user.user_name?.last_name )

const obj1 = {1:"A",2:"b"}
const obj2 = {2:"c",3:"d"}

//const obj3 = {obj1,obj2} do not use this syntax output= {{},{}}

const obj3 = Object.assign({},obj1,obj2)
//{} = act as target where the properties of both the objects are copied
//const obj3 = Object.assign(obj1,obj2)
//now the both the properties will be assigned in obj1 and its stae will be changed

//but the best method is the spread method like we have used in arrays
const obj4 = {...obj1,...obj2}

//we can also array of objects like this

const arr = [
    {
        name : "PJ",
        age : 19
    },
    {
        name : "Adnan",
        age : 20
    },
]

//now how to access the values
console.log(arr[0].name)

//methods of objects

console.log(Object.keys(tinderUser))//to get a vector of all key
console.log(Object.values(tinderUser))
console.log (Object.entries(tinderUser))
 console.log(tinderUser.hasOwnProperty('name')) 


 //Destructering the object

 const course = {
    name : "Js",
    price : "999", 
    teacher : "Harry"
 }

 //proper syntax to avoid . notation again and again most people use this syntax

 const {teacher : master} = course
 console.log(master)

 /* this is concept will also be used in react */

 //JSON(Format) Api in short

 /*
 {
 "name":"Adnan",
  "course":"Js"
  "Fees":"Free",
 }
 */
  
 [
    {},

    {},
    
    {}
 ]