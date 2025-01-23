//for of loop 

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);   
// }

let greet = "Hello world"

// for (const it of greet) {
//     console.log(it);
    
// }

//Maps
const mp = new Map()
mp.set('IN',"India")
mp.set('Usa',"United states of America")
mp.set('Fra',"France")

// for (const [key,value] of mp) {
//     console.log(key);    
// }

//do not iterate map using the for of map

const myobj = {
    js : 'javascript',
    cpp : "c++",
    rb : "rb",
    swift : "swift by apple"
}

//ude the for in loop
// for (const key in myobj) {
//     //console.log(key);
//     console.log(`key is ${key} and value is ${myobj[key]}`)  
// }
// //on map we cannot use for in map and map is not iterable
// for (const key in mp) {
//     console.log(key)
    
// }

//Using the for each loop
const coding = ["java","c++","C","python","javascript"]

// coding.forEach(function (item){
//     console.log(item);

// })

// coding.forEach(
//     (item)=>{
//         console.log(item)
//     }
// )

// function printMe(item){
//     console.log(item);
// }

//coding.forEach(printMe);

// coding.forEach(
//     (item,index,arr)=>{
//         console.log(item,index,arr);

//     }
// )

const a = [
    {
        name : "java",
        file :".java"
    },
    {
        name : "javascript",
        file : ".js"
    },
    {
        name : "c++",
        file : ".cpp"
    },
]

a.forEach(
    (item)=>{
        console.log(`language is ${item.name} and extension is ${item.file}`)

    }
)