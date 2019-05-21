var dic = function () {

    $(document).ready(function () {
        fnReady();
    });

    var fnReady = function () {

        $("#btnLookup").click(callAjax);
        $("#loading").hide();
        $(".definition").hide();
        $(document).ajaxStart(ajaxStart);
        $(document).ajaxStop(ajaxStop);


    };

    var ajaxStart = function () {
        $("#loading").show();
        $(".definition").children().remove();
        $(".definition").hide();

    };

    var ajaxStop = function () {
        $("#loading").hide();
        $(".definition").show();


    };

    var callAjax = function () {

        myAjax();
    };

    var myAjax = function () {

        var url = "dictServlet";
        var data = {};
        data.word = $("#term").val();
        console.log(data);
        console.log("URL=" + url);
        $.post(url, data)
            .done(processData);


    };
    var processData = function (data) {
        if (data.length > 0) {

            $d = $(".definition");

            //$d.before("<p><span>"+$("#term").val()+"</span></p>");


            $d.after().html("<ol></ol>");

            $d.children().first().before("<p><span>"+$("#term").val()+"</span></p>");

            var $dl = $(".definition ol").first();

            $.each(data, function (idx, obj) {

                $dl.append("<li>(" + obj.wordType + ") :: " + obj.definition + "</li>")
                console.log(idx);
                console.log(obj);

            });

            console.log(data);
        }
        else{

            $(".definition").after().html("<p>Sorry, The term <span>"+$("#term").val()+"</span> is not found</p>")

        }

    };


}();