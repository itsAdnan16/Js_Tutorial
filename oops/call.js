function setUserName(username){
    this.username = username
}

//this = jiski baat ho rahi ho

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const obj = new createUser("adnan","xyz@gmail.com","123")

console.log(obj)