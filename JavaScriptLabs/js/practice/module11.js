//Create Employee Object using the Anonymous Object Literal Return Pattern
var Employee = (function () {

    let name;
    let age;
    let salary;
    let getAge = function () {
        return age;
    };
    let getSalary = function () {
        return salary;
    };
    let getName = function () {
        return name;
    };
    //return object with public methods
    return {
        setAge: function (newAge) {
            age = newAge;
        }
        , setSalary: function (newSalary) {
            salary = newSalary;
        }
        , setName: function (newName) {
            name = newName;
        }
        , increaseSalary: function (percentage) {
            salary += salary * percentage;
        }


        , incrementAge: function (newAge) {
            // uses private getAge( )
            setAge(getAge() + 1);
        }
    }
})();

var emp1 = Employee;
console.log(emp1);

