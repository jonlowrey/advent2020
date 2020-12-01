var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
let expense1, expense2, solution

const isAnswer = (element) => {
    return array.includes((2020-element).toString())
}
array.forEach((element, index) => {
    console.log(index + ': ' + element);

    let search = 2020 - element;
    console.log(search);
    searchString = search.toString();

    if (array.includes(searchString)) {
        expense1 = element;
        expense2 = search;
        solution = element * search
    }


});

console.log(`Answer: ${expense1} * ${expense2} = ${solution}`)