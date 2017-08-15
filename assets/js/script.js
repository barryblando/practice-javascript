 //var is only to declare variables in the first time
 //P.S you can mutate or change a variable anytime 
 /*var firstName = 'John',
     lastName = 'Smith',
     age = 25,
     fullAge = true,
     job, 
     isMarried = true; */

//Variable Type Coercion using + sign, turns all variable into string which is auto dynamic typing
/* PS. in C/C++/C#/Java you can't do this it's "illegal" it will refuse 
while in php it's legal but it won't show any result unless you use a string conversion function 

job = 'Engineer';

console.log(firstName + " " + lastName + " " + age + " " + job + " " + fullAge + " is he Married?. " + isMarried);  

//Mutation Sample

job = 'teacher';
isMarried = false;

console.log(firstName + ' ' + lastName + ' ' + age + ' ' + job + ' ' + fullAge + ' is he Married?. ' + isMarried);  

//for debugging & testing (not for production) use console log or alert 
var lName = prompt('What is the lastname?');

console.log(lName); 

var now = 2016;
var birthYear = now - 26;

//Javascript precedence so  * will be executed first before - 

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = (3 + 5) * 4 - 6;

console.log(ageJohn); 

var name = 'John',
    age = 26,
    isMarried = 'no';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :) ');
}

isMarried = false;

if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

*/

//Type Coercion if 
/* 
    using converting comparison operator == is for type Coercion
    in this example integer 23 will converted to string "23"
    so now it will meet the condition which is true while
    non converting comparison operator ===, no such conversion will occur.
    PS. To avoid some difficult to find bugs use always === operator for safer development

if (23 == "23") {
    console.log('Yeah!');
} 

var age = 25;

if (age < 20) {
    console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}

var job = 'designer';

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John is a driver.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}

var johnHeight = 172,
    johnAge = 26,
    mikeHeight = 165,
    mikeAge = 29,
    mariaHeight = 190,
    mariaAge = 31,
    johnScore,
    mikeScore,
    mariaScore;

    johnScore = johnHeight + 5 * johnAge;
    mikeScore = mikeHeight + 5 * mikeAge;
    mariaScore = mariaHeight + 5 * mariaAge;

if (johnScore > mikeScore && johnScore > mariaScore) {
    console.log('John Wins. Score: ' + johnScore);
} else if (mikeScore > johnScore && mikeScore > mariaScore) {
    console.log('Mike Wins. Score: ' + mikeScore);
} else if (mariaScore > johnScore && mariaScore > mikeScore) {
    console.log('Maria Wins. Score: ' + mariaScore);
} else {
    console.log('It\'s a Draw.');
}

*/

// Functions
/* are important in Programming Principle DRY - Don't Repeat Yourself 
    to avoid repitition of code.
*/

/*when creating function - functionName(Parameter)
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
} */

/*

when calling function - functionName(Argument) which is argument is the value which will be pass into parameter of the functionName
var johnAge = calculateAge(1994);
var mikeAge = calculateAge(1969);
var maryAge = calculateAge(1948);
console.log(johnAge);

//Call other function in a function
function yearRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' Years.');
    } else {
        console.log(name + ' has already retired.');
    }
}

yearRetirement('John', 1990);
yearRetirement('Mike', 1969);
//1948 will be pass as argument into yearRetirement function and again will be pass as argument in the calculateAge function.
yearRetirement('Mary', 1948);

//Statements and Expressions

/* Difference is Expression produces value an outcome while declaration / statement just performs an action */

/*
    //function statement / declaration
    function someFun(par) {
        //code
    }
*/

/* 
    //function Expression
    var someFun = function(par) {
        //code
    };
*/

//Arrays - array alwaus start at zero
var names = ['John', 'Jane', 'Mark'];
var yearBorn = new Array(1990, 1969, 1948);
console.log(yearBorn);

//https://stackoverflow.com/questions/182600/should-one-use-or-in-a-for-loop
//for (int i=0; i < count; i++) // For 0-based APIs
//for (int i=1; i <= count; i++) // For 1-based APIs

//Let's mutate it
names[1] = 'Ben';

for ( var i = 0; i < names.length; ++i) {
    console.log(names[i]);
}

/*var name = ['hello','world'];
var nameChar = [];

for(var i = 0; i < name.length; i++) {
  nameChar = name[i];
  for(var x = 0; x < nameChar.length; x++) {
    console.log(nameChar[x]);
  }
}*/

/* So array can hold also different data types */
var john = ['John','Smith', 1990, 'teacher', false];
console.log(john);

//let's add something to array 

//using push function/method - last element / array
john.push('Blue');
//using unshift function/method - beginning element / array
john.unshift('Mister');
//using pop function/method - removes the last element from the array
john.pop();
//using shift function/method - removes the last element from the array
john.shift();
//the cool one and really useful -> "indexof" returns the position of the element that we pass into it
/*
    Sample Smith so it will return 1, probably the most important use case of the 
    indexof method is to find out if a certain element is or not inside of an array.
*/
console.log(john.indexOf('Smith'));

