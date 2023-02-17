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
// getters and setters
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "getage", {
        // getters
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setage", {
        // setters
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 100) {
                throw new Error("the age is inavlid");
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p1 = new Person();
// for setters we have to use eqvals , not as a function parameter
// p1.age(10);
p1.setage = 10;
// seters and getters not a functions, they are like variables
// console.log(p1.age(19)); it is error
console.log(p1.getage);
