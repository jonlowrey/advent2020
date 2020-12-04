var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");

console.log('hello!');
console.log('There are ' + array.length + ' lines')
let count = 0;

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}


array.forEach((element, index) => {
    // I originally thought you needed to find some pattern in the first
    // line and then wrap based on that, directions could've been clearer.


    let positon = (3 * index) % element.length;
    if(element.charAt(positon) === '#'){
        count++;
        element = setCharAt(element, positon, 'X');

    }else{
        element = setCharAt(element, positon, 'O')
    }
    console.log(`${index}: ${element} ${positon}`)

});

console.log(`Answer: ${count} collisons`)