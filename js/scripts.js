$(function(){
  var arr=[];
  findPrimeNumber=function(userInput){
    for (var i=2; i<=userInput; i++){
      arr.push(i);
      console.log(arr);
    }
    arr.forEach(function(number){
      for (var i=2; i<=userInput; i++){
        if (number%i==0 && number!=i){
        var index = arr.indexOf(number);
        arr.splice(index,1);
        }
        else{
        }
      }
    });
    console.log(arr);
    $("#show").text(arr);
  };



  $("#form").submit(function(event){
    event.preventDefault();
    var userInput = $("#primeNumber").val();
    findPrimeNumber(userInput);
  })

})
