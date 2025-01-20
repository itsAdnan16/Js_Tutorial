let score1 = "33"
console.log(typeof score1)//string
//console.log(typeof(score))

let number1 = Number(score1)
console.log(typeof number1)//number
console.log(number)//33

let score2 = "33an s" 
let number2 = Number(score2)//no error will get converted
console.log(typeof number2)//number
console.log(number2)//output NaN

let score3 = null
let n3 = Number(score3)
console.log(typeof n3)//number
console.log(n3)//ouput = 0

let score4 = true;
let n4 = Number(score4)
console.log(n4)//1
//  true => 1; false => 0

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion