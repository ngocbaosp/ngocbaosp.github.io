var dic = function () {

    $(document).ready(function () {
        fnReady();
    });

    var fnReady = function () {

        $("#btnLookup").click(callAjax);
        $("#loading").hide();
        $(document).ajaxStart(ajaxStart);
        $(document).ajaxStop(ajaxStop);


    };

    var ajaxStart = function () {
        $("#loading").show();
        $(".definition").children().remove();

    };

    var ajaxStop = function () {
        $("#loading").hide();

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

            $d.first().before("<p><span>"+$("#term").val()+"</span></p>");

            var $dl = $(".definition ol").first();

            $.each(data, function (idx, obj) {

                $dl.append("<li>(" + obj.wordType + ") :: " + obj.definition + "</li>")
                console.log(idx);
                console.log(obj);

            });

            console.log(data);
        }
        else{

            $(".definition").after().html("<p><span>"+$("#term").val()+"</span> not found</p>")

        }

    };


}();