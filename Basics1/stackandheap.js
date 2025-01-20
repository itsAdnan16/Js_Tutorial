//stack_memory(primitive datatype) and heap_memory(non primitive datatype)


let name = "Adnan"
let name2 = name

name2 = "zzzz"
console.log(name)
console.log(name2);//no change because the changes are made in copy not in the orignal value

let obj1 = {
    name:"Adnan",
    id:"adnanh.7309@gmail.com"
}
let obj2 = obj1
obj2.id = "adnanhasan"
console.log(obj1)// here the id changes because actual reference or address is passed and changes in the orignal copy