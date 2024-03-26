let str: string;
// str = "05:55"
// str = "05:30"
//
// str = "04:50"
// str = "04:10"
//
// str = "09:50"
// str = "09:10"
//
// str = "10:50"
// str = "10:10"
//
// str = "14:50"
// str = "14:10"
//
// str = "15:50"
// str = "15:10"
//
// str = "20:50"
// str = "20:10"
//
// str = "24:50"
// str = "24:10"
// str = "00:00"
str = "23:50"

console.log(palindrome(str));

function palindrome(date: string): string {

    let hoursMinutes: string[] = date.split(':');
    let hours: number = +hoursMinutes[0];
    let hoursReverse: number = +(reverse(hoursMinutes[0]));


    if (hoursReverse > +hoursMinutes[1] &&
        (hours < 6
            || hours > 19
            || (hours > 9 && (hours < 15))
        )) {
        return hours + ":" + hoursReverse;
    } else if (hours === 24 || hours === 23) {
        return "00:00";
    } else if (hours > 14 && hours < 19) {
        hours = 19
    } else if (hours > 6 && hours < 10) {
        hours = 9
    }
    let res = hours < 10 ? "" + hours + 1 : hours + 1 + ""
    return res + ":" + reverse(res);
}

function reverse(str: string): string {
    return (str[1] || "0") + str[0]
}