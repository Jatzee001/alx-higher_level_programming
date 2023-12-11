#!/usr/bin/node

// Get the arguments passed to the script
const args = process.argv.slice(2);

// Convert each argument to an integer
const numbers = args.map(Number);

// Sort the numbers in descending order
numbers.sort((a, b) => b - a);

// Use console.log(...) to print the output
if (numbers.length <= 1) {
  console.log(0);
} else {
  console.log(numbers[1]);
}