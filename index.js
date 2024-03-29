"use strict";
// -------TYPESCRIPT------
exports.__esModule = true;
console.log("Hello World");
// ----Variable with type checking
var first_name = "Yousuf";
var name2 = true;
var num = 12;
console.log(first_name);
console.log(name2);
console.log(num);
// name2 = 31
// first_name = 1223
console.log(first_name);
// let a:string = 12
// var Global Scope
if (true) {
    var age1 = 124;
}
console.log(age1);
// let Block Scope
if (true) {
    var age2 = 23;
}
// console.log(age2)
// Class Basic Task
var num1 = 11;
var num2 = 2;
var num_remainder = num1 % num2;
console.log("Remainder ", num_remainder);
// Class Advance Task
var var_name = "imran is a smart boy";
var array1 = var_name.split(" ");
array1.sort();
console.log("Splited Array ", array1);
// Variable Declaration & Hoisting
abc = "sample";
var abc;
console.log(abc);
// abc2 = "sample text"
var abc2;
console.log(abc2);
// Template Literals
var f_name2 = "Basit";
var greeting = "Hello ".concat(f_name2);
console.log(greeting);
// Function
function sum(n1, n2) {
    return n1 + n2;
}
console.log("Sum ", sum(10, 6));
// Arrow Function
var muliply = function (n1, n2) { return n1 * n2; };
console.log("Muliply ", muliply(2, 10));
function multiply(num1, num2) {
    return num1 * num2;
}
console.log("Func Multiplication", multiply(2, 5));
var divide = function (n1, n2) { return n1 + n2; };
console.log("Arrow func Divide", divide(10, 5));
// If Else -- conditions
var AGE = 20;
if (AGE >= 18 && AGE <= 60) {
    console.log("You are ".concat(AGE, " year old, You can go"));
}
else if (AGE > 60) {
    console.log("You are ".concat(AGE, " year old, Please show Health Card"));
}
else {
    console.log("You are ".concat(AGE, " year old, You are not allowed"));
}
// prompt-sync library use to get user input
// Array -- to store multiple values in single variable
var fruits = ["banana", "mango", "apple", "orange"];
console.log("Fruits Array", fruits[2]);
// Array Methods
var popoutELement = fruits.pop(); // Remove last element from array
console.log("Pop Element", popoutELement); //Return remove element
console.log("Array after pop", fruits);
fruits.push("watermelon"); //Add value at last index
console.log("Array after push", fruits);
console.log(fruits.length); //Length Property
var student_names = ["Hamza", "Abbas", "Yousuf", "Kareem", "Hussain", "Bilal"];
student_names.shift(); //Remove first element from arracy
console.log(student_names);
student_names.unshift("A. Hadi"); //Add value at first index
console.log(student_names);
var fruits2 = ["orange", "mango", "banana"];
fruits2.push(2);
console.log(fruits2);
var splice_return = fruits2.splice(2, 1, "grapes", "cherry", "apple"); // splice method changes in existing array
console.log(fruits2);
console.log("Splice Return Array", splice_return); //return deleted item array
var slice_return = fruits.slice(1, 3); //return new array, didnt change in exising array
console.log("Fruits2 Array", fruits2);
console.log("Slice Return Array", slice_return);
// Function with optional parameter
function sum2(n1, n2) {
    if (n2 === void 0) { n2 = 5; }
    return n1 + n2;
}
console.log(sum2(2));
// For Loop
for (var i = 0; i < 5; i++) {
    console.log("Hello World " + i);
}
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
console.log(cleanestCities[0]);
console.log(cleanestCities[1]);
console.log(cleanestCities[2]);
console.log(cleanestCities[3]);
for (var i = 0; i < cleanestCities.length; i++) {
    console.log(cleanestCities[i]);
}
for (var i = 0; i < cleanestCities.length; i++) {
    if ("Islamabad" == cleanestCities[i]) {
        console.log("Yes it is in the list");
        break;
    }
    else {
        console.log("city not found");
    }
}
// Nested Loop
// Install & Import  Module/Package "Inquirer"
var inquirer_1 = require("inquirer");
var data_answer = inquirer_1["default"].prompt({
    message: " What is your name",
    name: "Full Name",
    type: "input"
});
console.log(data_answer);
