var puzze=(function () {
    var boxesPosition =[];

    var emptySquarePosition=15;
    const COLS = 4;
    const TILE_SIZE = 100;

    let bgImage = 'url("../../images/background.jpg")';



    $(document).ready(function () {

        jInit();

    });

    let jInit = function() {

        $("#puzzlearea div").each(function (index) {
            initPuzze(this,index);
        });
    };

    console.log(boxesPosition);


    let getBoxIndex=function(piece){

        let left = $(piece).css('left');
        let top =$(piece).css('top');
        let x = parseInt(left);
        let y = parseInt(top);
        let col = Math.floor(x/TILE_SIZE);
        let row = Math.floor(y/TILE_SIZE);
        return row*COLS+col;
        //console.log(left);

    };


    let getBoxPosition=function(i){

        return {x:((i % COLS) * TILE_SIZE),y:(Math.floor(i / COLS) * TILE_SIZE)};
    };

    let move=function(piece,newPosition){

        //get current position of piece
        let currentPosition = getBoxIndex(piece);
        //check if this piece can move to empty square position
        if(checkMove(currentPosition,emptySquarePosition)===false) return false;

        //store current position to emptySquarePosition
        emptySquarePosition = currentPosition;
        console.log(emptySquarePosition);
        //move to new position
        setPosition(piece,newPosition);

    };


    let checkMove=function(currentPosition, newPosition){

        let i1 = currentPosition%COLS;
        let j1 = Math.floor(currentPosition/COLS);
        let i2 = newPosition%COLS;
        let j2 = Math.floor(newPosition/COLS);

        let d = Math.abs(i1-i2)+Math.abs(j1-j2);

        if(d===1)
            return true;

        return false;

    };

    let setPosition=function(piece,i){

        let box = getBoxPosition(i);
        let left = box.x + 'px';
        let top = box.y + 'px';
        $(piece).css({'left':left,'top':top});

    };


    let initPuzze = function(piece,i){

        let box = getBoxPosition(i);
        let position = -box.x + 'px ' + (-box.y) + 'px';
        boxesPosition.push(box);
        $(piece).addClass("puzzlepiece");
        setPosition(piece,i);
        $(piece).css({'backgroundImage':bgImage,'backgroundPosition':position});

        //add event handler

        $(piece).click(tileClick);


        /*
        $(piece).css('left',x);
        $(piece).css('top',y);
        $(piece).css('backgroundImage',bgImage);
        $(piece).css('backgroundPosition',position);
        */
    };

    let tileClick = function () {

        //console.log($(this));
        move(this,emptySquarePosition);

    }


})();
