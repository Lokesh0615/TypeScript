var aa = "loki";
// for(let i=0; i<aa.length;i++){
//     console.log(aa.charAt(i), i);
// }
// let i=0;
// for(; i<aa.length;i++){
//     console.log("; i<aa.length:i++");
// }
// for(let i=0;;i++){
//     console.log(i);
//     if(i>aa.length) break;
// }
var b = 0;
for (;;) {
    console.log("b", b);
    b++;
    if (b > aa.length)
        break;
}
