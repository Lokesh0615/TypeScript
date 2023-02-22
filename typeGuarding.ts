// typeof

type alpha=string|number;
function add(a:alpha, b:alpha){
    if(typeof a==="number" && typeof b==="number"){
        return a+b;
    }
    if(typeof a==="string" && typeof b==="string"){
        return a.concat(b);
    }
    throw new Error("invalid arguments")
}

// instanceof
class Customer{
    isCreditAllowed():boolean{
        return true;
    }
}

class Supplier{
    isInShortList():boolean{
        return true;
    }
}

type BusinessPartner=Customer|Supplier;
function signContract(partner:BusinessPartner):string{
    let message:string;
    if(partner instanceof Customer){
        message=partner.isCreditAllowed()?'sign a new contrac with the customer':'credit issue'

    }
    if(partner instanceof Supplier){
        message=partner.isInShortList()?'sing a new suplier':"need to evaluate further ";
    }
    return message;
}
let a=new Supplier();

console.log(signContract(a));

// in
function inSign(partner:BusinessPartner):string{
    let message:string;
    if("isCreditAllowed" in Customer){
        message=partner.isCreditAllowed?'sign a new contact with the customer':'credut issue';
    }else{
        message=partner.isInShortList?'sing a new suplier':"need to evaluate further ";

    }
    return message;
}
let b=new Customer();
console.log(inSign(b));

// user defined
    function isCustomer(partner:any):partner is Customer{
        return partner instanceof Customer;
    }

    function sign(partner:BusinessPartner):string{
        let message:string;
        if(isCustomer(partner)){
            message=partner.isCreditAllowed()?'sign a new contact with the customer':'credut issue';
        }else{
            message=partner.isInShortList()?'sing a new suplier':"need to evaluate further ";
    
        }
        return message;
    }
