//Create Employee Object using the Locally Scoped Object Literal Pattern
var Employee = (function () {

    let name;
    let age;
    let salary;
    let myObject={};
    let getAge = function () {
        return age;
    };
    let getSalary = function () {
        return salary;
    };
    let getName = function () {
        return name;
    };
    myObject.setAge= function (newAge) {
        age = newAge;
    };
    myObject.setSalary= function (newSalary) {
        salary = newSalary;
    };
    myObject.setName= function (newName) {
        name = newName;
    };
    myObject.increaseSalary= function (percentage) {
        salary += salary * percentage;
    };
    myObject.incrementAge= function (newAge) {
        // uses private getAge( )
        setAge(getAge() + 1);
    };
    return myObject;

})();

var emp1 = Employee;
console.log(emp1);
