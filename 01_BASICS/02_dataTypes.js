"use strict"; // treat all JS code as newer version

// Data types define what kind of value is stored in a variable.
let hello="siddharth";
//name (string data type)
console.log(hello);

//javaScript has two categories 
//PRIMITIVE DATA TYPE(7)=[SINGLE VALUE STORE]
//1.STRING
//2.NUMBER
//3.BOOLEAN
//4.UNDEFINED
//5.SYMBOL
//6.BigInt
//7.NULL
let name="siddharth tomar";  //string
let age=21;                  //number
let isStudent=true;          //boolean
let city=null;               //null
let state ;                  //undefined
let id=Symbol("id");        //symbol
let big=1234567n;            //bigInt
console.table([name,age,isStudent,city,state,id,big]);

//Typeof is used to check the data type of a value.
//console.log(typeof null); // "object"
// Q: Why does typeof null return "object"?
// Answer:
// Because of a historical bug in JavaScript. It has been kept for backward compatibility, so changing it would break old code.
console.table([
  typeof name,
  typeof age,
  typeof isStudent,
  typeof city,
  typeof state,
  typeof id,
  typeof big
]);
// typeof returns the data type as a string.

// typeof null -> "object"
// This is a historical bug in JavaScript.
// null is NOT actually an object.

// typeof cannot tell the exact type of arrays.
console.log(typeof []);   // object
console.log(typeof {});   // object
console.log(typeof function(){}); // function

//NON-PRIMITIVE(REFERENCE)DATA TYPE
//ye multiple value ya complex data store karte hain;
const user ={
    name:"Ashu"
};//object data type
console.log(user.name);
const arr=[2,6,9,3];//array data type
console.log(arr[0]);
