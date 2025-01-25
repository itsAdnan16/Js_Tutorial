const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const new_nums = myNumers.map((num)=>{
//     return num + 10;
// })
// console.log(new_nums)

const n = myNumers
.map((num)=> num * 10)
.map((num)=>num + 1)
.filter((num)=> {
    return num>=40
})
console.log(n)
