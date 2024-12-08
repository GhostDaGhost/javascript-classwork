const readline = require('readline-sync');

// Ask for input and prepare output variable
let input = readline.question('Please enter a number? ');
let output = parseInt(input).toString(2);

// Get output through converter
console.log(input + ' is the same as ' + output);
