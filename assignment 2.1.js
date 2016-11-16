/* 1. Often we have nested functions in which we would like to preserve the context of this from its lexical scope. An example is shown below:
function Person(name) {
this.name = name;
}
Person.prototype.prefixName = function (arr) {
return arr.map(function (character) {
return this.name + character;
}, this);
};
Using Arrow Functions, the lexical value of this isn't shadowed. So re-write the above code using arrow function. */

function Person(name) {
    this.name = name;
}
Person.prototype.prefixName =  (arr) => {
return arr.map(function (character) {
   return this.name + character; 
}, this);
};



/* 2. Create Object destructuring for user where user has: 1. First Name, 2. Last Name, 3. Date of Birth, then assign this object in other object like:
let obj = { first: 'Avnesh', last: 'Shakya' };
let {first: f, last: l} = obj;
Then use this object in other function to display full name with date of birth. */


let object = {
    first: "Avnesh",
    last:"Shakya",
    dob:"15/5/1987"
}

let {first, last, dob} = object;

console.log(first, last, dob); // Avnesh Shakya 15/5/1987





/* 3. Create Array destructuring (which works for all iterable values) where you have all your friends name then console one by one all separately.
var foo = ["one", "two", "three"];
var [one, two, three] = foo;
console.log(one); // "one" */


var foo = ["Shiva", "Kumar", "Sai"];
var [one,two,three] = foo;
console.log(one); // Shiva






/* 4.Replace IIFEs with Blocks, For example:
(function () { var food = 'Meow Mix'; }() );
console.log(food); // Reference Error
So same create block object where define User’s detail and
try to excess from outside of block and inside also. */


for (let i = 0; i < 10; i++) {
 console.log(i);
}

console.log("outside loop: " + i); // Undefined

for (var i = 0; i < 10; i++) {
 console.log(i);
}

console.log("outside loop: " + i); // 10





