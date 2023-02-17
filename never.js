function tryReturn() {
    // return true;
    // returnes  undifend
}
console.log(tryReturn());
function apiErr(msg, code) {
    throw { message: msg, APICode: code };
}
console.log((apiErr("server side error", 500)));
