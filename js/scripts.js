// ============= BACKEND ==============
var antiVowel = [];
function evalInput(arrayValue) {
  antiVowel = arrayValue.split(" ");
  for (var i = 0; i < antiVowel.length; i++) {

  }
}






//============= FRONTEND ============
$(document).ready(function(){
  $("form#wordPuzzle").submit(function(event){
    event.preventDefault();
    evalInput($("#word").val())

  });
});
