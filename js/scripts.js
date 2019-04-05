// back end logic
function beepBoop(userInput){
  var beepBoopArray = [];

  for (var i=0; i<= userInput; i++ ){
// .toString = convert number to string / .includes = "The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate." - MDN Array.prototype.includes
    // if  (i.toString().includes("32")){
    //     beepBoopArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    // } else if (i.toString().includes("21")){
    //     beepBoopArray.push("Boop.");
    // } else if (i.toString().includes("13")){
    //     beepBoopArray.push("Beep."); - Realized didn't need the excess numbers and figured out why there wasn't a 12.
    if (i.toString().includes("3")){
        beepBoopArray.push("I'm sorry, Dave.  I'm afraid I can't do that.");
    } else if (i.toString().includes("2")){
        beepBoopArray.push("Boop!");
    } else if (i.toString().includes("3")){
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
    // parseInt turns number inputs into integer*only numbers
    var userInput = parseInt($("input#userInput").val());
    var result = beepBoop(userInput);

    $("#result").show();
    $(".beeps").text(result);
  })
  });
  // Everything below this was created under the intention of making output based misinterpretation of assignment.  Info retained for proof of working during project time.
  // for (var i = 0;i <= 100;1++) {
  //   if (i === 32) {
  //     console.log ("I'm Sorry, Dave.  I'm afraid I can't do that.");
  //   } else if (i === 21) {
  //     console.log ('Boop!');
  //   } else if (i === 13) {
  //     console.log ("I'm Sorry, Dave.  I'm afraid I can't do that.");
  //   } else if ((i === 1) && () {
  //     console.log ('Beep!');
  //   } else if (i === 2) {
  //     console.log ('Boop!');
  //   } else if (i === 3) {
  //     console.log ("I'm Sorry, Dave.  I'm afraid I can't do that.");
  //
  //   if
  //
  // console.log ('100')
  // console.log ('Beep!');
  // console.log ('Boop!');
  // console.log ("I'm Sorry, Dave.  I'm afraid I can't do that.")
  // console.log(i)
  //   }
  // };
