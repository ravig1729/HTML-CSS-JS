// console.log("i.Closures in javascript,ii.settimeout+closures,iii. Asynchronous javascript and event loop ");


//setTimeout:Web api function,it doesnot executed directly by using java-script engine,its get executed using event loop.
//..this function will be sent to the callback queue.

//setTimeout(callback, time_interval);

// setTimeout(() => {
//    console.log("Helo world!")
// }, 2000);

//when you are giving time interval in this function,it will be in ms.(millisec)


//Example-1:We can create the array of elements line by line from 1 to 4 with 1 second gap.
// let arr = [1,2,3,4];

// for (let i=0; i <arr.length ; i++){
//     setTimeout(() => {
//         console.log(arr[i],i);
//      },arr[i]*1000 );
// }

// for (var i=0; i <arr.length ; i++){
//     setTimeout(() => {
//         console.log(arr[i],i,arr);
//      },arr[i]*1000 );
// }    //1 undefined  2 undefined  3 undefined 4 undefined.




//Example-2://We can create the array of elements line by line from 1 to 4 after 5 second gap.It will give you the result all 4 values once at a time.
// setTimeout(() => {
//     for(let i=0; i< arr.length;i++){
//         console.log(arr[i]);
//     }
// },5000);


//Closures:::::::::::::
//It is a combination of inner function and the lexical environment created by inner function.

//We are able to access this variable inside in a function becoz of closures.


// function outer(){
//     let a = 10;
//     function inner (){
//         console.log(a);
//     }
//     inner();
// }
// outer();     //10.

 
// function add(){

//     setTimeout(() => {
//         console.log("hey");

//     },0);

//     console.log("B");
// }

// add();    //B  hey.

//setTimeout:Web api function,it doesnot executed directly by using java-script engine,its get executed using event loop.
//..this function will be sent to the callback queue.
//Once your completed js code execution is done which means your execution context is empty after that event loop will start looking towards your callback queue and will pass this function to the execution context.

//Event loop always keep an eye on call stack, the moment its get empty, it will push the function from callback queue to the callstack.


