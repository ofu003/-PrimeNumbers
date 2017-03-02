  var arr=[];
  sum=0;

  Add=function(userInput){
    arr.push(userInput);
    console.log(arr);
    for (var i=0; i<arr.length; i++){
      sum=sum+arr[i];
      console.log(sum);
    }
  }
    output(sum);

$(function(){

  $("#form").submit(function(event){
    event.preventDefault();
    var userInput = $("#number").val();
    Add(userInput);

    var output=function(sum){
      $("#show").text(sum);
    }
  });
})//ends jQuery
