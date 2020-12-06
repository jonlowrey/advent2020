//This solution is off by 1, not sure why. ¯\_(ツ)_/¯ 
var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
//add a newline at the end of file
array[array.length] = '';
let count = 0;
let valid = 0;


//Regex
let eclRegex = /ecl:(amb|blu|brn|gry|grn|hzl|oth)/g
let pidRegex = /pid:([0-9]{9})/
let eyrRegex = /eyr:([0-9]{4})/
let hclRegex = /hcl:(#[0-9a-f]{6})/
let byrRegex = /byr:([0-9]{4})/
let iyrRegex = /iyr:([0-9]{4})/
let cidRegex = /cid:()/
let hgtRegex = /hgt:([0-9]{2,3}(in|cm))/

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

const validBirth = (str) => {
    let grps = str.match(byrRegex)
    let birthday = parseInt(grps[1])
    if (birthday >= 1920 && birthday <= 2002) {
        return true;
    }
    console.log(`Birthday: ${birthday}`)
    return false;
}


const validIyr = (str) => {
    let grps = str.match(iyrRegex)
    let iyr = parseInt(grps[1])
    if (iyr >= 2010 && iyr <= 2020) {
        return true;
    }
    console.log(`IYR: ${iyr}`)
    return false;
}

const validEyr = (str) => {
    let grps = str.match(eyrRegex)
    let eyr = parseInt(grps[1])
    if (eyr >= 2020 && eyr <= 2030) {
        return true;
    }
    console.log(`EYR: ${eyr}`)
    return false;
}

const validHgt = (str) => {
    let grps = str.match(hgtRegex)
    if (!grps) {
        return false;
    }
    let hgt = parseInt(grps[1])
    let unit = grps[2]

    if (unit === 'cm') {
        if (hgt >= 150 && hgt <= 193) {
            return true;
        }
    }

    if (unit === 'in') {
        if (hgt >= 59 && hgt <= 76) {
            return true;
        }
    }

    console.log(`Invalid HGT: ${hgt}`)
    return false;
}

const regexValidate = (passportString) => passportString.match(eclRegex)&&passportString.match(hclRegex) && passportString.match(pidRegex) && validBirth(passportString) && validIyr(passportString) && validEyr(passportString) && validHgt(passportString)

function validatePassport(passport) {
    let ecl = passportString.includes('ecl:')
    let pid = passportString.includes('pid:')
    let eyr = passportString.includes('eyr:')
    let hcl = passportString.includes('hcl:')
    let byr = passportString.includes('byr:')
    let iyr = passportString.includes('iyr:')
    let cid = passportString.includes('cid:')
    let hgt = passportString.includes('hgt:')


    if (ecl && pid && eyr && hcl && byr && iyr && cid && hgt) {
        if ( regexValidate(passportString)) {
            console.log(`Valid Passport ${passportString}`)
            valid++;
        }

    } else if (ecl && pid && eyr && hcl && byr && iyr && hgt) {
        //ignore missing cid field
        if (regexValidate(passportString)) {
            console.log(`Missing CID Passport ${passportString}`)
            valid++;
        }
    } else {
        console.log(`Invalid Passport ${passportString}`)

    }
}

let passportString = '';
let passports = []
array.forEach((element, index) => {
    let newPassport = element.length == 0
    if (newPassport) {
        //Check Previous Passport
        validatePassport(passportString);

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
