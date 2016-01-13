$(document).ready(function(){
  for (var index = 99; index > 0; index -= 1){

    $("ul.number").append("<li>" + index + " bottles of beer on the wall, " + index + " bottles of beer. Take one down and pass it around, " + (index - 1) + " bottles of beer on the wall.</li>");
  }
});
