var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
}
else if (itemCount > 5 && itemCount < 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("you got ".concat(discount, "% discount"));
var a;
a = "loki";
typeof a === "string" ? console.log("string") : console.log("not sting");
