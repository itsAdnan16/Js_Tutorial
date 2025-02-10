let my_name = "Adnan    "
let subject = "JS   "

let heroes = ["thor","spiderman","superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//Now this function will be available in alll string,arrays,functions
//because at the end everything is object is object in javscript
Object.prototype.HeyAdnan = function(){
    console.log("Hello Adnan")
}
heroes.HeyAdnan()

//Now this will be present in all the arrays
Array.prototype.Greet = function(){
    console.log("Arrays want to geet you")
}
heroes.Greet()

const func = function(){
    console.log("Function greet you")
}

func.HeyAdnan()

//now we will do the assignment of adding true length in all the strings

String.prototype.TrueLength = function(){
    console.log(`The real length is ${this.trim().length}`)
}
console.log(`The length of my_name is ${my_name.length}`)
console.log(my_name.TrueLength())

//now how do we use inheritance in javascript

const car = {
    type : "XUV",
    Fuel : "Petrol",
    Drive : "Semi-Automated"
};

const mahindra = {
    car_name : "XUV-600",
    Speed : "200kmph",
    Cost : "15 Lakhs"

    //one method to extend another class
    //but this is old syntax
    //__proto__: car
}

//also we can do it outside the object
mahindra.__proto__ = car


//modern syntax

//Object.setPrototypeOf(mahindra,car)
console.log(mahindra.type)

console.log(mahindra.Fuel)

