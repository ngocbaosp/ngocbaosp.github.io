(
    function()
    {
        window.onload = closure2Onload;

             function getElementById(elementId) {
                 return document.getElementById(elementId);
     
             }

             function setOnClickEvent(id, eventHandler) {
     
                 var btn = getElementById(id);
                 btn.onclick = eventHandler;
             }
     
             function onClickEvent(str) {
                 return function () {
                     alert("Local 2:"+ str);
                 }
             }


        function closure2Onload() {

            setOnClickEvent("btnClosure1", onClickEvent("btn11"));
            setOnClickEvent("btnClosure2", onClickEvent("btn22"));
            closureGlobalOnload();


        }
    }
)();