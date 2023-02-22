// class Person{
//     ssn:number;
//     firstName:string;
//     lastName:string;

//     constructor(ssn:number, firstname:string, lastName:string){
//         this.ssn=ssn;
//         this.firstName=firstname;
//         this.lastName=lastName;
//     }
//     getFullName():string{
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let p1=new Person(1234, "lokesh", "N");
// console.log(p1);
// console.log(p1.getFullName());

// class accsses
// private , protected, public
// class Person{
//    protected ssn:number;
//    private fName:string;
//    private lName:string;

//     constructor(ssn:number, fName:string, lName:string){
//         this.ssn=ssn;
//         this.fName=fName;
//         this.lName=lName
//     };
//   public  getfullname():string{
//         return `${this.fName} ${this.lName}`;
//     };

// }

// let p2=new Person(123, "loki", "N");
// console.log(p2.getfullname());


// to shoten the code we can write above class code like this
// class Person{
//     constructor(protected ssn:number, private fName:string, private lName:string){
//         this.ssn=ssn;
//         this.fName=fName;
//         this.lName=lName;
//     }
//     public getFullName():string{
//         return `${this.fName} ${this.lName}`
//     }
// }

// let p3=new Person(1234,"lok", "N");
// console.log(p3.getFullName());

// readonly modifier

// class Person{
//     readonly BOD:number=23;
//     constructor(BOD:number){
//         this.BOD=BOD
//     }
//     getBOD(){
//         return this.BOD;
//     }
// }
    
//     // let p3=new Person(new Date());
//     // let p3=new Person(new Date(1990, 12,15))
//     let p3=new Person(233)
//     console.log(p3.getBOD());


// getters and setters, while calling them, we callas a variable not a function;
// class Person{
//     private _age:number;
//     private _fname:string;
//     private _lname:string;

//     // getters
//     public get getage():number{
//         return this._age;
//     }

//     // setters
//     public set setage(theAge:number){
//         if(theAge<=0||theAge>=100){
//             throw new Error("the age is inavlid")
//         }this._age=theAge;
//     }

// }

// let p1=new Person();
// // for setters we have to use eqvals , not as a function parameter
// // p1.age(10);
// p1.setage=10;
// // seters and getters not a functions, they are like variables
// // console.log(p1.age(19)); it is error

// console.log(p1.getage);
// let ename:string="   lok   ldooo   ";
// // console.log(ename.trim()); it wont remove the spaces in centre , for that purpose use replace method;
// console.log(ename.replaceAll(" ", ""));



// inheritance


// class Employee extends Person{
//     constructor(ssn:number, firstName:string, lastName:string){
//         super(ssn, firstName, lastName );  
//     }
// };

// let em= new Employee(987,"loki","n");
// console.log(em.getFullName());
// console.log(em.ssn);

// method overloading
// class Employee extends Person{
//     constructor(ssn:number, firstName:string, lastName:string){
//         super(ssn, firstName, lastName );  
//     }
//     getFullName(): string {
//         return super.getFullName()+`i am method overloading`;
//     }
// };


// let em1=new Employee(23, "kkkk","lll");
// console.log(em1.getFullName());

// // static properies and methods
// class Employee{
//     static he:number=0;
//     constructor(private fName:string, private lName:string){
//         Employee.he++;
//     }

//     public static gethe():number{
//         return Employee.he;
//     }
//     g():number{
//         return Employee.he;
//     }
// }

// let e1=new Employee("lokesh","N");
// let e2=new Employee("llll", "kk");
// // we cant accsses the static methods in new objects
// // console.log(e1.geth);
// // console.log(e1.he);

// console.log(Employee.gethe());
// console.log(e1.g());

// abstract class
abstract class FullTimeEmployee{
    constructor(fname:string, lname:string) {
        
    }
    abstract salary():number;
}
class em1 extends FullTimeEmployee{
    sal:number;
    constructor(fname:string, lname:string, sal:number) {
        super(fname, lname);
        this.sal=sal;
    }
    salary(): number {
        return this.sal;
    }
}
let ee1=new em1("lokesh", "n",25);
console.log(ee1.salary());







