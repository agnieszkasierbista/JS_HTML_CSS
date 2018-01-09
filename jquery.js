$(document).ready(function(){

    $("#domMod").click(function(){
        alert("You got a " + $("#used").text());
    });
    
    $("#pussy-cat").click(function(){
        $(this).animate({left: "250px"}, "slow");
    });
    $("#importantation").click(function(){
        $("#importantText").addClass("important bluish");
    });

    $("#letMeKnow").click(function(){
        var txt = "";
        txt += "Width: " + $("#sizedDiv").width() + "</br>";
        txt += "Height: " + $("#sizedDiv").height();
        $("#sizedDiv").html(txt);
    }); 
    
    $("#loading").click(function(){
        $("#toLoad").load("demo_test.txt");
    });



});