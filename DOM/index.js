// console.log("DOM");

//window:setTimeout functions get from windows.
//localStorage,window.console
//document ,window.document
//anything in html , we can access from document.

//How do we access ?
//one way of accessing any HTML element is by using its tag name
// const value = document.getElementsByTagName("h1");
// console.log(value[0].innerHTML);   //DOM(Document Object Model)

//Another way by using class name
// const value1 = document.getElementsByClassName("head");
// console.log(value1[0].innerHTML);

//First and second always returns you an array of the elements having that same tag or classname.

//Access by using ID name:
// const value2 = document.getElementById("foot");
// console.log(value2.innerHTML); 
// value2.style.color ="red";

//Changing styles using DOM

// function handleStyleChange(){
//     const value2 = document.getElementById("foot");

// value2.style.color ="red";
// }

// function handleStyleChange(){
// const value3 = document.getElementById("Middle");
// value3.style.border="20px solid pink";
// value3.style.width="200px";
// value3.style.height="200px";
// value3.style.backgroundColor = "aqua";
// value3.style.color ="red";
// }

// const value = document.getElementById("content");
// console.log(value.innerHTML);
// console.log(value.innerText);

// const value = document.getElementById("box");
// console.log(value.innerHTML);
// console.log(value.innerText);

// function handlehead(){
//     // document.getElementById("heading").innerHTML = "Document Object Model";
//     const value = document.getElementById("heading");
//     value.innerText = "Document Object Model";
//     value.style.color="hotpink";
// }

//if we want  to create a thing create a span inside div and boxes shown on windows and say message like hi in every box.
// function addItem(){

//     const spanTag = document.createElement("span");
//     spanTag.setAttribute("class","element");
//     spanTag.innerText = "hi";     //whenever we click on button,it shows a span tag in div tag and a message 'hi' in boxes.
//     spanTag.innerHTML = `<h1>Hey</h1>`;      //We get the code by using innerHTML.
//     // console.log(spanTag);          //whenever we click on button, it shows a span tag only.

//     const parentDiv = document.getElementById("student");
//     parentDiv.appendChild(spanTag);
//     console.log(parentDiv);           //whenever we click on button,it shows a span tag in div tag.
// }

//if we want  to create a thing create a span inside div and boxes shown on windows and say message like hi and other things as well.
// let count = 0;
// function addItem(){
//     let text = ["hey","hello","howru","wtrudng"];
//     const spanTag = document.createElement("span");
//     spanTag.setAttribute("class","element");
//     spanTag.innerHTML = `<h1>${text[count]}</h1>`;      
     
//     const parentDiv = document.getElementById("student");
//     parentDiv.appendChild(spanTag);
//     console.log(parentDiv);           //whenever we click on button,it shows a span tag in div tag.
//     count++;              //result shows whenever we click on it ,it shows boxes with different messages.
// }

//we create a input box ,whenever we create input press button it shows that result.
// function addItem(){
//     const userName = document.getElementById("input").value;
//     console.log(userName);
//     const spanTag = document.createElement("span");
//     spanTag.setAttribute("class","element");
//     spanTag.innerHTML = `<h1>${userName}</h1>`;      
     
//     const parentDiv = document.getElementById("student");
//     parentDiv.appendChild(spanTag);
//     // console.log(parentDiv);    //without this its just print input what we give.
// }






