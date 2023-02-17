let emplpoyee = {
    firstNmae: "loki",
    age: 23,
    title: "developer"
};
console.log(emplpoyee);
console.log(emplpoyee.firstNmae);

// emplpoyee.firstNmae=122error
emplpoyee.firstNmae = "lloooo";

let emp: {
    firstname: string;
    lastname: string;
    age: number
} = {
    firstname: "lokokw", 
    lastname: "wf", 
    age: 23
};


// in interface we difine the type of properties and use this interface as a type for objects
interface emplyies{
    name:string,
    age:number,
    address:string,
    ph:number
};

let e1:emplyies={
    name:"loki",
    age:23,
    address:"23fdsa",
    ph:23443
};

let em:{}={ firstname: "lokokw", 
lastname: "wf", 
age: 2};
// console.log(em.age);it will execute but shows error while compiling

let aaaaaaa:object|Array<string|number> ={
    n:"lkod"
}

// try object ot array
let arr:any[]=Object.values(e1);
arr.forEach((x)=>console.log(x))
