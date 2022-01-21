//Callback

// function printA(){
//     console.log("A");
//     // callback()
// }

// function printE(){
//     console.log("E");
// }

// // printA();
// // printE();
// printA(printE);

//PrintVowels

// function printVowels(){
//     console.log("A");
//     console.log("E");
//     console.log("I");
//     console.log("O");
//     console.log("U");
// }
// printVowels();

//printVowels.
// function printVowels(){
//     setTimeout(() => {
//         console.log("A");
//     },2000);
//     setTimeout(() => {
//         console.log("E");
//     },5000);
//     setTimeout(() => {
//         console.log("I");
//     },1000);
//     setTimeout(() => {
//         console.log("O");
//     },1000);
//     setTimeout(() => {
//         console.log("U");
//     },0);
// }
// printVowels();

//CALLBACK HELL::::::::The triangular shape is known as callback function.
//If you want to execute a function only after execution of any parent function is completed then we will have to must write this function inside parent function.In this way if we are having multiple function which we want execute after one another then we will end up creating callback hell structure.

// function printVowels(){
//     setTimeout(() =>{
//         console.log("A");
//         setTimeout(() =>{
//             console.log("E");
//             setTimeout(() =>{
//                 console.log("I");
//                 setTimeout(() =>{
//                     console.log("O");
//                     setTimeout(() =>{
//                         console.log("U");
//                     },0000);
//                 },2000);
//             },1000);
//         },5000);
//     },2000);
// }
// printVowels();


//1 should be printed after 1 sec,2 should be printed after 2 sec ,3 should be printed after 3 sec,4 should be printed after 2 sec ,5 should be printed after 1 sec

// function printNumber(){
//     setTimeout(() => {
//         console.log("1");
//         setTimeout(() => {
//             console.log("2");
//             setTimeout(() => {
//                 console.log("3");
//                 setTimeout(() => {
//                     console.log("4");
//                     setTimeout(() => {
//                         console.log("5");
//                     },1000);
//                 },2000);
//             },3000);
//         },2000);
//     },1000);
// }
// printNumber();

//Heaven of callback Hell Solution :Promises.......
//  Create a function ,it should be able to return you the promise.
//Promise is a constructor function which takes in two parameters,resolve and reject.If the promise has been resolved properly then it will go to the <then> block,if the promise has been rejected due to some errors then it will go to the <catch> block.
//SERVER CALLS::::/API CALLS

// function printAlphabet (num) {
//     return new Promise((resolve,reject) => {    //resolve,reject are parameters.
//        if(num % 2 == 0){
           
//            resolve("CONDITION SATISFIED");
//        }else{
//         reject("CONDITION UNSATISFIED");
//        }
//     })
// }

// printAlphabet(23 , "E")
//     .then((response) => {       //to handle success response
//         console.log(response);
//     })
//     .catch((error) => {        // to handle failure.
//         console.log(error);
//     })
//     .finally(() =>{
//     console.log("Promise is completed");
//     })

//resolve the issue,and print E.
// function printAlphabet (alphabet) {
//     return new Promise((resolve,reject) => {  
//        resolve(alphabet);
//     })
// }
// printAlphabet("E")
//   .then((response) => {
//     console.log(response);
//   })

//printing A,E.
// function printAlphabet (alphabet) {
//     return new Promise((resolve,reject) => {  
//        resolve(alphabet);
//     })
// }
// printAlphabet("A")
//   .then((response) => {
//     console.log(response);
//     printAlphabet("E")
//      .then((response) => {
//        console.log(response);
//     })
//   })

//Print vowels aeiou, by using promises.
// const printVariable = (value) => {
//     return new Promise ((resolve,reject) => {
//            console.log(value);
//            resolve()
//       })
//     }

// function printVowels() {
//     printVariable("A")
//     .then(() =>printVariable("E"))
//     .then(() =>printVariable("I"))
//     .then(() =>printVariable("O"))
//     .then(() =>printVariable("U"))
// }

// printVowels()

//Print vowels aeiou, after 65324 seconds by using promises, by using setTimeout.
// const printVariable = (time,value) => {
// return new Promise ((resolve,reject) => {
//     setTimeout(() =>{
//        console.log(value);
//        resolve()
//     },time);
//   })
// }

// printVariable(6000,"A")
//    .then(() =>printVariable(5000,"E"))
//    .then(() =>printVariable(3000,"I"))
//    .then(() =>printVariable(2000,"O"))
//    .then(() =>printVariable(4000,"U"))

//Promise chaining ::::Multiple then blocks.

//This is known as promise chaining.We should try to avoid it by using async await.
// const printVariable = (time,value) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() =>{
//            console.log(value);
//            resolve()
//         },time);
//       })
//     }

// async function print () {
//    await printVariable(6000,"A");
//    await printVariable(6000,"E");
// }

// print()

//By giving in condition ,if the condition is resolved and then it will print the result and then resolved and if it is not then its rejected.
// const printVariable = (num,time,value) => {
//     return new Promise ((resolve,reject) => {
//         if(num < 40){
//             setTimeout(() => {
//                 console.log(value);
//                 resolve("RESOLVED")
//             },time);
//         }else{
//             reject("REJECTED")
//         }
//     })
// }
// //type 1:::
// async function print() {
//     const response = await printVariable(32,6000,"A");
//     console.log(response);
// }
// print()
// //type 2:::
// async function print() {
//     try {
//         await printVariable(45,6000,"A");
//         console.log("YES");
//     } catch (error) {
//         console.log(error);
//     }
// }
// print()





