// console.log("Strings in JS!");

//collection of characters is called string.

// let naam="Ravi Raj Kumar";

// // finding length of string..[len]
// const len =naam.length;
// console.log("Length of string is : ",len);

//Concatination of the strings[+,concat]
// let name1="Ravi Raj";
// let age="22";
// let statement =name1 + "is" + age + "years old.";
// let newStr=age.concat(name1);
// console.log(newStr);         //22Ravi Raj
// console.log(name1 + age);    //Ravi Raj22
// console.log(statement);     //Ravi Rajis22years old 


//if you want to access any characters based on the index value.
// var a =[1,3,4,5];
// console.log(a[1]);          //3
// console.log(naam[3]);       //i   it will return you the character present at the specific index.
// console.log(naam.indexOf("R"));   //0  //this will return the index of the character at the first occurence.
// console.log(naam.lastIndexOf("R"));  //5  //this will return the index of the character at the last occurence.


//************IMP******** */
//REVERSE OF A STRING:

//1.SPLIT: which converts your string to an array.Splits into parts in the string.

// var name="ggvsaicharan";
// let alphabet= "a b c d";
// const splitStr = name.split("ai");
// const splitStr2 = alphabet.split(" "); //each and every character broken into parts.
// console.log(splitStr,splitStr2);

// // //2.REVERSE:reverse all the values present inside it.
// const reversedStr = splitStr.reverse();
// console.log("Reversed Array", reversedStr);

// // //3. JOIN :Convert the array to string.
// const strOutput = reversedStr.join("");
// console.log("Output",strOutput);

//ex:;
// var course="Full Stack Development Course";
// const splitStr = course.split(" ").reverse( ).join("  ");
// console.log("Output",splitStr);

//REPLACE:takes two params, first is what is replaced , second is with what you want to replace.

// const temp = "Ravi is a good guy. Ravi is working as a developer. "
// console.log(temp.replace("Ravi","Raj"));  //It will replace only the first occurence.
// console.log(temp.replaceAll("Ravi","Raj"));  //it will replace all the occurences.


//TRIM:this function removes the unnecessary spaces present in the string at the start and at the end.

// const str = "            Ravi      ";
// console.log(str);
// console.log(str.trim());


Var name = "You will be an amazing developer";
Var newMessage = name.substring(7,13);
// newMessage = name.substring(7);
console.log(newMessage);
