(
    function()
    {
        window.onload = closure3Onload;

        function getElementById(elementId) {
            return document.getElementById(elementId);

        }

        function setOnClickEvent(id, eventHandler) {

            var btn = getElementById(id);
            btn.onclick = eventHandler;
        }

        function onClickEvent1(str) {
            return function () {
                alert("Local onClickEvent1 3:"+ str);
            }
        }

        function onClickEvent(str) {
            return function () {
                alert("Local onClickEvent 3:"+ str);
            }
        }


        function closure3Onload() {

            setOnClickEvent("btnClosure1", onClickEvent1("btn11"));
            setOnClickEvent("btnClosure2", onClickEvent1("btn22"));
            setOnClickEvent("btnGlobal", onClickEvent1("btnGlobal"));
        }
    }
)();