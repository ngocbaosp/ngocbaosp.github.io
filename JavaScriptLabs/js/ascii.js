"use strict";
//////////////////////////////
window.onload = onLoad;
let speed;
let currentFrame;
let maxFrame;
let frames;
let intervalId;
let data;

/**
 * This is onload function
 */
function onLoad() {
    //Init event handlers
    setButtonClickEvent("btnStart", onclickStart);
    setButtonClickEvent("btnStop", onclickStop);
    setOnChangeEvent("selAnimation", onChangeAnimation);
    setOnChangeEvent("selSize", onChangeSize);
    setOnChangeEvent("chkTurbo", onChangeTurbo);
    setControlStatus(false);
    initGlobalVars();
}
/**
 * Using this function to init value for global variables
 */
function initGlobalVars() {

    speed = 250;
    currentFrame = 0;
    maxFrame = -1;
    frames = null;
    intervalId = null;
    data = null;
}

function setText(str) {

    let txtText = getElementById("txtText");
    txtText.value = str;

}

function getAnimationFrames() {

    if (data !== null) {
        frames = getFrames(data);
        maxFrame = frames.length;
        console.log(frames);
        console.log(currentFrame);
    }
}
/**
 * test
 */
function animation() {
    setText(frames[currentFrame]);
    currentFrame++;
    if (currentFrame === maxFrame)
        currentFrame = 0;
}

////////////////////////////////////////////////////////////////
function clearTimer() {

    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function setControlStatus(isInprgress) {
    disableControlById("btnStop", !isInprgress);
    disableControlById("btnStart", isInprgress);
    disableControlById("selAnimation", isInprgress);
    disableControlById("txtText", isInprgress);
}

//////////////////////////////
function onclickStart() {

   /*
    let txtText = getElementById("txtText");
    let s = txtText.value;
    console.log(s);
    */

    getAnimationFrames();
    clearTimer();
    currentFrame = 0;
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

    let index = this.selectedIndex;
    let choice = this.options[index].value;
    data = ANIMATIONS[choice];
    setText(data);

}

//////////////////////////////
function onChangeSize() {
    let index = this.selectedIndex;
    let choice = this.options[index].value;

    let txtText = getElementById("txtText");



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


