// peusdocode
// First, let's set our variables to refer to the index.html by document.querySelector().
// When the User clicks the Start button, the function setInterval starts.
// Simultaneously there should be a question that appears on the page for the user to start the quiz.
// These questions are set up by funcitons. 
// There should be functions to generate the questions and store the results.
// There should be an addEvent Listener("click", showRespone) t
// 

//REQUIREMENT ACCORDING TO THE MODULE 4
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

var questions = [
    {
        question: "placeholder question 1",
        choices: ["a","b","c","d"],
        answer: "a" //have to be the correct answer
    },
    {
        question: "placeholder question 2",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
]

var currentQuestion = 0

var startdiv = document.querySelector("#begin");
var startbtn = document.querySelector("#submit");
var questiondiv = document.querySelector("#question");
var questiontext = document.querySelector("#questiontext");
var choice1 = document.querySelector("#choice-1");
var choice2 = document.querySelector("#choice-2");
var choice3 = document.querySelector("#choice-3");
var choice4 = document.querySelector("#choice-4");
var scorecard = document.querySelector("#scorecard");
var score = document.querySelector("#scoretext");
var initials = document.querySelector("#initials");
var save = document.querySelector("#endsave");


startbtn.addEventListener("click", nextquestion)
choice1.addEventListener("click", nextquestion)
choice2.addEventListener("click", nextquestion)
choice3.addEventListener("click", nextquestion)
choice4.addEventListener("click", nextquestion)


