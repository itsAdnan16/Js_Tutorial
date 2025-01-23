//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//This is the example of closure property in javascript when function access variable or things from its outer scope
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//this will work just fine
console.log(addone(5))
function addone(num){
    return num + 1
}

//There are two ways to create function first one will work fine but the bottom one will throw a error which is called hosting 
/*Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means you can use variables and functions before they are declared in the code.*/

//this will throw a error
addTwo(5)
const addTwo = function(num){
    return num + 2
}