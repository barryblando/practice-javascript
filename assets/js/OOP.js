//OBJECT ORIENTED PROGRAMMING

//Constructor in other programing languages part of "Class"

// <reference https://www.tutorialspoint.com/php/php_object_oriented.htm
// <reference https://www.phpclasses.org/blog/post/178-Why-is-it-better-to-develop-in-PHP-with-classes-OOP.html

//Inheritance : Prototypes and Prototype Chains

// <reference https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// <reference http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/


/* 
  -Every Javascript object has a Prototype property, which makes Inheritance
  possible in Javascript.

  -The prototype property of an object is where we put methods and properties
  that we want other objects to inherit;

  -The Constructor's prototype property is NOT the prototype of the Constructor
  itself, it's the prototype of ALL instances that are created through it;
  
  -When a certain method (or property) is called, the search starts in the object
  itself, and if it cannot be found, the search moves on to the object's prototype.
  This continues until the method is found: prototype chain.
*/

//The standard way to create an object prototype is to use an object constructor function - Most Popular

/*

//When we create function Constructor it must be capital first

var Person = function(name, yearOfBirth, job) {
  // Prototype Start.. -->
  var $price, $title;
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.setPrice = function(par) {
    this.price = par;
  };
  
  this.getPrice = function() {
    console.log(this.price);
  };

  this.setTitle = function(par) {
    this.title = par;
  };

  this.getTitle = function() {
    console.log(this.title);
  };
 // Prototype End.. <--
};

//Inheritance
//we can create prototype property/method using .prototype
//we have acess it 'cause it's a prototype property of the function Constructor Person

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

//Instantiation 

//these objects(john,jane,mark) here are intances of the person object
var john = new Person('John', 1990, 'teacher');

john.calculateAge();
john.setPrice(50);
john.getPrice();
john.setTitle('Hello World');
john.getTitle();
 
var jane = new Person('Jane', 1960, 'Designer');
jane.calculateAge();

var mark = new Person('Mar', 1950, 'Scientist');
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

// OBJECT.create - not really popular

/* 
  OBJECT.create builds an object that inherits directly from the one that we passed 
  into the first argument and it allows us to implement a really complex inheritant 
  structure in an easier way than function Constructor 'cause it allows us to direct 
  specify which object should be a prototype. 
  While the function Constructor the newly created object inherits
  from the constructor's prototype property ( a property that is empty by default ).

*/

//not capitalize 'cause it's not a function Constructor

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

//Way to create w/ Object.create
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//another way to create w/ Object.create
var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'Designer' }
});

// Primitives vs Objects










