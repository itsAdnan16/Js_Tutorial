const description = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(description)

//we cannot set the value of PI as the writable is false
const chai = {
    name : "masal tea",
    price : 30,
    Available : true
}
console.log( Object.getOwnPropertyDescriptor(chai,"name"))

//now suppose we have a function in object how we will takle it when it we iterate

const coffee = {
    type : "cappechino",
    price : 90,
    prepare : function(){
        console.log("preparing your Coffee")
    }
}

// for(let [key,value] of Object.entries(coffee)){
//     //now this is the way we tackle with the issue mentioned below
//     if(typeof value != 'function'){
//         console.log(`${key} : ${value}`)
//     }
// }

//we do not want like this now how we will tackle this
/*prepare : function(){
    console.log("preparing your Coffee")
}*/

//now how we will set enumerable(iterable) or change the property of the function

Object.defineProperty(chai , "name",{
    writable : true,
    enumerable : false
})


//now we will not see name in the output as we have made that property ennumerable
for( let [key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`)
}






