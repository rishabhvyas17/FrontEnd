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

let add =(a,b)=>{
    return a+b;
}

let fib= (n) =>{
    if(n==1){
        return 1;
    }
    if(n<=0){
        return 0;
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(6));