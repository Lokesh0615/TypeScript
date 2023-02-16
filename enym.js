var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["june"] = 5] = "june";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["aug"] = 7] = "aug";
    Month[Month["sep"] = 8] = "sep";
    Month[Month["oct"] = 9] = "oct";
    Month[Month["nov"] = 10] = "nov";
    Month[Month["dec"] = 11] = "dec";
})(Month || (Month = {}));
;
var whichMonth;
whichMonth = Month.Jan;
console.log(whichMonth);
console.log(Month[0]);
console.log(Month[3]);
function testMonth(m) {
    console.log(Month[m]);
}
testMonth(Month.Jan);
