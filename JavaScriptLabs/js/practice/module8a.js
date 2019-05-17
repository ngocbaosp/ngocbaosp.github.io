var make_adder = (function (inc) {
    var counter = 0;
    return function () {
        return counter += inc;
    } });


var x = make_adder(5);
console.log(x());
console.log(x());
console.log(x());

var y = make_adder(7);
console.log(y());
console.log(y());
console.log(y());

x = make_adder(10);
console.log(x());
console.log(x());
console.log(x());


