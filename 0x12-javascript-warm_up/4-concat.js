#!/usr/bin/node

// Get the two arguments passed to the script
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Use console.log(...) to print the output in the specified format
console.log(arg1 + ' is ' + (arg2 ? arg2 : 'undefined'));