"use strict";
////////////////////////////
var account = (function () {
    var name;
    var deposit;

    return {
        accountName: function () {
            return name;
        },
        balance: function () {
            return deposit;
        },
        createAccount: function () {
            name = document.getElementById("txtAccName").value;
            deposit = document.getElementById("txtDeposit").value;

        }
    }
});
////////////////////////////
(function () {

    let accountInfoList = [];
    window.onload = onLoad;

    function onLoad() {
        document.getElementById("btnCreateAcc").onclick = createAcc;

    }

    function createAcc() {
        let acc = account();
        acc.createAccount();

        if (validateData(acc.accountName())) {
            if (validateData(acc.balance()) === false)
                return;
        } else
            return;

        accountInfoList.push(acc);
        displayAccount();
    }

    function displayAccount() {

        console.log(accountInfoList);
        let s = "";
        for (let i = 0; i < accountInfoList.length; i++) {
            s = s + "Account Name:  " + accountInfoList[i].accountName();
            s = s + "   Deposite: " + accountInfoList[i].balance() + "\n";

        }
        document.getElementById("txtOutput").value = s;

    }
    function validateData(data) {

        if (data==="") {
            alert("Please input account name and deposit");
            return false;
        }
        return true;

    }
})();