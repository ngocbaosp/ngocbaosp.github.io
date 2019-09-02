window.x = 100;
function f() {
    var y = 10;
    var x = 20;

    return this.x*y;

}

alert(f());

function f1(a,b) {

    var c = a+b;
    for(let i=0;i<arguments.length;i++)
        c = c+arguments[i];

    return c;

}