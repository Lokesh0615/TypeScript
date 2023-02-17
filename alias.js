var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    console.log("".concat(user.name, " say hello"));
};
logDetails("12lo43", "book");
greet({
    name: "lokesh",
    uid: "12lo33"
});
