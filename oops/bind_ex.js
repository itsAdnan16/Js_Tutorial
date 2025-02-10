const student = { name: "Adnan" };
const teacher = { name: "Dr. Smith" };

function introduce() {
    console.log("Hello, I am " + this.name);
}

const studentIntro = introduce.bind(student);
const teacherIntro = introduce.bind(teacher);

studentIntro();  // ✅ "Hello, I am Adnan"
teacherIntro();  // ✅ "Hello, I am Dr. Smith"

const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

const extracted = obj.getValue;
console.log(extracted());  // ❌ Undefined (`this` lost)

const bound = obj.getValue.bind(obj);
console.log(bound());  // ✅ 42 (`this` is fixed)


const button = document.getElementById("myButton");

const person = {
    name: "Adnan",
    sayHello: function() {
        console.log("Hello, " + this.name);
    }
};

// Without bind, `this` refers to the button, not `person`
button.addEventListener("click", person.sayHello); // ❌ Output: "Hello, undefined"

// Fix `this` using bind()
button.addEventListener("click", person.sayHello.bind(person)); // ✅ Output: "Hello, Adnan"

/*The bind() method in JavaScript creates a new function with a permanently fixed this value and optional preset arguments. 
It is commonly used to maintain this in callbacks, event listeners, and method borrowing.
 Unlike call() and apply(), bind() does not execute the function immediately but returns a bound function.*/