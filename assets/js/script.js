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
    {
        question: "placeholder question 3",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 4",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 5",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 6",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 7",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 8",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 9",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    }, 
    {
        question: "placeholder question 10",
        choices: ["1","2","3","4"],
        answer: "1"//have to be the correct answer
    },
    {
        question: "DONE",
        choices: ["Done"],
        answer: "Done"// end of questions!
    },
   
    
]

var currentQuestion = 0;
var currentAnswer = 0;
var correctAnswers = 0;
var wrongAnswers = 0;

var timer = document.querySelector("#time");
var startdiv = document.querySelector("#begin");
var startbtn = document.querySelector("#submit");
var questiondiv = document.querySelector("#question");
var questiontext = document.querySelector("#questiontext");
var choice1 = document.querySelector("#choice-1");
var choice2 = document.querySelector("#choice-2");
var choice3 = document.querySelector("#choice-3");
var choice4 = document.querySelector("#choice-4");
var final = document.querySelector("#final");
var score = document.querySelector("#scoretext");
var initials = document.querySelector("#initials");
var save = document.querySelector("#endsave");
var scoreCard = document.querySelector("#scoreCard");
var correctAns = document.querySelector("#correct");
var wrongAns = document.querySelector("#wrong");


startbtn.addEventListener("click", nextquestion)
startbtn.addEventListener("click", setTime)
choice1.addEventListener("click", nextquestion)
choice2.addEventListener("click", nextquestion)
choice3.addEventListener("click", nextquestion)
choice4.addEventListener("click", nextquestion)

var secondsLeft = 11;

function setTime(event){
    event.preventDefault();
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft + " sec";

        if(secondsLeft === 0 || currentQuestion == 11){
            clearInterval(timerInterval);
            alert("Please enter your initials to view your score");
            questiondiv.classList.add("hidden")
            final.classList.remove("hidden")
        }
    }, 1000);

}
    

function nextquestion (event){
    startdiv.classList.add("hidden")
    questiondiv.classList.remove("hidden")
    questiontext.textContent= questions [currentQuestion].question;
    choice1.textContent= questions [currentQuestion].choices[0]
    choice2.textContent= questions [currentQuestion].choices[1]
    choice3.textContent= questions [currentQuestion].choices[2]
    choice4.textContent= questions [currentQuestion].choices[3]
    console.log(event);
   
    currentQuestion++

    if(currentQuestion == 11){
        questiondiv.classList.add("hidden")
        final.classList.remove("hidden")
    }
       
    if (event.target.textContent == questions[currentAnswer].answer){

        document.getElementById("correct").innerHTML = ++correctAnswers;
    }else{
    
    if (event.target.textContent !== questions[currentAnswer].answer){
        document.getElementById("wrong").innerHTML = ++wrongAnswers -1;
        }
    currentAnswer++
    }
}


 
save.addEventListener("click", result)

function result (event){
    final.classList.add("hidden")
    scoreCard.classList.remove("hidden")
    console.log(event);
    document.getElementById("scoretext").innerHTML = 
}

