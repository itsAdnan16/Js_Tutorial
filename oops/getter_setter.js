// class User{
//     constructor(username,password,email){
//         this.email = email
//         this.username = username
//         this.email = email
//     }

//     //now how we will use the getter and setter function
//     set email(value){
//         //to resolve the name conflict issue from the constructor we will use the _
//         this._email = value;
//     }

//     //now we will use the setter function for the same
//     get email(){
//         return ` ${this._email} Adnan`
//     }

//     //now we will the the password

//     set password(value){
//         //set password
//         this._password = value
//     }
//     get password(){
//         return  `01010 ${this._password}  0101`
//     }
// }

// const obj = new User("adnan","Adnan@123","xyz@gmail.com")

// console.log(obj.password)

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;  // Use the setter
        this.email = email;        // Use the setter
    }

    set email(value) {
        this._email = value;
    }

    get email() {
        return `${this._email} Adnan`;
    }

    set password(value) {
        this._password = value;
    }

    get password() {
        return `01010 ${this._password} 0101`;
    }
}

const obj = new User("adnan", "Adnan@123", "xyz@gmail.com");

console.log(obj.password);  // Should now print: 01010 Adnan@123 0101