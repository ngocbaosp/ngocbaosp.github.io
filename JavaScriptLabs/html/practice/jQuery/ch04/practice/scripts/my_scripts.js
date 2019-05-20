var menu = (function () {

    //global variables
    let bVegi = false;

    let $f = null;
    let $m = null;


    $(document).ready(function () {
        assignEvent();

    });

    let assignEvent = function () {

        //event handler
        $("#vegOn").click(vegOnClick);
        $("#restoreMe").click(restoreMeClick);


    };

    let vegOnClick = function () {

        if (bVegi === false) {

            //remove fish
            //console.log("vegOn");
            $f = $(".fish").parent().parent().detach();

            $(".turkey").replaceWith(" <li class='mashed-potatoes'> Mashed Potatoes</l i>");


            console.log($f);
        }

        bVegi = true;


    };

    let restoreMeClick = function () {

        if (bVegi === false) return;

        console.log("restore");
        $(".menu_entrees li").first().before($f);

        bVegi = false;

    };


})();

