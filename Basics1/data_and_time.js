let today_date = new Date()


console.log(today_date.toString())
console.log(today_date.getDate().toString())
console.log(today_date.toDateString())
console.log(today_date.getTime())// to get the time in ms from jan 1 1970 in ms
console.log(today_date.toLocaleString())

let myTimeStamp1 = Date.now()
console.log(myTimeStamp1); // same method as getTime but it does not require any object directly return time stamp at moment of execution


//Sir notes

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
//we can modify parameters by ourself in this method
newDate.toLocaleString('default', {
    weekday: "long",
    
})