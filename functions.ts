function add(a: number, b:number):number{
    return a+b;
}
console.log(add(10,34));

function echo(msg:string):void|number{
    console.log(msg);
    return 5;
    
}
console.log( echo("this is string parametered void function"));

let ad: (a:number, b:number)=>number=function (x:number, y:number){
    return x+y;
}
console.log(ad(234,42));

function Snn(a:string, b:number):any{
    return a;
}
console.log(Snn("aaaaa", 23));

// optional parameters
function multi(a:number, b:number, c?:number):number{
    if(c!=undefined){
        return a+b+c;

    }else{
        return a+b;
    }
}

console.log(multi(2,3));
console.log(multi(2,3,4));


// defalut parameters
function applyDiscount(a:number, discount:number=0.05, c?:number, d?:number):number{
    return a*discount;
}

console.log(applyDiscount(234567));


// ...rest parameter
function addTotal(...Num:number[]):number{
    let total=0;
    Num.forEach((x)=> total=total+x)
    return total;
}
console.log(addTotal(9))
// console.log(addTotal([9,9,09])) it wont work
console.log(addTotal(9))
console.log(addTotal(8, 3,6))
console.log(addTotal(1,4))

// function overload
function sum(a:number, b:number):number;
function sum(a:string, b:string):string;
function sum(a:any, b:any):any{
    return a+b;
}

console.log(sum(12,23));
console.log(sum("skdj", "woieu"));
console.log(sum(987, 12));

// anotherExample
function count():number;
function count(target:number):number[];
function count(target?: number):number|number[]{
    let c:number=0;
    if(target){
        let value:number[]=[];
        for(let start=0;start<=target;start++){
            value.push(start);
        }
        c=target;
        return value;

    }
    return ++this.c;
}

console.log(count());
console.log(count(2));
console.log(count(23454));











