function calcTip() {
    var subtotalElem = document.getElementById('subtotal');
    var tipElem =document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = parseFloat(subtotalElem.value);
    var tip = parseFloat(tipElem.value);
    var total = subtotal+tip*subtotal/100;
    /*
    console.log(subtotalElem.value);
    console.log(tipElem.value);
    console.log(total);
    */
    totalElem.innerHTML = '$' + total;
}