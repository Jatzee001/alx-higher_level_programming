#!/usr/bin/node

// Define the recursive factorial function
function factorial(n) {
    if (isNaN(n)) {
      return 1;
    }
  
    // Base case: factorial of 0 is 1
    if (n === 0) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
  }
  
  // Get the first argument passed to the script
  const arg = process.argv[2];
  
  // Use console.log(...) to print the output
  console.log(factorial(parseInt(arg)));  