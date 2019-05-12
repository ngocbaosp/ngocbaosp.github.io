//setTimeout(booyah, 2000);
//setTimeout(booyah(), 2000);
setTimeout(booyah1, 2000);
setTimeout(booyah2(), 10000);

function booyah() {
    alert("booyah");

}

function booyah1() {
    alert("BOOYAH!");

}
function booyah2() {
    setTimeout(booyah1,2000);
}