var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
let correct = 0;



const isAnswer = (one, two) => {
    if(one && two) {return false}
    if(one || two) {return true}
    return false
}

array.forEach((element, index) => {
    const minRegex = /([0-9]{1,2})-([0-9]{1,2}) ([a-z]): ([a-z]+)/
    let tokens = element.match(minRegex)
    let min = parseInt(tokens[1]);
    let max = parseInt(tokens[2]);
    let letter = tokens[3];
    let password = tokens[4];
    const regex = new RegExp(`[^${letter}]`, 'g');

    const one = (password.charAt(min-1) == letter);
    const two = (password[max-1] == letter);
    if(isAnswer(one,two)){
        console.log('YES')
        correct++;
    }

    console.log(`${index}: ${min}:${one} ${max}:${two} ${password}`)

});

console.log(`Answer: ${correct} valid passwords`)