interface BusinessPartner{
    name:string;
    credit:number;
}
interface Identity{
    id:number;
    name:string;
}
interface Content{
    email:string;
    phone:number;
};
let a:Content={
    email:"sdm",
    phone:123
};

type Employee=Identity & Content;

let e:Employee ={
    id:3,
    name:"lokesh",
    email:"looo",
    phone:23
}
type EM=Identity & BusinessPartner & Content;
let ee:EM={
    id:23,
    name:"lokesh",
    email:"flds",
    phone:123,
    credit:23   
};