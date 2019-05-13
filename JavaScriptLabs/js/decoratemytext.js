"use strict";
//alert("Hello, world!");

////////////////////////////////////////////////////////////////
window.onload = onloadFunction;
var intervalId = null;

function onloadFunction() {
    //alert("Hello, world!");
    var txtText = getElementById("txtText");
    txtText.style.fontSize = "12pt";

    /*
    var btnBigger = getElementById("btnBigger");
    btnBigger.onclick = onclickBigger;

    var btnBigger = getElementById("btnBigger");
    btnBigger.onclick = onclickBigger;
    */

    setButtonClickEvent("btnBigger", onclickBigger);
    setButtonClickEvent("btnSmaller", onclickSmaller);
    setButtonClickEvent("btnReset", onclickReset);
    setButtonClickEvent("btnPigLatin", onclickPigLatin);
    setButtonClickEvent("btnMalkovitch", onclickMalkovitch);

    var chkBling = getElementById("chkBling");
    chkBling.onchange = onchangeBling;


}

function setButtonClickEvent(id, eventHandler) {

    var btn = getElementById(id);
    btn.onclick = eventHandler;

}

////////////////////////////////////////////////////////////////
function getElementById(elementId) {
    return document.getElementById(elementId);

}

////////////////////////////////////////////////////////////////
function onchangeBling() {

    var chkBling = getElementById("chkBling");
    //alert(chkBling.checked);
    setTextAreaStyle(chkBling.checked);

}

////////////////////////////////////////////////////////////////
function setTextAreaStyle(checkboxState) {
    var txtText = getElementById("txtText");
    var textStyle = txtText.style;

    if (checkboxState === true) {
        /*
        textStyle.fontWeight="bold";
        textStyle.color="green";
        textStyle.textDecoration="underline";
        */
        txtText.className = "textarea-checked";
        document.body.style.backgroundImage = "url(\"../../images/hundred-dollar-bill.jpg\")";
    } else {
        txtText.className = "textarea-unChecked";
        document.body.style.backgroundImage = "none";
        //textStyle.fontWeight="normal";

    }

}

////////////////////////////////////////////////////////////////
function onclickSmaller() {
    clearTimer();
    intervalId = setInterval(changeTextFontSize, 500, -1);
}

////////////////////////////////////////////////////////////////
function onclickBigger() {

    clearTimer();
    intervalId = setInterval(changeTextFontSize, 500, 1);
}

////////////////////////////////////////////////////////////////
function clearTimer() {

    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

////////////////////////////////////////////////////////////////
function onclickReset() {
    var txtText = getElementById("txtText");
    txtText.style.fontSize = "12pt";
    clearTimer();

}

////////////////////////////////////////////////////////////////
function changeTextFontSize(isIncrease) {

    var txtText = getElementById("txtText");
    console.log(txtText.style.fontSize);
    var size = parseInt(txtText.style.fontSize);

    size += 2 * isIncrease;
    txtText.style.fontSize = size + "pt";
    console.log(txtText.style.fontSize);


}

////////////////////////////////////////////////////////////////
//addition
function pigLatin(str) {

    var vowels = ["a", "e", "i", "o", "u"];
    var index = -1;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            index = i;
            break;

        }
    }

    if (index === -1)
        return str + 'ay';

    return str.slice(index) + str.slice(0, index) + 'ay';


}


////////////////////////////////////////////////////////////////
function replaceMalkovich(words) {

    var replaceStr = "Malkovich";
    if (words.length >= 5)
        return replaceStr;

    return words;


}

////////////////////////////////////////////////////////////////
function convertString(str, func) {
    var sentences = str.trim().split(/\n/g);
    console.log(sentences);

    var convertStr = "";
    for (let s of sentences) {
        //s is a string
        var res = s.split(" ");
        var str1 = "";
        for (let word of res) {
            if (word !== "") {
                console.log(word);
                console.log(func(word));
                str1 += func(word) + " ";
            }
        }
        console.log(str1);
        convertStr = convertStr + str1 + '\n';

    }
    console.log(convertStr);
    return convertStr;

}


////////////////////////////////////////////////////////////////
function onclickPigLatin() {

    var txtText = getElementById("txtText");
    var str = txtText.value;

    //call method convert String using pigLatin function
    txtText.value = convertString(str, pigLatin);

}

////////////////////////////////////////////////////////////////
function onclickMalkovitch() {
    var txtText = getElementById("txtText");
    var str = txtText.value;

    //call method convert String using replaceMalkovich function
    txtText.value = convertString(str, replaceMalkovich);
}





