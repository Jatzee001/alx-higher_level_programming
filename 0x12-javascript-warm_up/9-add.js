#!/usr/bin/node

// Define the add function
function add(a, b) {
    return parseInt(a) + parseInt(b);
  }
  
  // Get the first and second arguments passed to the script
  const arg1 = process.argv[2];
  const arg2 = process.argv[3];
  
  // Use console.log(...) to print the output
  console.log(add(arg1, arg2));  