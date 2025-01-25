const n = myNumers
.map((nums)=> num * 10)
.map((num)=>num + 1)
.filter((num)=> {
    return num>=40
})
console.log(n)