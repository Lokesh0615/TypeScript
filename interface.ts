interface userType{
    name:string,
    lname:string,
    age:number,

};

let users:userType ={
    name:"lokesh",
    lname:"N",
    age:22
}

// person is a parameter and a object 
function getFullName(person:userType):string{
    return `${person.name}${person.lname}'s age is ${person.age}`;
}
let jonh:userType={
    name:"lok",
    lname:"esh",
    age:123
};
console.log(getFullName(jonh));

// optional parameters
interface Employee{
    fname:string;
    mname?:string;
    lname:string;
};

let ee1:Employee={
    fname:"lokesh",
    lname:"N"
}

// function type

interface StringFormat{
    (str: string, isUpper:boolean):string
}

let format:StringFormat;
format=function (name:string, isUpper:boolean):string{
    return isUpper ? name.toLocaleLowerCase():name.toLocaleUpperCase();
}

console.log(format("hi", false));
console.log(format("HI",true));

// interface extends
interface Mailable{
    send(email:string):boolean;
    queue(email:string):boolean;
}
interface AA{
    send(email:string):boolean;
}
// if both send methods have same parameters, then its okay, otherwise error
 interface FutureMailable extends Mailable, AA{
    later(email:string, after:number):boolean;
 }
// class a implements

class Mail implements FutureMailable{
    later(email: string, after: number): boolean {
        console.log(`send email to ${email} in after ${after}ms`);
        return true;
        
    }
    send(email: string): boolean {
        console.log(`sent mail to${email}`);
        return true;
        
    }
    queue(email: string): boolean {
        console.log(`queue an email to ${email}`);
        return true;
    }
}
// interface extends classes
class Control{
    private state:boolean;
}
interface StatefulControl extends Control{
    enable():void;
}
class Button extends Control implements StatefulControl{
    enable(): void {
        
    }
}








