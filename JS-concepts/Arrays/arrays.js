// console.log("Arrays");

//SHADOWING IN JS:::::::


// var x=10;

// function A(){
//     var x=20;   //var x; o/p shows undefined 
//     console.log(x);

//     function B(){
//         var x=30;
//         console.log(x);
//     }
//     B();
// }
// A();
// console.log(x);

//The value of the variable got shadowed,which means when you are inside the block you will be accessing the value of the variable which is defined inside the block not the one which in outside :SHADOWING IN JS.

//inside the function is local scope so,in this case local scope having more scope than global scope.

//ARRAYS::::::::::::

//Arrays:Array is a datatype in JS .It can store values of any data type.

// let a="student";

// let student=[1,"ravi",2500.00,"soft","helo",true];
// let employee=[1010,"doe","30k","mern developer"]
// console.log(student);

//length of an array=to find out the number of elements present inside an array.

// const lenOfStudent=student.length;
// const lenOfEmp=employee.length;

// console.log(lenOfStudent,lenOfEmp);

//how to access these values individually 
// console.log(employee[1]);  //we have to find the name of employee...so use like employee[index of that part ie.,1].

// let friend=["ravi raj","viswa nanna","venkata nanna ","mallesh peddu","balaraju babai"];

// const lenOfFriend=friend.length;
// console.log(friend);
// console.log(lenOfFriend);

// console.log(friend[0]);
// console.log(friend[1]);
// console.log(friend[2]);
// console.log(friend[3]);
// console.log(friend[4]);

// Arrays Methods - map, filter, reduce, index, push, pop, shift,  unshift, slice, some, every

//ARRAYS METHODS::::::::::::::::

//push:it will add one more value at the end of the array.

// let numbers=[1,2,3,4,5,6];
// console.log("Before push operation",numbers);

// numbers.push(7);

// numbers[0]=35;   // it replace the 0th index with 35.

// console.log("after push operation",numbers);

// numbers[0]=35;

//---------------------------------------

//pop:it will remove one value at the end of the array.

// console.log("before pop operation",numbers);
// numbers.pop();
// console.log("after pop operation",numbers);

//---------------------------------------

//shift:it will remove one value at the first of the array.

// console.log("before shift operation",numbers);
// numbers.shift();
// console.log("after shift operation",numbers);

//---------------------------------------

//unshift:it will add one value at the first of the array.

// console.log("before unshift operation",numbers);
// numbers.unshift(1);
// console.log("after unshift operation",numbers);

//---------------------------------------



//Slice Function:::::::;;;
//It returns a new array from the selective indexes.It will not manipulate the existing array.

//const newArr=arr.slice(startIndex,endIndex);
//StartIndex:element at this index will be included in the new array.
// endIndex : elements before this index will be included


// let arr=[1,2,3,4,5,6];
// const newArr=arr.slice(1,3);
// console.log(newArr,arr);

// const arr = [ 1,2,3,4,5,6]
//elements=index= negative indexes
// 1 = 0 = -6
// 2 = 1 = -5
// 3 = 2 = -4
// 4 = 3 = -3
// 5 = 4 = -2
// 6 = 5 = -1

//  Question  : Array given is arr = [1, 2, 3, 4, 5, 6];. Please write down the slice function which returns a new array as [2, 3, 4]. Notes :: Indexes should be negative

// const newArr=arr.slice(1,4);
// const newArr=arr.slice(-5,-2);
// console.log(newArr);

//Some and Every Functions:::::::::::::::;;

// var arr=[1,2,3,4,5,6];
// //Some every=both these functions take in a codition and checks if all the elements in the array is satisfying that condition or not,they always returns you boolean value which ,means true or false.

// //Some:In this case,if even one element satisfies the consition then true will be returned.
// //Every:all and every elements should satisfy the condition.

// const value=arr.some(n => n%2==0 );
// const value2=arr.every(n => n%2 ==0);

// console.log(value,value2);


//regular 
// function functionName () {
//     console.log("hello");
// }
// functionName()

// // named function, function expression
// const a = function (){
//     console.log("A");
// }
// // a()

// // arrow function
// const b = (cb) =>{
//     console.log("heyy World");
//     cb();
// } 

// b(functionName);


//Q. array of 10 elements and we need to divide these 3 and ==0 on some and every element.

// var arr=[1,2,3,4,5,6,7,8,9,10];
 
// const value=arr.some(n => n%3==0);
// const value2=arr.every(n => n%3==0);

// console.log(value,value2);




//Loops:In case of arrays loops basically helps you to iterate through each and every element.
//map,reduce,filter

//Q:Double the elements

// let arr=[1,2,3,4,5];

// for(let index=0; index < arr.length; index++)
// {
//     console.log(arr[index]*2,index);
// }

//by writing in 'for' loop ,each and everything ,we can do it in map function easily.

//map function :iterates through each element of the array,and do the required operation,then returns a new array.
//map helps you to manipulate all the items in the array.

// const newArray= arr.map (n => n * 2);
// console.log(newArray);

//map:helps you to manipulate all the items in an array.
//reduce:helps you to use all the items and return a single value
// filter : applies a condition on all the elements, return you new array.



// var salary=[100,200,3000,400,500,600];

//filter out salaries which is greater than 300.

// var newSalary = salary.filter(x =>  x > 300);
// console.log("after filter", newSalary);

//double the salary of all employees whose salary is gretaer than 300.

// var newSalary2= newSalary.map(x => x*2);
// console.log("after map",newSalary2);

// const newSalary =salary.filter(x => x>300).map(x => x*2);
// console.log(newSalary);

// var arr=[1,2,3,4,5,6,7,8,9,10];

// var newArr=arr.filter(x => x%2==0 ).map(x =>x+1);
// console.log(newArr);


//reduce function:":::::::::::::::::::;;;;;
//find out the some of all the salaries that we have to pay to the employees.

// sum = accumulator
// x = current value
// 0 = initial value of sum variable
// const sum=newSalary.reduce((acc,curr) => acc = acc + x ,0 );


//normally we use for loop ,for adding or sum of all elements in array.
//like this..::::
// const  a = [1, 3, 4];
// const sum = 0;
// for (let index = 0; index < a.length; index++) {
//     sum = sum + a[index];
// }

//in reduce we can do in a single line without initiating a variable.
// const total =  newSalary.reduce((sum, x) => sum = sum + a[index] , 0)
// console.log(total);

//................................................

//for in ,for of ::::::::::::::::::::::

// const num=[3,4,5,6,7,"Ravi","GVR"];;

// console.log(num);

// //for in::indexes of the array.

// for(const N in num){
//     console.log(N);
// }

// //for of::returns you values of the array.
// for(const N of num){
//     console.log(N);
// }

// const arr=[1,2,3,4,5];
// const product=arr.reduce((mul,arr[i]) => mul=mul*arr[i],0);
// console.log(product);

// //for-each function:::::::::::;;;;
// var salary=[100,200,3000,400,500];
// console.log("Before",salary);

// const newAr = salary.map(element => element+2000);

// const a = salary.forEach((element, index)=>{
//     if (element > 4000) {
//         return element + 10
//     }
// });

// console.log("After",salary, newAr, a);


var arr = [];    // array literals
var arr = new Array(1, 2, 4, 2);  // constructor function

// myArr.slice(1,3)
// myArr.splice(1,3,’a’,’b’,’c’,’d’)

// myArr.reverse()
// myArr.sort()

// myArr.indexOf(3)
// myArr.lastIndexOf(3)
