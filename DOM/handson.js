// console.log("Hello Handson!!!!!");

//1 >Write the code to access element which is having id as "text"
// const value = document.getElementById("text");
// console.log(value.innerHTML); 

// //2 >Write the code to access element which is having tag as "h1"
// const value2 = document.getElementsByTagName("h1");
// console.log(value2[0].innerHTML);

// //3 >Write the code to access element which is having class as "Head"
// const value3 = document.getElementsByClassName("Head");
// console.log(value3[0].innerHTML);

// //4 >"<h1>Hello </h1>Change the heading from ""Hello"" to ""Hello World"" using DOM 

// //Difference between innerHTML,innerText
// function innerTextFn() {
//     var x = document.getElementById('test');
//     alert(x.innerText);
// }


// function innerHTMLFn() {
//     var x = document.getElementById('test');
//     alert(x.innerHTML);
// }


//5 > We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

let studentRecords = [ {name: 'John', id: 123, marks : 98 },{name: 'Baba', id: 101, marks : 23 },{name: 'yaga', id: 200, marks : 45 },{name: 'Wick', id: 115, marks : 75 } ];

// let names = studentRecords.map( stu => stu.name.toUpperCase());
// console.log(names);

// //"Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// let supp=studentRecords.filter(y => y.marks>50);
// console.log(supp);

// //Retrieve the details of students who scored more than 50 marks and have id greater than 120.
// let retri=studentRecords.filter(x => x.marks> 50 && x.id >120);
// console.log(retri);

// //Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
// let count =0;
// for(i=0;i<studentRecords.length;i++)
// {
//     count=count+studentRecords.marks[i];
// }
// console.log(count);

// let x=studentRecords.marks;
// const total = studentRecords.reduce((sum,x) => sum =sum +x,0);
// console.log(total);

//This time we are required to print the sum of marks of the students with id > 120.
// let stu = studentRecords.filter(x => x.id >120).reduce((sum,x) =>sum =  sum+x,0);
// console.log(stu);
// let totalMarks = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
// console.log(totalMarks); // logs: 143

//This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
// var a=[50,49,48,70]
// var b=a.filter(a=>a<50).map(n=>n+15)
// console.log(b);
// let totalMarks = studentRecords.map(function(stu){ 
//     if(stu.marks < 50){
//         stu.marks += 15;}
//     return stu;
// }).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
// console.log(totalMarks);


//adding web Technology multiple times in windows.
// function addItem(){
//     const LiTag = document.createElement("li");
//     LiTag.setAttribute("class", "element");
//     LiTag.innerText = " Web Technology ";

//     const parentDiv = document.getElementById("student");
//     parentDiv.appendChild(LiTag);
// }

//change hello as hello maccha with color red.
// function addItem(){
// const value = document.getElementById("text");
//     value.innerText = "hello maccha";
//     value.style.color="red";
// }

//date and time
// const date = new Date();
// document.getElementById("dandt").innerHTML = date;

//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

//
// function addItem(){
//     const cou=document.getElementById("cou1");
    
//     const parent = document.getElementById("course").value;
    
//     cou.innerHTML = parent;
// }
