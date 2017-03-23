$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 === side2 && side2 === side3) {
      var result = "equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      var result = "isosceles";
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      var result = "not a triangle";
    } else {
      var result = "scalene";
    }

    $("#type").text(result);
  });
});

// back-end triangle
// $(document).ready(function(){
//   $("form").submit(function(event){
//     event.preventDefault();
//     if (side1 === side2 === side3) {
//       var result = "equilateral";
//     } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//       var result = "isosceles";
//     } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
//       var result = "not a triangle";
//     } else {
//       var result = "scalene";
//     }
//   });
// });


// front-end
// $(function(){
//   $("form").submit(function(event){
//     event.preventDefault();
//     var side1 = parseInt($("#side1").val());
//     var side2 = parseInt($("#side2").val());
//     var side3 = parseInt($("#side3").val());
//     $("#type").text(result);
//   });
// });
