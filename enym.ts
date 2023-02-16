enum Month{
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "june",
    "Jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
};
let whichMonth:Month;
whichMonth=Month.Jan;
console.log(whichMonth);
console.log(Month[0]);
console.log(Month[3]);

function testMonth(m:Month){
    console.log(Month[m]);
    
}
testMonth(0); 
testMonth(Month.Jan);
whichMonth=0;



