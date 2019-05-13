"use strict";
//////////////////////////////
window.onload = onLoad;
var speed = 250;
var currentFrame = 0;
var maxFrame = -1;
var frames;
var intervalId = null;
var data = null;

function onLoad() {
    //Init event handlers
    setButtonClickEvent("btnStart", onclickStart);
    setButtonClickEvent("btnStop", onclickStop);
    setOnChangeEvent("selAnimation", onChangeAnimation);
    setOnChangeEvent("selSize", onChangeSize);
    setOnChangeEvent("chkTurbo", onChangeTurbo);
    setControlStatus(false);
}
function setText(str) {

    var txtText = getElementById("txtText");
    txtText.value = str;

}

function getAnimationFrames() {

    if(data !==null) {
        frames = getFrames(data);
        maxFrame = frames.length;
        console.log(frames);
        console.log(currentFrame);
    }
}

function animation() {
    setText(frames[currentFrame]);
    currentFrame++;
    if(currentFrame===maxFrame)
        currentFrame=0;
}
////////////////////////////////////////////////////////////////
function clearTimer() {

    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function setControlStatus(isInprgress) {
    disableControlById("btnStop",!isInprgress);
    disableControlById("btnStart",isInprgress);
    disableControlById("selAnimation",isInprgress);
    disableControlById("txtText",isInprgress);
}

//////////////////////////////
function onclickStart() {
    getAnimationFrames();
    clearTimer();
    currentFrame=0;
    intervalId = setInterval(animation, speed);
    setControlStatus(true);

}


//////////////////////////////
function onclickStop() {
    clearTimer();
    setText(data);
    setControlStatus(false);
}

//////////////////////////////
function onChangeAnimation() {

    var index = this.selectedIndex;
    var choice = this.options[index].value;
    data = ANIMATIONS[choice];
    setText(data);

}

//////////////////////////////
function onChangeSize() {
    var index = this.selectedIndex;
    var choice = this.options[index].value;

    var txtText = getElementById("txtText");
    txtText.style.fontSize = choice + "pt";

}

//////////////////////////////
function onChangeTurbo() {

    if (this.checked) {
        setSpeed(50);
        //disableControlById("btnStart", true);
    } else {
        setSpeed(250);

        //disableControlById("btnStart", false);
    }
}

function setSpeed(s) {
    speed = s;
    clearTimer();
    intervalId = setInterval(animation, speed);
}


