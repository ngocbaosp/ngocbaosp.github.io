var a = 10;
function f() {
    var b=20;
    var d;
    function g() {
        var c= a+b+d;
        d = c;
        return c;

    }
    b=30;
    d=5;
    return g;

}

myFunc = f();
x = myFunc();
alert(x);
console.dir(x);
a=100;
y=myFunc();

console.dir(y);
alert(y);