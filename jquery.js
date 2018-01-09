var jq = $.noConflict();
jq(document).ready(function(){

    jq("#domMod").click(function(){
        alert("You got a " + jq("#used").text());
    });
    
    jq("#pussy-cat").click(function(){
        jq(this).animate({left: "250px"}, "slow");
    });
    jq("#importantation").click(function(){
        jq("#importantText").addClass("important bluish");
    });

    jq("#letMeKnow").click(function(){
        var txt = "";
        txt += "Width: " + jq("#sizedDiv").width() + "</br>";
        txt += "Height: " + jq("#sizedDiv").height();
        jq("#sizedDiv").html(txt);
    }); 
    
    jq("#loading").click(function(){
        jq("#toLoad").load("demo_test.txt", (function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);

        }));
    });



});