var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};
// var num1 = $("input#add1").val();
// var num2 = $("input#add2").val();

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result1 = add(number1, number2);
  $("#output1").text(result1);
});


  $("form#subtract").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var result2 = subtract(number1, number2);
  $("#output2").text(result2);
  });

  //
  // $("form#add").submit(function(event) {
  // event.preventDefault();
  // var number1 = parseInt($("#add1").val());
  // var numbr2 = parseInt($("#add2").val());
  // var result = add(number1, number2);
  // $("#output").text(result);
  // });
  //
  // $("form#add").submit(function(event) {
  // event.preventDefault();
  // var number1 = parseInt($("#add1").val());
  // var number2 = parseInt($("#add2").val());
  // var result = add(number1, number2);
  // $("#output").text(result);
  // });




});
