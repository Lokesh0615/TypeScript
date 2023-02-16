function add(x:number, y:number ){
    console.log(x+y);
    
}
add(4,5);
add(5, 5);
let a:string ="loki";
let b=10;
// b="lokes"; error

function getId(id:number){
    return{
        id:id,
        name:`aws ${id}`,
        price:99.5
    }
}
console.log(getId(9));
let product=getId(10);
console.log(`the product${product.name}`);

let c:any=document.getElementById("intro");
c.innerHTML="j";


