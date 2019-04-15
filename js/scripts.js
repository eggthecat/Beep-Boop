// back end logic
function beepBoop(userInput){
  var beepBoopArray = [];

  for (var i=0; i<= userInput; i++ ){
    if (i.toString().includes("3")){
        beepBoopArray.push("I'm sorry, Dave.  I'm afraid I can't do that.");
    } else if (i.toString().includes("2")){
        beepBoopArray.push("Boop!");
    } else if (i.toString().includes("1")){
        beepBoopArray.push("Beep!");
    } else {
        beepBoopArray.push(" " + i);
    }
  }
  return beepBoopArray;
};

// front end logic
$(document).ready(function() {
  $("#computerSound").submit(function(event) {
    event.preventDefault();
    
    var userInput = parseInt($("input#userInput").val());
    var result = beepBoop(userInput);

    $("#result").show();
    $(".beeps").text(result);
  })
  });
