var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
//add a newline at the end of file
array[array.length] = '';
let count = 0;
let valid = 0;

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

let passportString = '';
let passports = []
array.forEach((element, index) => {
    let newPassport = element.length == 0
    if (newPassport) {
        //Check Previous Passport
        let ecl = passportString.includes('ecl:')
        let pid = passportString.includes('pid:')
        let eyr = passportString.includes('eyr:')
        let hcl = passportString.includes('hcl:')
        let byr = passportString.includes('byr:')
        let iyr = passportString.includes('iyr:')
        let cid = passportString.includes('cid:')
        let hgt = passportString.includes('hgt:')

        if (ecl && pid && eyr && hcl && byr && iyr && cid && hgt) {
            console.log(`Valid Passport ${passportString}`)
            valid++;
        } else if (ecl && pid && eyr && hcl && byr && iyr && hgt) {
            //ignore missing cid field
            console.log(`Missing CID Passport ${passportString}`)
            valid++;
        } else {
            console.log(`Invalid Passport ${passportString}`)

        }

        //Reset for new line
        passports[count] = passportString;
        passportString = '';
        count++;

    } else {
        if (passportString.length > 0) {
            passportString = passportString + ' ' + element;
        } else {
            passportString = element;
        }
    }
    console.log(`${index}: ${element} ${newPassport}`)

});

console.log(`Answer: ${count} total passports, ${valid} are valid`)
