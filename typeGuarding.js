// typeof
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("invalid arguments");
}
// instanceof
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'sign a new contrac with the customer' : 'credit issue';
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'sing a new suplier' : "need to evaluate further ";
    }
    return message;
}
var a = new Supplier();
console.log(signContract(a));
// in
function inSign(partner) {
    var message;
    if ("isCreditAllowed" in Customer) {
        message = partner.isCreditAllowed ? 'sign a new contact with the customer' : 'credut issue';
    }
    else {
        message = partner.isInShortList ? 'sing a new suplier' : "need to evaluate further ";
    }
    return message;
}
var b = new Customer();
console.log(inSign(b));
