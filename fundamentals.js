let firstName = "Rishabh";
let course = "JavaScript";

firstName.length;
firstName.toUpperCase();
firstName.toLowerCase();
firstName.includes("ab"); 

console.log(firstName.includes("ab"));
console.log(firstName.includes("vyas"));

let first = "Rishabh";
let last = "Vyas";

let full = first + " " + last;
console.log(full);

let age = 20;

console.log(`First name is ${firstName} and age is ${age}`);

let numbers = [10,20,30,40,50];

numbers.forEach(function(value){
    console.log(value);
});

