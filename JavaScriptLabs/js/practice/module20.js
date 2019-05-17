var Module = (function () {

    var privateMethod = function () {
        // private
        console.log("this is private method");
    };

    var someMethod = function () {
        privateMethod();
        console.log("this is  some method");
        // public
    };

    var anotherMethod = function () {
        // public
    };

    return {
        someMethod: someMethod,
        anotherMethod: anotherMethod
    };

})();

Module.extenFunc = function () {

    Module.someMethod();

}

var ModuleTwo = (function (Module) {

    Module.extension = function () {
        Module.someMethod();
        //can not call direct someMethod here
        //Module.privateMethod();
        console.log("this is a 3 method");
    };

    return Module;

})(Module || {});

