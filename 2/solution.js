var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
let expense1, expense2, expense3, solution;



const isAnswer = (element) => {
    return array.includes((2020 - element).toString())
}

array.forEach((element, index) => {
    console.log(index + ': ' + element);
    let int1 = parseInt(element);
    array.forEach((element2) => {
        let int2 = parseInt(element2);

        array.forEach((element3) => {
            let int3 = parseInt(element3);

            let val = int1 + int2 + int3
            if (val == 2020) {
                expense1 = +element;
                expense2 = +element2;
                expense3 = +element3;
                solution = expense1 * expense2 * expense3;
            }
        });

    });


});

console.log(`Answer: ${expense1} * ${expense2} * ${expense3} = ${solution}`)