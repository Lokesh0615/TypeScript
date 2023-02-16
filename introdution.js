function add(x, y) {
    console.log(x + y);
}
add(4, 5);
add(5, 5);
var a = "loki";
var b = 10;
// b="lokes"; error
function getId(id) {
    return {
        id: id,
        name: "aws ".concat(id),
        price: 99.5
    };
}
console.log(getId(9));
var product = getId(10);
console.log("the product".concat(product.name));
var c = document.getElementById("intro");
c.innerHTML = "j";
