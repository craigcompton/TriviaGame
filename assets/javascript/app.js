// 
// variables
// 

var intervalId;
var number = 10;
var answers = ["C","D","B"];

// 
// functions
// 

function timeLeft() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $(".timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
        returnScore();
        clearInterval(intervalId);
    }
}

// timeLeft();

function getCheckedValue( radio ){
    var radios = document.getElementsByName( radio );
    for(var y=0; y<radios.length; y++)
      if(radio[y].checked) return radio[y].value;
}

function getScore(){
  var score = 0;
  for (var i=0; i<answers.length; i++)
    if(getCheckedValue("question"+i)===answers[i]) score ++; 
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ answers.length);
}

// 
// call function
// 

timeLeft();