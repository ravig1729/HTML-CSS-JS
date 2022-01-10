//console.log("functions");

//function is somthing is a block of code which you want to use multiple timeStamp, so you define or declare it once, and then use it wherever you want as many times.
//collection of code that perform specific task.

//1.Normal Function:::::

// function add(){  //defining a function or declaring a function.
//     console.log(4+3);
// }


// add();  //calling a function or invoking a function.

//2.Function with Parameters::::::

// addTwoNum(1,4); //its not good practice ,defining in first.
// function addTwoNum(a,b){  //a and b are known as parameters,they gets used inside the definition of the function.
    
//    console.log(a+b);
// }

// addTwoNum(12,13);  //12 and 13 are known as arguments,they gets passed inside the functions.

// function addTwoNum(a,b){
//     let c=10;
//     console.log(a+b+c);
// }
// addTwoNum(10,11);

//3.Functions with return statement and parameters::::

// function doubleTheValue(num){   //whenever you are having a return statement in your function,then at the time of execution/invokation of the function,do not invoke the function directly ,instead of that ,assign the invocation of the function to a variable and the value which you are returning from the function wil be now stored in this new variable which you have created.
//     // return (2*num);
//     const value=(2*num);
//     return value;
// }

// const newValue= doubleTheValue(25);
// console.log("Double of 25",newValue);

//Regular Function

//Function Expression::::::

//you can create a function and assign the functions value to a variable.

// const a=function(){
//     return 1;
// }
// console.log(a());

//Arrow Function::::::

// const a =() => {  //arrow function came in the latest version of JS:ES6.
//     console.log("user");
// }
// a();


