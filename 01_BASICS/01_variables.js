// THREE TYPES OF VARIABLE IN JAVASCRIPT 
// 1.var(old way)hosting or scope ki vjha sa bug aa sakte hain 
// 2.const(Modern)
// 3.let(modern)
let age =20;
//*value baad ma change kar sakta ho
age = 21;//Allowed
const pi =3.14;//value reassign nhi kar sakte
//(pi = 3.1415)This is not allowed [error]
//const ka matlab immutable object nhi hota
const user={
    name:"sidhu"
};
user.name="siddharth"//Allowed
console.log(user.name);


const accountId=1
let accountEmail="siddharthtomar150@gmail.com"
var accountPassword="148135"
let accountCity="meerut"
let accountState;


/*
prefer not to use var
because  of issue in block scoppe and functional scope
var is old method don't use 
*/

// accountId=2

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



// const a=20;
// a=10;
// console.log(a);this is not allowed [output=error]
 

//const with objects and arrays 
// 1.UPDATE PROPERTY
const person={
    name:"siddharth"
    };
person.name="ankur"//Allowed
console.log(person.name);

// 2.Add property
const hey={
    name:"sidhu"
};
hey.age =20;
console.log(hey);

//3.Delete property
const pers={
    name:"sidhu"
};
pers.age =20;
delete pers.name;
console.log(pers);
//4.Object.Freeze()
const Id={
    name:"thakur"
};
Object.freeze(Id);
Id.name="ashu";
Id.age=21;
delete Id.name;
console.log(Id);

// 5.Array Methods 
const arr=[1,3,5];
arr.push(9);
// arr.pop();//use for hide last value of array

arr[0]=100;
console.log(arr);

//6.Object reference(interview favorite)
const you= {
  name: "Sidhu"
};

const anotherUser = you;

anotherUser.name = "Rahul";

console.log(you.name); // Rahul

//7.Object.seal()
//new property can not add || property delete nhi kar sakta
//Existing property can change
const xisting ={
    name:"Neha"
};
Object.seal(xisting);
xisting.name="Deepanshu";
xisting.age=21;

console.log(xisting.name);