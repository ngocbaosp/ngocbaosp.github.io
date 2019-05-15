//window.onload = closure2Onload;
function getElementById(elementId) {
    return document.getElementById(elementId);

}
function setOnClickEvent(id, eventHandler) {

    var btn = getElementById(id);
    btn.onclick = eventHandler;
}

function onClickEvent(str) {
    return function () {
        alert("Global in closure.js: "+str);
    }
}

function closureGlobalOnload() {
    setOnClickEvent("btnGlobal", onClickEvent("btnGlobal"));
    
}