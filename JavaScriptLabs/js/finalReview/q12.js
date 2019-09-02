var Account = (function () {

    var Balance = 0;
    var AcctNo = 0;
    var Owner = "";
    var getBalance = function () {
        return Balance;
    };
    var setBalance = function (newBalance) {
        Balance = newBalance;
    };
    var open = function (balance, acctno, owner) {
        setBalance(balance);
        AcctNo = acctno;
        Owner = owner;

    };
    var Deposit = function (amount) {
        setBalance(getBalance() + amout);

    };

    return {
        Open: open,
        Deposit: Deposit
    };

})();