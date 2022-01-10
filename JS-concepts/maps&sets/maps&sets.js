// console.log("Maps & Sets");

//SETS:It is the collection of unique elements, we can never ever have duplicate elements.

let num=[1,2,3,4,5,1,1,3,2,3];
// console.log(num);

//Sets looks like objects, we need to uderstand the difference in the structure.
//Create a set:Always use constructor function.

// let numbers=new Set();
// console.log("set",numbers);

// let obj={};
// console.log(obj);


//***Q.Remove the duplicate elements from an array.
// let value = new Set("RaviRaj");
// let value2 = new Set(num);

// console.log(value,value2);

// let newNum = [];
// let newNum = [...value,...value2];   // 3dots are mandatory ...    spread operator(...) to do destructing of a set ,creating array from a set.
// console.log(newNum);

//Basic Functions which sets provides.
//add,has,clear,delete  are functions,size is a property.


// let mySet = new Set();      //Set is a constructor function.
// console.log("My Set",mySet);

// mySet.add(12);           //numeric value
// mySet.add("student");       //string value
// mySet.add([1,2,3,4,5]);    //array value
// mySet.add(true);           //boolean value
// mySet.add({id:1,name:"Ravi"});      // obj value

// console.log(mySet);

// // //has function:returns you boolean values

// console.log("has function",mySet.has(12));
// console.log("has function2",mySet.has("elevation"));

// // //size == how many elements are present in the set.
// console.log(mySet.size);

// // //delete
// mySet.delete(12);
// console.log(mySet);

// // //Clear == deletes all the elements from the set.
// mySet.clear();
// console.log(mySet);

//MAPS:combination of data which exists in key-value pairs.

// let myMap = new Map();   //new keyword is must when you are using constructor fubnction.
// console.log(myMap);

// let mySet = new Set();     
// console.log("My Set",mySet);

//Structure does not differ.
//In case of set the values are individual elements = array
//In case of map,value exist in key value pairs=objects.

//Basic function in map

//set,get

// mySet.add(1);
// myMap.set("id","1");
// myMap.set("name","Nanna");

// console.log(myMap);

// // //get
// console.log(myMap.get("id"));

// // //size 
// console.log(myMap.size);

// // //has
// console.log(myMap.has("bala"));
// console.log(myMap.has("name"));

// // //delete
// myMap.delete("id");
// console.log("Removed id",myMap);

// // //clear
// myMap.clear();
// console.log(myMap);

//Practice :::::::::::::

// let myset = new Map()
// myset.set("Ravi Raj",{phone:"********",job:"fullstack"})
// console.log(myset.has("balu"));
// console.log(myset.has("Ravi Raj"));

// console.log(myset.get("Ravi Raj"));

// console.log(myset.delete("Ravi Raj"));

// // console.log(myset.clear());

// myset.clear();
// console.log(myset);


// let myset = new Set();
// // myset.add("Viswa Nanna");
// // myset.add(true);
// // myset.add([1,2,3,4,5,6,7]);
// myset.add(5);
// myset.add(5);
// myset.add(5);
// myset.add(5);
// console.log("myset",myset); 
// console.log("size",myset.size);


// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"


// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

// for(i=0;i<STR.length;i++)
// {
//     if(STR[i]==a)
// {
// count++;
// }
// else if(STR[i]==b)
// {
// count1++;
// }

// console.log(count)
// console.log(count1)

function prCharWithFreq(s)
{
  // Store all characters and
  // their frequencies in dictionary
  var d = new Map();
 
  s.split('').forEach(element => {
     
        if(d.has(element))
        {
            d.set(element, d.get(element)+1);
        }
        else
            d.set(element, 1);
  });
 
  // Print characters and their
  // frequencies in same order
  // of their appearance
  s.split('').forEach(element => {
    // Print only if this
    // character is not printed
    // before
    if(d.has(element) && d.get(element)!=0)
    {
      console.log( element + d.get(element) + " ");
      d.set(element, 0);
    }
  });
}
