/*Use IIFE method so no one override this code if someone will use it as a plugin */
(function() {
  //Function Constructor
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

Question.prototype.checkAnswer = function(ans, callback) {
  var sc;

  if (ans === this.correct) {
    console.log('Correct Answer!');
    //store keepScore function
    sc = callback(true); //return updated score
  } else {
    console.log('Wrong Answer. Try again :)');
    sc = callback(false); //return the current score
  }
  
  //this variable here will point the object on which this method here was called(checkAnswer)
  this.displayScore(sc);
};

Question.prototype.displayScore = function(score) {
  console.log('You current score is: ' + score);
  console.log('------------------------------------------------');
};

//Question variable will hold a reference to the spot in memory where the object hits and then we can use our newly created object
var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);
var q2 = new Question('What\'s the name of this course\'s teacher?',['John', 'Michael', 'Jonas'], 2);
var q3 = new Question('What does best describe coding?',['Boring', 'Hard', 'Fun', 'Tedious'], 2);

//store question in array 
var questions = [q1, q2, q3];

//create score closure - First class function
function score() {
  var sc = 0; //this variable will always be accessible by this keepScore function
  return function(correct) {
    if(correct) {
      sc++;
    }
    return sc;
  };
}

//store the return function of score
var keepScore = score();

function nextQuestion() {
  //and randomize it
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  //do the prompt
  var answer = prompt('Please Select the Correct answer');
  
  if(answer !== 'exit') {
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion(); //Called it each time if want to continue the game
  }
}
  

nextQuestion(); //Called it at the beginning

})();
