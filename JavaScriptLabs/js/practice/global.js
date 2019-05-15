function onClickEvent(str) {
    return function () {
        alert("Global in global.js: "+str);
    }
}