// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //adds element at the starting but it is heavy method as all values are shifted by one place
// myArr.shift() // removes element from the beginning

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr); // convert array into a string as 0,1,2,3,4,5

//very important detail for interviews 
//slice = does not include the end point and do not manipulate the orignal array
//splice = include end point and manipulate/change the orignal array

const arr = [0, 1, 2, 3, 4, 5]
const arr1 = arr.slice(1,3)
console.log(`sliced array ${arr1}`)
console.log(`No change in orignal array after slice ${arr}`)

const arr2 = arr.splice(1,3)
console.log(`spliced array ${arr1}`)

//very important point that an array can take heterogenious([1,2,"PJ",[0,1,2]]) data in javascript unlike other programming language
