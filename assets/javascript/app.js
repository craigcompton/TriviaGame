// 
// variables
// 

var intervalId;
var number = 10;
var answers = ["C","D","B"], 

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

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName );
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value;
}

function getScore(){
  var score = 0;
  for (var i=0; i<answers.length; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ answers.length);
}

// 
// call functions
// 

timeLeft();