var make_adder = (function (inc) {
    var counter = 0;
    return function () {
        return counter += inc;
    } })(8);

console.log(make_adder());
console.log(make_adder());
console.log(make_adder());
