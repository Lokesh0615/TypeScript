// union types
// in union whichever we mention, it all thats only
let dat: string | number | boolean = "hloo";
dat = 10;
dat = true;

function add(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        console.log("a+b");
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        console.log("a.conact(b)");
        return a.concat(b);

    }
}

console.log( add("adf", "asd"));
console.log(add("asd", 123));

console.log(add(23,23));
