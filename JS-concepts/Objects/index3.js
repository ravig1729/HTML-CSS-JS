console.log("Hello World!")

//Function Constructors::::::::
//Set,Map,Array,Object,Function


//Any variable which gets created using any constructor function .Then that variavble will persists the properties that constructor function provides.

//Ways to create an object::::::::::
//First is by using curly braces {},
//Second is by using Object constructor function.
//Third by using Object.create()
//Fouth way of creating an object. = by using function constructor.
function Person (name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.salary = 10000;
}

let person1 = new Person("Bhagya", 21, "Vijayawada");
let person2 = new Person("Usha", 19, "Vijayawada");
let person3 = new Person("Saranya", 11, "Vijayawada");

console.log(person1);
console.log(person2);
console.log(person3);
//In case if you want to add other properties in the object created using function constructor.
//We can update even like this also..
// person3.salary = 25000;
// console.log(person3);

//In case when you want to add properties inside function constructor.
//Prototype is a parent of this object ,it will return what we use in the before in this.


//it will give company name to all the cases in the Person function.but it wil obtain in prototype ,not in directly.
Person.prototype.company = "Walmart";
person1.company = "Mindtree";
console.log(person1.company);

//Prototype Chaining:person1 or person2 or person3 are the objects got created using function constructor Person.So their master or parent is Person Constructor.

//Each object,array,etc., always contains a Prototype property from which we can access all the inbuilt functions.

//In case of person1, its prototype level 1 is Person function constructor then prototype level 2 is Object constructor function and this chain goes on like this until you dont get value of __proto__ as null. This concept is known as Prototype chaining.