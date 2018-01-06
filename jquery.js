$(document).ready(function(){

    $("#domMod").click(function(){
        alert("You got a " + $("#used").text());
    });
    
    $("#pussy-cat").click(function(){
        $(this).animate({left: "250px"}, "slow");
    });







});