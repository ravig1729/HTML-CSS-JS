// console.log("Handson Callback")

// //Write one example explaining how you can write a callback function ?
// function isGreater(N){
//     console.log(N%6 == 0 && N%9 == 0);
// }
// isGreater();   //false

// let do_work= ( ) =>{
//    console.log("Do Work");
// }
// let copy_work= (homework) => {
//     console.log("Copy Work")
//     homework();
// }
// copy_work(do_work);

 //Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//  const printVariable = (time,value) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() =>{
//            console.log(value);
//            resolve()
//         },time);
//       })
//     }

// async function print () {
//    await printVariable(1000,"1");
//    await printVariable(2000,"2");
//    await printVariable(3000,"3");
//    await printVariable(4000,"4");
//    await printVariable(5000,"5");
//    await printVariable(6000,"6");
//    await printVariable(7000,"7");
// }

// print()

//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

// function printAlphabet (num) {
//     return new Promise((resolve,reject) => {    
//        if(num % 2 == 0){ 
//         resolve("promise resolved");
//        }else{
//         reject("promise rejected");
//        }
//     })
// }

// printAlphabet(23)
//     .then((response) => {       
//         console.log(response);
//     })
//     .catch((error) => {        
//         console.log(error);
//     })

//Create examples to explain callback function
////Create examples to explain async await function

// const printVar = (time,value) => {
//         return new Promise ((resolve,reject) => {
//             setTimeout(() =>{
//                console.log(value);
//                resolve()
//             },time);
//           })
//         }
// async function print(){
//     await printVar(5000,"Elevation");
//     await printVar(4000,"Academy");
// }

// print()