// -------TYPESCRIPT------

console.log("Hello World");

// ----Variable with type checking
let first_name:string = "Yousuf"
let name2 = true
let num:number = 12

console.log(first_name)
console.log(name2)
console.log(num)

// name2 = 31
// first_name = 1223
console.log(first_name)
// let a:string = 12



// var Global Scope
if(true){
    var age1 = 124
}
console.log(age1)

// let Block Scope
if(true){
    let age2 = 23
}
// console.log(age2)

// Class Basic Task
let num1 = 11
let num2 = 2
let num_remainder = num1%num2
console.log("Remainder ",num_remainder)


// Class Advance Task
let var_name = "imran is a smart boy"
let array1 = var_name.split(" ")
array1.sort();
console.log("Splited Array ", array1);


// Variable Declaration & Hoisting 
abc = "sample"
var abc
console.log(abc)

// abc2 = "sample text"
let abc2
console.log(abc2)


// Template Literals
let f_name2 = "Basit"
let greeting = `Hello ${f_name2}`
console.log(greeting)


// Function
function sum (n1:number , n2:number) :number{
    return  n1 + n2
}
console.log("Sum ",sum(10,6))

// Arrow Function
let muliply = (n1:number, n2: number) => n1*n2
console.log("Muliply ",muliply(2,10))

function multiply (num1:number, num2:number){
    return num1 * num2 
}
console.log("Func Multiplication" ,multiply(2,5))

let divide = (n1,n2) => n1+n2
console.log("Arrow func Divide", divide(10,5))

// If Else -- conditions

let AGE = 20
if (AGE >= 18 && AGE<=60){
    console.log(`You are ${AGE} year old, You can go`)
} else if (AGE > 60){
    console.log(`You are ${AGE} year old, Please show Health Card`)
} else{
    console.log(`You are ${AGE} year old, You are not allowed`)
}


// prompt-sync library use to get user input


// Array -- to store multiple values in single variable
let fruits = ["banana", "mango", "apple", "orange"]
console.log("Fruits Array",fruits[2])

// Array Methods
let popoutELement = fruits.pop() // Remove last element from array 
console.log("Pop Element",popoutELement) //Return remove element
console.log("Array after pop",fruits)

fruits.push("watermelon") //Add value at last index
console.log("Array after push",fruits)

console.log(fruits.length) //Length Property
