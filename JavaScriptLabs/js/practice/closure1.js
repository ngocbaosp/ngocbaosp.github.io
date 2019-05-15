(
    function()
    {
        window.onload = closure1Onload;

        function closure1Onload() {

            setOnClickEvent("btnClosure1", onClickEvent("btn11"));
            setOnClickEvent("btnClosure2", onClickEvent("btn22"));
            closureGlobalOnload();


        }
    }
)();