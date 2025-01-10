// !function with parameters

// function userDetails(name , age , city){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }
// userDetails("saitharun",20,"Hyderabad")

// anonymous function
// function(){
//     console.log("Anonymus");
// }
// ();



// function expression
// x=function(){
//     console.log("function expression");
// };
// x();

// IIFE
// (function(){
//     console.log("IIFE");
// })();

// arrow function
// function demo   ()
// {
//     console.log("Hello");
// }
// demo();

// let x= ()=>console.log("Arrow Function")
// x();


// let x = _ =>console.log("Arrow function");
// x();

// let x=a=>console.log(a);
// x(5);

// let x=(a,b)=>console.log(a+b);
// x(5,5);

// let x=_=>{console.log("Hi");
//         console.log("bye");
//         console.log("Hello")}
// x();

// return keyboard
// function demo(a,b){
//     console.log("hi");
//     console.log("saitharun");
//     return a+b;
// };
// let x=demo(5,5);
// console.log(x);


// let y =(a,b)=>a+b; //implicit return
// let a =y(10,20);
// console.log(a);


// let z=(a,b)=>{return a+b}; //explicit return 
// let b=z(10,120);
// console.log(b);

//Higher order function

// function hof(a){
//     return a;
// };
// let a= hof(function(){return "Hello I am Callback function"})
// console.log(a());

// function parent(callback){//higher order function
//     return callback;
// }
// let x=parent(add(5,5));
// console.log(x);

// function add(a,b){//callback function
//     return a+b
// }

//closure
var a=100;
let b="hi";
function x(){
    var user="saitharun";
    let company="google";
    const sal=123456789;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a);
    console.log(b);
};
x();
