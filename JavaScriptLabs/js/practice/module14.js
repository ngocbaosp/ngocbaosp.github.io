var Employee = (function(){

    let name;
    let age;
    let salary;

    let setAge = function(newAge){
        age=newAge;
    };
    let setSalary = function(newSalary){
        salary = newSalary;
    };
    let setName = function(newName){
        name = newName;
    };
    let getAge = function(){
        return age;
    };
    let getSalary = function(){
        return salary;
    };
    let getName = function(){
        return name;
    };
    let increaseSalary = function(percentage){
        salary+=salary* percentage;
    };
    let incrementAge = function(newAge){
        // uses private getAge( )
        setAge(getAge()+1);
    };

    return{
        setAge: setAge,
        setSalary:setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
        ,getAge:getAge
    };
});

Employee.address=null;
Employee.setAddress=function (newAddress) {
    this.address=newAddress;
};
Employee.getAddress=function () {
    return this.address;
};

var emp1 = Employee;
emp1.setAddress("123 TD");
console.log(emp1.address);
console.log(emp1.getAddress());

