"use strict";
var maze = (function () {

    var wallHit = false;
    var gameStarted = false;

    $(document).ready(function () {

            //alert("this is example");
        //$("body").mouseover(bodyMouseMove);
            $("#maze .boundary").mouseover(wallMouseOver);
            $("#end").mouseover(hitEnd);
            $("#start").click(startGame);
            $("#maze").mouseleave(mazeMouseLeave);

        }
    );

    let mazeMouseLeave=function(){

        console.log("mazeMouseLeave");
        if (gameStarted === false) return;
        wallMouseOver();


    };

    let bodyMouseMove=function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        let msg = "X: " + x + " Y: " + y;
        setTextMessage(msg);
        console.log("body");
    };

    /////////////////////////////////////////////////////
    let wallMouseOver = function () {
        //console.log($(this));
        if (gameStarted === false) return;
        wallHit = true;
        $("#maze .boundary").addClass("youlose");
        setTextMessage("Sorry! You lose :-)");
        gameOver();
    };

    /////////////////////////////////////////////////////
    let hitEnd = function () {

        if (gameStarted === false)
            return;

        if (wallHit === false) {
            setTextMessage("Yeah! You win !");
        } else {
            setTextMessage("Sorry! You lose :-)");
        }
        gameOver();
    };
    /////////////////////////////////////////////////////
    let startGame = function () {

        $("#maze .boundary").removeClass("youlose");
        wallHit = false;
        gameStarted = true;
        setTextMessage("Game started, go ahead !");
        setMousePointer('progress');

    };

    let setMousePointer=function(mouseIcon){
            $("body").css('cursor',mouseIcon);
            $("#maze").css('cursor',mouseIcon);
    };

    let gameOver=function(){

        gameStarted=false;
        setMousePointer('default');
        console.log(gameStarted);

    };

    let setTextMessage = function(msg)
    {
        $("#status").text(msg);

    };

})();