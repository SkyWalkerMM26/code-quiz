// peusdocode
// First, let's set our variables to refer to the index.html by document.querySelector().
// When the User clicks the Start button, the function setInterval starts.
// Simultaneously there should be a question that appears on the page for the user to start the quiz.
// These questions are set up by funcitons. 
// There should be functions to generate the questions and store the results.
// There should be an addEvent Listener("click", showRespone) t
// 

//this an array of objects. These objects are the questions/answers for the quiz.
var questions = [
    {
        question: "What special character comes after this 'function Mocossi()_'<--?",
        choices: [";",",","{",")"],
        answer: "{" //have to be the correct answer
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
        choices: ["1","2","3","4"],
        answer: "Done"// end of questions!
    },
   
    
]
 //these are setting my start count to be zero for these variables.
var currentQuestion = 0;
var currentAnswer = 0;
var correctAnswers = 0;
var wrongAnswers = 0;


//these are js variables that points to elements in the HTML file.
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
var oldscorebtn = document.querySelector("#oldscorebtn");

//these are actions that occur when the button is click.
//the functions are written below.
startbtn.addEventListener("click", nextquestion)
startbtn.addEventListener("click", setTime)
choice1.addEventListener("click", nextquestion)
choice2.addEventListener("click", nextquestion)
choice3.addEventListener("click", nextquestion)
choice4.addEventListener("click", nextquestion)


//this is the time interval set for this quiz.
var secondsLeft = 11;

function setTime(event){
    event.preventDefault();
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft + " sec";
        //when the seconds run out or when the questions reach to the 11 count, an alert will show and take the user to a page to enter their initials to see their score.
        if(secondsLeft === 0 || currentQuestion == 11){
            clearInterval(timerInterval);
            alert("Please enter your initials to view your score");
            questiondiv.classList.add("hidden")
            final.classList.remove("hidden")
        }
    }, 1000);

}

//this sets the answer options buttons and generate the next question when the user select click on their answer choice(button).
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

    
    //if user completes quiz before time is up, this will take them the page to register their initials to see their score, which the alert was defined earlier.
    if(currentQuestion == 11){
        questiondiv.classList.add("hidden")
        final.classList.remove("hidden")
    }
       
    //this will log the user score to display.
    if (event.target.textContent == questions[currentAnswer].answer){

        document.getElementById("correct").innerHTML = ++correctAnswers;
    }else{
    
    if (event.target.textContent !== questions[currentAnswer].answer){
        document.getElementById("wrong").innerHTML = ++wrongAnswers -1;
        }
    currentAnswer++
    }
    
}

//this saves the user correct scores in the local storage.
function scoreStorage (){
    var correctScore = document.getElementById("correct").textContent; 
   localStorage.setItem("correctScore", JSON.stringify(correctScore));
   
} 

//this saves the user initials and calls for it from the local storage.
function saveInitials(){
    var userInitials = document.getElementById("initials").value;
    localStorage.setItem("userInitials", JSON.stringify(userInitials));
}

function renderSaveInitials (){
    var lastInitials = JSON.parse(localStorage.getItem("userInitials"));
    if (lastInitials !== null){
        document.getElementById("scoretext").innerHTML = "Initials: " + lastInitials;
    }else{
        return;
    }
}
 //When the user click this button, it will perform the fxn below.
save.addEventListener("click", result)

function result (event){
    //the user has to enter something in the input to see their score.
    if (document.getElementById("initials").value == ""){
        alert("Please type in your initials.");
    }
    //if input is not empty, then the next page will appear with the user's initials and score.
    if (document.getElementById("initials").value !== ""){
        final.classList.add("hidden")
        scoreCard.classList.remove("hidden")
    }
    saveInitials();
    renderSaveInitials();
    scoreStorage();
}



