"use strict";
let x = 10;
x = 25;
console.log(x);
//Inference and annotation
let y = 8;
let z = 10;
//tipos basicos
let firstName = "Roberto";
let age = 22;
let isAdmin = true;
console.log(firstName);
//object
const myNubers = [1, 2, 3];
console.log(myNubers);
console.log(myNubers.length);
myNubers.push(5);
console.log(myNubers);
//tuplas
let myTuple;
myTuple = [10, "teste", ["a", "b"]];
//object literals ->  {prop: value} 
const user = {
    name: "Roberto",
    age: 22
};
console.log(user);
//any
let b = 0;
b = 1;
console.log(b);
//union type
let id = "10";
id = 200;
const userId = 10;
// enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.P,
};
console.log(camisa);
