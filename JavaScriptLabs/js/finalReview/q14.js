var c=1000;
function g() {
    var a = 100;
    var b = 10;
    var z = a+b;
    alert(z);
    function f(z) {
        return 2*z+a;

    }
    return f;

};

var myFunc = g();
x = myFunc(5);
