/**
 * @author Joey Cadieux <joey.cadieux@engineer.com>
 */

async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.text();
    console.log(data);
}


fetch('/readme.txt')
  .then(response => response.txt)()
  .then(data => console.log(data));



async function fetchText() {
    let response = await fetch('/readme.txt');


    console.log(response.status); // 200

    console.log(response.status.Text); // OK


    if (response.status === 200) {
        let data = await response.text();
        // handle data
    }
}

// Data Types

let counter = 120; // counter is a number
counter = false;  // counter is now a boolean
counter = "foo"; // counter is now a string



let counter =120; // counter is now a number
console.log(typeof(counter)); // "number"
counter = false; // counter is now a boolean
console.log(typeof(counter)) // "number"

counter = "Hi"; // counter is now a string
console.log(typeof(counter)); // "string"


// Logical Operator  /* Code Below This Comment */

let eligible = false,
    required = true;


    console.log(!eligible);
    console.log(!required);


    // Declaring Constants in ES6 

    const CONSTANT_NAME = value;

    let a = 10;
    a = 20;
    a = a + 5;
    console.log(a); // 25

    const RATE = 0.1;
    RATE = 0.2; // TypeError

    const RED; // SyntaxError

    // const and objects 

    const person = { age: 20 };
    person.age = 30; // OK
    console.log(person.age); // 30

    person = { age: 40 }; // TypeError

    const person = Object.freeze({ age: 20 });
    person.age = 30; // TypeError
    
    const company = Object.freeze({
        name: 'ABC corp',
        adress: {
            street: 'North 1st street',
            city: 'San Jose',
            state: 'CA',
            zipcode: '95134',
        }
    });
