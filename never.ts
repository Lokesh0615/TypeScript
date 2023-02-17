function tryReturn(){
    // return true;
    // returnes  undifend
}
console.log(tryReturn());

function apiErr(msg, code):never{
 throw{message:msg, APICode:code}
 
}
console.log((apiErr("server side error", 500)));
function aa(){
    throw("heloo erorr")
}

// we  can only give void, never
function ss(){
    console.log("kf");
    
}

