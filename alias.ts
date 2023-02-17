type StringOrNum =string| number;

const logDetails =(uid: StringOrNum, item:string)=>{
    console.log(`${item} has a uid of ${uid}`);
    
}
const greet=(user:{name:string, uid:StringOrNum})=>{
    console.log(`${user.name} say hello`);
    
}

logDetails("12lo43", "book");
greet({
    name:"lokesh",
    uid:"12lo33"
});


