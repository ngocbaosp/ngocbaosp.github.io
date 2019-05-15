window.onload = closure3OnloadGlobal;
function getElementById(elementId) {
    return document.getElementById(elementId);

}
function setOnClickEvent(id, eventHandler) {

    var btn = getElementById(id);
    btn.onclick = eventHandler;
}

function onClickEvent(str) {
    return function () {
        alert("Global in closure3.js: "+str);
    }
}

function closure3OnloadGlobal() {

    setOnClickEvent("btnClosure1", onClickEvent("btn11"));
    setOnClickEvent("btnClosure2", onClickEvent("btn22"));
    setOnClickEvent("btnGlobal", onClickEvent("btnGlobal"));
}