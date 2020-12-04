var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split("\n");
const tree = '🎄';
const snow = '⛄️'
const flake = '❄️';
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// uWU ABSTWACTION TIME

function getCollisions(right, down) {
    let collisions = 0
    let rightIndex = 0;
    for (let index = 0; index < array.length; index += down) {
        let element = array[index];
        let positon = (rightIndex) % element.length;
        if (element.charAt(positon) === '#') {
            collisions++;
            element = setCharAt(element, positon, '💥');
        }
        rightIndex += right
        element = element.replace(/\./g, snow);

        element = element.replace(/\./g, snow);
        element = element.replace(/#/g, tree);


        console.log(`${index}: ${element} ${positon}`)
    }
    return collisions;
}


async function init() {
    console.log('hello!');
    await sleep(1000);
    console.log('There are ' + array.length + ' lines...')
    await sleep(1000);
    console.log('Finding collisions...')
    await sleep(2000);
    console.log('NOW!')
    await sleep(250);

    let one = getCollisions(1, 1);
    let three = getCollisions(3, 1);
    let five = getCollisions(5, 1);
    let seven = getCollisions(7, 1);
    let stupid = getCollisions(1, 2);

    let answer = one * three * five * seven * stupid;


    console.log(`
Slope of One: ${one} collisons
Slope of Three: ${three} collisons
Slope of Five: ${five} collisons
Slope of Seven: ${seven} collisons
Slope of 1/2: ${stupid} collisons
Answer: ${answer}
`);
}

init();