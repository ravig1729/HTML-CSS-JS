//conditional

//if you are having one condition to check then better you go with if-else statements.

// const ageofperson =23;
//  if (ageofperson>21){
//      console.log("Eligible to get married");
//  }else{
//      console.log("Not Eligible to get married");
//  }

 //if you are having two conditions to check then better you go with if-else-if statements.
 
//  const gender="Male";

//  if(gender === "Male"){
//     console.log("Male");
//  }else if(gender === "Female") {
//     console.log("Female")
//  }else{
//      console.log("transgender");
//  }

 //practice

//  const a=18;
//  const b=29;
//  const c=33;

//  if( a>b && a>c){
//      console.log("a=18 is greater" );
//  }else if(b>a && b>c){
//      console.log("b=29 is greater");
//  }else{
//      console.log("c=33 is greater");
//  }

//using switch
const a=18;
const b=33;
const c=29;

switch (true){
    case "a>b && a>c":
        console.log("18 is greater");
        break;
    case "b>a && b>c":
        console.log("29 is greater");
        break;
    default:
        console.log("55 is greater");
        break;
}

 //if you are having more than 3 conditions to check than better you go with switch statements.

//  switch (key){
//    case "value ":
     
//    break;

//    case "value":

//    break;

//    default:
//     break;
     
//  }

// const gender="male";

// switch(gender){
//     case "male":
//         console.log("Male");
//         break;
//     case "female":
//         console.log("Female");
//         break;
//     default:
//         console.log("Defaut");
//         break;
// }

//which takes num from 1-7,and give day related to it.
 
//1=mon,2=tues,.....
// whatever we can give we can give like that;

// const day= 1;

// switch(day){
//     case 1:
//         console.log("1=Monday");
//         break;
//     case 2:
//         console.log("2=Tuesday");
//         break;
//     case 3:
//         console.log("3=Wednesday");
//         break;  
//     case 4:
//         console.log("4=Thursday");
//         break;
//     case 5:
//         console.log("5=Friday");
//         break;
//     case 6:
//         console.log("6=Saturday");
//         break;
//     case 7:
//         console.log("7=Sunday");
//         break;
//     default :
//         console.log("OH MY GOD!");
//         break;
// }




