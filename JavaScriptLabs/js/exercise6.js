//setTimeout(booyah, 2000);
//setTimeout(booyah(), 2000);
//setTimeout(booyah1, 2000);
setTimeout(booyah2(), 2000);


function getAlert(str) {
    return function() { alert(str); }
}
var whatsUpAlert= getAlert("What's up!");
whatsUpAlert(); // “What’s up!”
getAlert("What's up up!")();
function booyah() {
    alert("booyah");

}

//////////////////////////////////
function booyah1() {

    alert("BOOYAH!");
}
//////////////////////////////////
function booyah2() {
    return booyah1;
}