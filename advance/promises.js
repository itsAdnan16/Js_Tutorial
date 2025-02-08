//This is the first syntax about promise
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Doing some asynchronous task");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise One completed")
})

// //2nd and more direct syntax to write promise
 new Promise(function(resolve,rejetct){

    setTimeout(function(){
        console.log("Doing asynchronous task using method 2")
        resolve()
    },1000)

}).then(function(){
    console.log("promise resolved by method2")
})

// //also returning something in resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:"Adnan",Password:1234});
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

//now we will also pass values into the reject function
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            let user = {
                name:"Adnan",
                age : 20
            }
            resolve(user)
        }else{
            let error_msg = "some problem occured"
            reject(error_msg)
        }
    },1000)
})
promiseFour.then(function(user){
    return user.age
}).then(function (age){
    console.log(`age = ${age}`)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("promise resolved or rejected")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//another method to consume promise rather than then and catch

async function consume_five(){
    try{
        let response = await promiseFive;
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

//now we will use fetch which is mainly used to get http request and return it in the form of promise

//now fetch will return a promise we can deal with like promise using then and catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(reponse){
//     return reponse.json()
// }).then(function(data){
//     console.log(data)
// }).catch(function(error){
//     console.log(`The error is ${error}`)
// })

//now another method to get using async await

async function deal_fetch(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        console.log(data)
    }catch(error){
        console.log(`The error is ${error}`)
    }  
}
deal_fetch()


