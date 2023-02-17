function switchMonth(m: string | number) {
    switch (m) {
        case "Jan": console.log("its jan");
            break;
        case "Feb": console.log("its feb");
            break
        case "Mar": console.log("Its match");
            break;
        case "Apr": console.log("its april");

        default:
            break;
    }
}

switchMonth("Jan");


let month: number;
month = 2;
switch (month) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: console.log("its less than or eqval to 6 monts");
        break;





    default:
        break;
}