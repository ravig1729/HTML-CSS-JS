// console.log("Obj!")


//Object:Its is an non -primitibve datatype,it contains data in key value pairs.    {}.

//ways to create an object

//1.>By using curly braces.

// let student ={
//     id: 3161771,
//     rollNo: 03,
//     name: "Ravi Raj",
//     contact:123456789,
// }

// console.log("STUDENT DATA",student);   //STUDENT DATA {id: 3161771, rollNo: 3, name: 'Ravi raj', contact: 123456789}

// //access specific value or individual value: by accessing the keys.
// console.log(student.contact);  //one way  //preferred way    //123456789
// console.log(student["id"]);   //second way. Make sure you put the key in string quotes.    //3161771

// //this key;;;;

// let employee = {
//     name:"Prasad",
//     salary: 250000,
//     designation:"developer",
//     displayEmpDetails : function() {  //method
//         console.log(this.name + " is earning " + this.salary + " at " + this.designation + " position. ");  //code block  //this is like pronoun whenever we using object continuously.
//     }
// }

// employee.displayEmpDetails()    //Prasad is earning 250000 at developer position. 

// //method and fuctions
// //functions = regular functions that you create in JS.
// //Method = It is a function which is actually a property of any object.


// //2.> By using constructor function:

// let myObj = new Object();

// myObj.city="sklm";
// myObj["state"] = "Andhra";

// console.log(myObj);  //{city: 'sklm', state: 'Andhra'}city: "sklm"state: "Andhra"[[Prototype]]: Object



// //How to retrieve all the keys and values.
// //Object.keys and Object.values both return a list of keys and values in an array.

// const keys = Object.keys(myObj);
// console.log(keys);  //['city', 'state']

// const keys1 = Object.values(myObj);
// console.log(keys1);  //['sklm', 'Andhra']


// //************* */
// //Spread Operator:This is added recently in es6.  it helps you to destructive the element  => ... (3 dots)

// let newObj = {...employee,...student};
// let newObj2 = {...employee,...myObj};

// console.log("New Object",newObj,newObj2);
// //New Object {name: 'Ravi raj', salary: 250000, designation: 'developer', id: 3161771, displayEmpDetails: ƒ, …} {name: 'Prasad', salary: 250000, designation: 'developer', city: 'sklm', displayEmpDetails: ƒ, …}



// //what are the values in employee changes by student values.override with the last object.

// //in case of arrays also  we use this spread operator.

// let arr = [1,2,3,4,5,6];
// let arr2 = ["a","e","i","o","u"]
// let newArr = [arr];
// let newArr2 = [...arr];
// let newArr3 = arr;
// let newArr4 = arr.concat(arr2);

// console.log(newArr,newArr2,newArr3,newArr4);
// console.log([...arr,...arr2]);
// //[Array(6)]0: (6) [1, 2, 3, 4, 5, 6]length: 1[[Prototype]]: Array(0) (6) [1, 2, 3, 4, 5, 6] (6) [1, 2, 3, 4, 5, 6] (11) [1, 2, 3, 4, 5, 6, 'a', 'e', 'i', 'o', 'u']
// //objects.js:81 (11) [1, 2, 3, 4, 5, 6, 'a', 'e', 'i', 'o', 'u']

// let obj = {
//     name: ["Ravi","Venkata"],
//     display : function() {
//         console.log(this.name[0]);
//     }
// }
// obj.display();   //Ravi



// //Object.create() function :which allows you to create an object by taking Reference of any Existing Object.
// var teacher = Object.create(myObj);
// console.log(teacher);   




 
