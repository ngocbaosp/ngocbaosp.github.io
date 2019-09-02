var m = function () {
    var x = 5;
    return function () {
        x = x + 5;
        return x;
    };

};

var m1 = m();
var m2 = m();

m1();
m1();
m2();


var m = function () {
    var x = 5;
    return {
        abc:function() {
            x = x + 5;
            return x;
        }
    };

};

var m1 = m();
var m2 = m();

m1();
m1();
m2();

