/*
A recursive function is a function that calls itself during its execution. 
In other words, it is a function that solves a problem by breaking it down into smaller subproblems 
and solving them recursively until a base case is reached.
Here's a general structure of a recursive function:
*/

// FORMULA
function recursiveFunction(parameters) {
  // Base case(s) - the condition(s) under which the function stops calling itself
  let baseCaseCondition; // base case condition
  if (baseCaseCondition) {
    // Return a value or perform a specific action
    return `base case value`;
  }

  // Recursive case(s) - the condition(s) under which the function calls itself
  else {
    // Break down the problem into smaller subproblems
    // Call the function recursively with the updated parameters
    let updatedParams; // updated Parameters
    return recursiveFunction(updatedParams);
  }
}

/*
The base case(s) determine when the recursion stops, preventing infinite recursion. 
It represents the simplest form of the problem that can be solved directly without further recursion.
The recursive case(s) define the conditions under which the function calls itself with modified parameters. 
By breaking down the problem into smaller subproblems, each iteration brings the problem closer to the base case.
A common example of a recursive function is the calculation of the factorial of a number:
*/

function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // Recursive case: factorial of n is n multiplied by factorial of (n-1)
  }
}

/*
Recursive functions are powerful tools for solving problems that exhibit repetitive structures. 
However, it's important to design them carefully to ensure they converge towards the base case and 
don't result in infinite recursion.
*/
