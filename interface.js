var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var users = {
    name: "lokesh",
    lname: "N",
    age: 22
};
// person is a parameter and a object 
function getFullName(person) {
    return "".concat(person.name).concat(person.lname, "'s age is ").concat(person.age);
}
var jonh = {
    name: "lok",
    lname: "esh",
    age: 123
};
console.log(getFullName(jonh));
;
var ee1 = {
    fname: "lokesh",
    lname: "N"
};
var format;
format = function (name, isUpper) {
    return isUpper ? name.toLocaleLowerCase() : name.toLocaleUpperCase();
};
console.log(format("hi", false));
console.log(format("HI", true));
// class a implements
var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.prototype.later = function (email, after) {
        console.log("send email to ".concat(email, " in after ").concat(after, "ms"));
        return true;
    };
    Mail.prototype.send = function (email) {
        console.log("sent mail to".concat(email));
        return true;
    };
    Mail.prototype.queue = function (email) {
        console.log("queue an email to ".concat(email));
        return true;
    };
    return Mail;
}());
// interface extends classes
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.enable = function () {
    };
    return Button;
}(Control));
