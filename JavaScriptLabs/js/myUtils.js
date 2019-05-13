function setButtonClickEvent(id, eventHandler) {

    var btn = getElementById(id);
    btn.onclick = eventHandler;

}

function setOnChangeEvent(id, eventHandler) {

    var element = getElementById(id);
    element.onchange = eventHandler;

}

////////////////////////////////////////////////////////////////
function getElementById(elementId) {
    return document.getElementById(elementId);

}

function disableControlById(id,state) {

    document.getElementById(id).disabled=state;
}

function getFrames(str) {
    return str.trim().split(/=====\n/g);
}