
var a = [0,1,2,3,4,5];

logObject(a.pop(),"Pop a");
logObject(a,"a = ");
logObject(a.slice(2),"a.slice2");
logObject(a.slice(1,3),"a.slice13");

logObject(a.slice(-1,3),"a.slice-13");

logObject(a.shift(),"a.shift");
logObject(a,"a = ");

logObject(a.unshift(-1),"a.unshift");
logObject(a,"a = ");

