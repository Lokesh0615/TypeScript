// by using "as" keyword
let i=document.querySelector("input[type='text']");
console.log(i);
// console.log(i.value); value property is not there for element
let j=document.querySelector('input[type="text]') as HTMLInputElement;
// console.log(j.value);

// we can do like this also
let k=i as HTMLInputElement;
// console.log(k.value);



// by using the <> operator
let ii=<HTMLInputElement>document.querySelector("input[type='text']");


// type assertion

function gettNetPrice(n:number, b:number, c:boolean):string|number{
    let netPrice=n*(1-b);
    return c? `$${netPrice}`:netPrice;
}


let aa=gettNetPrice(12345,0.2, true) as string;
console.log(aa);
console.log(typeof aa);
let bb =<number>gettNetPrice(1234,0.1, false);
console.log(typeof bb, bb);





