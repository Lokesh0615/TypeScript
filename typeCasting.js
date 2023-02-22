// by using "as" keyword
var i = document.querySelector("input[type='text']");
console.log(i);
// console.log(i.value); value property is not there for element
var j = document.querySelector('input[type="text]');
// console.log(j.value);
// we can do like this also
var k = i;
// console.log(k.value);
// by using the <> operator
var ii = document.querySelector("input[type='text']");
function gettNetPrice(n, b, c) {
    var netPrice = n * (1 - b);
    return c ? "$".concat(netPrice) : netPrice;
}
var aa = gettNetPrice(12345, 0.2, true);
console.log(aa);
console.log(typeof aa);
var bb = gettNetPrice(1234, 0.1, false);
console.log(typeof bb, bb);
