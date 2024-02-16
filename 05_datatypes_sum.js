// Primitive  Data types Call By Value Hoi che   
// 7 Types => String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 200    // String
const scoreValue =100.3  // Number

const isLogg = false // Boolean
const outsideTemp = null // Null
let userEmail;  // undefi

const id = Symbol('123')
const otherId = Symbol('123')

// console.log(id === otherId);

const bigNumber = 454545331321354548545489898989n


// Refaraance (Non Primitive) => Allocate direct refrance to memmory 

//  Array, Objects, functions

const heros =["kaushik","kaushik2","kaushik3"]; // Array

// Object

let myobj ={
    name: "kauhsik",
    age: 27,
}
// Functions

 const myFunction =function(){
    console.log("hello Primex");
 }

// console.log(typeof bigNumber);
 
// Stack (Primetive) copy of value  , Heap (Non Primitive)  Refrance  of orignal value 

let myYoutubename = "kauhsikdotcom"

let anothername = myYoutubename

anothername ="ChaiorCode"

console.log(myYoutubename);
console.log(anothername);

let user = {
    email: "kaushik@gmail.com",
    upi: "kaushik@ybl"
}

let userTwo = user

userTwo.email = "primex@gmail.com"

console.log(user);























