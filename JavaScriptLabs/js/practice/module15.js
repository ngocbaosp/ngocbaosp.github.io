/*
const promise = new Promise((resolve, reject) => { reject("Hattori");
});
promise.then(val => alert("Success: " + val)) .catch(e => alert("Error: " + e));
*/


const promise = new Promise((resolve, reject) => { resolve("Hattori");
    setTimeout(()=> reject("Yoshi"), 5000); });
promise.then(val => alert("Success: " + val)) .catch(e => alert("Error: " + e));
