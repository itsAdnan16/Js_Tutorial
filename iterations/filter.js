// const coding = ["js", "ruby", "java", "python", "cpp"]

// const arr = coding.forEach((item)=>{
//     return item;
// })

//for each loop does not return any value it will be simply be written as undefined
//console.log(arr)

//when we want to return we can use filter function

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// when you are curly braces then we have to use return inside the arrow function
// const new_nums = nums.filter((num)=>{
//  return num>4
//  })
// console.log(new_nums)

//in this case we can do it directly
// const a = nums.filter((num)=>num>4)
// console.log(a)

//how can we perform the same operation using the for each loop
let arr = []

nums.forEach((num)=>{
    if(num>4){
        arr.push(num)
    }
})
console.log(arr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //now how can we get all the history books

  let hb = books.filter((item)=>{
    return item.genre === 'History';
  })
  console.log(hb)

  //publish year is greater than 2000

  let new_books = books.filter((item)=>{
    return item.edition>2000 && item.genre === 'History';
  })
  console.log(new_books)