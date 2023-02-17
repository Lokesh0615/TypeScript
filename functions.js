function add(a, b) {
    return a + b;
}
console.log(add(10, 34));
function echo(msg) {
    console.log(msg);
    return 5;
}
console.log(echo("this is string parametered void function"));
var ad = function (x, y) {
    return x + y;
};
console.log(ad(234, 42));
function Snn(a, b) {
    return a;
}
console.log(Snn("aaaaa", 23));
// optional parameters
function multi(a, b, c) {
    if (c != undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log(multi(2, 3));
console.log(multi(2, 3, 4));
// defalut parameters
function applyDiscount(a, discount, c, d) {
    if (discount === void 0) { discount = 0.05; }
    return a * discount;
}
console.log(applyDiscount(234567));
// ...rest parameter
function addTotal() {
    var Num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Num[_i] = arguments[_i];
    }
    var total = 0;
    Num.forEach(function (x) { return total = total + x; });
    return total;
}
console.log(addTotal(9));
// console.log(addTotal([9,9,09])) it wont work
console.log(addTotal(9));
console.log(addTotal(8, 3, 6));
console.log(addTotal(1, 4));
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 23));
console.log(sum("skdj", "woieu"));
console.log(sum(987, 12));
function count(target) {
    var c = 0;
    if (target) {
        var value = [];
        for (var start = 0; start <= target; start++) {
            value.push(start);
        }
        c = target;
        return value;
    }
    return ++this.c;
}
console.log(count());
console.log(count(2));
console.log(count(23454));
