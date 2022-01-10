// console.log("Handson Dude! ")

//"Question 1: Write the code, one line for each action:
// Create an empty object user.
// Add the property ""name"" with the value John.
// Add the property ""age"" with the value 24.
// Change the value of the ""name"" to Smith.
// Remove the property ""name"" from the object."

// let user = {
//     name : "John",
//     age : 24,
// }

// console.log(user.name);
// user.name = "Smith";
// console.log(user.name);
// delete user.name;
// console.log(user);


// "Question 2: We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum. Should be 250 in the example above.

// If salaries is empty, then the result must be 0."
// var sum =0;
// let salaries = {
//   John: 100,
//   Smith: 150,
// }

// sum = salaries.John + salaries.Smith;
// console.log(sum);
// delete (salaries.John + salaries.Smith);
// console.log()


// let salaries = {
//     John: 100,
//     Ann: 150,
   
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   console.log(sum);
  

//   "Question 3: Create a function multiplyNum(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if(typeof obj[key] === "Number"){
//             obj[key]*=2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);


// var multi_1= 0,multi_2 =0;
// multi_1 =menu.width*2 ;
// multi_2 =menu.height*2 ;
// console.log(multi_1,multi_2);


// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: ""My menu""
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place."


// "Question 4: Create a single object by merging these 2 objects : person and job
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356'
// };


// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// };
 
// let newObj = {...person , ...job};
// console.log(newObj);

//Question  5:

// function OuterFunction() {

//     var outerVariable = 100;

//     function InnerFunction() {
//         alert(outerVariable);
//     }

//     return InnerFunction;
// }
// var innerFunc = OuterFunction();

// innerFunc();    //alert 100.

//Question 6:

// function Counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter());   //alert 100 ,k , 1 2 3 4

//Question 7:

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?  1
//   }
//   console.log(count); // What is logged?   0
// })();    //1 0

//Question 8:

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }  // 3  3  3

//Question 9:Write a code to explain closure

// function outer(){
//     let a = 10;
//     function inner (){
//         console.log(a);
//     }
//     inner();
// }
// outer();     //10

//Question 10:Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function outer(length,breadth){
//         // let a = 10;
//         function inner (){
//             console.log(length*breadth);
//         }
//         inner();
//     }
//     outer(10,20);  

//Question 11:Take a variable in outer function and create an inner function to increase the counter every time.

// function outer(){
//            let count=0;
//             function inner (){
//                 for (var i = 0; i < 3; i++) {
                    
//                 count = count++;
//                 console.log(count);
//                 }
//             }
//             inner();
//         }
//         outer(); 

//Question 12:

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(

//         outerArg = "" + outerArg + "\n",
//         innerArg = "" + innerArg + "\n" ,
//         outerVar = "" + outerVar + "\n",
//         innerVar = "" + innerVar + "\n" ,
//         globalVar = "" + globalVar);

//     })(456);
// })(123);  

//output :outerArg = 123 innerArg = 456  outerVar = a  innerVar = b  globalVar =xyz

