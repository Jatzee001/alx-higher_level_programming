#!/usr/bin/node

// Get the first argument passed to the script
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg);

// Check if the argument is a valid number
if (isNaN(num) || num < 1) {
  console.log("Missing number of occurrences");
} else {
  // Loop to print "C is fun" x times
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}