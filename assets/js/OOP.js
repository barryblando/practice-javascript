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

//these objects(john,jane,mark) here are instances of the person object
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
  into the first argument and it allows us to implement a really complex inheritance
  structure in an easier way than function Constructor 'cause it allows us to direct 
  specify which object should be a prototype. 
  While the function Constructor the newly created object inherits
  from the constructor's prototype property ( a property that is empty by default ).

*/

//not capitalize 'cause it's not a function Constructor
/*
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
*/

// Primitives vs Objects

//Primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

//Objects
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

// This shows that when we pass a primitive into function a simple copy is created
// you can change the variable a as many times it will never affect the variable on the outside
// cause it's a primitive but when we pass the object into a function it's not really the object that we pass
// but the reference that points to the object.
console.log(age);
console.log(obj.city);


// Passing Functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    //fn which is our function that is what callback is
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

// el = element
function calculateAge(el) { 
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    //formula for getting the max heartRate base on age valid for people age 18 - 81
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

// We use callback function so no parentheses, we want it to be called later by the arrayCalc
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


//Functions returning functions - First Class

// <reference https://www.quora.com/What-are-the-reasons-to-use-return-function-in-JavaScript

function interviewQuestion(job) { 
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + '?');
    };
  } else {
    return function(name) {
      console.log('Hello ' + name + ', what do you do?');
    };
  }
}

//so this will return anonymous fucntion came from interviewQuestion function
var teacherQuestion = interviewQuestion('teacher');
//so we can call the function that was returned
teacherQuestion('John');

//and we can Instantiate like this
interviewQuestion('designer')('Mark');

function makeGreeting() {
	var d = new Date();
	var timeGreeting = d.getHours() > 11 ? 'Good afternoon' : 'Good morning';
	return function(userName) {
		console.log(timeGreeting + ', ' + userName);
	};
}
 
var greet = makeGreeting();
 
greet('John'); 

//Immediately Invoked Function Expressions (IIFE)
//We can call IIFE once 'cause this function is not assigned to any variable
//what i do here is create a scope that is hidden from the outside scope
//where we can safely put variables, and with this, we obtain data privacy
//and also don't interfere with other variables
//IIFE is just for data privacy

/*(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})(); */

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score);
  console.log(score >= 5 - goodLuck);
})(ages);

////////////////////////////
/*------- CLOSURES -------*/

/*
  An inner function has always access to the variables and parameters of its outer function
  even after the outer function has returned and execution context is gone, the variable object
  is still there, it still sits in memory and it can be accessed. scope chain always stays intact.
  and much cleaner code. DRY principle.
  */
  
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  };
}

/*
var retirementUS = retirement(65);
retirementUS(1990);
*/

//using callback
var retirementUS = retirement;
retirementUS(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

function interviewQuestionClosure(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  };
}

interviewQuestionClosure('teacher')('John');