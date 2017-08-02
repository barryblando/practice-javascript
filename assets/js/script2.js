//How JS Works : 

/* 
  Execution Context - Creation and Execution Phase and Hoisting

  We can associate an Execution context with an object,

  so Execution Context Object has three properties :

  -Variable Object (VO) which contains function arguments in a variable declaration
  as well as function declarations; Scope Chain, which contains the current variable objects
  as well as the variable objects of all its parents; and "this" variable.

  When a function is called, a new execution context is put on top of the execution stack (sample below),

  Creation Phase :
  -Creation of the Variable Object(VO)
  -Creation of the Scope Chain
  -Determine the value of 'this' variable/keyword

  Execution Phase :
  -Code of the function that generated the current execution is ran line by line,
  and all the variables are defined. If it's a global context, then it's a global code.

*/


//HOISTING is JavaScript's default behavior of moving declarations to the top.

/* 
  Hoisting function only works on function declaration not in the 
  function expression like this we call calculateAge age first 
  before its function declaration. Function expressions in JavaScript are not hoisted, 
  unlike function declarations. You can't use function expressions before you define them;
  it need to be declared first before calling it.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
*/

//functions
calculateAge(1965);

function calculateAge(year) {
    return 2016 - year;
}

//retirement(1956);

var retirement = function(year) {
  console.log(65 - (2016 - year));
};

//variables

console.log(age);
var age = 23; // this age variable gets stored in the global execution context object

/* 
  this function gets its own execution context object 
  in which we can also store an age variable, and it can be
  the same name. It reall doesn't matter because these are 
  two completely different variables. this age variable is defined
  in the variable object of the execution context object of the foo function.
*/
function foo(age) {
  console.log(age);
  var age = 65;
  console.log(age);
}

foo();
console.log(age);



//Execution Stack

var name = 'John';

function first() {
  var a = 'Hello';
  second();
  var x = a + name;
}

function second() {
  var b = 'Hi';
  third();
  var z = b + name;
}

function third() {
  var c = 'Hey';
  var z = c + name;
}

first();


//Scope Chain

var a = 'Hello';
firstS();

//Scope first
function firstS() {
  var b = 'Hi';
  secondS();

  //Scope Second
  function secondS() {
    var c = 'Hey';
    thirdS();
  }
}

//Scope Third
function thirdS() {
  var d = 'John';
  //so only a and d can be access by this function / scope unless scope first pass the data
  console.log(d);
}

// This Keyword

/* 
  Which this keyword points?
  Regular function call: the this keyword points at the global object 
  which, in case of the browser, is the window object.And this is actually the default.
  console.log(this);

  Method call: the this variable points to the object that is calling the method

  P.S The this keyword is not assigned a value until a function where it is defined is actually called.
  so it refers to the object where it is defined, the this varibale is technically only assigned a value
  as soon as an object calls a method. Which is only created as soon as the function is invoked / called.
*/

//Method call

/*
thisCalculateAge(1985);

function thisCalculateAge(year) {
  console.log(2016 - year);
  console.log(this);
} 
*/

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () { 
    /* 
      so the this Variable now is the John Object
      this keyword refers to the John object that called the method - john.calculateAge()
    */
    //console.log(this);
    console.log(2016 - this.yearOfBirth);

    /*
      The rule is that when a regular function code happens, 
      then the default object is the window object, the method is calculateAge of John Object.
      But this function here although it's written inside of a method, it's still a regular function.
      so when we call this keyword it will no longer point to the John Object 
      but instead point to the window object.
    
    function innerFunction() {
      console.log(this);
    }

    innerFunction();*/
  } 
};

john.calculateAge();

/* 
  Method Borrowing

  We are going to borrow John's method to use it on Mike.

  This variable is only assigned a value when the object calls the method.
  if john object didn't use this on this.yearOfBirth then calculateAge method would be only for john Object
*/

  
var mike  = {
  name: 'Mike',
  yearOfBirth: 1984
};

/* 
  so  we won't have the parenthesis 'cause these parenthesis are for calling a function
*/
mike.calculateAge = john.calculateAge; 

mike.calculateAge();
