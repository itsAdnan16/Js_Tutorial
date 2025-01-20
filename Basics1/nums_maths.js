const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

const number = 123.8956
const number2 = 12345.8935
console.log(number.toFixed(2))
console.log(number.toPrecision(3))
console.log(number.toPrecision(4))
console.log(number2.toPrecision(3))

const amount = 10000000
console.log(amount.toLocaleString())//it divides it on the basis of Us dollars
console.log(amount.toLocaleString('en-IN'))//in indian number system


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random())// 0=<value<1 and 0 (inclusive) to 1 (exclusive).
console.log(Math.random() * 10 )//now it can still produce 0
console.log((Math.random()*10) + 1 )//thats why now we will add 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)