/* 
    So let's try if john is a teacher or not.
    if the element teacher  is in the array it will return the order number of that element.
    P.S if the element is not in the array, indexof does return -1    
*/

//Sample lets say if hes not a teacher -1
//P.S nothing happens in console 'cause john actually is a teacher
if (john.indexOf('teacher') === -1 )   {
    console.log('John  is NOT a teacher.');
} else {
    console.log('John is A teacher.');
}

//Objects and Properties

/* 
    in arrays we can't call an element by its name but
    in objects we can call an element using object literal, 
    so we're not going to use numbers, in that order in which the variables are declared
    or the key:value pairs are declared inside of the object does not matter.
    let's say object johnA
    P.S OBJECT can have properties and methods 
*/

//FIRST WAY OF CREATING OBJECT - USED Always
var johnA = {
    name: 'johna',
    lastname: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false 
};

//Two ways to read/retrieve a value out of an object, the dot(.) notation 
console.log(johnA.lastname);

//Second way using brackets and the key, and we have o pass the key here as a string.
console.log(johnA['lastname']);

//we can create a variable which has the name of the key that we want to retrieve
/* 
    so in this variable or container (xyz/xyz2) we store job and isMarried,
    so of course this xyz/xyz2 was then replaced
*/
var xyz = 'job',
    xyz2 = 'isMarried';
console.log(johnA[xyz] + ' ' + johnA[xyz2] );

//we can use data mutation to change something in the object
johnA.lastname = 'Miller';
johnA['job'] = 'Programmer';

console.log(johnA);

/* 
    let's create an object (p.s it's not new array) and mutate it, 
    like we do with johnA but in a new Object way / different way
*/

//SECOND WAY OF CREATING OBJECT - USED fairly

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

//we can also use functions in object. 

// V1.0

// all of these key:value are properties of the mike object and calculateAge is the Method
var mike = {
    name: 'Mike', //String
    lastname: 'Smith',
    yearOfBirth: 1990, //Integer
    job: 'teacher',
    isMarried: false, //Boolean
    family: ['Jane', 'Mark', 'Bob'], //Array
    /*
        Function Expression 
        We have a variable name which is the key calculateAge 
        and the value which is the function.
        so outside of an object it is var calculateAge = function(yearOfBirth) { }

        we can call a key and use it in the function by using this. to retrieve the value
        right off its own object.

        calculateAge: function() {
            return 2016 - this.yearOfBirth;
        }
    */
    calculateAge: function(yearOfBirth) {
        return 2016 - yearOfBirth;
    } 
};

//call element in family array
console.log(mike.family[2]);

//call using method in object
console.log(mike.calculateAge(1920));

//let's add ageNow key to object mike using calculateAge Method
//var age = mike.calculateAge();
//mike.ageNow = age;

console.log(mike);

// V2.0

var jones = {
    name: 'Mike', //String
    lastname: 'Smith',
    yearOfBirth: 1994, //Integer
    job: 'Programmer',
    isMarried: false, //Boolean
    family: ['Jane', 'Mark', 'Bob'], //Array
    calculateAge: function() { 
        return 2016 - this.yearOfBirth;
    }
};

var age = jones.calculateAge();
jones.ageNow = age;

console.log(jones);

//Why not we use the this to insert new key which is age
var marry = {
    yearOfBirth: 1990, //Integer
    calculateAge: function() { 
        this.age = 2016 - this.yearOfBirth;
    }
};

marry.calculateAge();
console.log(marry);

//LOOPS

//for loops
for (var i = 0; i < 10; i++) {
    console.log(i);
} 

var fnames = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < fnames.length; i++) {
    console.log(fnames[i]);
}

// since we don't want 5 we want 4 so length -1
for (var i = fnames.length - 1; i >= 0; i-- ) {
    console.log(fnames[i]);
}

//while loops
var i = 0;
while (i < fnames.length ) {
    console.log(fnames[i]);
    i++;
}

//break and continue also works in for and while loops

for (var i = 1; i <= 5; i++) {
    
    console.log(i);
    //until 3 only 
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    //so 3 will be skipped
    if (i === 3) {
        continue;
    }

    console.log(i);
}

var years = [2001, 1985, 1994, 2014, 1973];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    var fullOne, fullTwo;

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
            if (ages[i] >= 18){
                console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
                fullAges.push(true);
            } else {
                console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
                fullAges.push(false);
            }
    }

    /*for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18){
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    } */

    return fullAges;
}

var fullOne = printFullAge(years);
console.log(fullOne);

var fullTwo = printFullAge([2012, 1915, 1999]);
console.log(fullTwo);


var Barry = {
    speed: true,
    calculation: 'Speed of Light',
    power: function (speedForce) {
        return speedForce + ' God of Speed';
    }
};

console.log(Barry.power(['Hello','Barry']));