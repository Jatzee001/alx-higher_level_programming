#!/usr/bin/node

// Get the first argument passed to the script
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg);

// Use console.log(...) to print the output
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}