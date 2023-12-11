#!/usr/bin/node

// Get the first argument passed to the script
const firstArg = process.argv[2];

// Use console.log(...) to print the output
if (!firstArg) {
  console.log("No argument");
} else {
  console.log(firstArg);
}