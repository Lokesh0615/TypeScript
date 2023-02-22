// generics
// <T> we can use anything instead of T
function user(data) {
    return data;
}
console.log(user(567));
console.log(user("skjdfh"));
function add(data) {
    var t = 0;
    for (var i = 0; i < data.length; i++) {
        t = t + data[i];
    }
    return t;
}
var aaa = [123, 23, 23, 234];
console.log(add(aaa));
console.log(typeof (add(aaa)));
