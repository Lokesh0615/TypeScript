// generics
// <T> we can use anything instead of T
function user<T>(data:T):T{
    return data;
}
console.log(user(567));
console.log(user("skjdfh"));


function add<T>(data:T[]):T{
    let t:number=0;
    for(let i=0; i<data.length;i++){
        t=t+<number>data[i];
    }
    return <T>t;
}
let aaa=[123,23,23,234];
console.log(add<number>(aaa));
console.log(typeof(add<number>(aaa)));


