// immediately invoked function Expression (IIFE)
/*An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed as soon as it is defined. */
//They used to avoid polluting the global scope

//named iffe
(function chai(){
    console.log("DB Connected")
})();//this semicolon is very imp as it can create an error

((name)=>{
    console.log(`Hello ${name}`)
})("Adnan")