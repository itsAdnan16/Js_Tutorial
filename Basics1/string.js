const name = "Adnan"
const h = 10
const gameName = new String('hitesh-hc-com')
//console.log(typeof h)
//console.log(name + " studied for " + h + " hours") this is a outdated format to write strings concatinatination now we use placeholders

console.log(`Adnan studied basics for ${h} hours`) // string intrapolation

//another way to declare string
const new_name = new String("Pj_das")
console.log(new_name)

/*
A prototype is essentially a blueprint or a template from which objects inherit methods and properties. For strings, the prototype contains all the methods available to string instances, like .toUpperCase(), .indexOf(), .slice(), and so on.
*/
let str = "Hello";
console.log(str.__proto__); // Logs String.prototype

//Checking for a method:
console.log(str.__proto__.hasOwnProperty("toUpperCase")); // true

console.log(name[0])

//accessing some string methods

console.log(name.toUpperCase()) //orignal value is not changes beacause string is primitive datatype this mean it is stored in stack memory and changes made in the stack memory 

console.log(name.charAt(2))
console.log(name.indexOf('d'))

console.log(`The substing works as ${name.substring(0,4)}`)
console.log(name.slice(-8,4 ))

let space_name = " Abhay   "
console.log(space_name.trim())  //now this will remove the starting as well the ending spaces , trim_start = beginning space , trim_end = ending space

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));