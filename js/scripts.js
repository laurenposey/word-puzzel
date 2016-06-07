// ============= BACKEND ==============
var antiVowel = [];
function evalInput(arrayValue) {
  antiVowel = arrayValue.split('');
  for (var i = 0; i < antiVowel.length; i++) {
    switch(antiVowel[i]) {
      case 'a': case 'e': case 'i': case 'o': case 'u':
        antiVowel[i] = '-';
    }
  }
  return antiVowel.join('');
}






//============= FRONTEND ============
$(document).ready(function(){
  $("form#wordPuzzle").submit(function(event){
    event.preventDefault();
    var noVowel = evalInput($("#word").val());

    $("#noVowels").append(noVowel);
    $("#noVowels").show();
    $("#wordPuzzle").toggle();
  });
});
