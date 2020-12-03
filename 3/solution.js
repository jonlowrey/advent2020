var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
let correct = 0;



const isAnswer = (element) => {
    return array.includes((2020 - element).toString())
}

array.forEach((element, index) => {
    const minRegex = /([0-9]{1,2})-([0-9]{1,2}) ([a-z]): ([a-z]+)/
    let tokens = element.match(minRegex)
    let min = tokens[1];
    let max = tokens[2];
    let letter = tokens[3];
    let password = tokens[4];
    const regex = new RegExp(`[^${letter}]`, 'g');
    let count = password.replace(regex,"").length;
    if(count >= min && count<=max){
        console.log('YEP');
        correct++;
    }
    console.log(`${index}: ${min} ${max} ${letter} ${count} ${tokens} ${regex}`)

});

console.log(`Answer: ${correct} valid passwords`)