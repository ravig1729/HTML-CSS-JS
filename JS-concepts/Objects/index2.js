// console.log("Call,bind,apply,first class and high ordered");

//call ,Bind, Apply in JS.
//These are just different ways of invoking or calling functions
//when you are calling a function using any of these 3, then you dont have to define in the function that it will be taking obj as a parameter.
//It will assume that the first argument which is  coming while calling the function will be an object only.  

//Creating an object for the reference.
// let user = {
//     name : "Raj",
//     age : 24,
//     salary : 500000,
//     city : "Vijayawada",
// }

// let user2 = {
//     name : "prasad",
//     age : 37,
//     salary : 500000,
//     city : "Vizag",
// }
//Creating a function which will be using this object.
// function displayUserDetails (obj) { //obj = parameter
//     console.log("hello inside the function", obj);
//     console.log(obj.name + "is" + obj.age + "years old. ");

// }

// //in place of obj replace with 'this' .
// //when using call bind or apply.
// function displayUserDetails () { 
//     console.log("hello inside the function", this);
//     console.log(this.name + "is" + this.age + "years old. ");

// }

// //Invoking the function and passing the object.
// displayUserDetails(user);    //hello inside the function {name: 'Raj', age: 24, salary: 500000, city: 'Vijayawada'}
//                              //Rajis24years old. 
// displayUserDetails(user2);   //hello inside the function {name: 'prasad', age: 37, salary: 500000, city: 'Vizag'}
//                              //prasadis37years old.

// displayUserDetails.call(user);   //hello inside the function {name: 'Raj', age: 24, salary: 500000, city: 'Vijayawada'}
//                                  //Rajis24years old. 
// displayUserDetails.apply(user2);  //hello inside the function {name: 'prasad', age: 37, salary: 500000, city: 'Vizag'}
                                  //prasadis37years old.

// //this will apply only when call and apply we can use,whenever expecting argument object wants to come as output then we will use.

// function displayUserDetails (company,designation) { 
//     console.log("hello inside the function", this);
//     console.log(this.name + "is" + this.age + "years old. ", company, " ", designation);

// }

// // //Call:In case of call each and every argument which is required to be passed to the function will be passed individually.
// displayUserDetails.call(user,"TCS","Developer");

// ////  Apply : In case of apply each and every argument which is required to be passed to the function will be passed inside an array .
// displayUserDetails.apply(user2,["TCS", "Developer"]);


// //Bind:In case of bind, it will return you a new function. And this new function you can use anytime anywhere.
// const newFunc = displayUserDetails.bind(user);
// newFunc("Infosys", "Tester")

//*****questions asked in iterview. */
// map reduce filter 
// execution context event loop 
// call apply bind 
// promises 
// es5 es6


//First class functions:

//which can be passed as an argument to a function also known as CALLBACK FUNCTION.
// function b (callback){
//     callback()
//     console.log("B");
// }

// function a(){
//     console.log("A");
// }

// b(a);

// //can be returned from a function.
// function displayUser(){
//      return function(){
//          console.log("Display user");
//      }
// }

// // //which can be assigned to a variable
// const a = function(){
//     console.log("Hello!");
// }

//Higher order functions:These are those functions:
//Which can take a function as an argument.   :b
//or which can return a function.  :displayUser


let mask = {
    color: "black",
    price : 100,
    material : "cotton",
}
function MaskDetails () {
    console.log("Now its corona Time", this);
    console.log(this.color + this .price);
}
MaskDetails.call (mask);
MaskDetails.apply (mask);

const callback = MaskDetails.bind(mask);
callback ("vestige");