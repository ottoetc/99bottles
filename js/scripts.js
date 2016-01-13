$(document).ready(function(){
  var flavors = ["Coffee", "Chocolate", "Vanilla", "Strawberry"];
  flavors.forEach(function(flavor){
    $("h1").after(flavor);
  });
});
