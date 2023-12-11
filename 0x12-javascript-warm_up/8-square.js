#!/usr/bin/node

// Get the first argument passed to the script
const arg = process.argv[2];

// Convert the argument to an integer
const size = parseInt(arg);

// Check if the argument is a valid number
if (isNaN(size) || size < 1) {
  console.log("Missing size");
} else {
  // Loop to print the square
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}